const autocannon = require('autocannon');

function testWithClusterAndPm2() {
    const instance = autocannon({
        title: 'Test for Node.js multi process - cluster mode and PM2',
        url: 'http://localhost:3002/fatorial?n=10',
        method: 'GET',
        connections: 100, // número de conexões concorrentes
        pipelining: 10, // número de solicitações HTTP simultâneas por conexão TCP
        duration: 60, // tempo de execução do teste
    });

    autocannon.track(instance, { renderProgressBar: true, renderResultsTable: true, renderLatencyTable: true });
}

testWithClusterAndPm2();
