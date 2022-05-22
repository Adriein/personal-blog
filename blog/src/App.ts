import { Module } from '@nestjs/common';
import { CqrsModule } from "@nestjs/cqrs";
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
    useValue: TypeOrmPgAuthRepository,
  },
  {
    provide: AuthMapper,
    useValue: AuthMapper,
  },
];

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [...providers],
  exports: [...Database.instance()],
})
export class App {}