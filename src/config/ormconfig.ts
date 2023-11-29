import { join } from "path";
import { DataSourceOptions } from "typeorm";

require("dotenv").config();

export const configMSSQL = {
  type: "mssql",
  host: process.env.SERVIDOR || "YURI",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 1433,
  username: "sa",
  password: process.env.PASSWORD || "XXXXXXXXXX",
  database: process.env.DATABASE || "MYDATABASE",        
  entities: [join(__dirname, '..', 'entities', '*.{ts,js}'),],
  migrations: [join(__dirname, "..", "..", "/database/migrations/*")],
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true,
    cryptoCredentialsDetails: {
      minVersion: "TLSv1",
    },
  },
  cli: {
    entitiesDir: "./src/entities/",
    migrationsDir: "./src/database/migrations",
  },
} as DataSourceOptions;