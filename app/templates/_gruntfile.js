module.exports = function(grunt) {
  grunt.initConfig({


imagemin: {                         // Task 
    dynamic: {  
      options: {
        optimizationLevel: 5
      },                      // Another target 
      files: [{
        expand: true,                  // Enable dynamic expansion 
        cwd: 'images/',                   // Src matches are relative to this path 
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
        dest: 'images/'                  // Destination path prefix 
      }]
    }
  }
});

  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['imagemin']);
  //This lets you just run grunt by itself, it will assume you want to build.
  grunt.registerTask('default', ['build']);
};