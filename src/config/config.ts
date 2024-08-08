import dotenv from 'dotenv';
import * as Joi from 'joi';

let path = '.env.dev';
if (process.env.NODE_ENV === 'production') {
  path = '.env';
}
dotenv.config({ path });

const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production').required(),
  PORT: Joi.number().default(13000),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
}).unknown(true);

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Environment Variable Validation Error: ${error.message}`);
}

export const envConfig = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  database: {
    host: envVars.DB_HOST,
    port: envVars.DB_PORT,
    user: envVars.DB_USER,
    password: envVars.DB_PASSWORD,
    name: envVars.DB_NAME,
  },
};
