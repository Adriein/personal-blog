import { Result } from "@badrap/result";
import { Inject, Injectable } from "@nestjs/common";
import { Auth } from "Authorization/Domain/Entity/Auth";
import { IAuthRepository } from "Authorization/Domain/Repository/IAuthRepository";
import { AuthMapper } from "Authorization/infrastructure/Data/Mapper/AuthMapper";
import { Filter } from "Shared/Domain/Entity/Filter";
import { RecordNotFoundError } from "Shared/Domain/Error/RecordNotFoundError";
import { UserModel } from "Shared/Infrastructure/Data/Model/UserModel";
import { Repository } from "typeorm";

@Injectable()
export class TypeOrmPgAuthRepository implements IAuthRepository {
  constructor(@Inject('UserModelRepository') private readonly repository: Repository<UserModel>, private readonly mapper: AuthMapper) {}

  delete(entity: Auth): Promise<void> {
    return Promise.resolve(undefined);
  }

  public async find(filter: Filter): Promise<Result<Auth[], Error>> {
    throw new Error();
  }

  public async findOne(filter: Filter): Promise<Result<Auth, Error | RecordNotFoundError>> {
    try {
      const userModel = await this.repository.findOne({});

      if(!userModel) {
        return Result.err(new RecordNotFoundError('No user model found'))
      }

      return Result.ok(this.mapper.toDomain(userModel));
    }catch(error) {
      return Result.err(error as Error);
    }
  }

  save(entity: Auth): Promise<void> {
    return Promise.resolve(undefined);
  }

  update(entity: Auth): Promise<void> {
    return Promise.resolve(undefined);
  }

}