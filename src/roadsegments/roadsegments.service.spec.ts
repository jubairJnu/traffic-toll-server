import { Test, TestingModule } from '@nestjs/testing';
import { RoadsegmentsService } from './roadsegments.service';

describe('RoadsegmentsService', () => {
  let service: RoadsegmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoadsegmentsService],
    }).compile();

    service = module.get<RoadsegmentsService>(RoadsegmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
