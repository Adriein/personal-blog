import type { Repository } from "typeorm";
import type { Job } from "./Job";
export declare class JobService {
    private readonly repository;
    constructor(repository: Repository<Job>);
    findJobs(): Promise<Job[]>;
    registerJob(job: Job): Promise<void>;
}
