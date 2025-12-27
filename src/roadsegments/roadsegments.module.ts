import { Module } from '@nestjs/common';
import { RoadsegmentsService } from './roadsegments.service';
import { RoadsegmentsController } from './roadsegments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoadSegmentSchema } from './schemas/roadsegment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RoadSegment', schema: RoadSegmentSchema },
    ]),
  ],
  controllers: [RoadsegmentsController],
  providers: [RoadsegmentsService],
  exports: [RoadsegmentsService],
})
export class RoadsegmentsModule {}
