const server = require('./server');

process.on('unhandledRejection', function (err) {
    console.log(`unhandledRejection: killing process ${process.pid}`);
    process.exit(1);
});

server.start();
