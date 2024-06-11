import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpStatus,
  NotFoundException,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';
import { Request, Response } from 'express';
import { SendEmailDto } from './email.interface';

@Controller('api/email-sender')
export class EmailSenderController {
  constructor(private readonly emailService: EmailSenderService) {}

  @Post('create-token')
  async createToken(@Req() req: Request, @Res() res: Response) {
    const { email } = req.body;
    const userName = await this.emailService.findUserByEmail(email);
    const userId = userName.id;

    const mail_token = await this.emailService.generateToken(userId, email);
    return res.status(HttpStatus.OK).json({
      message: 'Token Successfully Created !',
      token: mail_token,
      username: userName.name,
    });
  }

  @Post('reset-password')
  async resetPassword(@Body() emailDto: SendEmailDto, @Res() res: Response) {
    const userExist = await this.emailService.findUserByEmail(emailDto.to);

    if (!userExist) {
      throw new NotFoundException('Wrong Email !');
    }

    const dto: SendEmailDto = {
      from: { name: 'Steelify', address: 'info@steelify.io' },
      to: emailDto.to,
      subject: emailDto.subject,
      html: emailDto.html,
      text: emailDto.text,
    };

    const result = await this.emailService.sendEmail(dto);

    return res.status(HttpStatus.CREATED).json({
      message: 'Mail Successfully Sent!',
      data: result,
    });
  }

  @Post('welcome')
  async sendWelcomeEmail(@Body() emailDto: SendEmailDto, @Res() res: Response) {
    const userExist = await this.emailService.findUserByEmail(emailDto.to);

    if (!userExist) {
      throw new NotFoundException('Wrong Email !');
    }

    const dto: SendEmailDto = {
      from: { name: 'Steelify', address: 'info@steelify.io' },
      to: emailDto.to,
      subject: emailDto.subject,
      html: emailDto.html,
      text: emailDto.text,
    };

    const result = await this.emailService.sendEmail(dto);

    return res.status(HttpStatus.CREATED).json({
      message: 'Welcome Mail Successfully Sent!',
      data: result,
    });
  }

  @Post('order-confirmation')
  async sendOrderConfirmationEmail(@Body() emailDto: SendEmailDto, @Res() res: Response) {
    const userExist = await this.emailService.findUserByEmail(emailDto.to);

    if (!userExist) {
      throw new NotFoundException('Wrong Email !');
    }

    const dto: SendEmailDto = {
      from: { name: 'Steelify', address: 'info@steelify.io' },
      to: emailDto.to,
      subject: emailDto.subject,
      html: emailDto.html,
      text: emailDto.text,
    };

    const result = await this.emailService.sendEmail(dto);

    return res.status(HttpStatus.CREATED).json({
      message: 'Order Confirmation Mail Successfully Sent!',
      data: result,
    });
  }

  @Post('new-user-registration')
  async sendNewUserRegistrationEmail(@Body() emailDto: SendEmailDto, @Res() res: Response) {
    const adminEmails = [
      // 'alperen@yenaengineering.nl',
      'emre@yenaengineering.nl',
      // 'enver@yenaengineering.nl'
    ];
    
    const dto: SendEmailDto = {
      from: { name: 'Steelify', address: 'info@steelify.io' },
      to: adminEmails.join(','),
      subject: emailDto.subject,
      html: emailDto.html,
      text: emailDto.text,
    };

    const result = await this.emailService.sendEmail(dto);

    return res.status(HttpStatus.CREATED).json({
      message: 'New User Registration Mail Successfully Sent!',
      data: result,
    });
  }

  @Post('order-notification-admin')
  async sendOrderNotificationToAdminEmail(@Body() emailDto: SendEmailDto, @Res() res: Response) {
    const adminEmails = [
      // 'alperen@yenaengineering.nl',
      'emre@yenaengineering.nl',
      // 'enver@yenaengineering.nl'
    ];

    const dto: SendEmailDto = {
      from: { name: 'Steelify', address: 'info@steelify.io' },
      to: adminEmails.join(','),
      subject: emailDto.subject,
      html: emailDto.html,
      text: emailDto.text,
    };

    const result = await this.emailService.sendEmail(dto);

    return res.status(HttpStatus.CREATED).json({
      message: 'Order Notification Mail Successfully Sent!',
      data: result,
    });
  }

  @Put('newPasswd')
  async resPasswd(@Req() req: Request, @Res() res: Response) {
    const { token, newPassword, confirmNewPassword } = req.body;

    const decodedToken = await this.emailService.verifyToken(token);

    const userId = decodedToken.id;

    if (!decodedToken) {
      throw new ForbiddenException('Invalid Token !');
    }

    const newPasswd = await this.emailService.resPasswd(
      newPassword,
      confirmNewPassword,
      userId,
    );

    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'Password Successfully Updated!', data: newPasswd });
  }
}
