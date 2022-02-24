require('dotenv').config();
const autocannon = require('autocannon');

function testSingleProcess() {
	const { EC2_INSTANCE_SINGLE_PROCESS, EC2_INSTANCE_SINGLE_PROCESS_PORT } = process.env;
	const instance = autocannon({
		title: 'Test for Node.js single process',
		url: `http://${EC2_INSTANCE_SINGLE_PROCESS}:${EC2_INSTANCE_SINGLE_PROCESS_PORT}/factorial?n=10`,
		method: 'GET',
		connections: 30, // número de conexões concorrentes
		pipelining: 1, // número de solicitações HTTP simultâneas por conexão TCP
		duration: 30, // tempo de execução do teste
	});

	autocannon.track(instance, { renderProgressBar: true, renderResultsTable: true, renderLatencyTable: true });
}

testSingleProcess();
