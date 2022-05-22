export class SignInQuery {
  constructor(private _email: string, private _password: string) {}

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }
}