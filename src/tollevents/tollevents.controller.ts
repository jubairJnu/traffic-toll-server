import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TolleventsService } from './tollevents.service';
import { CreateTolleventDto } from './dto/create-tollevent.dto';
import { UpdateTolleventDto } from './dto/update-tollevent.dto';

@Controller('tollevents')
export class TolleventsController {
  constructor(private readonly tolleventsService: TolleventsService) {}

  @Post()
  create(@Body() createTolleventDto: CreateTolleventDto) {
    return this.tolleventsService.create(createTolleventDto);
  }

  @Get()
  findAll() {
    return this.tolleventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tolleventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTolleventDto: UpdateTolleventDto) {
    return this.tolleventsService.update(+id, updateTolleventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tolleventsService.remove(+id);
  }
}
