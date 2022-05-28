import { Injectable } from "@nestjs/common";
import { Auth } from "Authorization/Domain/Entity/Auth";
import { IMapper } from "Shared/Domain/Entity/IMapper";
import { Email } from "Shared/Domain/Vo/Email.vo";
import { ID } from "Shared/Domain/Vo/Id.vo";
import { Password } from "Shared/Domain/Vo/Password.vo";
import { UserModel } from "Shared/Infrastructure/Data/Model/UserModel";

@Injectable()
export class AuthMapper implements IMapper<UserModel, Auth> {
  public toDomain(model: UserModel): Auth {
    return new Auth(
      new ID(model.id),
      model.name,
      new Email(model.email),
      new Password(model.password)
    );
  }

  public toModel(domain: Auth): UserModel {
    const user = new UserModel()
    user.id = ''

    return user;
  }
}