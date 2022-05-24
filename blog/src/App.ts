import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from "@nestjs/cqrs";
import { AuthorizationBoundedContext } from "Authorization/infrastructure/AuthorizationBoundedContext";

@Module({
  imports: [
    CqrsModule,
    AuthorizationBoundedContext,
    ConfigModule.forRoot({isGlobal: true})
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class App {}