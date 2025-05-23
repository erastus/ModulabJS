module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),

   // Define reusable paths.
   paths: {
     dist: 'dist',
     build: 'release',
     out: 'out' 
   },

   // Compile
   template: {
      compile: {
        options: {
          data: {
            package: '<%= pkg.description %>',
            author: '<%= pkg.author %>',
            version: '<%= pkg.version %>',
            homepage: '<%= pkg.homepage %>',
            compilation_year: '<%= grunt.template.today("yyyy") %>',
            compilation_date: '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>'
          }
        },
        'files': {
          '<%= paths.dist %>/<%= file %>.js': ['<%= paths.out %>/javascripts/<%= file %>.js']
        }
      }
    },
    replace: {
      clean_out: {
        src: ['out/javascripts/*.js'],             // source files array (supports minimatch)
        dest: 'out/javascripts/',             // destination directory or file
        replacements: [{
          from: /import\s*\{\s*(\w+)\s*\}\s*from\s*['"]@util\/\1['"]\s*;/g,
          to: `<//--%= render('/out/common/util/$1.js') %>`
        },{
          from: '//--',                   // string replacement
          to: ''
        }, {
          from: 'export ',                   // string replacement
          to: ''
        }]
      },
      clean_dist: {
        src: ['dist/*.js'],             // source files array (supports minimatch)
        dest: 'dist/',             // destination directory or file
        replacements: [{
          from: '//--',                   // string replacement
          to: ''
        }, {
          from: 'export ',                   // string replacement
          to: ''
        }]
      }
    }
 });

  // These plugins provide necessary tasks.
  grunt.config.set('file', 'Base');

  // Compile
  grunt.loadNpmTasks('grunt-template-render');
  grunt.loadNpmTasks('grunt-text-replace');

  // Run tasks.

  // Default task.
  grunt.registerTask('default', ['template:compile']);
  grunt.registerTask('clean', ['replace']);

  grunt.registerTask('compile_file', function(fileName) {
    grunt.config.set('file', fileName);
    grunt.task.run('template:compile');
  });

  grunt.registerTask('compile', function(arg1) {
    if (arguments.length === 0) {
      var glob = 'out/javascripts/*.js';

      grunt.file.expand({ filter: 'isFile' }, glob).forEach(async function  (filePath) {
        var fileName = filePath.split('/').pop().split('.')[0];
        grunt.task.run('compile_file:' + fileName);
      });
    } else {
      grunt.task.run('compile_file:' + arg1);
    }

  });

};