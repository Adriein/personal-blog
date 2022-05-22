import { Module } from '@nestjs/common';
import { CqrsModule } from "@nestjs/cqrs";
import Database from "Shared/Infrastructure/Database";

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [...Database.instance()],
  exports: [...Database.instance()],
})
export class App {}