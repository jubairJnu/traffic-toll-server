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

@Controller('roadestimate')
export class RoadestimateController {
  constructor(private readonly roadestimateService: RoadestimateService) {}

  @Post()
  create(@Body() createRoadestimateDto: CreateRoadestimateDto) {
    return this.roadestimateService.create(createRoadestimateDto);
  }

  @Get()
  findAll(@Req() req) {
    return this.roadestimateService.findAll(req.query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roadestimateService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRoadestimateDto: UpdateRoadestimateDto,
  ) {
    return this.roadestimateService.update(id, updateRoadestimateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roadestimateService.remove(id);
  }
}
