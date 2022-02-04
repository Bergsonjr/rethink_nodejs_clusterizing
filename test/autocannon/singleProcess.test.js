const autocannon = require('autocannon');

function testSingleProcess() {
    const instance = autocannon({
        title: 'Test for Node.js single process',
        url: 'http://localhost:3000/fatorial',
        method: 'GET',
        connections: 100,
        pipelining: 5,
        duration: 30,
    });

    autocannon.track(instance, { renderProgressBar: true, renderResultsTable: true, renderLatencyTable: true });
}

testSingleProcess();

// 779k requests in 30.03s, 134 MB read
