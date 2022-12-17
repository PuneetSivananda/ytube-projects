import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { RandomsModule } from './domains/randoms/randoms.module';
import { UsersModule } from "./module/user.module"
import { AppService } from './service';

@Module({
  imports: [RandomsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
