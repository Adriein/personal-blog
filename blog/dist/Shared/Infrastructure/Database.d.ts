import { DataSource } from "typeorm";
export default class Database {
    private static _instance;
    static instance(): Promise<DataSource>;
    private constructor();
}
