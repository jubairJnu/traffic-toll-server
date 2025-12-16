import { PartialType } from '@nestjs/mapped-types';
import { CreateRoadsegmentDto } from './create-roadsegment.dto';

export class UpdateRoadsegmentDto extends PartialType(CreateRoadsegmentDto) {}
