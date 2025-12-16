import { Test, TestingModule } from '@nestjs/testing';
import { TolleventsService } from './tollevents.service';

describe('TolleventsService', () => {
  let service: TolleventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TolleventsService],
    }).compile();

    service = module.get<TolleventsService>(TolleventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
