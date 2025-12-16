import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class TollPlaza {
  @Prop({ required: true, trim: true, unique: true })
  name: string;

  @Prop({ required: true, trim: true, index: true })
  city: string;

  @Prop({
    type: {
      type: String,
      enum: ['point'],
      default: 'point',
    },
    coordinates: {
      type: [Number],
    },
  })
  location: {
    type: 'Point';
    coordinates: [number, number];
  };

  @Prop({
    type: [
      {
        vehicleType: {
          type: String,
        },
        amount: {
          type: Number,
        },
      },
    ],
  })
  rates: {
    vehicleType: string;
    amount: number;
  }[];
}

export const TollPlazaSchema = SchemaFactory.createForClass(TollPlaza);

TollPlazaSchema.index({ location: '2dsphere' });
