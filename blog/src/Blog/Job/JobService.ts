import type { Repository } from "typeorm";
import type { Job } from "./Job";

export class JobService {
  constructor(private readonly repository: Repository<Job>) {}
  public async findJobs(): Promise<Job[]> {
    return await this.repository.find();
  }
  
  public async registerJob(job: Job): Promise<void> {
    await this.repository.save(job);
  }
}