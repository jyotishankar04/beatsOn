import mongoose, { model, Schema } from "mongoose";
import { IUserType } from "../../types/types";

const userSchema = new Schema<IUserType>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "https://placeholder.com/150" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const User = model<IUserType>("User", userSchema);

export default User;
