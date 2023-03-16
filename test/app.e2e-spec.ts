import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';

describe('App e2e', () => {
  let app: INestApplication;
  beforeAll(async () => {
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
  });
  // testing logic
  it.todo('should pass');
  // connect to test database

  // close the app
  afterAll(() => {
    app.close();
  });
});
