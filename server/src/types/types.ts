import { Request } from "express";

// CustomRequest
interface CustomRequest extends Request {
  userId: string;
}

interface IUserType {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  created_at?: Date;
  updated_at?: Date;
}

export { IUserType, CustomRequest };
