import { Injectable } from '@nestjs/common';
import { CreateTollplazaDto } from './dto/create-tollplaza.dto';
import { UpdateTollplazaDto } from './dto/update-tollplaza.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TollPlazaDocument } from './schemas/tollPlaza.schema';
import QueryBuilder from 'src/builder/QueryBuilder';
import { IPaginateMeta } from 'src/interface';

@Injectable()
export class TollplazaService {
  constructor(
    @InjectModel('TollPlaza') private tollPlazaModel: Model<TollPlazaDocument>,
  ) {}

  async create(createTollplazaDto: CreateTollplazaDto) {
    return await this.tollPlazaModel.create(createTollplazaDto);
  }

  async findAll(
    query: Record<string, any>,
  ): Promise<{ result: TollPlazaDocument[]; meta: IPaginateMeta }> {
    const resultQuery = new QueryBuilder(this.tollPlazaModel.find(), query)
      .search(['name', 'city'])
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
    return await this.tollPlazaModel.findById(id);
  }

  async update(id: string, updateTollplazaDto: UpdateTollplazaDto) {
    return await this.tollPlazaModel.findByIdAndUpdate(id, updateTollplazaDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.tollPlazaModel.findByIdAndDelete(id);
  }
}
