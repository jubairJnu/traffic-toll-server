import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true })
export class Transaction {
  @Prop()
  amount: { type: Number; required: true };

  @Prop()
  purpose: { type: String; enum: ['prepaid', 'payment', 'fine', 'withdraw'] };

  @Prop()
  serviceId: {
    type: mongoose.Types.ObjectId;
    required: true;
    ref: 'TollEvent';
  };

  @Prop()
  submitBy: { type: mongoose.Types.ObjectId; ref: 'User'; required: true };

  @Prop()
  paymentType: { type: String; enum: ['debit', 'credit'] };
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

TransactionSchema.index({ submitBy: 1 });
TransactionSchema.index({ serviceId: 1 });
