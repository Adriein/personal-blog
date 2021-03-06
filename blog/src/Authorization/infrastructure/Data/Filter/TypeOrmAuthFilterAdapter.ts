import { AuthFilter } from "Authorization/Domain/Filter/AuthFilter";
import { Email } from "Shared/Domain/Vo/Email.vo";
import { TypeOrmFilterAdapter } from "Shared/Infrastructure/Data/Filter/TypeOrmFilterAdapter";
import { UserModel } from "Shared/Infrastructure/Data/Model/UserModel";
import { FindOneOptions } from "typeorm";

export class TypeOrmAuthFilterAdapter extends TypeOrmFilterAdapter<AuthFilter, FindOneOptions<UserModel>> {
  public apply(domainFilter: AuthFilter): FindOneOptions<UserModel> {
    const filter = domainFilter.build();

    if(filter.has(AuthFilter.EMAIL_FILTER)) {
      const email = filter.get(AuthFilter.EMAIL_FILTER) as Email
      this.add({where: {email: email.value}})
    }

    return this.typeormFilter;
  }
}