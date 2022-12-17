import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from '../models/response.model';


@Injectable()
export class UserService {
    randomString() {
        const string = "Hello World"
        return new Response("success", HttpStatus.OK, string);
    }
}
