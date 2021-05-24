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
    return res.status(err.statusCode || 500).send({
      errors: err.serializeErrors() || [{ message: err.message }] || [
          { message: "something went wrong" },
        ],
    });
  }

  res.status(500).send({ errors: [{ message: "something went wrong" }] });
};
