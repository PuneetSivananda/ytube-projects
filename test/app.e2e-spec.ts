import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ValidationPipe } from '@nestjs/common';
import * as pactum from 'pactum';

import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuthDto } from '../src/auth/dto';
import { EditUserDto } from 'src/user/dto';
import {
  CreateBookmarkDTO,
  EditBookmarkDTO,
} from 'src/bookmark/dto';

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

      it('should throw if no body is provided', () => {
        return pactum
          .spec()
          .post('/auth/signup')
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
          .expectStatus(200)
          .stores('userAccessToken', 'accessToken');
      });

      it('should throw if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            password: dto.password,
          })
          .expectStatus(400);
      });

      it('should throw if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({
            email: dto.email,
          })
          .expectStatus(400);
      });

      it('should throw if no body is provided', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .expectStatus(400);
      });

      it('should should signin', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody(dto)
          .expectStatus(200);
      });
    });
  });

  describe('User', () => {
    describe('Get Me', () => {
      it('should get current user', () => {
        return pactum
          .spec()
          .get('/users/me')
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200);
      });
    });

    describe('Edit User', () => {
      it('edit user', () => {
        const dto: EditUserDto = {
          firstName: 'Vladmir',
          email: 'vlad@code.com',
        };
        return pactum
          .spec()
          .patch('/users')
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.firstName)
          .expectBodyContains(dto.email);
      });
    });
  });

  describe('Bookmarks', () => {
    describe('Get Empty bookmarks', () => {
      it('Should get bookmarks', () => {
        return pactum
          .spec()
          .get('/bookmarks')
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200)
          .expectBody([]);
      });
    });

    describe('Create bookmark', () => {
      const dto: CreateBookmarkDTO = {
        title: 'First Bookmark',
        link: 'https://sample.com',
        description: 'First Bookmark',
      };
      it('Should Create a bookmark', () => {
        return pactum
          .spec()
          .post('/bookmarks')
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .withBody(dto)
          .expectStatus(201)
          .stores('bookmarkId', 'id');
      });
    });

    describe('Get Bookmarks', () => {
      it('Should get bookmarks', () => {
        return pactum
          .spec()
          .get('/bookmarks')
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200)
          .expectJsonLength(1);
      });
    });

    describe('Get Bookmark by id', () => {
      it('Should get bookmarks by id', () => {
        return pactum
          .spec()
          .get('/bookmarks/{id}')
          .withPathParams('id', '$S{bookmarkId}')
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200)
          .expectBodyContains('$S{bookmarkId}');
      });
    });

    describe('Edit Bookmark by id', () => {
      it('Should edit bookmark by id', () => {
        const dto: EditBookmarkDTO = {
          title: 'Edited title',
          description: 'Updated the description text',
        };
        return pactum
          .spec()
          .patch('/bookmarks/{id}')
          .withPathParams('id', '$S{bookmarkId}')
          .withBody(dto)
          .withHeaders({
            Authorization: 'Bearer $S{userAccessToken}',
          })
          .expectStatus(200)
          .expectBodyContains(dto.title)
          .expectBodyContains(dto.description);
      });
    });

    describe('Delete bookmark by id', () => {
      it('Should delete bookmark by id', () => {
        return pactum
          .spec()
          .delete('/bookmarks/{id}')
          .withPathParams('id', '$S{bookmarkId}')
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(204);
      });

      it('Should get empty bookmarks', () => {
        return pactum
          .spec()
          .get('/bookmarks')
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200)
          .expectJsonLength(0);
      });
    });
  });
});
