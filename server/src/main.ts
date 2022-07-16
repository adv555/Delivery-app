import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const start = async () => {
  try {
    const PORT = process.env.BACKEND_PORT || 3001;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    const config = new DocumentBuilder()
      .setTitle('Delivery App API')
      .setDescription('Delivery API Documentation')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    await app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
