import { PartialType } from '@nestjs/mapped-types';
import { CreateTolleventDto } from './create-tollevent.dto';

export class UpdateTolleventDto extends PartialType(CreateTolleventDto) {}
