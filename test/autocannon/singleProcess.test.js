const autocannon = require('autocannon');

function testSingleProcess() {
    const instance = autocannon({
        title: 'Test for Node.js single process',
        url: 'http://localhost:3000/fatorial?n=10',
        method: 'GET',
        connections: 100,
        pipelining: 10,
        duration: 60,
    });

    autocannon.track(instance, { renderProgressBar: true, renderResultsTable: true, renderLatencyTable: true });
}

testSingleProcess();

