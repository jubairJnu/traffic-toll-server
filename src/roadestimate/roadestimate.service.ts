import { Injectable } from '@nestjs/common';
import { CreateRoadestimateDto } from './dto/create-roadestimate.dto';
import { UpdateRoadestimateDto } from './dto/update-roadestimate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoadEstimateDocument } from './schemas/roadEstimate.schema';
import { IPaginateMeta } from 'src/interface';
import QueryBuilder from 'src/builder/QueryBuilder';

@Injectable()
export class RoadestimateService {
  constructor(
    @InjectModel('RoadEstimate')
    private roadestimateModel: Model<RoadEstimateDocument>,
  ) {}
  async create(createRoadestimateDto: CreateRoadestimateDto) {
    return await this.roadestimateModel.create(createRoadestimateDto);
  }

  async findAll(
    query: Record<string, any>,
  ): Promise<{ result: RoadEstimateDocument[]; meta: IPaginateMeta }> {
    const resultQuery = new QueryBuilder(this.roadestimateModel.find(), query)
      .search([])
      .filter()
      .sort()
      .paginate();
    const result = await resultQuery.modelQuery;
    const meta = await resultQuery.countTotal();
    return {
      result,
      meta,
    };
  }

  async findOne(id: string) {
    return await this.roadestimateModel.findById(id);
  }

  async update(id: string, updateRoadestimateDto: UpdateRoadestimateDto) {
    return await this.roadestimateModel.findByIdAndUpdate(
      id,
      updateRoadestimateDto,
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.roadestimateModel.findByIdAndDelete(id);
  }
}
