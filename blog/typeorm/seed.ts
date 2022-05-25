import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { DataSource } from "typeorm";
import { App } from "../src/App";
import { CryptoService } from "../src/Shared/Domain/Service/CryptoService";
import { ID } from "../src/Shared/Domain/Vo/Id.vo";
import { UserModel } from "../src/Shared/Infrastructure/Data/Model/UserModel";

(async () => {
  const crypto = new CryptoService();
  const app = await NestFactory.create(App);
  const configService = app.get(ConfigService);
  console.log(configService.get<string>('DATABASE_HOST'))
  const db = await new DataSource({
    type: "postgres",
    host: configService.get<string>('DATABASE_HOST'),
    port: Number(configService.get<string>('DATABASE_PORT')),
    username: configService.get<string>('DATABASE_USER'),
    password: configService.get<string>('DATABASE_PASSWORD'),
    database: configService.get<string>('DATABASE_NAME'),
    entities: [UserModel],
    synchronize: false,
    logging: false,
  }).initialize();

  const password = await crypto.hash(configService.get<string>('ADMIN_PASSWORD')!);

  const userRepository = db.getRepository(UserModel);

  const user = userRepository.create();

  // @ts-ignore
  user.id = ID.generate().value
  user.name = 'Adri Claret';
  user.email = 'adria.claret@gmail.com'
  user.password = password;

  await userRepository.save(user);
})();