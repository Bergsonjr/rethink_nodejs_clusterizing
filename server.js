const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const getRandomIntInclusive = require('./src/utils/getRandomIntInclusive');
const factorial = require('./src/utils/factorial');

const fastify = require('fastify')({
	logger: true,
	disableRequestLogging: true,
});

fastify.get('/', async (request, reply) => {
	return { hello: 'world' };
});

// Rota para gerar maior processamento/consumo CPU
fastify.get('/fatorial', async (request, reply) => {
	return factorial(getRandomIntInclusive(10, 25));
});

// Rota para "quebrar" o processo
fastify.get('/fail', async (request, reply) => {
	readFileAsync('arquivo_inexistente.txt');
});

const start = async () => {
	try {
		await fastify.listen(process.env.PORT);
		console.info(`server listening on ${fastify.server.address().port} in process ${process.pid}`);
	} catch (err) {
		console.error('error while trying to server up');
		process.exit(1);
	}
};

process.on('unhandledRejection', function (err) {
	console.log(`unhandledRejection: killing process ${process.pid}`);
	process.exit(1);
});

module.exports = { start };
