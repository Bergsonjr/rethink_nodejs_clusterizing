const factorialHandler = require('../handlers/factorialHandler');

const factorialRoutes = (fastify, options, done) => {
	fastify.get('/factorial', factorialHandler);

	done();
};

module.exports = factorialRoutes;
