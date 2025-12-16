import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { sendResponse } from 'src/utils/sendResponse';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() payload: CreateUserDto) {
    const result = await this.usersService.createUser(payload);
    return sendResponse({
      statusCode: 200,
      message: 'User created successfully',
      data: result,
      success: true,
    });
  }

  @Get()
  async getAll(@Req() req) {
    const result = await this.usersService.findAllUsers(req.query);
    return sendResponse({
      statusCode: 200,
      message: 'User retrived successfully',
      data: result,
      success: true,
    });
  }
}
