import { Request, Response } from "express";

export const createDemoController = async(req:Request,res:Response)=>{
try {
    const data = req.body

    res.status(200).json({
        status:200,
        success: true,
        message:'successfully created demo',
        data: data
    })
} catch (error: any) {
    res.status(error.status).json({
        status:error.status,
        success: false,
        message:error.message
    })
}
}