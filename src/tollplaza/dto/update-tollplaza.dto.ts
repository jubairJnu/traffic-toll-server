import { PartialType } from '@nestjs/mapped-types';
import { CreateTollplazaDto } from './create-tollplaza.dto';

export class UpdateTollplazaDto extends PartialType(CreateTollplazaDto) {}
