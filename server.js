const express = require('express');
const pool = require('./db');
const port = 3000;

const app = express();
app.use(express.json());

//routes
app.get('/', async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM login');
    res.status(200).send(data.rows)
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post('/', async (req, res) => {
  const { name, location } = req.body;
  try {
    await pool.query('INSERT INTO login (role, name, password) VALUES ($1, $2, $3)', [name, location]);
    res.status(200).send({message: "Sucessfully added values"})
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get('./setup', async (req, res) => {
  try {
    await pool.query(
      'CREATE TABLE login( id serial4, role VARCHAR(50), name VARCHAR(100), password VARCHAR(255))'
    );
    res.status(200).send({message: "Sucessfully created table"})
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(port, console.log(`Server has started on port: ${port}`));
