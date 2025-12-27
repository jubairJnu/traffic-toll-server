import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { sendResponse } from 'src/utils/sendResponse';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    const result = await this.transactionsService.create(createTransactionDto);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'Created transaction',
      data: result,
    });
  }

  @Get()
  async findAll(@Req() req) {
    const result = await this.transactionsService.findAll(req.query);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'retrived transaction',
      data: result,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.transactionsService.findOne(id);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'retrived transaction',
      data: result,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    const result = await this.transactionsService.update(
      id,
      updateTransactionDto,
    );
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'updated transaction',
      data: result,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.transactionsService.remove(id);
    return sendResponse({
      success: true,
      statusCode: 200,
      message: 'Created transaction',
      data: result,
    });
  }
}
