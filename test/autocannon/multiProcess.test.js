const autocannon = require('autocannon');

function testWithCluster() {
    const instance = autocannon({
        title: 'Test for Node.js multi process - cluster mode',
        url: 'http://localhost:3001/fatorial?n=10',
        method: 'GET',
        connections: 100,
        pipelining: 10,
        duration: 60,
    });

    autocannon.track(instance, { renderProgressBar: true, renderResultsTable: true, renderLatencyTable: true });
}

testWithCluster();
