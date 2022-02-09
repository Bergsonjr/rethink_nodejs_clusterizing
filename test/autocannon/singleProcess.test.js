const autocannon = require('autocannon');

function testSingleProcess() {
    const instance = autocannon({
        title: 'Test for Node.js single process',
        url: 'http://localhost:3000/fatorial?n=10',
        method: 'GET',
        connections: 100, // número de conexões concorrentes
        pipelining: 10, // número de solicitações HTTP simultâneas por conexão TCP
        duration: 120, // tempo de execução do teste
    });

    autocannon.track(instance, { renderProgressBar: true, renderResultsTable: true, renderLatencyTable: true });
}

testSingleProcess();

