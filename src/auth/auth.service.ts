import { Injectable } from '@nestjs/common';

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
