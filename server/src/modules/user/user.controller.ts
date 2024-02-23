import {
  Body,
  Controller,
  HttpStatus,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { UserDto } from './dto/user.dto';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put('updateData')
  async updateOwnData(
    @Body() user: UserDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const token = req.headers.authorization.split(' ')[1];
    const response = await this.userService.updateOwnData(user, token);

    return res
      .status(HttpStatus.ACCEPTED)
      .json({ message: 'Successfully created !', response: response });
  }
}
