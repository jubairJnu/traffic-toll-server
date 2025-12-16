import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { AppError } from 'src/common/errors/app-error';
import { bcryptHeler } from 'src/helpers/bcryptHelpers';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<userDocument>) {}

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
}
