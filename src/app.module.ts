import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoadsegmentsModule } from './roadsegments/roadsegments.module';
import { RoadestimateModule } from './roadestimate/roadestimate.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { TollplazaModule } from './tollplaza/tollplaza.module';
import { TolleventsModule } from './tollevents/tollevents.module';
import { TransactionsModule } from './transactions/transactions.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [UsersModule, RoadsegmentsModule, RoadestimateModule, VehiclesModule, TollplazaModule, TolleventsModule, TransactionsModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
