import { Test, TestingModule } from '@nestjs/testing';
import { TolleventsController } from './tollevents.controller';
import { TolleventsService } from './tollevents.service';

describe('TolleventsController', () => {
  let controller: TolleventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TolleventsController],
      providers: [TolleventsService],
    }).compile();

    controller = module.get<TolleventsController>(TolleventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
