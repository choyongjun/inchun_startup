module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		watch : {
			gruntfile : {
				files : 'Gruntfile.js',
				options : {
					reload : true
				}
			},
			livereload : {
				files : [ '../../www/resources-dev/front/jspack/**/**/*.js', '../../www/resources-dev/front/less/**/**/*.less', '../../www/resources-dev/front/images/**/**/*' ],
				options : {
					livereload : true,
				},
			}
		},
		concat : {
			build : {
				src : [ '../../www/resources-dev/front/jspack/**/**/*.js' ],
				dest : '../../www/resources-dev/front/temp/js/script.js'
			}
		},
		uglify : {
			options : {
				preserveComments : false,
			},
			build : {
				files : {
					'../../www/resources/front/js/script.min.js' : [ '../../www/resources-dev/front/temp/js/script.js' ]
				}
			}
		},
		lesslint : {
			options : {
				failOnWarning : false,
				csslintrc : '.csslintrc'
			},
			src : '../../www/resources-dev/front/less/*.less'
		},
		less : {
			build : {
				options : {
					compress : false,
					optimization : 2
				},
				expand : true,
				cwd : '../../www/resources-dev/front/less/',
				src : '*.less',
				dest : '../../www/resources-dev/front/temp/css/',
				ext : '.css',
				flatten : true
			}
		},
		csscomb : {
			build : {
				options : {
					config : '.csscomb.json'
				},
				expand : true,
				cwd : '../../www/resources-dev/front/temp/css/',
				src : '*.css',
				dest : '../../www/resources-dev/front/temp/css-csscomb/',
				ext : '.css'
			}
		},
		autoprefixer : {
			build : {
				options : {
					browsers : [ 'last 10 versions', 'ie >= 8' ]
				},
				expand : true,
				cwd : '../../www/resources-dev/front/temp/css-csscomb/',
				src : '*.css',
				dest : '../../www/resources-dev/front/temp/css-csscomb-autoprefixer/',
				ext : '.css'
			}
		},
		cssmin : {
			build : {
				options : {
					keepSpecialComments : 0
				},
				files : [ {
					expand : true,
					cwd : '../../www/resources-dev/front/temp/css-csscomb-autoprefixer/',
					src : [ '*.css' ],
					dest : '../../www/resources/front/css/',
					ext : '.min.css'
				} ]
			}
		},
		imagemin : {
			build : {
				options : {
					optimizationLevel : 3,
				},
				files : [ {
					expand : true,
					cwd : '../../www/resources-dev/front/images/',
					src : [ '**/*.{png,jpg,gif}' ],
					dest : '../../www/resources/front/images/'
				} ]
			}
		},
		clean : {
			primary : {
				options : {
					force : true
				},
				src : [ '../../www/resources/front/*' ]
			},
			beforeAndAfterBuild : {
				options : {
					force : true
				},
				src : [ '../../www/resources-dev/front/temp' ]
			}
		},
		copy : {
			jsvendor : {
				files : [ {
					expand : true,
					cwd : '../../www/resources-dev/front/jsvendor/',
					src : [ '**' ],
					dest : '../../www/resources/front/js/vendor/'
				} ],
			},
			fonts : {
				files : [ {
					expand : true,
					cwd : '../../www/resources-dev/front/fonts/',
					src : [ '**' ],
					dest : '../../www/resources/front/fonts/'
				} ],
			},
		},
	});

	grunt.registerTask('default', [ 'clean', 'watch' ]);
	grunt.registerTask('build', [ 'clean:primary', 'clean:beforeAndAfterBuild', 'copy', 'concat:build', 'uglify:build', 'lesslint', 'less:build', 'csscomb:build', 'autoprefixer:build',
			'cssmin:build', 'imagemin:build', 'clean:beforeAndAfterBuild' ]);

};