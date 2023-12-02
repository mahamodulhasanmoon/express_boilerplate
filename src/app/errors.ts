import {Request, Response, NextFunction} from 'express'
interface NotFoundError extends Error {
	status: number;
  }
  
  export class CustomError extends Error {
	status: number;
  
	constructor(message: string, status: number) {
	  super(message);
	  this.status = status;
	}
  }

  
export const notFoundHandler = (_req:Request,_res:Response,next:NextFunction) =>{
    const error: Error = new CustomError('Resource not found',404);
	
	next(error);  
}

export const errorHandler = (error: NotFoundError, _req: Request, res: Response, _next: NextFunction) => {
	if (error.status) {
	  res.status(error.status).json({
		message: error ?.message,
	  });
	}
  
	res.status(500).json({ status:error.status, message: error.message ,error: error });
  };
  