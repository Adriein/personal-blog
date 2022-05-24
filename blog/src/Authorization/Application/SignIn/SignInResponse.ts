import { Auth } from "Authorization/Domain/Entity/Auth";
import { Expose } from 'class-transformer';

export class SignInResponse {
  public static fromDomain(auth: Auth): SignInResponse {
    return new SignInResponse(auth.name());
  }

  constructor(private _name: string) {}

  @Expose()
  public get name(): string {
    return this._name;
  }
}