import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type TollEventDocument = TollEvent & Document;

@Schema({ timestamps: true })
export class TollEvent {
  @Prop({
    required: true,
    type:  mongoose.Types.ObjectId,
    ref: 'Vehicle',
  })
  vehicleId:  mongoose.Types.ObjectId;

  @Prop({
    required: true,
    type:  mongoose.Types.ObjectId,
    ref: 'TollPlaza',
  })
  plazaId:  mongoose.Types.ObjectId;

  @Prop({ required: true })
  plateNumber: string;

  @Prop({ required: true, default: Date.now() })
  eventTime: Date;

  @Prop({ default: 'pending', enum: ['pending', 'charged', 'failed'] })
  status: string;

  @Prop({ required: true })
  chargeAmount: number;
}

export const TollEventSchema = SchemaFactory.createForClass(TollEvent);

TollEventSchema.index({ plazaId: 1 });
TollEventSchema.index({ vehicleId: 1 });
TollEventSchema.index({ plateNumber: 1 });
TollEventSchema.index({ status: 1 });
