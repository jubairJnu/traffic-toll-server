import { Injectable } from '@nestjs/common';
import { CreateTollplazaDto } from './dto/create-tollplaza.dto';
import { UpdateTollplazaDto } from './dto/update-tollplaza.dto';

@Injectable()
export class TollplazaService {
  create(createTollplazaDto: CreateTollplazaDto) {
    return 'This action adds a new tollplaza';
  }

  findAll() {
    return `This action returns all tollplaza`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tollplaza`;
  }

  update(id: number, updateTollplazaDto: UpdateTollplazaDto) {
    return `This action updates a #${id} tollplaza`;
  }

  remove(id: number) {
    return `This action removes a #${id} tollplaza`;
  }
}
