const healthHandler = require('../handlers/healthHandler');

const healthRoutes = (fastify, options, done) => {
	fastify.get('/health', healthHandler);

	done();
};

module.exports = healthRoutes;
