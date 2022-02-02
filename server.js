const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true,
    disableRequestLogging: true,
});

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

// Declare a failed route
fastify.get('/fail', async (request, reply) => {
    readFileAsync('arquivo_inexistente.txt');
});

const start = async () => {
    try {
        await fastify.listen(3000);
        console.info(`server listening on ${fastify.server.address().port} in process ${process.pid}`);
    } catch (err) {
        process.exit(1);
    }
};

module.exports = { start };
