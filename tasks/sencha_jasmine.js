/*
 * grunt-sencha-jasmine
 * https://github.com/mattgoldspink/grunt-sencha-jasmine
 *
 * Copyright (c) 2013 Matt Goldspink
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    var task = grunt.renameTask('jasmine', 'sencha_jasmine_wrapper');



    grunt.registerMultiTask('sencha_jasmine', 'Your task description goes here.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            extFramework   : undefined,
            template       : __dirname + '/templates/_ExtJasmine.tmpl',
            templateOptions : {

            }
        });

        if (options.extFramework === undefined) {
            grunt.log.error("You must set the extFramework option to point to your Ext install directory or url");
        }

        var conf = {};
        conf[this.target] = {
            options: options
        };
        conf[this.target].options.templateOptions.extFramework = options.extFramework;

        grunt.config.set('sencha_jasmine_wrapper', conf);
        debugger
        grunt.task.run(['sencha_jasmine_wrapper']);
    });
    //grunt.registerTask('sencha_jasmine', ['sencha_jasmine_action', 'sencha_jasmine_wrapper']);
};