const autocannon = require('autocannon');

function testWithCluster() {
	const instance = autocannon({
		title: 'Test for Node.js multi process - cluster mode',
		url: 'http://50.17.104.25:3001/factorial?n=10',
		method: 'GET',
		connections: 30, // número de conexões concorrentes
		pipelining: 1, // número de solicitações HTTP simultâneas por conexão TCP
		duration: 30, // tempo de execução do teste
	});

	autocannon.track(instance, { renderProgressBar: true, renderResultsTable: true, renderLatencyTable: true });
}

testWithCluster();
