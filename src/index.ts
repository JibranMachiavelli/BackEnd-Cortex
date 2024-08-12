import express, { Request, Response } from 'express';
import pool from './config/db';

const port = 3000;
const app = express();

app.use(express.json());

app.get('/health', async (req: Request, res: Response) => {
  try {
    await pool.query('SELECT NOW()');
    res.status(200).send({ message: 'Service is up and running!' });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
