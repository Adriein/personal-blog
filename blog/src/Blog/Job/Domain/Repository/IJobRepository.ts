import { Job } from "Blog/Job/Domain/Entity/Job";
import { IRepository } from "Shared/Domain/Repository/IRepository";

export interface IJobRepository extends IRepository<Job>{}