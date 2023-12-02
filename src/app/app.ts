import express, { Application } from 'express';
import middleware from './middleware';
import routes from './routes';
import { errorHandler, notFoundHandler } from './errors';
const app: Application = express();

app.use(express.json());
app.use(middleware);
app.use('/api', routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
