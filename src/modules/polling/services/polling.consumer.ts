import { MailService } from '@app/modules/mail/services/mail.service';
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('polling')
export class PollingConsumer extends WorkerHost {
  constructor(private readonly mailService: MailService) {
    super();
  }

  async process(job: Job, token?: string): Promise<any> {
    switch (job.name) {
      case 'poll-ended':
        console.log('come hereee');
        return this.handlePollEnd(job);
      default:
        throw new Error('Unknown job name');
    }
  }

  private async handlePollEnd(job: Job) {
    console.log(`Processing poll ${job.data}...`);

    // Call the simple email function
    await this.mailService.sendPollEndEmail(null, null);

    console.log('Email sent successfully!');
  }
}
