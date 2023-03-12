import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  // Dependency Injection
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
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
      return this.signToken(rest.id, rest.email);
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

  async signin(dto: AuthDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if user does not exist throw exception
    if (!user)
      throw new ForbiddenException('Credentials Incorrect');
    // compare password
    const passwordMatches = await argon.verify(
      user.hash,
      dto.password,
    );
    // if password incorrect throw exception
    if (!passwordMatches)
      throw new ForbiddenException('Credentials Incorrect');
    // send back the user
    const { hash, ...rest } = user;
    return this.signToken(rest.id, rest.email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ accessToken: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      accessToken: token,
    };
  }
}
