import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Req() req: Request) {
    // Validation Process here
    // Use Dtos
    console.log(req.body);
    return this.authService.singup();
  }

  @Post('signin')
  signin() {
    return this.authService.singin();
  }
}
