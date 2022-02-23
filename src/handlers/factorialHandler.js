const getRandomInt = require('../utils/getRandomInt');
const factorial = require('../utils/factorial');
const sleep = require('../utils/sleep');

const factorialHandler = (request, reply) => {
	const { n } = request.query;

	sleep(500); // Operação bloqueante

	const data = factorial(getRandomInt(n, n));

	reply.send({ data });
};

module.exports = factorialHandler;
