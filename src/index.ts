import express from 'express';
import healthCheckRouter from './features/healthCheck/healthCheck.router';
import loginRouter from './features/login/login.router';
import testRouter from './features/test/teste.router';

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use('/api', healthCheckRouter);
app.use('/api', loginRouter);
app.use('/api', testRouter);

app.get('/', (req, res) => res.send('Server is running!'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});