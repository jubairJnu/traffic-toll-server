import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type RoadSegmentDocument = RoadSegment & Document;

@Schema({ timestamps: true })
export class RoadSegment {
  @Prop({ required: true, trim: true })
  fromCity: string;

  @Prop({ required: true, tirm: true })
  toCity: string;

  @Prop({ required: true })
  distanceKm: number;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TollPlaza',
      },
    ],
    required: true,
  })
  plazes: mongoose.Schema.Types.ObjectId[];
}

export const RoadSegmentSchema = SchemaFactory.createForClass(RoadSegment);

RoadSegmentSchema.index({ fromCity: 1 });
RoadSegmentSchema.index({ toCity: 1 });
