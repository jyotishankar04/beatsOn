import { Request, Response } from "express";
import { HttpError } from "http-errors";
import EnvConfig from "./config/EnvConfig";

const globalErrorHandler = (err: HttpError, req: Request, res: Response) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    message: err.message,
    success: false,
    errorStact: EnvConfig.env === "development" ? err.stack : "",
  });
};

export default globalErrorHandler;
