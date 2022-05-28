import { ICommand } from "@nestjs/cqrs";
import { CreateJobRequest } from "Blog/Job/Infrastructure/Controller/CreateJob/CreateJobRequest";

export class CreateJobCommand implements ICommand {
  public static fromRequest(body: CreateJobRequest): CreateJobCommand {
    return new CreateJobCommand(body.company, body.description, body.timeInit, body.timeEnd);
  }

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