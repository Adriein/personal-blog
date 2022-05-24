import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { SignInQueryHandler } from "Authorization/Application/SignIn/SignInQueryHandler";
import { SignInController } from "Authorization/infrastructure/Controller/SignIn/SignInController";
import { AuthMapper } from "Authorization/infrastructure/Data/Mapper/AuthMapper";
import { TypeOrmPgAuthRepository } from "Authorization/infrastructure/Data/Repository/TypeOrmPgAuthRepository";
import { UserModel } from "Shared/Infrastructure/Data/Model/UserModel";
import Database from "Shared/Infrastructure/Database";
import { DataSource } from "typeorm";

const Repositories = [
  {
    provide: 'UserModelRepository',
    useFactory: (connection: DataSource) => connection.getRepository(UserModel),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'IAuthRepository',
    useClass: TypeOrmPgAuthRepository,
  },
];

const Mappers = [AuthMapper];

const Handlers = [SignInQueryHandler];

const DatabaseProvider = [{
  provide: 'DATABASE_CONNECTION',
  useFactory: async () => Database.instance().initialize(),
}]

@Module({
  imports: [CqrsModule],
  controllers: [SignInController],
  providers: [
    ...Repositories,
    ...Mappers,
    ...Handlers,
    ...DatabaseProvider
  ],
  exports: [...DatabaseProvider]
})
export class AuthorizationBoundedContext {}