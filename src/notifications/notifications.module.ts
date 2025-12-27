import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  //  imports: [
  //     MongooseModule.forFeature([
  //       { name: 'Notification', schema: Notificat },
  //     ]),
  //   ],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
