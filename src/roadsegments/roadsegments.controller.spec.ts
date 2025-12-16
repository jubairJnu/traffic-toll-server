import { Test, TestingModule } from '@nestjs/testing';
import { RoadsegmentsController } from './roadsegments.controller';
import { RoadsegmentsService } from './roadsegments.service';

describe('RoadsegmentsController', () => {
  let controller: RoadsegmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoadsegmentsController],
      providers: [RoadsegmentsService],
    }).compile();

    controller = module.get<RoadsegmentsController>(RoadsegmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
