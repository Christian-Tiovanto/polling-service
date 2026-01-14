import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  async sendPollEndEmail(
    to: string,
    pollTitle: string,
    results: { country: string; count: number }[],
  ) {
    console.log(`Sending poll result email to ${to}`);

    const resultsHtml = results
      .map((r) => `<li><strong>${r.country}</strong>: ${r.count} votes</li>`)
      .join('');

    const resultsText = results
      .map((r) => `${r.country}: ${r.count} votes`)
      .join(', ');

    try {
      await this.transporter.sendMail({
        from: '"Master Devon" <devonthegreatest@example.com>',
        to: to, // Use the provided 'to' argument
        subject: `Poll Concluded: ${pollTitle} ✔`,
        text: `The poll "${pollTitle}" has ended. Results by country: ${resultsText || 'No votes recorded.'}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Poll Results</h2>
            <p>The poll "<strong>${pollTitle}</strong>" has ended.</p>
            <p>Here is the breakdown of participation by country:</p>
            <ul>
              ${resultsHtml || '<li>No votes were cast in this poll.</li>'}
            </ul>
            <p>Thank you for using our service!</p>
          </div>
        `,
      });
      console.log('Email sent successfully');
    } catch (err: any) {
      console.error('Failed to send email:', err);
    }
  }
}
