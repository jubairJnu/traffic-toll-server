import { IPaginateMeta } from 'src/interface';
import { Injectable } from '@nestjs/common';
import { CreateRoadsegmentDto } from './dto/create-roadsegment.dto';
import { UpdateRoadsegmentDto } from './dto/update-roadsegment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoadSegmentDocument } from './schemas/roadsegment.schema';
import QueryBuilder from 'src/builder/QueryBuilder';

@Injectable()
export class RoadsegmentsService {
  @InjectModel('Roadsegment')
  private readonly roadsegmentModel: Model<RoadSegmentDocument>;
  async create(createRoadsegmentDto: CreateRoadsegmentDto) {
    return await this.roadsegmentModel.create(createRoadsegmentDto);
  }

  async findAll(
    qeuery: Record<string, any>,
  ): Promise<{ result: RoadSegmentDocument[]; meta: IPaginateMeta }> {
    const resultQuery = new QueryBuilder(
      this.roadsegmentModel.find().populate('plazes', 'name'),
      qeuery,
    )
      .search(['fromCity', 'toCity'])
      .filter()
      .sort()
      .paginate();
    const result = await resultQuery.modelQuery;
    const meta = await resultQuery.countTotal();
    return {
      result,
      meta,
    };
  }

  async findOne(id: string) {
    return await this.roadsegmentModel.findById(id).populate('plazes');
  }

  async update(id: string, updateRoadsegmentDto: UpdateRoadsegmentDto) {
    return await this.roadsegmentModel.findByIdAndUpdate(
      id,
      updateRoadsegmentDto,
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.roadsegmentModel.findByIdAndDelete(id);
  }
}
