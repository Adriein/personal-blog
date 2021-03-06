import { Result } from "@badrap/result";
import { Filter } from "Shared/Domain/Entity/Filter";
import { RecordNotFoundError } from "Shared/Domain/Error/RecordNotFoundError";

export interface IRepository<T> {
  findOne(filter: Filter): Promise<Result<T, Error>>;

  find(filter?: Filter): Promise<Result<T[], Error | RecordNotFoundError>>;

  save(entity: T): Promise<void>;

  update(entity: T): Promise<void>;

  delete(entity: T): Promise<void>;
}
