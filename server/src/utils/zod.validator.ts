import zod from "zod";

const userZodSchema = zod.object({
  name: zod.string().min(3),
  email: zod.string().email(),
  password: zod.string().min(6),
  avatar: zod.string().url().optional(),
});
const userZodLoginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

export { userZodSchema, userZodLoginSchema };
