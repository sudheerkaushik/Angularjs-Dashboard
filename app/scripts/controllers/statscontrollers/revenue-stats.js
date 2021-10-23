'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:RevenueStatsCtrl
 * @description
 * # RevenueStatsCtrl
 * Controller of the appApp
 */
 var app = angular.module('my-App');


  app.controller('RevenueStatsCtrl', function($scope) {

    $scope.amChartOptions2 = {
      data: [{
        "year": 2009,
        "income": 23.5,
        "expenses": 21.1,
        "dashLengthLine": 5
      }, {
        "year": 2010,
        "income": 26.2,
        "expenses": 30.5
      }, {
        "year": 2011,
        "income": 30.1,
        "expenses": 34.9
      }, {
        "year": 2012,
        "income": 29.5,
      }, {
        "year": 2013,
        "income": 30.6,
        "expenses": 28.2,
      }, {
        "year": 2014,
        "income": 34.1,
        "expenses": 32.9,
        "alpha": 0.2,
        "dashLengthColumn": 5,
        "additional": "(projection)"
      }],
      type: "serial",
      addClassNames: true,
      theme: "light",
      autoMargins: false,
      marginLeft: 30,
      marginRight: 8,
      marginTop: 10,
      marginBottom: 26,
      balloon: {
        adjustBorderColor: false,
        horizontalPadding: 10,
        verticalPadding: 8,
        color: "#ffffff",
        fixedPosition: true
      },
      
      valueAxes: [{
        axisAlpha: 0,
        position: "left"
      }],

      categoryAxis: {
        gridPosition: "start",
        parseDates: false,
        axisAlpha: 0,
        tickLength: 0
      },
      "chartCursor": {
        categoryBalloonEnabled: false,
        "categoryBalloonDateFormat": "DD",
        "cursorAlpha": 0.0,
        "cursorColor": "#ffffff",
        "fullWidth": true,
        "valueBalloonsEnabled": false,
        "zoomable": false
      },
      graphs: [{
        alphaField: "alpha",
        balloonText: "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
        fillAlphas: 1,
        title: "Income",
        type: "column",
        valueField: "income",
      }, {
        "id": "graph2",
        balloonText: "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
        bullet: "round",
        lineThickness: 3,
        bulletSize: 7,
        bulletBorderAlpha: 1,
        bulletColor: "#FFFFFF",
        useLineColorForBulletBorder: true,
        bulletBorderThickness: 3,
        fillAlphas: 0,
        lineAlpha: 1,
        title: "Expenses",
        valueField: "expenses",
        dashLengthField: "dashLengthLine"
      }],

    };
  });
