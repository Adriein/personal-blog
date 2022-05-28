import { Injectable } from "@nestjs/common";
import { Job } from "Blog/Job/Domain/Entity/Job";
import { JobModel } from "Blog/Job/Infrastructure/Data/Model/JobModel";
import { IMapper } from "Shared/Domain/Entity/IMapper";
import { DateVo } from "Shared/Domain/Vo/Date.vo";
import { ID } from "Shared/Domain/Vo/Id.vo";
import { Time } from "Shared/Infrastructure/Time";

@Injectable()
export class JobMapper implements IMapper<JobModel, Job> {
  public toDomain(model: JobModel): Job {
    return new Job(
      new ID(model.id),
      model.company,
      model.description,
      new DateVo(model.timeInit),
      new DateVo(model.timeEnd),
    );
  }

  public toModel(domain: Job): JobModel {
    const job = new JobModel()

    job.id = domain.id().value;
    job.company = domain.company();
    job.description = domain.description();
    job.timeInit = Time.format(domain.timeInit().value, Time.AMERICAN_DATE_FORMAT);
    job.timeEnd = Time.format(domain.timeEnd().value, Time.AMERICAN_DATE_FORMAT);

    return job;
  }
}