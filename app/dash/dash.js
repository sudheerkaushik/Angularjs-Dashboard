'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
var app = angular.module('my-App');


app.controller('dash', function($scope) {
  var self = this;
  this.username = 'nothing';
  /*var msg="Hello";
  self.msg=msg+" hi";*/
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
    console.log('\n dash is up and running..\n\n' + Date());
});
