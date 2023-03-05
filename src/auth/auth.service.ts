import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable({})
export class AuthService {
  login() {}
  singup() {
    return { msg: 'I have signed up' };
  }
  singin() {
    return { msg: 'I have signed in' };
  }
}
