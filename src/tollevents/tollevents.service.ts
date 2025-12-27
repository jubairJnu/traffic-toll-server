import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTolleventDto } from './dto/create-tollevent.dto';
import { UpdateTolleventDto } from './dto/update-tollevent.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { TollEventDocument } from './schemas/tollEvents.schema';
import { vehicleDocument } from 'src/vehicles/schemas/vehicles.schema';
import { AppError } from 'src/common/errors/app-error';
import QueryBuilder from 'src/builder/QueryBuilder';
import { IPaginateMeta } from 'src/interface';

@Injectable()
export class TolleventsService {
  constructor(
    @InjectModel('TollEvent')
    private tollEventModel: Model<TollEventDocument>,

    @InjectModel('VehicleModel')
    private vehicleModel: Model<vehicleDocument>,
  ) {}

  async create(createTolleventDto: CreateTolleventDto) {
    const checkVehicle = await this.vehicleModel.findOne({
      plateNumber: createTolleventDto.plateNumber,
    });

    if (!checkVehicle) {
      throw new AppError('Vehicle not found', HttpStatus.NOT_FOUND);
    }

    const payload = {
      vehicleId: checkVehicle._id,
      plazaId: new Types.ObjectId(createTolleventDto.plazaId),
      plateNumber: createTolleventDto.plateNumber,
      chargeAmount: createTolleventDto.chargeAmount,
      status: createTolleventDto.status ?? 'pending',
      eventTime: createTolleventDto.eventTime
        ? new Date(createTolleventDto.eventTime)
        : new Date(),
    };

    return await this.tollEventModel.create(payload);
  }

  async findAll(
    query: Record<string, any>,
  ): Promise<{ result: TollEventDocument[]; meta: IPaginateMeta }> {
    const resultQuery = new QueryBuilder(
      this.tollEventModel.find().populate([
        {
          path: 'vehicleId',
          select: 'name',
        },
        {
          path: 'plazaId',
          select: 'name',
        },
      ]),
      query,
    )
      .search(['plateNumber'])
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
    return await this.tollEventModel.findById(id).populate([
      {
        path: 'vehicleId',
        select: 'name',
      },
      {
        path: 'plazaId',
        select: 'name',
      },
    ]);
  }

  async update(id: number, updateTolleventDto: UpdateTolleventDto) {
    return await this.tollEventModel.findByIdAndUpdate(id, updateTolleventDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.tollEventModel.findByIdAndDelete(id);
  }
}
