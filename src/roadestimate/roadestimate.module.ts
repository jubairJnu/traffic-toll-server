import { Module } from '@nestjs/common';
import { RoadestimateService } from './roadestimate.service';
import { RoadestimateController } from './roadestimate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoadEstimateSchema } from './schemas/roadEstimate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RoadEstimate', schema: RoadEstimateSchema },
    ]),
  ],
  controllers: [RoadestimateController],
  providers: [RoadestimateService],
  exports: [RoadestimateService],
})
export class RoadestimateModule {}
