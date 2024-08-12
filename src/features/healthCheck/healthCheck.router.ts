import { Router } from 'express';
import healthCheckController from './healthCheck.controller';

const healthCheckRouter: Router = Router();

healthCheckRouter.get('/health', healthCheckController.checkHealth);

export default healthCheckRouter;
