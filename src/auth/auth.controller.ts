import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    // Validation Process here
    // Use Dtos
    console.log({ dto });
    return this.authService.singup();
  }

  @Post('signin')
  signin() {
    return this.authService.singin();
  }
}
