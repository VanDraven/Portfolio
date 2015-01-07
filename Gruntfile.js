module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less : {
      dev : {
        files : {
          'app/styles/style.css' : 'app/styles/style.less'
        }
      }
    },
    autoprefixer : {
      dev : {
        files : {
            'app/styles/style.css' : 'app/styles/style.css'
        }
      }
    },
    watch : {
      less : {
        files : ['app/styles/*.less'],
        tasks : ['css']
      },
      livereload : {
        files : ['app/styles/*.css', 'app/*.html'],
        options : {
          livereload : true
        }
      }
    },
    connect : {
      server : {
        options : {
          base : ['app'],
          livereload : true,
          open : true
        }
      }
    },
    clean : {
      src : ['./tmp/*']
    }
  });

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('server', ['clean', 'css', 'connect', 'watch']);
  grunt.registerTask('css', ['less','autoprefixer']);

  // Default task(s).
  grunt.registerTask('default', []);

};