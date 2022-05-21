import { Result } from "@badrap/result";
import { Injectable } from "@nestjs/common";
import { Auth } from "Authorization/Domain/Entity/Auth";
import { Filter } from "Shared/Domain/Entity/Filter";
import { IRepository } from "Shared/Domain/Repository/IRepository";
import { Repository } from "typeorm";

@Injectable()
export class TypeOrmPgAuthRepository implements IRepository<Auth> {
  constructor(private readonly repository: Repository<Auth>) {}

  delete(entity: Auth): Promise<void> {
    return Promise.resolve(undefined);
  }

  public async find(filter: Filter): Promise<Result<Auth[], Error>> {
    throw new Error();
  }

  public async findOne(filter: Filter): Promise<Result<Auth, Error>> {
    const userModel = await this.repository.findOne({});

    return Result.ok(new Auth());
  }

  save(entity: Auth): Promise<void> {
    return Promise.resolve(undefined);
  }

  update(entity: Auth): Promise<void> {
    return Promise.resolve(undefined);
  }

}