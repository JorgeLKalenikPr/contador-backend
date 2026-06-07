import 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import setupSwagger from './config/swagger/swagger.config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('BOOTSTRAP');
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  logger.log(
    `Swagger rodando em: http://localhost:${process.env.SERVER_PORT}/cnt-api`,
  );
  await app.listen(process.env.SERVER_PORT ?? 3000);
}
void bootstrap();
