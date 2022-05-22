import { Module } from '@nestjs/common';
import { CqrsModule } from "@nestjs/cqrs";
import { SignInQueryHandler } from "Authorization/Application/SignIn/SignInQueryHandler";
import { SignInController } from "Authorization/infrastructure/Controller/SignIn/SignInController";
import { AuthMapper } from "Authorization/infrastructure/Data/Mapper/AuthMapper";
import { TypeOrmPgAuthRepository } from "Authorization/infrastructure/Data/Repository/TypeOrmPgAuthRepository";
import { UserModel } from "Shared/Infrastructure/Data/Model/UserModel";
import Database from "Shared/Infrastructure/Database";
import { DataSource } from "typeorm";

const providers = [
  ...Database.instance(),
  {
    provide: 'UserModelRepository',
    useFactory: (connection: DataSource) => connection.getRepository(UserModel),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'IAuthRepository',
    useClass: TypeOrmPgAuthRepository,
  },
  {
    provide: AuthMapper,
    useClass: AuthMapper,
  },
];

@Module({
  imports: [CqrsModule],
  controllers: [SignInController],
  providers: [SignInQueryHandler, ...providers],
  exports: [...Database.instance()],
})
export class App {}