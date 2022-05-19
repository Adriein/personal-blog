import { Module } from '@nestjs/common';
import Database from "Shared/Infrastructure/Database";

@Module({
  imports: [],
  controllers: [],
  providers: [...Database.instance()],
  exports: [...Database.instance()],
})
export class App {}