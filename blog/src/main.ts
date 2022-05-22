import { NestFactory } from '@nestjs/core';
import { ErrorsInterceptor } from "Shared/Infrastructure/Interceptor/ErrorInterceptor";
import { App } from "./App";


async function bootstrap() {
  const app = await NestFactory.create(App);
  app.useGlobalInterceptors(new ErrorsInterceptor());
  await app.listen(3000);
}

bootstrap();