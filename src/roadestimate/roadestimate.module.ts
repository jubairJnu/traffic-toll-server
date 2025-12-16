import { Module } from '@nestjs/common';
import { RoadestimateService } from './roadestimate.service';
import { RoadestimateController } from './roadestimate.controller';

@Module({
  controllers: [RoadestimateController],
  providers: [RoadestimateService],
})
export class RoadestimateModule {}
