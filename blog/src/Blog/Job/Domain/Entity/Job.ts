import { AggregateRoot } from "@nestjs/cqrs";
import { DateVo } from "Shared/Domain/Vo/Date.vo";
import { ID } from "Shared/Domain/Vo/Id.vo";

export class Job extends AggregateRoot {
  public static create(company: string, description: string, timeInit: DateVo, timeEnd: DateVo): Job {
    return new Job(
      ID.generate(),
      company,
      description,
      timeInit,
      timeEnd
    );
  }

  constructor(
    private _id: ID,
    private _company: string,
    private _description: string,
    private _timeInit: DateVo,
    private _timeEnd: DateVo
  ) {
    super();
  }


  public id(): ID {
    return this._id;
  }

  public company(): string {
    return this._company;
  }

  public description(): string {
    return this._description;
  }

  public timeInit(): DateVo {
    return this._timeInit;
  }

  public timeEnd(): DateVo {
    return this._timeEnd;
  }
}