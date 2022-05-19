import { DataSource } from "typeorm"

export default class Database {
  private static _instance: DataSource;

  public static async instance(): Promise<DataSource> {
    console.log(Database._instance)
    if(Database._instance) {
      console.log("entro")
      return this._instance;
    }

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

    Database._instance = await TypeOrm.initialize();
    console.log("Data Source has been initialized!")

    return Database._instance;
  }

  private constructor() {}
}