import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ValidationPipe } from '@nestjs/common';
import * as pactum from 'pactum';

import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuthDto } from '../src/auth/dto';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    //reset the database
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    // create app
    app = moduleRef
      .createNestApplication()
      .useGlobalPipes(
        new ValidationPipe({ whitelist: true }),
      );
    // start the app
    await app.init();
    await app.listen(3333);
    pactum.request.setBaseUrl('http://localhost:3333'); // providing the base url
    prisma = app.get(PrismaService);
    await prisma.cleandb();
  });
  // testing logic

  // close the app
  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'user@gmail.com',
      password: '123',
    };
    describe('SignUp', () => {
      it('should throw if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            password: dto.password,
          })
          .expectStatus(400);
      });

      it('should throw if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            email: dto.email,
          })
          .expectStatus(400);
      });

      it('should should signup', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto)
          .expectStatus(201);
      });
    });
    describe('SignIn', () => {
      it('should signin', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody(dto)
          .expectStatus(200);
      });
    });
  });

  describe('User', () => {
    describe('Get Me', () => {});

    describe('Edit User', () => {});
  });

  describe('Bookmarks', () => {
    describe('Create bookmark', () => {});

    describe('Get Bookmark', () => {});

    describe('Get Bookmark by id', () => {});

    describe('Edit Bookmark', () => {});

    describe('Delete bookmark', () => {});
  });
});
