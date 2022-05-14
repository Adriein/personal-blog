import "reflect-metadata"
import { DataSource } from "typeorm"

export default class Database {
  private static _instance: Database;

  public static instance(): Database {
    if(Database._instance) {
      return this._instance;
    }

    return new Database();
  }

  private constructor() {
    const TypeOrm = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "claret-blog",
      entities: [],
      synchronize: true,
      logging: false,
    });

    TypeOrm.initialize().catch((error) => console.log(error));
  }
}