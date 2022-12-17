import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { RandomsModule } from './domains/randoms/randoms.module';
import { UsersModule } from "./module/user.module"
import { AppService } from './service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), RandomsModule, UsersModule,
    MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
