/*
router.post('/login',
    validateSchema(loginSchema),
    async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const token = res.locals.token;
      try {
        const loginService.acessoLogin(body, token);
        
        return res.sendStatus(201);
              
        // Lógica de autenticação
        // Exemplo: verificar e-mail e senha com um banco de dados
  
        // Para fins de exemplo, retornamos uma resposta de sucesso
        res.status(200).json({ message: 'Login bem-sucedido!' });
      } catch (error) {
        next(error); // Passa o erro para o próximo middleware de tratamento de erros
      }
    }
  );
*/
