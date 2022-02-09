const sleep = (ms) => {
	const start = new Date().getTime();
	const expire = start + ms;

	while (new Date().getTime() < expire) {} // Operação bloqueante

	return;
};

module.exports = sleep;
