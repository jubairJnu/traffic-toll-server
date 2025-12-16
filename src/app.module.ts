import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('DB_URL'),
        connectionFactory: (connection: Connection) => {
          connection.on('connected', () => {
            console.log('🟢 MongoDB connected');
          });

          connection.on('error', (error) => {
            console.error('🔴 MongoDB connection failed:', error);
          });

          connection.on('disconnected', () => {
            console.log('🟡 MongoDB disconnected');
          });

          return connection;
        },
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    RoadsegmentsModule,
    RoadestimateModule,
    VehiclesModule,
    TollplazaModule,
    TolleventsModule,
    TransactionsModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
