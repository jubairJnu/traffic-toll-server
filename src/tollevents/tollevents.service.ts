import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTolleventDto } from './dto/create-tollevent.dto';
import { UpdateTolleventDto } from './dto/update-tollevent.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { TollEventDocument } from './schemas/tollEvents.schema';
import { vehicleDocument } from 'src/vehicles/schemas/vehicles.schema';
import { AppError } from 'src/common/errors/app-error';

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

  findAll() {
    return `This action returns all tollevents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tollevent`;
  }

  update(id: number, updateTolleventDto: UpdateTolleventDto) {
    return `This action updates a #${id} tollevent`;
  }

  remove(id: number) {
    return `This action removes a #${id} tollevent`;
  }
}
