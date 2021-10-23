'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:TopStatsCtrl
 * @description
 * # TopStatsCtrl
 * Controller of the appApp
 */
 var app = angular.module('my-App');

  app.controller('TopStatsCtrl', function($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
