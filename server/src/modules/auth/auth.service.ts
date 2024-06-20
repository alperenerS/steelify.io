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
import { User } from '../user/user.entity';
import axios from 'axios';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(user: UserDto) {
    // Create the user in Odoo
    try {
      const response = await axios.post(
        'https://portal-steelify-steelify-api-13680549.dev.odoo.com//api/create_portal_user',
        {
          name: `${user.name} ${user.surname}`,
          login: user.email,
          password: user.password,
          userType: user.userType,
        }
      );
      const odooUserId = response.data.result.user_id;
      const odooPartnerId = response.data.result.partner_id;
      const newUser = await this.userService.createUser({
        ...user,
        odoo_id: odooUserId,
        odoo_partner_id: odooPartnerId
      });

      const { ...result } = newUser['dataValues'];

      return { data: result };
    } catch (error) {
      throw new BadRequestException('Failed to create user in Odoo');
    }
  }

  async login(authDto: AuthDto) {
    const existingUser = await this.userService.findByEamil(authDto.email);

    if (!existingUser) {
      throw new NotFoundException('User can not be found, Wrong Email!');
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
      existingUser.name,
      existingUser.surname,
      existingUser.userType,
      existingUser.website,
    );

    return { data: existingUser, access_token: access_token };
  }

  signToken(
    id: number,
    email: string,
    name: string,
    surname: string,
    userType: string,
    website: string,
  ): Promise<string> {
    const payload = { id, email, name, surname, userType, website };

    return this.jwtService.signAsync(payload);
  }

  async findUserExist(email: string): Promise<User> {
    return await this.userService.findUserByEmail(email);
  }
}
