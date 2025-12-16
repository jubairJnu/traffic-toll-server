
import mongoose from "mongoose";

class AggregateQueryBuilder {
  modelAggregate: mongoose.Aggregate<any[]>;
  query: any;

  constructor(modelAggregate: mongoose.Aggregate<any[]>, query: any) {
    this.modelAggregate = modelAggregate;
    this.query = query;
  }

  // // 🔍 Search by fields

  search(searchableFields: string[]) {
    const searchTerm = this.query.searchTerm?.trim();

    if (searchTerm) {
      this.modelAggregate.match({
        $or: searchableFields.map((field) => ({
          [field]: { $regex: searchTerm, $options: "i" },
        })),
      });
    }

    return this;
  }

  // 📅 Date filter
  applyDateFilter() {
    const { startDate, endDate } = this.query;
    if (startDate) {
      const start = new Date(startDate);
      const end = endDate ? new Date(endDate) : new Date();

      start.setUTCHours(0, 0, 0, 0);
      end.setUTCHours(23, 59, 59, 999);

      this.modelAggregate.pipeline().push({
        $match: { createdAt: { $gte: start, $lte: end } },
      });
    }
    return this;
  }

  applyFilters() {
    const queryObj = { ...this.query };
    const excludeFields = [
      "startDate",
      "endDate",
      "searchTerm",
      "page",
      "limit",
      "sort",
      "fields",
      "isBranchfilter",
      "paymentStatus",
    ];
    excludeFields.forEach((el) => delete queryObj[el]);

    const matchObj: Record<string, any> = {};

    for (const key in queryObj) {
      const value = queryObj[key];

      if (typeof value === "string" && value.includes(",")) {
        // Handle multiple possible ObjectIds or values
        const values = value.split(",").map((v) => v.trim());
        matchObj[key] = {
          $in: values.map((v) =>
            mongoose.Types.ObjectId.isValid(v)
              ? new mongoose.Types.ObjectId(v)
              : v
          ),
        };
      } else if (mongoose.Types.ObjectId.isValid(value)) {
        matchObj[key] = new mongoose.Types.ObjectId(value);
      } else if (!isNaN(Number(value))) {
        // Convert numeric strings to numbers
        matchObj[key] = Number(value);
      } else if (value === "true" || value === "false") {
        // Convert boolean strings to booleans
        matchObj[key] = value === "true";
      } else {
        matchObj[key] = value;
      }
    }

    if (Object.keys(matchObj).length > 0) {
      this.modelAggregate.pipeline().unshift({ $match: matchObj });
    }

    return this;
  }

  applySorting() {
    const sort = this.query.sort || "-createdAt";
    const sortObj: Record<string, 1 | -1> = {};
    const sortFields = sort.split(" ");

    sortFields.forEach((field: string) => {
      if (field.startsWith("-")) {
        sortObj[field.substring(1)] = -1;
      } else {
        sortObj[field] = 1;
      }
    });

    this.modelAggregate.pipeline().push({ $sort: sortObj });
    return this;
  }

  // 📄 Pagination
  applyPagination() {
    const page = Number(this.query.page) || 1;
    const limit = Number(this.query.limit) || 10;
    const skip = (page - 1) * limit;

    this.modelAggregate.pipeline().push({ $skip: skip });
    this.modelAggregate.pipeline().push({ $limit: limit });

    return this;
  }

  // 🔢 Count total documents
  async countTotal(model: mongoose.Model<any>) {
    const pipeline = [...this.modelAggregate.pipeline()];
    pipeline.push({ $count: "total" });

    const result = await model.aggregate(pipeline);
    const total = result.length > 0 ? result[0].total : 0;

    const page = Number(this.query.page) || 1;
    const limit = Number(this.query.limit) || 10;
    const totalPage = Math.ceil(total / limit);

    return { page, limit, total, totalPage };
  }

  // 🚀 Execute the aggregate
  async execute() {
    return this.modelAggregate.exec();
  }
}

export default AggregateQueryBuilder;
