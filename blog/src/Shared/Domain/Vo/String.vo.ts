import { IncorrectVoError } from "../Error/IncorrectVoError";
import { ValueObject } from "Shared/Domain/Vo/ValueObject";
import { z } from "zod";

export class StringVo extends ValueObject {
  constructor(private readonly _value: string) {
    super();
    this.validate(_value);
  }

  protected validate(primitive: any): boolean {
    const string = z.string();
    try {
      string.parse(this._value);

      return true;
    }catch(error) {
      throw new IncorrectVoError('Malformed string VO');
    }
  }

  get value(): string {
    return this._value;
  }

}