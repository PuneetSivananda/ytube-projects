import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from '../models/response.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose"
import { UserDocument } from "../schema/user.schema"

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) { }

    randomString() {
        const string = "Hello World"
        return new Response("success", HttpStatus.OK, string);
    }

    async getUsers() {
        return await this.userModel.find().exec()
    }
}
