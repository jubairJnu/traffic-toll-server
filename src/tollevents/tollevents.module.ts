import { Module } from '@nestjs/common';
import { TolleventsService } from './tollevents.service';
import { TolleventsController } from './tollevents.controller';

@Module({
  controllers: [TolleventsController],
  providers: [TolleventsService],
})
export class TolleventsModule {}
