const cluster = require('cluster');
const server = require('./server');

(async () => {
	if (cluster.isMaster) {
		for (let i = 0; i < 4; i++) {
			cluster.fork();
		}

		// process is clustered on a core and process id is assigned
		cluster.on('online', function (worker) {
			console.log(`Worker ${worker.process.pid} is listening`);
		});

		// if any of the worker process dies then start a new one by simply forking another one
		cluster.on('exit', (worker, code, signal) => {
			console.info(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
			console.info('Starting a new worker');

			cluster.fork();
		});
	} else {
		await server.start();
	}
})();
