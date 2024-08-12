import { NextFunction, Request, Response } from 'express';
import { HealthCheckService } from './healthCheck.service';
import healthCheckRepository from './healthCheck.repository';

class HealthCheckController {
  async checkHealth(req: Request, res: Response, next: NextFunction) {
    try {
      const healthCheckService = new HealthCheckService(healthCheckRepository);
      const response = await healthCheckService.checkHealth();
      return res.status(200).send(response);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

const healthCheckController = new HealthCheckController();

export default healthCheckController;
