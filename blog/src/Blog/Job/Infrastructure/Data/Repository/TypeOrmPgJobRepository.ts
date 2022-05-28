import { Result } from "@badrap/result";
import { Inject, Injectable } from "@nestjs/common";
import { Job } from "Blog/Job/Domain/Entity/Job";
import { IJobRepository } from "Blog/Job/Domain/Repository/IJobRepository";
import { JobMapper } from "Blog/Job/Infrastructure/Data/Mapper/JobMapper";
import { JobModel } from "Blog/Job/Infrastructure/Data/Model/JobModel";
import { Filter } from "Shared/Domain/Entity/Filter";
import { RecordNotFoundError } from "Shared/Domain/Error/RecordNotFoundError";
import { Repository } from "typeorm";

@Injectable()
export class TypeOrmPgJobRepository implements IJobRepository {
  constructor(@Inject('JobModelRepository') private readonly typeorm: Repository<JobModel>, private readonly mapper: JobMapper) {}

  delete(entity: Job): Promise<void> {
    return Promise.resolve(undefined);
  }

  public async find(filter?: Filter): Promise<Result<Job[], Error | RecordNotFoundError>> {
    const results = await this.typeorm.find();

    return Result.ok(results.map((model: JobModel) => this.mapper.toDomain(model)));
  }

  findOne(filter: Filter): Promise<Result<Job, Error>> {
    throw new Error();
  }

  public async save(entity: Job): Promise<void> {
    const model = this.mapper.toModel(entity);

    await this.typeorm.save(model);
  }

  update(entity: Job): Promise<void> {
    return Promise.resolve(undefined);
  }
}