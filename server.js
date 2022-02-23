const autoload = require('fastify-autoload');
const fastify = require('fastify')({
	logger: true,
	disableRequestLogging: false,
});

const path = require('path');

//auto-load, based on directory
fastify.register(autoload, {
	dir: path.join(__dirname, 'src/routes'),
});

const start = async () => {
	try {
		await fastify.listen(process.env.PORT);
	} catch (err) {
		console.error(err);
		console.error('error while trying to server up');
		process.exit(1);
	}
};

process.on('unhandledRejection', function (err) {
	console.log(`unhandledRejection:: ${process.pid}`);
	console.log('unhandledRejection Err::', err);
	console.log('unhandledRejection Stack::', JSON.stringify(err.stack));

	process.exit(1);
});

module.exports = { start };
