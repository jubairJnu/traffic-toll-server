import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransactionDocument } from './schemas/transaction.schema';
import { IPaginateMeta } from 'src/interface';
import QueryBuilder from 'src/builder/QueryBuilder';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel('Transaction')
    private transactionModel: Model<TransactionDocument>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    return await this.transactionModel.create(createTransactionDto);
  }

  async findAll(
    query: Record<string, any>,
  ): Promise<{ result: TransactionDocument[]; meta: IPaginateMeta }> {
    const resultQuery = new QueryBuilder(
      this.transactionModel.find().populate('submitBy', 'name'),
      query,
    )
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
    return await this.transactionModel
      .findById(id)
      .populate('submitBy', 'name')
      .populate('serviceId');
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    return await this.transactionModel.findByIdAndUpdate(
      id,
      updateTransactionDto,
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.transactionModel.findByIdAndDelete(id);
  }
}
