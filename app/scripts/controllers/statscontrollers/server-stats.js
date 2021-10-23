"use strict";

/**
 * @ngdoc function
 * @name my-app.controller:StatscontrollersServerStatsCtrl
 * @description
 * # StatscontrollersServerStatsCtrl
 * Controller of the my-app
 */
var app = angular.module("my-App");
app.controller("StatscontrollersServerStatsCtrl", function($scope) {
  this.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"];

  function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (var i = 0, len = obj.length; i < len; i++) {
        copy[i] = clone(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
      }
      return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
  }
  var Config = {
    type: "serial",
    categoryField: "day",
    autoMargins: false,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    graphs: [
      {
        valueField: "value",
        type: "column",
        fillAlphas: 1,
        lineColor: "#55b464",
        showBalloon: false
      }
    ],
    valueAxes: [
      {
        gridAlpha: 0,
        axisAlpha: 0
      }
    ],
    categoryAxis: {
      gridAlpha: 0,
      axisAlpha: 0
    }
  };
  var chartConfig1 = clone(Config);
  chartConfig1.dataProvider = [
    {
      day: 1,
      value: 151
    },
    {
      day: 2,
      value: 204
    },
    {
      day: 3,
      value: 174
    },
    {
      day: 4,
      value: 134
    },
    {
      day: 5,
      value: 322
    },
    {
      day: 6,
      value: 234
    },
    {
      day: 7,
      value: 116
    },
    {
      day: 8,
      value: 222
    },
    {
      day: 9,
      value: 341
    },
    {
      day: 10,
      value: 62
    }
  ];
  AmCharts.makeChart("column1", chartConfig1);

  var chartConfig2 = clone(Config);
   chartConfig2.dataProvider = [
    {
      day: 1,
      value: 101
    },
    {
      day: 2,
      value: 104
    },
    {
      day: 3,
      value: 94
    },
    {
      day: 4,
      value: 234
    },
    {
      day: 5,
      value: 422
    },
    {
      day: 6,
      value: 134
    },
    {
      day: 7,
      value: 190
    },
    {
      day: 8,
      value: 200
    },
    {
      day: 9,
      value: 155
    },
    {
      day: 10,
      value: 82
    }
  ],
  chartConfig2.graphs= [
      {
        valueField: "value",
        type: "column",
        fillAlphas: 1,
        lineColor: "#FDC471",
        showBalloon: false
      }
    ],
  AmCharts.makeChart("column2", chartConfig2);
});
