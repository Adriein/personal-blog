import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { CreateJobCommandHandler } from "Blog/Job/Application/CreateJob/CreateJobCommandHandler";
import { GetJobListQueryHandler } from "Blog/Job/Application/GetJobList/GetJobListQueryHandler";
import { GetJobListController } from "Blog/Job/Infrastructure/Controller/GetJobList/GetJobListController";
import { JobMapper } from "Blog/Job/Infrastructure/Data/Mapper/JobMapper";
import { JobModel } from "Blog/Job/Infrastructure/Data/Model/JobModel";
import { TypeOrmPgJobRepository } from "Blog/Job/Infrastructure/Data/Repository/TypeOrmPgJobRepository";
import Database from "Shared/Infrastructure/Database";
import { DataSource } from "typeorm";

const Controllers = [GetJobListController];

const Repositories = [
  {
    provide: 'JobModelRepository',
    useFactory: (connection: DataSource) => connection.getRepository(JobModel),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'IJobRepository',
    useClass: TypeOrmPgJobRepository,
  },
];

const Mappers = [JobMapper];

const Handlers = [GetJobListQueryHandler, CreateJobCommandHandler];

const DatabaseProvider = [{
  provide: 'DATABASE_CONNECTION',
  useFactory: async () => Database.instance().initialize(),
}]

@Module({
  imports: [CqrsModule],
  controllers: [...Controllers],
  providers: [
    ...Repositories,
    ...Mappers,
    ...Handlers,
    ...DatabaseProvider
  ],
  exports: [...DatabaseProvider]
})
export class BlogBoundedContext {}