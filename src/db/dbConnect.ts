import  { connect } from "mongoose";
import { mongoUrl } from "../config";

export async function connectMongoDB(uri:String | undefined) {
    try {
       await connect(uri as string) 
    } catch (error) {
        throw new Error((error as any).message)
    }
}
connectMongoDB(mongoUrl)