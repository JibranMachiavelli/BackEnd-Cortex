import { Pool } from 'pg';
import { envConfig } from './config';

const pool = new Pool({
    connectionString: envConfig.databaseUrl,
});

export default pool;
