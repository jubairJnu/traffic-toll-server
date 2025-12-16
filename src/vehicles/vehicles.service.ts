import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { vehicleDocument } from './schemas/vehicles.schema';
import QueryBuilder from 'src/builder/QueryBuilder';
import { vehicleSearchableFields } from './vehicle.constance';
import { IPaginateMeta } from 'src/interface';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel('Vehicle') private vehicleModel: Model<vehicleDocument>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto, ownerId: Types.ObjectId) {
    const payload = {
      ...createVehicleDto,
      ownerId,
    };

    return await this.vehicleModel.create(payload);
  }

  async findAll(
    query: Record<string, any>,
  ): Promise<{ result: any[]; meta: IPaginateMeta }> {
    const resultQuery = new QueryBuilder(
      this.vehicleModel.find().populate('ownerId', 'name email phone'),
      query,
    )
      .search(vehicleSearchableFields)
      .filter()
      .sort()
      .paginate();

    const result = await resultQuery.modelQuery;
    const meta = await resultQuery.countTotal();
    return {
      meta,
      result,
    };
  }

  async findOne(id: string) {
    return await this.vehicleModel
      .findById(id)
      .populate('ownerId', 'name email phone');
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto) {
    return await this.vehicleModel.findByIdAndUpdate(id, updateVehicleDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.vehicleModel.findByIdAndDelete(id);
  }
}
