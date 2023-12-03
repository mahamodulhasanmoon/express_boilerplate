import { connect } from 'mongoose';

export async function connectMongoDB(uri: string) {
  try {
    await connect(uri as string);
  } catch (error) {
    throw new Error((error as any).message);
  }
}
