import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../service/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from "../schema/user.schema"

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UsersModule { }
