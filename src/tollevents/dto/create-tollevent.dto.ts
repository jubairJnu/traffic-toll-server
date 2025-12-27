import { IsNotEmpty, isNotEmpty, IsNumber } from 'class-validator';
import { Types } from 'mongoose';

export class CreateTolleventDto {
  @IsNotEmpty()
  vehicleId: Types.ObjectId;

  plazaId: Types.ObjectId;

  @IsNotEmpty()
  plateNumber: string;

  eventTime: Date;

  status: string;

  @IsNumber()
  chargeAmount: number;
}
