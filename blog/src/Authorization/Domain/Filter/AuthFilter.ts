import { Filter } from "Shared/Domain/Entity/Filter";
import { Email } from "Shared/Domain/Vo/Email.vo";

export class AuthFilter extends Filter {
  public static EMAIL_FILTER = 'email';

  public static builder(): AuthFilter {
    return new AuthFilter();
  }

  protected data: Map<string, any> = new Map();

  public withEmail(email: Email): this {
    this.data.set(AuthFilter.EMAIL_FILTER, email);
    return this;
  };

  public build(): Map<string, any> {
    return this.data;
  }
}