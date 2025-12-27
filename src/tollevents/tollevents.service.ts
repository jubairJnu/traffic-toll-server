import { Injectable } from '@nestjs/common';
import { CreateTolleventDto } from './dto/create-tollevent.dto';
import { UpdateTolleventDto } from './dto/update-tollevent.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TollEventDocument } from './schemas/tollEvents.schema';

@Injectable()
export class TolleventsService {
  constructor(
    @InjectModel('TollEvent')
    private tollEventModel: Model<TollEventDocument>,
  ) {}

  async create(createTolleventDto: CreateTolleventDto) {
    return 'This action adds a new tollevent';
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
