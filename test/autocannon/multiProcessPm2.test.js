const autocannon = require('autocannon');

function testWithClusterAndPm2() {
    const instance = autocannon({
        title: 'Test for Node.js multi process - cluster mode and PM2',
        url: 'https://nodejs-pm2.herokuapp.com/fatorial?n=10',
        method: 'GET',
        connections: 1000, // número de conexões concorrentes
        pipelining: 100, // número de solicitações HTTP simultâneas por conexão TCP
        duration: 120, // tempo de execução do teste
    });

    autocannon.track(instance, { renderProgressBar: true, renderResultsTable: true, renderLatencyTable: true });
}

testWithClusterAndPm2();
