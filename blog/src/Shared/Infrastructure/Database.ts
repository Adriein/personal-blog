import { createConnection, DataSource } from 'typeorm';

export default class Database {
  private static _instance: {provide: string, useFactory: () => Promise<DataSource>}[];

  public static instance(): {provide: string, useFactory: () => Promise<DataSource>}[] {
    if(Database._instance) {
      return this._instance;
    }

    Database._instance = [
      {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
          type: "postgres",
          host: "localhost",
          port: 5432,
          username: "postgres",
          password: "postgres",
          database: "claret-blog",
          entities: [],
          synchronize: true,
          logging: false,
        }),
      },
    ];

    return Database._instance;
  }

  private constructor() {}
}