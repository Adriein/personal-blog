import "reflect-metadata"
import {Post} from "Blog/Post";
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
      entities: [Post],
      synchronize: true,
      logging: false,
    });
    console.log('initalize')
    TypeOrm.initialize()
      .then(() => {
      console.log("Data Source has been initialized!")
    })
      .catch((err) => {
        console.error("Error during Data Source initialization", err)
      });
  }
}