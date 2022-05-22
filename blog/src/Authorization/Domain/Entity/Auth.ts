import { AggregateRoot } from "@nestjs/cqrs";
import { CryptoService } from "Shared/Domain/Service/CryptoService";
import { ID } from "Shared/Domain/Vo/Id.vo";
import { Password } from "Shared/Domain/Vo/Password.vo";

export class Auth extends AggregateRoot {
  private crypto = new CryptoService();
  constructor(private _id: ID, private _name: string, private _password: Password) {
    super();
  }

  public id(): ID {
    return this._id;
  }

  public name(): string {
    return this._name;
  }

  public password(): Password {
    return this._password;
  }

  public async comparePassword(suppliedPassword: Password): Promise<boolean> {
    return await this.crypto.compare(this._password.value, suppliedPassword.value);
  }
}
