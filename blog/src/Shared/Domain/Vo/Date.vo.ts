import { IncorrectVoError } from "../Error/IncorrectVoError";
import { Time } from "Shared/Infrastructure/Time";
import { ValueObject } from './ValueObject';

export class DateVo extends ValueObject {
  public static now(): DateVo {
    return new DateVo(new Date());
  }

  private readonly _date: Date;
  private regex = new RegExp(
    '([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})'
  );

  constructor(date: string | Date) {
    super();
    if (!date) {
      throw new IncorrectVoError('Incorrect Date format');
    }

    if (date instanceof Date) {
      date = date.toString();
    }
    let formattedDate = date;
    if (date.includes('/')) {
      formattedDate = this.formatStringDate(date);
    }

    const parsedDate = Time.format(new Date(formattedDate), Time.AMERICAN_DATE_FORMAT);

    if (this.validate(parsedDate)) {
      throw new IncorrectVoError('Incorrect Date format');
    }
    this._date = new Date(formattedDate);
  }

  public get value(): Date {
    return this._date;
  }

  private formatStringDate = (date: string): string => {
    const [ day, month, year ]: string[] = date.split('/');
    return `${month}-${day}-${year}`;
  };

  protected validate(parsedDate: string): boolean {
    return !this.regex.test(parsedDate)
  }
}
