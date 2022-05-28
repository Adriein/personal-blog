import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from "@nestjs/core";
import { CqrsModule } from "@nestjs/cqrs";
import { AuthorizationBoundedContext } from "Authorization/infrastructure/AuthorizationBoundedContext";
import { BlogBoundedContext } from "Blog/BlogBoundedContext";
import { UserInterceptor } from "Shared/Infrastructure/Interceptor/UserInterceptor";

@Module({
  imports: [
    CqrsModule,
    AuthorizationBoundedContext,
    BlogBoundedContext,
    ConfigModule.forRoot({isGlobal: true})
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: UserInterceptor
    }
  ],
  exports: [],
})
export class App {}