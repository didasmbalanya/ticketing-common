import { NextFunction, Response, Request } from "express";
import { Jwt, UserPayload } from "../services/jwt";

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const user = Jwt.verify(req.session.jwt);
    req.currentUser = user;
  } catch (error) {}
  next();
};
