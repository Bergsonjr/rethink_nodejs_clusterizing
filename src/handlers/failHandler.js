const { promisify } = require('util');
const fs = require('fs');

const readFileAsync = promisify(fs.readFile);

const failHandler = (request, reply) => {
	readFileAsync('arquivo_inexistente.txt');
};

module.exports = failHandler;
