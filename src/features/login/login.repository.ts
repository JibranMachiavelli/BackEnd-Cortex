import pool from '../../config/db';
import { ILoginRepository } from './iHealthCheck Repository/ILoginRepository';
class LoginRepository implements ILoginRepository {
  async authenticate(name: string, password: string): Promise<boolean> {
    try {
      const query = `
        SELECT * FROM public.login
        WHERE "name" = $1 AND "password" = $2
      `;
      const values = [name, password];
      const response = await pool.query(query, values);

      return typeof response.rowCount === 'number' && response.rowCount > 0;
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);

      return false;
    }
  }
}

const loginRepository = new LoginRepository();
export default loginRepository;
