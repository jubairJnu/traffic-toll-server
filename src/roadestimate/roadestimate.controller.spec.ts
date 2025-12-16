import { Test, TestingModule } from '@nestjs/testing';
import { RoadestimateController } from './roadestimate.controller';
import { RoadestimateService } from './roadestimate.service';

describe('RoadestimateController', () => {
  let controller: RoadestimateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoadestimateController],
      providers: [RoadestimateService],
    }).compile();

    controller = module.get<RoadestimateController>(RoadestimateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
