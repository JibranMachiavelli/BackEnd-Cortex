// src/features/healthCheck/healthCheck.repository.ts
import pool from '../../config/db';
import { IHealthCheckRepository } from './IHealthCheck.repository';

class HealthCheckRepository implements IHealthCheckRepository {
  async databaseHealth(): Promise<number | undefined> {
    try {
      const response = await pool.query('SELECT 1');
      console.log(response.rows[0]);
      return response.rows[0];
    } catch (error) {
      console.error('Erro ao fazer a consulta de health check:', error);
      return undefined;
    }
  }
}

const healthCheckRepository = new HealthCheckRepository();

export default healthCheckRepository;
