import { Request, Response, NextFunction } from "express";
import User from "../models/users.model";
import { userZodLoginSchema, userZodSchema } from "../../utils/zod.validator";
import bcrypt from "bcrypt";
import { comparePassword, getHashedPassword } from "../../utils/bcrypt.utils";
import { getAuthAccessToken } from "../../utils/jwt.utils";
import createHttpError from "http-errors";

///
const RegisterController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    let {
      name,
      email,
      password,
      avatar = "https://placeholder.com/150",
    } = req.body;

    const validator = userZodSchema.safeParse({
      name,
      email,
      password,
      avatar,
    });

    if (!validator.success) {
      return next(createHttpError(401, "Invalid username or password"));
    }

    if (await User.findOne({ email })) {
      return next(createHttpError(404, "Invalid username or password"));
    }
    const hashedPassword = getHashedPassword(password);
    password = hashedPassword;

    const user = new User({
      name,
      email,
      password,
      avatar,
    });
    const dbAction = await user.save();
    if (!dbAction) {
      return next(createHttpError(500, "Error in user creation"));
    }

    const accessToken = getAuthAccessToken({ userId: String(user._id) });

    if (!accessToken) {
      return next(createHttpError(403, "Access token not available"));
    }

    res.cookie("accessToken", accessToken);

    return res.json({
      message: "User registered successfully",
      success: true,

      data: dbAction,
    });
  } catch (error) {
    return next(createHttpError(500, "Error in user registration"));
  }
};

const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { email, password } = req.body;
    const validate = userZodLoginSchema.safeParse({
      email,
      password,
    });

    if (!validate.success) {
      return next(createHttpError(401, "Invalid username or password"));
    }

    const user = await User.findOne({ email });
    if (!user) {
      return next(createHttpError(404, "User not found please login"));
    }
    const isMatch = comparePassword(password, user.password);

    if (!isMatch) {
      return next(createHttpError(401, "Invalid password"));
    }

    const accessToken = getAuthAccessToken({ userId: String(user._id) });

    if (!accessToken) {
      return next(createHttpError(403, "Access token not available"));
    }

    res.cookie("accessToken", accessToken);

    return res.json({
      message: "User logged in successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    return next(createHttpError(500, "Internal Server Error"));
  }
};

export { RegisterController, loginUser };
