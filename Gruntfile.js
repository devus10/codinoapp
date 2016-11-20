module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-include-source");

    grunt.initConfig({

        clean: {
            build: {
                src: ["build"]
            }
        },

        copy: {
            html: {
                files: [
                    {expand: true, src: ["app/**/*.html", "!app/**/index.tpl.html"], dest: "build"}
                ]
            },
            vendor: {
                files: [
                    {expand: true, src: "vendor/**/*", dest: "build"}
                ]
            },

            js: {
                files: [
                    {expand: true, src: "app/**/*.js", dest: "build"}
                ]
            },

            css: {
                files: [
                    {expand: true, src: "app/**/*.css", dest: "build"}
                ]
            }
        },

        ts: {
            default: {
                tsconfig: true,
                src: ["app/**/*.ts"]
            }
        },

        watch: {
            ts: {
                files: ['app/**/*.ts'],
                tasks: ['ts', 'copy:js']
            },

            includeSource: {
                files: ['app/**/index.tpl.html'],
                tasks: ['includeSource']
            },

            html: {
                files: ['app/**/*.html', '!app/**/index.tpl.html'],
                tasks: ['copy:html']
            },

            css: {
                files: ['app/**/*.css'],
                tasks: ['copy:css']
            }
        },

        includeSource: {
            options: {
                basePath: 'build'
            },
            target: {
                files: {
                    'build/index.html': 'app/index.tpl.html'
                }   
            }
        }
    });

    grunt.registerTask("build", ['clean:build', 'copy:vendor', 'ts', 'copy:js', 'copy:css', 'copy:html', 'includeSource']);

};