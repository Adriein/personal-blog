"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const App_1 = require("./App");
async function bootstrap() {
    const app = await core_1.NestFactory.create(App_1.App);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map