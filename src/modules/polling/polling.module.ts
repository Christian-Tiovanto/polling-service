import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PollingService } from './services/polling.service';
import { Polling } from './models/polling.entity';
import { PollingController } from './controllers/polling.controller';
import { BullModule } from '@nestjs/bullmq';
import { MailModule } from '../mail/mail.module';
import { PollingConsumer } from './services/polling.consumer';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Polling]),
    BullModule.registerQueueAsync({
      name: 'polling',
      imports: [ConfigModule], // Import ConfigModule if not global
      useFactory: (configService: ConfigService) => ({
        connection: {
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT') || 6379,
        },
      }),
      inject: [ConfigService],
    }),
    MailModule,
  ],
  providers: [PollingService, PollingConsumer],
  controllers: [PollingController],
  exports: [PollingService],
})
export class PollingModule {}
