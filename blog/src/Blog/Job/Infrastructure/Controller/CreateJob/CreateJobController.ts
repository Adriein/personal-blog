import { Body, ClassSerializerInterceptor, Controller, Post, UseGuards, UseInterceptors } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { CreateJobCommand } from "Blog/Job/Application/CreateJob/CreateJobCommand";
import { GetJobListResponse } from "Blog/Job/Application/GetJobList/GetJobListResponse";
import { CreateJobRequest } from "Blog/Job/Infrastructure/Controller/CreateJob/CreateJobRequest";
import { AuthGuard } from "Shared/Infrastructure/Guard/AuthGuard";
import { UserInterceptor } from "Shared/Infrastructure/Interceptor/UserInterceptor";

@Controller('/job')
export class CreateJobController {
  constructor(private readonly commandBus: CommandBus) {}

  @UseInterceptors(ClassSerializerInterceptor, UserInterceptor)
  @UseGuards(AuthGuard)
  @Post()
  public async createJob(@Body() body: CreateJobRequest): Promise<GetJobListResponse[]> {
    return await this.commandBus.execute(CreateJobCommand.fromRequest(body));
  }
}