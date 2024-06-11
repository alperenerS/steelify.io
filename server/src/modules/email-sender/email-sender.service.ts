import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './email.interface';
import Mail from 'nodemailer/lib/mailer';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from '../user/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class EmailSenderService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async mailTransport() {
    const transporter = nodemailer.createTransport({
      host: 'live.smtp.mailtrap.io',
      port: 587,
      secure: false, // true for port, false for other ports
      auth: {
        user: 'api',
        pass: '43fabf176bd9a8a062c75c567698281a',
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
      to: Array.isArray(to) ? to.map(addr => typeof addr === 'string' ? addr : addr.address).join(', ') : to,
      subject: subject,
      html: html,
    };

    const result = await transport.sendMail(options);
    return result;
  }

  async findUserByEmail(email: any) {
    const user = await this.userRepository.findOne({ where: { email: email } });
    return user;
  }

  async resPasswd(newPassword: string, confirmNewPasswd: string, id: number) {
    if (newPassword !== confirmNewPasswd) {
      throw new BadRequestException('Passwords do not match!');
    }
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    const password = await this.userRepository.update(
      { password: hashedPassword },
      { where: { id: id } },
    );

    return password;
  }

  async generateToken(id: number, email: string) {
    const payload = { id, email };
    const mail_token = await this.jwtService.signAsync(payload);

    return mail_token;
  }

  async verifyToken(token: string) {
    const decodedToken = this.jwtService.verify(token, {
      publicKey: process.env.JWTMAILKEY,
    });
    return decodedToken;
  }
}
