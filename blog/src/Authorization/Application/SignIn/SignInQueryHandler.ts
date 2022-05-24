import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { SignInQuery } from "Authorization/Application/SignIn/SignInQuery";
import { SignInResponse } from "Authorization/Application/SignIn/SignInResponse";
import { AuthFilter } from "Authorization/Domain/Filter/AuthFilter";
import { IAuthRepository } from "Authorization/Domain/Repository/IAuthRepository";
import { NotAuthorizedError } from "Shared/Domain/Error/NotAuthorizedError";
import { Email } from "Shared/Domain/Vo/Email.vo";
import { Password } from "Shared/Domain/Vo/Password.vo";

@QueryHandler(SignInQuery)
export class SignInQueryHandler implements IQueryHandler {
  constructor(@Inject('IAuthRepository') private readonly repository: IAuthRepository) {}

  public async execute(query: SignInQuery): Promise<SignInResponse> {
    const email = new Email(query.email);
    const password = new Password(query.password);

    const filter = AuthFilter.builder().withEmail(email);

    const result = await this.repository.findOne(filter);

    const auth = result.unwrap();

    const isAuthorized = await auth.comparePassword(password);

    if(!isAuthorized) {
      throw new NotAuthorizedError();
    }

    return SignInResponse.fromDomain(auth);
  }
}
