import { CanActivate, ExecutionContext } from "@nestjs/common";
import { NotAuthorizedError } from "Shared/Domain/Error/NotAuthorizedError";

export class AuthGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    if (!request.session || !request.session.user) {
      throw new NotAuthorizedError();
    }

    return true;
  }

}