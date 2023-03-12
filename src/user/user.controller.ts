import {
  Controller,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JWTGuard } from 'src/auth/guard';

@UseGuards(JWTGuard) // Custom that extends the authguard provided by nestjs; can use this on the entire controller as well
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
