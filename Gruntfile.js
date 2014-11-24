module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			production: {
				options: {
					paths: ['www/css'],
					cleancss: false,
					compress: true,
					sourceMap: true,
					sourceMapFilename: 'www/css/styles.min.css.map',
					sourceMapBasepath: 'www/css/'
				},
				files: {
					'www/css/styles.min.css': 'www/css/styles.less'
				}
			},
		},
		concat: {
			development: {
				options: {
					separator: "\n\n"
				},
				src: [
					"www/js/lib/jquery-2.1.0.min.js",
				],
				dest: "www/js/custom.js"
			}
		},
		watch: {
			css: {
				files: ['www/css/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['www/*.html','www/views/*.html','www/views/**/*.html'],
				options: {
					livereload: true
				}
			},
			js: {
				files: ['www/js/*.js','www/js/models/*.js','www/js/util/*.js','!www/js/custom.js'],
				tasks: ['concat'],
				options: {
					livereload: true   
				}
			}
		},
		"imagemagick-convert": {
			icon:{
				args:['www/icon_src.png','-resize', '1024x1024', 'www/icon.png']
			},
			icon29:{
				args:['www/icon_src.png','-resize', '29x29', 'www/res/icon/icon_29.png']
			},
			icon36:{
				args:['www/icon_src.png','-resize', '36x36', 'www/res/icon/icon_36.png']
			},
			icon40:{
				args:['www/icon_src.png','-resize', '40x40', 'www/res/icon/icon_40.png']
			},
			icon48:{
				args:['www/icon_src.png','-resize', '48x48', 'www/res/icon/icon_48.png']
			},
			icon50:{
				args:['www/icon_src.png','-resize', '50x50', 'www/res/icon/icon_50.png']
			},
			icon57:{
				args:['www/icon_src.png','-resize', '57x57', 'www/res/icon/icon_57.png']
			},
			icon58:{
				args:['www/icon_src.png','-resize', '58x58', 'www/res/icon/icon_58.png']
			},
			icon60:{
				args:['www/icon_src.png','-resize', '60x60', 'www/res/icon/icon_60.png']
			},
			icon72:{
				args:['www/icon_src.png','-resize', '72x72', 'www/res/icon/icon_72.png']
			},
			icon76:{
				args:['www/icon_src.png','-resize', '76x76', 'www/res/icon/icon_76.png']
			},
			icon80:{
				args:['www/icon_src.png','-resize', '80x80', 'www/res/icon/icon_80.png']
			},
			icon96:{
				args:['www/icon_src.png','-resize', '96x96', 'www/res/icon/icon_96.png']
			},
			icon100:{
				args:['www/icon_src.png','-resize', '100x100', 'www/res/icon/icon_100.png']
			},
			icon114:{
				args:['www/icon_src.png','-resize', '114x114', 'www/res/icon/icon_114.png']
			},
			icon120:{
				args:['www/icon_src.png','-resize', '120x120', 'www/res/icon/icon_120.png']
			},
			icon144:{
				args:['www/icon_src.png','-resize', '144x144', 'www/res/icon/icon_144.png']
			},
			icon152:{
				args:['www/icon_src.png','-resize', '152x152', 'www/res/icon/icon_152.png']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-imagemagick');
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('icons',['imagemagick-convert']);
	grunt.registerTask('build', ['less:production']); //, 'uglify:production', 'replace'
};
