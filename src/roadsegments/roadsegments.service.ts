import { Injectable } from '@nestjs/common';
import { CreateRoadsegmentDto } from './dto/create-roadsegment.dto';
import { UpdateRoadsegmentDto } from './dto/update-roadsegment.dto';

@Injectable()
export class RoadsegmentsService {
  create(createRoadsegmentDto: CreateRoadsegmentDto) {
    return 'This action adds a new roadsegment';
  }

  findAll() {
    return `This action returns all roadsegments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roadsegment`;
  }

  update(id: number, updateRoadsegmentDto: UpdateRoadsegmentDto) {
    return `This action updates a #${id} roadsegment`;
  }

  remove(id: number) {
    return `This action removes a #${id} roadsegment`;
  }
}
