module.exports = {
	apps: [
		{
			name: 'rethink_pm2_cluster',
			script: './app.js',
			exec_mode: 'cluster',
			instances: '4',
			watch: true,
		},
	],
};
