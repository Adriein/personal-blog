import { Auth } from "Authorization/Domain/Entity/Auth";

export class SignInResponse {
  public static fromDomain(auth: Auth): SignInResponse {
    return new SignInResponse(auth.name(), auth.email().value);
  }

  constructor(
    public name: string,
    public email: string,
  ) {}
}