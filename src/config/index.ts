import 'dotenv/config';

export const mongoUrl = process.env.mongoDB_URI || '';
export const port = process.env.PORT;
export const corsOrigin = process.env.ORIGIN;
export const redisUrl = process.env.ORIGIN;
