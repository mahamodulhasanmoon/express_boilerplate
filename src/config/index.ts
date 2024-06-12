import 'dotenv/config';

export const NODE_ENV = process.env.NODE_ENV;
export const baseUrl = process.env.BASE_URL;
export const port = process.env.PORT;
export const mongoUrl:string = process.env.mongoDB_URI || '';
export const corsOrigin = process.env.ORIGIN;
export const accessToken:string = process.env.ACCESS_TOKEN ||'';
export const refreshToken:string = process.env.REFRESH_TOKEN ||'';
export const redisUrl = process.env.ORIGIN;
export const defaultPass = process.env.DEFAULT_PASS;
export const saltRound = process.env.SALT_ROUND;

