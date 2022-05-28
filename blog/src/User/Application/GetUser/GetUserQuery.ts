import { IQuery } from "@nestjs/cqrs";

export class GetUserQuery implements IQuery {
  constructor(private _email: string) {}

  public get email(): string {
    return this._email;
  }
}