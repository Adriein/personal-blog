import { AggregateRoot } from "@nestjs/cqrs";
import { CryptoService } from "Shared/Domain/Service/CryptoService";
import { Email } from "Shared/Domain/Vo/Email.vo";
import { ID } from "Shared/Domain/Vo/Id.vo";
import { Password } from "Shared/Domain/Vo/Password.vo";

export class Auth extends AggregateRoot {
  private crypto = new CryptoService();
  constructor(private _id: ID, private _name: string, private _email: Email,private _password: Password) {
    super();
  }

  public id(): ID {
    return this._id;
  }

  public name(): string {
    return this._name;
  }

  public email(): Email {
    return this._email
  }

  public password(): Password {
    return this._password;
  }

  public async comparePassword(suppliedPassword: Password): Promise<boolean> {
    return await this.crypto.compare(this._password.value, suppliedPassword.value);
  }
}
