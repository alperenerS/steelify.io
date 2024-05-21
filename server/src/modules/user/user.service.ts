import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(user: UserDto): Promise<User> {
    if (!user.password) {
      throw new Error('Password is required'); // veya başka bir işlem yapabilirsiniz
    }
    const hashedPassword = await bcrypt.hash(user.password, 12);

    const hashedUserDto: UserDto = {
      email: user.email,
      password: hashedPassword,
      userType: user.userType,
      website: user.website,
      name: user.name,
      surname: user.surname,
    };

    return await this.userRepository.create(hashedUserDto);
  }

  async findOneById(id: number) {
    const user = await this.userRepository.findByPk<User>(id);

    if (!user) {
      throw new NotFoundException('User can not be found !');
    }

    return user;
  }

  async findByEamil(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  async updateOwnData(user: UserDto, token: string) {
    const decodedToken = this.jwtService.verify(token, {
      publicKey: process.env.JWTKEY,
    });
    const userId = decodedToken.id;
    const hashedPassword = await bcrypt.hash(user.password, 12);

    const existingUser = this.userRepository.findByPk(userId);

    if (!existingUser) {
      throw new NotFoundException('User can not be found !');
    }

    const newUserDto: UserDto = {
      email: user.email,
      password: hashedPassword,
      userType: user.userType,
      website: user.website,
      name: user.name,
      surname: user.surname,
    };

    return await this.userRepository.update(
      {
        email: newUserDto.email,
        password: newUserDto.password,
        userType: newUserDto.userType,
        website: newUserDto.website,
        name: newUserDto.name,
        surname: newUserDto.surname,
      },
      { where: { id: userId } },
    );
  }

  async getUserProfile(user_id: number): Promise<User> {
    return await this.userRepository.findByPk(user_id, {
      attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'id'] },
    });
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email: email } });
  }
}
