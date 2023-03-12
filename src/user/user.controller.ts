import {
  Controller,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JWTGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
  @UseGuards(JWTGuard) // Custom that extends the authguard provided by nestjs; can use this on the entire controller as well
  @Get('me')
  getMe(
    @GetUser() user: User,
    @GetUser('id') id: number,
    @GetUser('email') email: string,
  ) {
    console.log({ id, email });
    return user;
  }
}
