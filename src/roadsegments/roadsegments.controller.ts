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
import { RoadsegmentsService } from './roadsegments.service';
import { CreateRoadsegmentDto } from './dto/create-roadsegment.dto';
import { UpdateRoadsegmentDto } from './dto/update-roadsegment.dto';
import { sendResponse } from 'src/utils/sendResponse';

@Controller('roadsegments')
export class RoadsegmentsController {
  constructor(private readonly roadsegmentsService: RoadsegmentsService) {}

  @Post()
  async create(@Body() createRoadsegmentDto: CreateRoadsegmentDto) {
    const result = await this.roadsegmentsService.create(createRoadsegmentDto);
    return sendResponse({
      statusCode: 200,
      message: 'Road Segment created successfully',
      data: result,
      success: true,
    });
  }

  @Get()
  findAll(@Req() req) {
    const result = this.roadsegmentsService.findAll(req.query);
    return sendResponse({
      statusCode: 200,
      message: 'Road Segments retrived successfully',
      data: result,
      success: true,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const result = this.roadsegmentsService.findOne(id);
    return sendResponse({
      statusCode: 200,
      message: 'Road Segment retrived successfully',
      data: result,
      success: true,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRoadsegmentDto: UpdateRoadsegmentDto,
  ) {
    const result = this.roadsegmentsService.update(id, updateRoadsegmentDto);
    return sendResponse({
      statusCode: 200,
      message: 'Road Segment updated successfully',
      data: result,
      success: true,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const result = this.roadsegmentsService.remove(id);
    return sendResponse({
      statusCode: 200,
      message: 'Road Segment deleted successfully',
      data: result,
      success: true,
    });
  }
}
