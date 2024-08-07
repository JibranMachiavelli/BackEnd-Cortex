import express, { Request, Response } from 'express';
// eslint-disable-next-line import/no-unresolved
import pool from './db';
// eslint-disable-next-line import/no-unresolved
import setupSwagger from './swagger';

const port = 3000;
const app = express();
setupSwagger(app);

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

app.post('/login', async (req: Request, res: Response) => {
  const { role, name, password } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO login (role, name, password) VALUES ($1, $2, $3) RETURNING *',
      [role, name, password]
    );
    res.status(201).send(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.get('/login', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM login');
    res.status(200).send(result.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.put('/login/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { role, name, password } = req.body;
  try {
    const result = await pool.query(
      'UPDATE login SET role = $1, name = $2, password = $3 WHERE id = $4 RETURNING *',
      [role, name, password, id]
    );
    if (result.rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).send(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.delete('/login/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'DELETE FROM login WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).send({ message: 'Item deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.get('/setup', async (req: Request, res: Response) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS login (
        id SERIAL PRIMARY KEY,
        role VARCHAR(50) NOT NULL,
        name VARCHAR(100) NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `);
    res.status(200).send({ message: 'Table created successfully' });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
