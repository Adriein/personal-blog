"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class Database {
    constructor() { }
    static async instance() {
        console.log(Database._instance);
        if (Database._instance) {
            console.log("entro");
            return this._instance;
        }
        const TypeOrm = new typeorm_1.DataSource({
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
        console.log("Data Source has been initialized!");
        return Database._instance;
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map