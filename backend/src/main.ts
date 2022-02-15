import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  const docConfig = new DocumentBuilder()
    .setTitle('E-commerce')
    .setDescription('REST API documentation')
    .setVersion('1.0.0')
    .addTag('Ilias Bikenov')
    .build();

  const document = SwaggerModule.createDocument(app, docConfig);
  //go to url/api/docs to see REST API documentation
  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => Logger.log(`Server listening on port ${PORT}`));
}
bootstrap();
