import { Module } from '@nestjs/common';
import { TollplazaService } from './tollplaza.service';
import { TollplazaController } from './tollplaza.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TollPlazaSchema } from './schemas/tollPlaza.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'TollPlaza', schema: TollPlazaSchema }]),
  ],
  controllers: [TollplazaController],
  providers: [TollplazaService],
  exports: [TollplazaService],
})
export class TollplazaModule {}
