import { Router } from 'express';

import employeesRouter from './employees.routes';
import dependentsRouter from './dependents.routes';

const routes = Router();

routes.use('/employees', employeesRouter);
routes.use('/dependents', dependentsRouter);

export default routes;
