import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors";

export interface FormattedError {
  message: string;
  field?: string;
}

export const errorHandler = (
  err: Error & { statusCode: number },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors(),
    });
  }

  console.error(err);
  res
    .status(400)
    .send({ errors: [{ message: err.message || "Something went wrong" }] });
};
