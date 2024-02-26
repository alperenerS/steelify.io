import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../user/dto/user.dto';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(user: UserDto) {
    const newUser = await this.userService.createUser({
      ...user,
    });

    const { ...result } = newUser['dataValues'];

    return { user: result };
  }

  async login(authDto: AuthDto) {
    const existingUser = await this.userService.findByEamil(authDto.email);

    if (!existingUser) {
      throw new NotFoundException('User can not be found !');
    }

    const comparePassword = await bcrypt.compare(
      authDto.password.trim(),
      existingUser.password.trim(),
    );

    if (!comparePassword) {
      throw new BadRequestException('Wrong Password !');
    }

    const access_token = await this.signToken(
      existingUser.id,
      existingUser.email,
    );

    return { user: existingUser, access_token:access_token };
  }

  signToken(userId: number, email: string): Promise<string> {
    const payload = { userId, email };

    return this.jwtService.signAsync(payload);
  }
}