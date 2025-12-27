import {
  IsMongoId,
  IsNotEmpty,
  isNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateTolleventDto {
  @IsNotEmpty()
  @IsMongoId()
  plazaId: string;

  @IsNotEmpty()
  @IsString()
  plateNumber: string;

  eventTime: Date;
  @IsOptional()
  status: string;
  
  @IsNotEmpty()
  @IsNumber()
  chargeAmount: number;
}
