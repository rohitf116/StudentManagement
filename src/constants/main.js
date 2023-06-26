import dotenv from "dotenv"
dotenv.config()

export const MONGO_URL = process.env.MONGO_URL
export const NODE_ENV = process.env.NODE_ENV
export const JWT_SECRET = process.env.JWT_SECRET
