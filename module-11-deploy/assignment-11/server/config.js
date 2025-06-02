import dotenv from "dotenv";

dotenv.config();

export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const USER = process.env.USER;
export const JWT_SECRET = process.env.JWT_SECRET;
