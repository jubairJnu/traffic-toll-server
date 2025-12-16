import {
  IsBoolean,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateVehicleDto {
  @IsMongoId()
  @IsNotEmpty()
  ownerId: string;

  @IsString()
  @IsNotEmpty()
  plateNumber: string;

  @IsEnum(['motorcycle', 'car', 'bus', 'truck', 'three wheel', 'pick-up'])
  vehicleType: string;

  @IsOptional()
  @IsBoolean()
  autoChargeEnable?: boolean;
  balance: number;
}
