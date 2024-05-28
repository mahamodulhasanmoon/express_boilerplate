/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';

export class CustomError extends Error {
  constructor(
    public message: string,
    public status: number,
  ) {
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
  error: any,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if ('status' in error) {
    return res.status(error.status).json({
      message: error?.message || 'something went wrong',
      status: error.status,
      error: error,
    });
  }

  if (error.name === 'CastError') {
    return res.status(error.status).json({
      message: `resource not Found in ${error.path}`,
      status: error.status,
      error: error,
    });
  }
  if (error.code === 1100) {
    return res.status(error.status).json({
      message: `Duplicate ${Object.keys(error.keyValue)} Entered`,
      status: error.status,
      error: error,
    });
  }

  return res.status(500).json({
    status: (error as any).status,
    message: (error as any).message,
    error: error,
  });
};
