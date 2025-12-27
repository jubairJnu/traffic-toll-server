import {
  IsArray,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
export class LocationDto {
  @IsIn(['Point'])
  type: 'Point';

  @IsArray()
  @IsNumber({}, { each: true })
  coordinates: [number, number];
}

export class TollRateDto {
  @IsString()
  @IsNotEmpty()
  vehicleType: string;

  @IsNumber()
  amount: number;
}

export class CreateTollplazaDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @ValidateNested()
  @Type(() => LocationDto)
  location: LocationDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TollRateDto)
  rates: TollRateDto[];
}
