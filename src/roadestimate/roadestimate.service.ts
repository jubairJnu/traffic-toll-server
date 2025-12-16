import { Injectable } from '@nestjs/common';
import { CreateRoadestimateDto } from './dto/create-roadestimate.dto';
import { UpdateRoadestimateDto } from './dto/update-roadestimate.dto';

@Injectable()
export class RoadestimateService {
  create(createRoadestimateDto: CreateRoadestimateDto) {
    return 'This action adds a new roadestimate';
  }

  findAll() {
    return `This action returns all roadestimate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roadestimate`;
  }

  update(id: number, updateRoadestimateDto: UpdateRoadestimateDto) {
    return `This action updates a #${id} roadestimate`;
  }

  remove(id: number) {
    return `This action removes a #${id} roadestimate`;
  }
}
