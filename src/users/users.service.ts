import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { AppError } from 'src/common/errors/app-error';
import { bcryptHeler } from 'src/helpers/bcryptHelpers';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<userDocument>) {}

  //   create user
  async createUser(createUserDto: CreateUserDto) {
    const isExistUser = await this.userModel.findOne({
      email: createUserDto.email,
    });

    if (isExistUser) {
      throw new AppError('Already exist', 400);
    }

    // creaet user

    const hashPassword = await bcryptHeler.encryptPassword(
      createUserDto.password,
    );

    const user = new this.userModel({
      ...createUserDto,
      password: hashPassword,
    });

    await user.save();

    return user;
  }

  //    find all users

  async findAllUsers() {
    return this.userModel.find();
  }

  //   find singl user

  async findSingleUser(id: string) {
    return this.userModel.findById(id);
  }

  // update

  async udpateUser(id: string, payload: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, payload, { new: true });
  }

  // delte

  async deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
