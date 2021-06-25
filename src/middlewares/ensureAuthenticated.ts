import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  //Receber o token
  const authtoken = request.headers.authorization;

  //Validar se token está preenchido
  if (!authtoken) {
    return response.status(401).end();
  }

  const [, token] = authtoken.split(" ");
  //Validar se token é válido
  try {
    const { sub } = verify(token, "e729f0b13c3794a713ec2e330a17111b") as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end;
  }

  //Recuperar informações do usuário
}