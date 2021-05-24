import { CustomError } from "./custom-error";

export class DataBaseConnectionError extends CustomError {
  statusCode = 500;
  reason = this.message || "Error connecting to database";

  constructor() {
    super("Error with DB");
    Object.setPrototypeOf(this, DataBaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
