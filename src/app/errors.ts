/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import httstatus from 'http-status';
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

export const notFoundHandler = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error: Error = new CustomError('Resource not found', 404);

  next(error);
};

export const errorHandler = (
  error: NotFoundError,
  _req: Request,
  res: Response,
  next:NextFunction
) => {
  if ('status' in error) {
   return res.status(error.status).json({
      message: error?.message || 'something went wrong',
      status:error.status,
      error: error

    });
  }  

 return res
    .status(500)
    .json({ status: (error as any).status, message: (error as any).message, error: error });
};
