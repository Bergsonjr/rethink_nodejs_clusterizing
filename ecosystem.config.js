module.exports = {
    apps: [
        {
            name: 'rethink_pm2_cluster',
            script: './app.js',
            exec_mode: 'cluster',
            instances: 'max',
            watch: true,
            env: {
                NODE_ENV: 'development',
                PORT: 3002,
            },
        },
    ],
};
