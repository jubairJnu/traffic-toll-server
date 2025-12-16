import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const port = config.port;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  await app.listen(port as string);
  console.log(`app is listening on:http://localhost:${port} `);
}
bootstrap();
