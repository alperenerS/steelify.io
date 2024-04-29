import {
  Body,
  Controller,
  HttpStatus,
  NotFoundException,
  Post,
  Res,
} from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';
import { Response } from 'express';
import { SendEmailDto } from './email.interface';

@Controller('api/email-sender')
export class EmailSenderController {
  constructor(private readonly emailService: EmailSenderService) {}

  @Post('reset-password')
  async resetPassword(@Body() emailDto: SendEmailDto, @Res() res: Response) {
    const userExist = await this.emailService.findUserByEmail(emailDto.to);

    if (!userExist) {
      throw new NotFoundException('Wrong Email !');
    }

    const token = await this.emailService.generatePasswordResetToken();

    const dto: SendEmailDto = {
      from: { name: 'Steelify', address: 'info@steelify.io' },
      to: emailDto.to,
      subject: emailDto.subject,
      html: emailDto.html,
      text: emailDto.text,
    };

    const result = await this.emailService.sendEmail(dto);

    return res
      .status(HttpStatus.CREATED)
      .json({
        message: 'Mail Successfully Send !',
        data: result,
        token: token,
      });
  }
}
