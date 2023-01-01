import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { PlaceSchema } from './place/entities/place.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //init swagger
  const config = new DocumentBuilder()
    .setTitle('Maps example')
    .setDescription('The Maps API description')
    .setVersion('1.0')
    .addTag('Maps')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
