import { Job } from "Blog/Job/Domain/Entity/Job";
import { Time } from "Shared/Infrastructure/Time";

export class GetJobListResponse {
  public static fromDomain(job: Job): GetJobListResponse {
    return new GetJobListResponse(
      job.id().value,
      job.company(),
      job.description(),
      Time.format(job.timeInit().value, Time.AMERICAN_DATE_FORMAT),
      Time.format(job.timeEnd().value, Time.AMERICAN_DATE_FORMAT)
    );
  }

  constructor(
    public id: string,
    public company: string,
    public description: string,
    public timeInit: string,
    public timeEnd: string,
  ) {}
}