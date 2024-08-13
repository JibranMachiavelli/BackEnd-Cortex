import dotenv from 'dotenv';
import * as Joi from 'joi';

let path = '.env.dev';
if (process.env.NODE_ENV === 'production') {
    path = '.env';
}
dotenv.config({ path });

const envSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production').required(),
    PORT: Joi.number().default(3001),
    DATABASE_URL: Joi.string().uri().required(),
}).unknown(true);

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
    throw new Error(`Error: ${error.message}`);
}

export const envConfig = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    databaseUrl: envVars.DATABASE_URL,
};
