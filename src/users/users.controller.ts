import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { sendResponse } from 'src/utils/sendResponse';
import { UpdateUserDto } from './dto/update-user.dto';

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

  @Get(':id')
  async getSingle(@Param('id') id: string) {
    const result = await this.usersService.findSingleUser(id);
    return sendResponse({
      statusCode: 200,
      message: 'User retrived successfully',
      data: result,
      success: true,
    });
  }
  @Patch(':id')
  async update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    const result = await this.usersService.udpateUser(id, payload);
    return sendResponse({
      statusCode: 200,
      message: 'User updated successfully',
      data: result,
      success: true,
    });
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const result = await this.usersService.deleteUser(id);
    return sendResponse({
      statusCode: 200,
      message: 'User deleted successfully',
      data: result,
      success: true,
    });
  }
}
