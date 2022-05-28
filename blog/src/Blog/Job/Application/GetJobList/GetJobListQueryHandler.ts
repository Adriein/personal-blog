import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetJobListQuery } from "Blog/Job/Application/GetJobList/GetJobListQuery";
import { GetJobListResponse } from "Blog/Job/Application/GetJobList/GetJobListResponse";
import { Job } from "Blog/Job/Domain/Entity/Job";
import { IJobRepository } from "Blog/Job/Domain/Repository/IJobRepository";

@QueryHandler(GetJobListQuery)
export class GetJobListQueryHandler implements IQueryHandler {
  constructor(@Inject('IJobRepository') private readonly repository: IJobRepository) {}

  public async execute(query: GetJobListQuery): Promise<GetJobListResponse[]> {
    const response = await this.repository.find();

    const jobList = response.unwrap();

    return jobList.map((job: Job) => GetJobListResponse.fromDomain(job));
  }
}