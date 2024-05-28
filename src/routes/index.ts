import { Router } from 'express';
import { demoRoutes } from '../modules/Demo/demo.routes';

type IModulerRoutes = [{ path: string; route: Router }];

export const modulerRoutes: IModulerRoutes = [
  {
    path: '/demo',
    route: demoRoutes,
  },
];
