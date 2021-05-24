import { FormattedError } from "../middlewares/error-handler";

export abstract class CustomError extends Error {
  abstract statusCode: number = 500;

  constructor(message: string) {
    super(message);

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): FormattedError[];
}
