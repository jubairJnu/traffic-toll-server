import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { PaymentType, TransactionPurpose } from '../transaction.constance';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsEnum(TransactionPurpose)
  purpose: TransactionPurpose;

  @IsNotEmpty()
  @IsMongoId()
  serviceId: string;

  @IsNotEmpty()
  @IsMongoId()
  submitBy: string;

  @IsNotEmpty()
  @IsEnum(PaymentType)
  paymentType: PaymentType;
}
