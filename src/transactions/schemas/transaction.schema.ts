import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { PaymentType, TransactionPurpose } from '../transaction.constance';

export type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true })
export class Transaction {
  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({
    type: String,
    enum: TransactionPurpose,
    required: true,
  })
  purpose: TransactionPurpose;

  @Prop({
    type: mongoose.Types.ObjectId,
    ref: 'TollEvent',
    required: true,
  })
  serviceId: mongoose.Types.ObjectId;

  @Prop({
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  submitBy: mongoose.Types.ObjectId;

  @Prop({
    type: String,
    enum: PaymentType,
    required: true,
  })
  paymentType: PaymentType;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

TransactionSchema.index({ submitBy: 1 });
TransactionSchema.index({ serviceId: 1 });
