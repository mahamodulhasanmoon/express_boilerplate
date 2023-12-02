import { Request, Response, Router } from 'express';
const routes = Router();

routes.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: 'success',
  });
});

// all Routes

export default routes;
