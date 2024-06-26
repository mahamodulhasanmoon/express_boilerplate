import { Router } from 'express';
import { requestValidator } from '../../middlewares/requestValidator';
import { activateUserValidation, createUserValidation, loginValidation } from './auth.validaton';
import {
  activateAccountController,
  createUserController,
  loginController,
  refreshController,
} from './auth.controller';

export const authRoutes: Router = Router();

authRoutes.post(
  '/signup',
  requestValidator(createUserValidation),
  createUserController,
);
authRoutes.post(
  '/activate',
  requestValidator(activateUserValidation),
  activateAccountController,
);
authRoutes.post(
  '/login',
  requestValidator(loginValidation),
  loginController,
);
// authRoutes.get(
//   '/me',
//   auth('admin','subadmin','user'),
//   getMe,
// );
authRoutes.get(
  '/refresh',
  refreshController,
);
