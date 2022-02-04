const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const server = require('./server');

(async () => {
	if (cluster.isMaster) {
		for (let i = 0; i < numCPUs; i++) {
			cluster.fork();
		}

		cluster.on('exit', (worker, code, signal) => {
			console.info(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);

			cluster.fork();
			console.info('Starting a new worker');
		});
	} else {
		await server.start();

		console.info('Master process is running');
	}
})();

//252793
