import { Request, Response, NextFunction } from 'express';
import loginService from './login.service';

class LoginController {
  async login(req: Request, res: Response, next: NextFunction) {
    const { name, password } = req.body;

    try {
      const isAuthenticated = await loginService.authenticate(name, password);
      if (isAuthenticated) {
        return res.status(200).json({ message: 'Login bem-sucedido!' });
      } else {
        return res.status(401).json({ message: 'Usuário ou senha incorretos.' });
      }
    } catch (error) {
      next(error);
    }
  }
}

const loginController = new LoginController();
export default loginController;
