import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const port = 8081;

export type User = {
    name: string;
    age: number;
}

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})