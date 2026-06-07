import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Contador Inútil API')
    .setDescription('Api do contador mais inútil do mundo')
    .setVersion('0.0.1')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('cnt-api', app, documentFactory);
}
