import dotenv from "dotenv";

dotenv.config();

const requiredEnvVariables = ["PORT"];

const envVars = () => {
  requiredEnvVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable ${envVar}`);
    }
  });
  return {
    PORT: process.env.PORT as string,
    // DB_URL: process.env.DB_URL as string,
    // NODE_ENV: process.env.NODE_ENV as string,
    // SALT: process.env.SALT as string,
    // JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
    // JWT_ACCESS_EXPIRE: process.env.JWT_ACCESS_EXPIRE as string,
    // JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
    // JWT_REFRESH_EXPIRE: process.env.JWT_REFRESH_EXPIRE as string,
    // SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL as string,
    // SUPER_ADMIN_PASS: process.env.SUPER_ADMIN_PASS as string,
    // FRONTEND_URL_LOCAL: process.env.FRONTEND_URL_LOCAL as string,
    // FRONTEND_URL_SERVER: process.env.FRONTEND_URL_SERVER as string,
    // ACCESS_TOKEN_COOKIE_MAX_AGE: process.env
    //   .ACCESS_TOKEN_COOKIE_MAX_AGE as string,
    // REFRESH_TOKEN_COOKIE_MAX_AGE: process.env
    //   .REFRESH_TOKEN_COOKIE_MAX_AGE as string,
  };
};

export const envVariable = envVars();
