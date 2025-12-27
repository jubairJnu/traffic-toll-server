import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type vehicleDocument = Vehicle & Document;

@Schema({ timestamps: true })
export class Vehicle {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  ownerId: mongoose.Types.ObjectId;

  @Prop({ required: true, unique: true, trim: true })
  plateNumber: string;

  @Prop({
    required: true,
    enum: ['motorcycle', 'car', 'bus', 'truck', 'three wheel', 'pick-up'],
    index: true,
  })
  vehicleType: string;

  @Prop({ default: 0 })
  balance: number;

  @Prop()
  autoChargeEnable: boolean;

  @Prop({ default: 0 })
  totalDue: number;

  @Prop()
  lastPaidAt: Date;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);

VehicleSchema.index({ plateNumber: 1 });
VehicleSchema.index({ ownerId: 1 });
