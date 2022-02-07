const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const getRandomIntInclusive = require('./src/utils/getRandomIntInclusive');
const factorial = require('./src/utils/factorial');

const fastify = require('fastify')({
	logger: true,
	disableRequestLogging: false,
});

fastify.get('/', async (request, reply) => {
	return 'App is running';
});

// Rota para gerar maior processamento/consumo CPU
fastify.get('/fatorial', async (request, reply) => {
	const { n } = request.query;

	return factorial(getRandomIntInclusive(n, n));
});

// Rota para "quebrar" o processo
fastify.get('/fail', async (request, reply) => {
	readFileAsync('arquivo_inexistente.txt');
});

const start = async () => {
	try {
		await fastify.listen(process.env.PORT, '0.0.0.0');
	} catch (err) {
		console.log(err, 'err');
		console.error('error while trying to server up');
		process.exit(1);
	}
};

process.on('unhandledRejection', function (err) {
	console.log(`unhandledRejection:: ${process.pid}`);
	console.log('unhandledRejection Err::', err);
	console.log('unhandledRejection Stack::', JSON.stringify(err.stack));

	process.kill(process.pid, 'SIGHUP');
});

module.exports = { start };
