import { Module } from '@nestjs/common';
import { TolleventsService } from './tollevents.service';
import { TolleventsController } from './tollevents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TollEventSchema } from './schemas/tollEvents.schema';
import { VehicleSchema } from 'src/vehicles/schemas/vehicles.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TollEvent', schema: TollEventSchema },
      { name: 'Vehicle', schema: VehicleSchema },
    ]),
  ],
  controllers: [TolleventsController],
  providers: [TolleventsService],
  exports: [TolleventsService],
})
export class TolleventsModule {}
