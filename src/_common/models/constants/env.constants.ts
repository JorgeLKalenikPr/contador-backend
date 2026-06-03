/* eslint-disable prettier/prettier */

export const SERVER_PORT: number | undefined = Number(process.env.SERVER_PORT);
export const SERVER_ADDRESS: string | undefined = process.env.SERVER_ADDRESS;
// DB Settings //
/* Common settings */
export const DB_ENABLE_LOGGING: boolean | undefined = process.env.DB_ENABLE_LOGGING === "true";

/* Database credentials */
export const DB_PG_HOST: string | undefined = process.env.DB_PG_HOST;
export const DB_PG_PORT: number | undefined = Number(process.env.DB_PG_PORT);
export const DB_PG_USERNAME: string | undefined = process.env.DB_PG_USERNAME;
export const DB_PG_PASSWORD: string | undefined = process.env.DB_PG_PASSWORD;
export const DB_PG_DATABASE: string | undefined = process.env.DB_PG_DATABASE;
export const DB_PG_SCHEMA: string | undefined = process.env.DB_PG_SCHEMA;
