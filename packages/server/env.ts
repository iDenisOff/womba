import dotenv from "dotenv";
dotenv.config({ path: __dirname + `./../../.env` });

export const isDev = () => process.env.NODE_ENV === "development";
export const isProduction = () => process.env.NODE_ENV === "production";

export const dbUser = process.env.POSTGRES_USER;
export const dbPassword = process.env.POSTGRES_PASSWORD;
export const dbName = process.env.POSTGRES_DB ?? "womba";

export const API_URL = "https://ya-praktikum.tech/api/v2";
