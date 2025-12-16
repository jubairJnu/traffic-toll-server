import { Test, TestingModule } from '@nestjs/testing';
import { TollplazaService } from './tollplaza.service';

describe('TollplazaService', () => {
  let service: TollplazaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TollplazaService],
    }).compile();

    service = module.get<TollplazaService>(TollplazaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
