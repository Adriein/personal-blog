import { Module } from '@nestjs/common';
import { CqrsModule } from "@nestjs/cqrs";
import { AuthorizationBoundedContext } from "Authorization/infrastructure/AuthorizationBoundedContext";

@Module({
  imports: [CqrsModule, AuthorizationBoundedContext],
  controllers: [],
  providers: [],
  exports: [],
})
export class App {}