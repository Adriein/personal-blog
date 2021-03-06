import { DomainError } from "Shared/Domain/Error/DomainError";

export class RecordNotFoundError extends DomainError {
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, RecordNotFoundError.prototype);
  }
}