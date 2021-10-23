'use strict';
  var app = angular
  .module('my-App', [
    'ngAnimate',
    /*'ngAria',*/
    'ngCookies',
    /*'ngMessages',*/
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'amChartsDirective'

  ]);
  
app.config(function($routeProvider, $locationProvider){   

    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/',{
            templateUrl:'views/main.html'
        })
        .when('/tests',{
            templateUrl:'tests/tests.html'
        })
        .when('/PureJS',{
            templateUrl:'PureJS/PureJS.html'
        })
        .when('/w3test',{
            templateUrl:'w3test/w3test.html'
        })
        .when('/Forms',{
            templateUrl:'Forms/Forms.html'
        })
        .when('/servComm',{
            templateUrl:'servComm/servComm.html'
        })
        .when('/dashboard',{
            templateUrl:'dash/dash.html'
        })
        .when('/unit',{
            templateUrl:'unitTest/unitTest.html'
        });
 });
  app.controller('HeaderController',function HeaderController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});