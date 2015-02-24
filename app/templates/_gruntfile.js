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
  },
 // make a zipfile 
compress: {
  main: {
    options: {
      archive: '<%= banner_title %>.zip'
    },
    files: [
    	{expand: true, src: ['*.html', '*.js', '!Gruntfile.js', 'images', 'images/*', 'manifest.json'], dest: '/'} 
      //{src: ['/*.html', 'images', 'manifest.json'], dest: '/'} // includes files in path 
      //{src: ['/**'], dest: 'Leveret/'}, // includes files in path and its subdirs 
      //{expand: true, cwd: 'path/', src: ['**'], dest: 'internal_folder3/'}, // makes all src relative to cwd 
      //{flatten: true, src: ['path/**'], dest: 'internal_folder4/', filter: 'isFile'} // flattens results to a single level 
    ]
  }
}
});

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', ['imagemin']);
  //This lets you just run grunt by itself, it will assume you want to build.
  grunt.registerTask('default', ['build']);
};