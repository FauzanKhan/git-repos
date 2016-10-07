var config = {
	devBaseUrl: '0.0.0.0',
	port: '8080',
	basePath: './app',
	appName: 'gitRepos',
	paths: function(){
		var basePath = this.basePath;
		var destinationFolder = './dist';
		return {
			root: basePath,
			src: {
				html: basePath + '/views/**/*.html',
				scss: basePath + '/styles/**/*.scss',
				css: basePath + '/styles/app.scss',
				js: basePath + '/scripts/**/*.js',
				appJs: basePath + '/scripts/app.js',
				indexHtml: basePath + '/index.html'
			},
			dest: {
				html: destinationFolder + '/views/',
				css: destinationFolder + '/css',
				js: destinationFolder + '/js',
				indexHtml: destinationFolder + '/'
			}
		}
	}
}

module.exports = config;
