module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.registerTask("default", ["connect", "watch", "typescript", "compass"]);
  grunt.initConfig({
    connect: {
      livereload: {
        options: {
          port: 10801
        }
      }
    },
    compass: {
      compile: {
        options: {
          config: 'config.rb'
        }
      }
    },
    typescript: {
      base: {
        src: ['src/typescript/script.ts'],
        dest: 'src/javascript/script.js'
      }
    },
    watch: {
      css: {
        files: ['src/stylesheets/style.css']
      },
      scss: {
        files: ['src/sass/style.scss'],
        tasks: ['compass']
      },
      ts: {
        files: ['src/typescript/*.ts'],
        tasks: ['typescript']
      }
    }
  });
};
