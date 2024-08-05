import "dotenv/config";
import { Config } from 'drizzle-kit';

const config: Config = {
    schema: "./src/db/schema.ts", // Adjust the path and extension of the files as needed
    out: "./drizzle", // Output directory for generated files
    dialect: "postgresql", // Specifies the database as PostgreSQL
    dbCredentials: {
        url: process.env.DATABASE_URL!, // Use the DATABASE_URL from your .env file
    },
    verbose: true, // Enable detailed logging
};

export default config;
