import { Router, Request, Response } from 'express';

const testRouter: Router = Router();

testRouter.post('/test', (req: Request, res: Response) => {

  return res.status(200).json({ message: 'OK' });
});

export default testRouter;
