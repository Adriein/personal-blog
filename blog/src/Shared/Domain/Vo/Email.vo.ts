import { IncorrectVoError } from "../Error/IncorrectVoError";
import { ValueObject } from './ValueObject';

export class Email extends ValueObject {
  private regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  private readonly email: string;

  constructor(email: string) {
    super();
    if (this.validate(email)) {
      throw new IncorrectVoError('Incorrect Email format');
    }
    this.email = email;
  }

  public get value(): string {
    return this.email;
  }

  protected validate(email: string): boolean {
    return !this.regex.test(email);
  }
}
