import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { usersProvider } from './user.provider';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[JwtModule],
  exports:[UserService],
  providers: [UserService,...usersProvider],
  controllers: [UserController]
})
export class UserModule {}
