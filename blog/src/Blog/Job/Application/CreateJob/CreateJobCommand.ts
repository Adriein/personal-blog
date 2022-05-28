import { ICommand } from "@nestjs/cqrs";

export class CreateJobCommand implements ICommand {
  constructor(private _company: string, private _description: string, private _timeInit: string, private _timeEnd: string ) {}


  public get company(): string {
    return this._company;
  }

  public get description(): string {
    return this._description;
  }

  public get timeInit(): string {
    return this._timeInit;
  }

  public get timeEnd(): string {
    return this._timeEnd;
  }
}