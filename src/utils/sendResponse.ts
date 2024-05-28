import { Response } from 'express';

interface IResponse<T> {
  status: number;
  success: boolean;
  message?: string;
  data?: T;
}

export const sendResponse = <T>(
  res: Response,
  { data, message, status, success }: IResponse<T>,
) => {
  return res.status(status).json({
    status: status,
    success: success,
    message: message,
    data: data,
  });
};
