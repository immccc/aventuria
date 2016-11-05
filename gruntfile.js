module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        typescriptUsingTsConfig: {
            basic: {
                options: {
                    rootDir: './src',
                },
                filesGlob: [ 'src/**/*.ts']
            }
        },
        tslint: {
            options: {
                configuration: 'tslint.json'
            },
            files: {
                src: ['src/**/*.ts']
            }
        },
        stylus: {
          options: {
            paths: ['resources/styles'],
            relativeDest: 'out'
          },
          files: {
            src: ['resources/styles/*.styl'],
            ext: '.css'
          }
        },

        watch: {
            ts: {
                files: ['js/src/**/*.ts', 'src/**/*.ts'],
                tasks: ['typescriptUsingTsConfig', 'tslint', 'run']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-typescript-using-tsconfig');
    grunt.loadNpmTasks('grunt-tslint');

    grunt.registerTask('default', ['typescriptUsingTsConfig', 'tslint', 'stylus', 'watch']);
};
