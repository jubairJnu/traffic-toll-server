import { Module } from '@nestjs/common';
import { RoadsegmentsService } from './roadsegments.service';
import { RoadsegmentsController } from './roadsegments.controller';

@Module({
  controllers: [RoadsegmentsController],
  providers: [RoadsegmentsService],
})
export class RoadsegmentsModule {}
