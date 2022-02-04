const autocannon = require('autocannon');

function testWithCluster() {
    const instance = autocannon({
        title: 'Test for Node.js multi process - cluster mode',
        url: 'http://localhost:3001/fatorial',
        method: 'GET',
        connections: 100,
        pipelining: 5,
        duration: 30,
    });

    autocannon.track(instance, { renderProgressBar: true, renderResultsTable: true, renderLatencyTable: true });
}

testWithCluster();
