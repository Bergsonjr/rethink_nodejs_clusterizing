const failHandler = require('../handlers/failHandler');

const factorialRoutes = (fastify, options, done) => {
	// Rota para "quebrar" o processo
	fastify.get('/fail', failHandler);

	done();
};

module.exports = factorialRoutes;
