import { JobModel } from "Blog/Job/Infrastructure/Data/Model/JobModel";
import { UserModel } from "Shared/Infrastructure/Data/Model/UserModel";
import { DataSource } from 'typeorm';


export default class Database {
  private static _instance: DataSource;

  public static instance(): DataSource {
    if(Database._instance) {
      return this._instance;
    }

    Database._instance = new DataSource({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [JobModel, UserModel],
      synchronize: true,
      logging: false,
    });

    return Database._instance;
  }

  private constructor() {}
}