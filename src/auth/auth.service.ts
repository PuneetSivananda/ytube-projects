import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
@Injectable()
export class AuthService {
  // Dependency Injection
  constructor(private prisma: PrismaService) {}
  login() {}
  async singup(dto: AuthDto) {
    // generate the pasword
    const hashedPassword = await argon.hash(dto.password);
    // save the new user in db
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hashedPassword,
        },
      });

      // return the saved user except the hash
      const { hash, ...rest } = user;
      return rest;
    } catch (error) {
      if (error.code === 'P2002') {
        // if (
        //   error instanceof PrismaClientKnownRequestError
        // ) {
        throw new ForbiddenException('Credentials Taken');
        // }
      }
      throw error;
    }
  }
  singin() {
    // find the user by email
    // if user does not exist throw exception

    // compare password
    // if password incorrect throw exception
    // send back the user
    return { msg: 'I have signed in' };
  }
}
