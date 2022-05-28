import { ClassSerializerInterceptor, Controller, Get, UseGuards, UseInterceptors } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { GetJobListQuery } from "Blog/Job/Application/GetJobList/GetJobListQuery";
import { GetJobListResponse } from "Blog/Job/Application/GetJobList/GetJobListResponse";
import { AuthGuard } from "Shared/Infrastructure/Guard/AuthGuard";
import { UserInterceptor } from "Shared/Infrastructure/Interceptor/UserInterceptor";

@Controller('/jobs')
export class GetJobListController {
  constructor(private readonly queryBus: QueryBus) {}

  @UseInterceptors(ClassSerializerInterceptor, UserInterceptor)
  @UseGuards(AuthGuard)
  @Get()
  public async getJobList(): Promise<GetJobListResponse[]> {
    return await this.queryBus.execute(new GetJobListQuery());
  }
}