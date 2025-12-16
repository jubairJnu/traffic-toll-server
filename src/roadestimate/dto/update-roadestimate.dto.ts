import { PartialType } from '@nestjs/mapped-types';
import { CreateRoadestimateDto } from './create-roadestimate.dto';

export class UpdateRoadestimateDto extends PartialType(CreateRoadestimateDto) {}
