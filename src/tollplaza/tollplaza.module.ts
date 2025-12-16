import { Module } from '@nestjs/common';
import { TollplazaService } from './tollplaza.service';
import { TollplazaController } from './tollplaza.controller';

@Module({
  controllers: [TollplazaController],
  providers: [TollplazaService],
})
export class TollplazaModule {}
