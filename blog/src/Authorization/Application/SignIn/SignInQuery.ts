import { IQuery } from "@nestjs/cqrs";

export class SignInQuery implements IQuery{
  constructor(private _email: string, private _password: string) {}

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }
}