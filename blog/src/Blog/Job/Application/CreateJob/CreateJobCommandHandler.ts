import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateJobCommand } from "Blog/Job/Application/CreateJob/CreateJobCommand";
import { Job } from "Blog/Job/Domain/Entity/Job";
import { IJobRepository } from "Blog/Job/Domain/Repository/IJobRepository";
import { DateVo } from "Shared/Domain/Vo/Date.vo";

@CommandHandler(CreateJobCommand)
export class CreateJobCommandHandler implements ICommandHandler {
  constructor(@Inject('IJobRepository') private readonly repository: IJobRepository) {}
  public async execute(command: CreateJobCommand): Promise<void> {
    const timeInit = new DateVo(command.timeInit);
    const timeEnd = new DateVo(command.timeEnd);


    const job = Job.create(command.company, command.description, timeInit, timeEnd)

    await this.repository.save(job);
  }
}