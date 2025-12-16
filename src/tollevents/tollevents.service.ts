import { Injectable } from '@nestjs/common';
import { CreateTolleventDto } from './dto/create-tollevent.dto';
import { UpdateTolleventDto } from './dto/update-tollevent.dto';

@Injectable()
export class TolleventsService {
  create(createTolleventDto: CreateTolleventDto) {
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
