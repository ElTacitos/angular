import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(PORT);
}
bootstrap();
