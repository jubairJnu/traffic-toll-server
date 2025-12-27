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
import { TolleventsService } from './tollevents.service';
import { CreateTolleventDto } from './dto/create-tollevent.dto';
import { UpdateTolleventDto } from './dto/update-tollevent.dto';
import { sendResponse } from 'src/utils/sendResponse';

@Controller('tollevents')
export class TolleventsController {
  constructor(private readonly tolleventsService: TolleventsService) {}

  @Post()
  async create(@Body() createTolleventDto: CreateTolleventDto) {
    const result = await this.tolleventsService.create(createTolleventDto);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'created toll event',
      data: result,
    });
  }

  @Get()
  async findAll(@Req() req) {
    const result = await this.tolleventsService.findAll(req.query);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'retrived toll event',
      data: result,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.tolleventsService.findOne(id);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'retrived toll event',
      data: result,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTolleventDto: UpdateTolleventDto,
  ) {
    const result = await this.tolleventsService.update(id, updateTolleventDto);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'updated toll event',
      data: result,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.tolleventsService.remove(id);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'deleted toll event',
      data: result,
    });
  }
}
