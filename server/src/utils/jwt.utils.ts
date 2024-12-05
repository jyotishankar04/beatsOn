import jwt from "jsonwebtoken";
import EnvConfig from "../config/EnvConfig";

const getAuthAccessToken = ({ userId }: { userId: string }) => {
  return jwt.sign({ userId }, String(EnvConfig.JWT_SECRET), {
    expiresIn: "365d",
  });
};
const validateAuthToken = (
  token: string
): {
  userId: string;
} => {
  const validate = jwt.verify(token, String(EnvConfig.JWT_SECRET)) as {
    userId: string;
  };
  return {
    userId: validate.userId,
  };
};

export { getAuthAccessToken, validateAuthToken };
