/**
 * Includes configuration for connecting to DynamoDB.
 */
const dynamoDb = {
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: 'password',
    port: 5432
};

/**
 * Includes configuration for the Koa HTTP server.
 */
const koa = {
    port: 3000
};

export { dynamoDb, koa };
