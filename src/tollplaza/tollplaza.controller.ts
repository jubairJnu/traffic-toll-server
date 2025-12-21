import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { TollplazaService } from './tollplaza.service';
import { CreateTollplazaDto } from './dto/create-tollplaza.dto';
import { UpdateTollplazaDto } from './dto/update-tollplaza.dto';

@Controller('tollplaza')
export class TollplazaController {
  constructor(private readonly tollplazaService: TollplazaService) {}

  @Post()
  create(@Body() createTollplazaDto: CreateTollplazaDto) {
    return this.tollplazaService.create(createTollplazaDto);
  }

  @Get()
  findAll(@Req() req) {
    return this.tollplazaService.findAll(req.query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tollplazaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTollplazaDto: UpdateTollplazaDto,
  ) {
    return this.tollplazaService.update(id, updateTollplazaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tollplazaService.remove(id);
  }
}
