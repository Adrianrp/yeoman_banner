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
            message: 'Enter the URL of the banner'
        },{
            type: 'confirm',
            name: 'minifyAssets',
            message: 'Would you like me to make images folder web ready ?',
            default: false
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
    copyFiles: function() {
      this.copy("_manifest.json", "manifest.json");

      var context = {
        banner_title: this.bannerTitle,
        banner_width: this.bannerWidth,
        banner_height: this.bannerHeight,
        url_address: this.urlAddress
      };

      this.template("_manifest.json", "manifest.json", context);
    }
});
 
module.exports = bannerGenerator;