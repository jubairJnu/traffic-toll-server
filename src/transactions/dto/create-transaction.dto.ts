import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsString()
  purpose: string;

  @IsNotEmpty()
  @IsMongoId()
  serviceId: string;

  @IsNotEmpty()
  @IsMongoId()
  submitBy: string;

  @IsNotEmpty()
  @IsString()
  paymentType: string;
}
