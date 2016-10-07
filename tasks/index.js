var tasks = {
	'bower' : {
		fn: require('./bower')
	},
	'html' : {
		fn: require('./html'),
	},
	'css' : {
		fn: require('./css'),
	},
	'js' : {
		fn: require('./js'),
	},
	'connect' : {
		fn: require('./connect'),
	},
	'serve' : {
		fn: require('./serve'),
	},
	'open' : {
		fn: require('./open'),
		beforeRun: ['connect']
	},
	'watch' : {
		fn: require('./watch')
	},
}

module.exports = tasks;
