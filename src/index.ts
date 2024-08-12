import express from 'express';
import healthCheckRouter from './features/healthCheck/healthCheck.router';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api', healthCheckRouter);

app.get('/', (req, res) => res.send('Server is running!'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
