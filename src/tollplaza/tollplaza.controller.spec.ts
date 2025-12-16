import { Test, TestingModule } from '@nestjs/testing';
import { TollplazaController } from './tollplaza.controller';
import { TollplazaService } from './tollplaza.service';

describe('TollplazaController', () => {
  let controller: TollplazaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TollplazaController],
      providers: [TollplazaService],
    }).compile();

    controller = module.get<TollplazaController>(TollplazaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
