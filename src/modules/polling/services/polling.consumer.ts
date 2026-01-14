import { MailService } from '@app/modules/mail/services/mail.service';
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { PollingService } from './polling.service';

@Processor('polling')
export class PollingConsumer extends WorkerHost {
  constructor(
    private readonly mailService: MailService,
    private readonly pollingService: PollingService,
  ) {
    super();
  }

  async process(job: Job, token?: string): Promise<any> {
    switch (job.name) {
      case 'poll-ended':
        return this.handlePollEnd(job);
      default:
        throw new Error('Unknown job name');
    }
  }

  private async handlePollEnd(job: Job<{ email: string; pollId: number }>) {
    const { email, pollId } = job.data;
    console.log(`Processing end of poll ID: ${pollId}`);
    console.log(`Processing end of poll Email: ${email}`);
    console.log(`Processing end of job: ${job.data}`);

    try {
      // 1. Fetch poll details (for the title)
      const poll = await this.pollingService.findPollingById(pollId); //

      // 2. Fetch results grouped by country
      const results =
        await this.pollingService.getPollingResultsByCountry(pollId);

      // 3. Send the email with the fetched data
      await this.mailService.sendPollEndEmail(email, poll.title, results);
    } catch (error) {
      console.error(`Error processing job ${job.id}: ${error.message}`);
      throw error;
    }
  }
}
