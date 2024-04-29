import { Inject, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './email.interface';
import Mail from 'nodemailer/lib/mailer';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from '../user/user.entity';
import * as crypto from 'crypto';

@Injectable()
export class EmailSenderService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}
  async mailTransport() {
    const transporter = nodemailer.createTransport({
      host: 'live.smtp.mailtrap.io',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'api', // your email
        pass: '43fabf176bd9a8a062c75c567698281a', // your email password
      },
    });
    return transporter;
  }

  async sendEmail(dto: SendEmailDto) {
    const { from, to, subject, html } = dto;

    const transport = await this.mailTransport();

    const options: Mail.Options = {
      from: from ?? {
        name: 'Steelify',
        address: 'info@steelify.io',
      },
      to: to,
      subject: subject,
      html: html,
    };

    const result = await transport.sendMail(options);
    return result;
  }

  async findUserByEmail(email:any) {
    const user = await this.userRepository.findOne({ where: { email: email } });
    return user;
  }
  async generatePasswordResetToken():Promise<string>  {
    const token = crypto.randomBytes(20).toString('hex'); 
    return token;
  }
}
