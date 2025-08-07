import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export function authenticateToken(req: any, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET!, (err: Error | null, decoded: JwtPayload | string | undefined) => {
    if (err) return res.sendStatus(403);
    (req as any).user = decoded;
    next();
  });
}

export function isInstructor(req: any, res: Response, next: NextFunction) {
  if ((req as any).user?.role !== "instructor") return res.sendStatus(403);
  next();
}

export function isAdmin(req: any, res: Response, next: NextFunction) {
  if ((req as any).user?.role !== "admin") return res.sendStatus(403);
  next();
}
