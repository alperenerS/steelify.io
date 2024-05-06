import {
  BadRequestException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './email.interface';
import Mail from 'nodemailer/lib/mailer';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from '../user/user.entity';
import * as crypto from 'crypto';
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

  async findUserByEmail(email: any) {
    const user = await this.userRepository.findOne({ where: { email: email } });
    return user;
  }

  async resPasswd(newPassword: string, confirmNewPasswd: string, id: number) {
    if (newPassword !== confirmNewPasswd) {
      throw new BadRequestException('Passwords are not match !');
    }
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    const password = await this.userRepository.update(
      { password: hashedPassword },
      { where: { id: id } },
    );

    return password;
  }

  async generatePasswordResetToken(
    userId: number,
    expirationDate: Date,
  ): Promise<string> {
    // const token = crypto.randomBytes(20).toString('hex');
    // const updatedToken = userId + '?' + token + expirationDate.getTime();

    // return updatedToken;

    const token = `${userId.toString()}|${expirationDate.getTime()}`;

    const hashedToken = crypto.createHash('sha256').digest('hex');
    return hashedToken;
  }

  async generateToken(id: number, email: string) {
    const payload = { id, email };
    const mail_token = this.jwtService.signAsync(payload);

    return mail_token;
  }

  async verifyToken(token: string) {
    const decodedToken = this.jwtService.verify(token, {
      publicKey: process.env.JWTMAILKEY,
    });
    return decodedToken;
  }
}
