// import { NextFunction, Request, Response } from 'express';
// import httpStatus from 'http-status';
// import jwt, { JwtPayload } from 'jsonwebtoken';
// import { CustomError } from '../errors/CustomError';
// import { catchAsync } from '../utils/catchAsync';
// import { accessToken } from '../config';
// import { User } from '../modules/user/user.model';
// import { IUserRole } from '../modules/user/user.interface';




// const auth = (...requiredRoles: IUserRole[]) => {
//   return catchAsync(async (req: Request, _res: Response, next: NextFunction) => {
//     const token = req.headers.authorization;

//     // checking if the token is missing
//     if (!token) {
//       throw new CustomError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
//     }

//     // checking if the given token is valid
//     const decoded = jwt.verify(
//       token,
//       accessToken as string,
//     ) as JwtPayload;

//     const { role, userId } = decoded;

//     // checking if the user is exist
//     const user = await User.isUserExists(userId);

//     if (!user) {
//       throw new CustomError(httpStatus.NOT_FOUND, 'This user is not found !');
//     }
//     // checking if the user is already deleted

//     const isDeleted = user?.isDeleted;

//     if (isDeleted) {
//       throw new CustomError(httpStatus.FORBIDDEN, 'This user is deleted !');
//     }

//     // checking if the user is blocked
//     const userStatus = user?.status;

//     if (userStatus === 'blocked') {
//       throw new CustomError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
//     }

//     // if (
//     //   user.passwordChangedAt &&
//     //   User.isJWTIssuedBeforePasswordChanged(
//     //     user.passwordChangedAt,
//     //     iat as number,
//     //   )
//     // ) {
//     //   throw new CustomError(httpStatus.UNAUTHORIZED, 'You are not authorized !');
//     // }

//     if (requiredRoles && !requiredRoles.includes(role)) {
//       throw new CustomError(
//         httpStatus.UNAUTHORIZED,
//         'You are not authorized users!',
//       );
//     }

//     req.user = decoded as JwtPayload;
//     next();
//   });
// };

// export default auth;