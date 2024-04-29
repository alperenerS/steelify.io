import { Module } from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';
import { EmailSenderController } from './email-sender.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { usersProvider } from '../user/user.provider';

@Module({
  imports: [MailerModule],
  providers: [EmailSenderService, ...usersProvider],
  controllers: [EmailSenderController],
})
export class EmailSenderModule {}
