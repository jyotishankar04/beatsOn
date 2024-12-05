import { NextFunction, Request, Response } from "express";
import { validateAuthToken } from "../utils/jwt.utils";
import { CustomRequest } from "../types/types";
import User from "../app/models/users.model";
import createHttpError from "http-errors";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { accessToken } = req.cookies;
    const { userId } = validateAuthToken(accessToken);
    const user = await User.findById(userId);
    if (!user) {
      res.clearCookie("accessToken");

      return next(createHttpError(403, "Acuthentication failed, Please login"));
    }
    const _req = req as CustomRequest;
    _req.userId = userId;

    next();
  } catch (error) {
    res.clearCookie("accessToken");
    return next(createHttpError(403, "Acuthentication failed, Please login"));
  }
};

export { authMiddleware };
