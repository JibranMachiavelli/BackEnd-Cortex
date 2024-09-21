import loginRepository from './login.repository';

export class LoginService {
  async authenticate(name: string, password: string): Promise<boolean> {
    return await loginRepository.authenticate(name, password);
  }
}

const loginService = new LoginService();
export default loginService;
