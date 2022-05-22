import { Auth } from "Authorization/Domain/Entity/Auth";
import { IRepository } from "Shared/Domain/Repository/IRepository";

export interface IAuthRepository extends IRepository<Auth> {}