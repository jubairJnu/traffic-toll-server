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
import { RoadestimateService } from './roadestimate.service';
import { CreateRoadestimateDto } from './dto/create-roadestimate.dto';
import { UpdateRoadestimateDto } from './dto/update-roadestimate.dto';
import { sendResponse } from 'src/utils/sendResponse';

@Controller('roadestimate')
export class RoadestimateController {
  constructor(private readonly roadestimateService: RoadestimateService) {}

  @Post()
  async create(@Body() createRoadestimateDto: CreateRoadestimateDto) {
    const result = await this.roadestimateService.create(createRoadestimateDto);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'Raod estimate created successfully',
      data: result,
    });
  }

  @Get()
  async findAll(@Req() req) {
    const result = await this.roadestimateService.findAll(req.query);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'Road estimate retrived successfully',
      data: result,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roadestimateService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRoadestimateDto: UpdateRoadestimateDto,
  ) {
    const result = await this.roadestimateService.update(
      id,
      updateRoadestimateDto,
    );
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'Updated',
      data: result,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.roadestimateService.remove(id);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'deleted',
      data: null,
    });
  }
}
