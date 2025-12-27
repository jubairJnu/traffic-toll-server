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
import { sendResponse } from 'src/utils/sendResponse';

@Controller('tollplaza')
export class TollplazaController {
  constructor(private readonly tollplazaService: TollplazaService) {}

  @Post()
  async create(@Body() createTollplazaDto: CreateTollplazaDto) {
    const result = this.tollplazaService.create(createTollplazaDto);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'created tollplaza',
      data: result,
    });
  }

  @Get()
  async findAll(@Req() req) {
    const result = await this.tollplazaService.findAll(req.query);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'retrieved tollplaza',
      data: result,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.tollplazaService.findOne(id);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'retrieved tollplaza',
      data: result,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTollplazaDto: UpdateTollplazaDto,
  ) {
    const result = await this.tollplazaService.update(id, updateTollplazaDto);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'updated tollplaza',
      data: result,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.tollplazaService.remove(id);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'deleted tollplaza',
      data: result,
    });
  }
}
