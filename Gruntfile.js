var appName = 'mr-header';
var libs = [
    'node_modules/angular/angular.min.js'
];

module.exports = function(grunt) {
    grunt.initConfig({        
        sass: {
            dev: {
                src: 'src/css/style.scss',
                dest: 'src/css/style.css'
            }
        },

        html2js: {
            options: {
                module: 'mrHeaderTemplates'	
            },
            dev: {
                src: ['src/templates/*.tpl.html'],
                dest: 'src/js/template.js'
            }
        },

        copy: {
            dist: { 
                files: [ {
                        src: 'src/css/style.css',
                        dest: 'rel/css/style.css'
                    }, {
                        cwd: 'src/img',
                        src: '**',
                        dest: 'rel/img/',
                        expand: true
                    }, {
                        cwd: 'src/fonts',
                        src: '**',
                        dest: 'rel/fonts/',
                        expand: true
                    }
                ]
            }
        },

        uglify: {
            options: {
                preserveComments: false
            },
            dist: {   
                src: 'src/js/app.concat.js',
                dest: 'rel/js/<%= appName %>.min.js'
            }
        },

        clean: {
            dev: {
                src: 'src/js/template.js'
            },
            dist: {
                src: 'src/js/app.concat.js'
            }
        },

        concat: {
            dev: {
                files: [{
                        src: ['src/js/template.js', 'src/js/mr-header.js'],
                        dest: 'src/js/app.js'
                    }, {
                        src: '<%= libSrc %>',
                        dest: 'src/js/libs.js'
                    }]
            },

            dist: {
                files: [{
                    src: ['src/js/libs.js', 'src/js/app.js'],
                    dest: 'src/js/app.concat.js'
                }]
            }
        },

        watch: {
            dev: {
                files: ['src/css/**', 'src/js/**', 'src/templates/*.tpl.html'],
                tasks: ['default']
            }
        },

        libSrc: libs,
        appName: appName
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html2js');

    grunt.registerTask('default', ['sass:dev', 'html2js:dev', 'concat:dev', 'clean:dev']);
    grunt.registerTask('listen', ['watch']);
    grunt.registerTask('dist', ['default', 'concat:dist', 'uglify:dist', 'copy:dist', 'clean:dist']);
}