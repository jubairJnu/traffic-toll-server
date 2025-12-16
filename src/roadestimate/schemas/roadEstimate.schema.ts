import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type RoadEstimateDocument = RoadEstimate & Document;

@Schema({ timestamps: true })
export class RoadEstimate {
  @Prop({ required: true, trim: true })
  fromCity: string;

  @Prop({ required: true, tirm: true })
  toCity: string;

  @Prop({ required: true })
  totalDistanceKm: number;

  @Prop({ required: true })
  totalTollAmount: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'RoadSegment' })
  routeSegments: mongoose.Schema.Types.ObjectId;

  @Prop()
  aiScore: number;

  @Prop()
  recommended: boolean;
}

export const RoadEstimateSchema = SchemaFactory.createForClass(RoadEstimate);
