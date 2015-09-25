module.exports = function (grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		watch: {
			client: {
				files: ['css/*','images/**/*','views/*.html','*.js','routes/*.js'],
				options: {
					livereload: true
				}
			}
		}
	});
    
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['watch']);
}; 