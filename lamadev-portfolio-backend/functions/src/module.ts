import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { RandomsModule } from './domains/randoms/randoms.module';
import { UsersModule } from "./module/user.module"
import { AppService } from './service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [
    UsersModule,
    RandomsModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
