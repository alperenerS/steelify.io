import { Module } from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';
import { EmailSenderController } from './email-sender.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { usersProvider } from '../user/user.provider';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MailerModule,
    JwtModule.register({
      secret: process.env.JWTMAILKEY,
      signOptions: { expiresIn: process.env.MAIL_TOKEN_EXPIRATION },
    }),
  ],
  providers: [EmailSenderService, ...usersProvider],
  controllers: [EmailSenderController],
})
export class EmailSenderModule {}
