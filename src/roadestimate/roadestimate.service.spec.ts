import { Test, TestingModule } from '@nestjs/testing';
import { RoadestimateService } from './roadestimate.service';

describe('RoadestimateService', () => {
  let service: RoadestimateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoadestimateService],
    }).compile();

    service = module.get<RoadestimateService>(RoadestimateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
