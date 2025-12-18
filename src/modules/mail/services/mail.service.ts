import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'c5f14b4905b4ee',
        pass: '52f28afcd5ec9e',
      },
    });
  }

  async sendPollEndEmail(to: string, pollId: number) {
    console.log('sending email');
    try {
      await this.transporter.sendMail({
        from: '"Master Devon" <devonthegreatest@example.com>',
        to: 'bar@example.com, baz@example.com',
        subject: 'Hello ✔',
        text: 'Hello world?',
        html: '<b>Hello world?</b>',
      });
      console.log('success');
    } catch (err: any) {
      console.log('err');
      console.log(err);
    }
  }
}
