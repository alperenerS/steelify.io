import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
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

  async findOneById(id: number): Promise<User> {
    return await User.findByPk(id);
  }

  async findByEamil(email:string):Promise<User>{
    return await this.userRepository.findOne({where:{email:email}})
  }
}
