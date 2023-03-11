import {
  Controller,
  Post,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    // Validation Process here using nestjs interceptors
    // Use Dtos
    return this.authService.singup(dto);
  }

  @Post('signin')
  signin() {
    return this.authService.singin();
  }
}