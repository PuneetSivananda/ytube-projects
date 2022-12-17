import { Controller, Get, Query } from '@nestjs/common';
import { Response } from '../models/response.model';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('/')
    helloString(): Response {
        return this.userService.randomString();
    }

    @Get("/all")
    async getAllUsers() {
        return this.userService.getUsers()
    }
}
