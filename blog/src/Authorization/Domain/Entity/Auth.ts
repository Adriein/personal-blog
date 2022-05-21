import { AggregateRoot } from "@nestjs/cqrs";
import { ID } from "Shared/Domain/Vo/Id.vo";

export class Auth extends AggregateRoot {
  constructor(private _id: ID, private _name: string) {
    super();
  }
}