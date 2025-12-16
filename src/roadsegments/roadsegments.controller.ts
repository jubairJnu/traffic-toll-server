import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoadsegmentsService } from './roadsegments.service';
import { CreateRoadsegmentDto } from './dto/create-roadsegment.dto';
import { UpdateRoadsegmentDto } from './dto/update-roadsegment.dto';

@Controller('roadsegments')
export class RoadsegmentsController {
  constructor(private readonly roadsegmentsService: RoadsegmentsService) {}

  @Post()
  create(@Body() createRoadsegmentDto: CreateRoadsegmentDto) {
    return this.roadsegmentsService.create(createRoadsegmentDto);
  }

  @Get()
  findAll() {
    return this.roadsegmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roadsegmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoadsegmentDto: UpdateRoadsegmentDto) {
    return this.roadsegmentsService.update(+id, updateRoadsegmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roadsegmentsService.remove(+id);
  }
}
