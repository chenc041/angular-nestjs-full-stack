import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { TypeOrmTestingModule } from '~/test.utils';
import { UserController } from '~/user/user.controller';
import { UserService } from '~/user/user.service';
import { UserEntity } from '~/entities/user.entity';
import * as cookieParser from 'cookie-parser';
import { mockUser } from '~/test.mock.data';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule(
      TypeOrmTestingModule({
        controllers: [UserController],
        providers: [UserService],
        entities: [UserEntity],
      }),
    ).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    );
    app.use(cookieParser());
    await app.init();
  });

  const register = async (payload) => {
    await request(app.getHttpServer()).post('/user/register').send(payload);
  };
  const login = async (payload) => {
    const userInfo = await request(app.getHttpServer()).post('/user/login').send(payload);
    return userInfo.body.data.access_token;
  };

  it('/api/v1/user/login (POST)', async () => {
    await register(mockUser);
    const token = await login(mockUser);
    expect(token).toBeDefined();
  });

  it('/api/v1/user/currentUser (GET)', async () => {
    await register(mockUser);
    const token = await login(mockUser);
    const userInfo = await request(app.getHttpServer())
      .get('/user/currentUser')
      .set('Cookie', [`Authorization=${token}`])
      .send({});
    expect(userInfo.body.data.username).toBeDefined();
  });
});
