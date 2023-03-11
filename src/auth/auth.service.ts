import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  // Dependency Injection
  constructor(private prisma: PrismaService) {}
  login() {}
  singup() {
    return { msg: 'I have signed up' };
  }
  singin() {
    return { msg: 'I have signed in' };
  }
}
