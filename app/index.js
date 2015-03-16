'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
 
var bannerGenerator = yeoman.generators.Base.extend({   
    promptUser: function() {
        var done = this.async();
 
        // have Yeoman greet the user
    this.log(yosay(
      'Welcome to the sensational ' + chalk.red('Banner') + ' generator!'
    ));
        var prompts = [{
            name: 'bannerTitle',
            message: 'What is the title of the banner ?'
        },{
            name: 'bannerWidth',
            message: 'What is the width of your banner ?'
        },{
            name: 'bannerHeight',
            message: 'What is the height of your banner ?'
        },{
            name: 'urlAddress',
            message: 'Enter the URL of the banner, without http://'
        },{
            type: 'confirm',
            name: 'minifyAssets',
            message: 'Optimize images ?',
            default: true
        }];
 
        this.prompt(prompts, function (props) {
            this.bannerTitle = props.bannerTitle;
            this.bannerWidth = props.bannerWidth;
            this.bannerHeight = props.bannerHeight;
            this.urlAddress = props.urlAddress;
            this.addDemoSection = props.addDemoSection;
      
            done();
        }.bind(this));
    },
/*    scaffoldFolders: function(){
      this.mkdir("Leveret");
    },*/
    copyFiles: function() {
      this.copy("_manifest.json", "manifest.json");
      this.copy("_gruntfile.js", "Gruntfile.js");
      this.copy("_package.json", "package.json");

      var context = {
        banner_title: this.bannerTitle,
        banner_width: this.bannerWidth,
        banner_height: this.bannerHeight,
        url_address: this.urlAddress
      };

      this.template("_manifest.json", "manifest.json", context);
      this.template("_gruntfile.js", "Gruntfile.js", context);
    },
    install: function(){
       /* var done = this.async();
            this.npmInstall("", function(){
            console.log("\nEverything Setup !!!\n");
            done();
    });
    */
         this.installDependencies({
        bower: false,
        npm: true
    });
    }
});
 
module.exports = bannerGenerator;