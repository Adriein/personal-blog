import { JobModel } from "Blog/Job/Infrastructure/Data/JobModel";
import { UserModel } from "Shared/Infrastructure/Data/Model/UserModel";
import { DataSource } from 'typeorm';

export default class Database {
  private static _instance: {provide: string, useFactory: () => Promise<DataSource>}[];

  public static instance(): {provide: string, useFactory: () => Promise<DataSource>}[] {
    if(Database._instance) {
      return this._instance;
    }

    Database._instance = [
      {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => new DataSource({
          type: "postgres",
          host: "localhost",
          port: 5432,
          username: "postgres",
          password: "postgres",
          database: "claret-blog",
          entities: [JobModel, UserModel],
          synchronize: true,
          logging: false,
        }).initialize(),
      },
    ];

    return Database._instance;
  }

  private constructor() {}
}