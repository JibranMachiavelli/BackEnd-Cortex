import { IHealthCheckRepository } from './IHealthCheck.repository';

export class HealthCheckService {
  constructor(private repository: IHealthCheckRepository) {}

  private formatUpTime(seconds: number) {
    function pad(s: number) {
      return (s < 10 ? '0' : '') + s;
    }
    const hours = Math.floor(seconds / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secondsRemaining = Math.floor(seconds % 60);

    return `${pad(hours)}:${pad(minutes)}:${pad(secondsRemaining)}`;
  }

  async checkHealth() {
    const uptime = this.formatUpTime(process.uptime());

    const startTimeDatabase = new Date().getTime();
    const databaseHealth = await this.repository.databaseHealth();
    const endTimeDatabase = new Date().getTime();

    const databaseDbStatus = !databaseHealth
      ? 'Erro na conexão com base de dados.'
      : `Success. Tempo de do response em ${endTimeDatabase - startTimeDatabase}ms`;

    return {
      apiName: `Cortex ERP - ${process.env.NODE_ENV} mode`,
      uptime,
      database: databaseDbStatus,
    };
  }
}
