import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PollingService } from './services/polling.service';
import { Polling } from './models/polling.entity';
import { PollingController } from './controllers/polling.controller';
import { BullModule } from '@nestjs/bullmq';
import { MailModule } from '../mail/mail.module';
import { PollingConsumer } from './services/polling.consumer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Polling]),
    BullModule.registerQueue({
      name: 'polling',
      connection: { host: 'host.docker.internal', port: 6379 },
    }),
    MailModule,
  ],
  providers: [PollingService, PollingConsumer],
  controllers: [PollingController],
  exports: [PollingService],
})
export class PollingModule {}
