import { sign, verify } from "jsonwebtoken";

const secret = process.env.JWT_KEY! || "asdadadasd";
export interface UserPayload {
  id: string;
  email: string;
}
export class Jwt {
  static sign(payload: object) {
    return sign(payload, secret);
  }

  static verify(token: string) {
    return verify(token, secret) as UserPayload;
  }
}
