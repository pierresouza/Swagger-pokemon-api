import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();

/**
 * rota da api após rodar o comando npm run start:dev
 * http://localhost:3000/api/v2/api-docs
 */
