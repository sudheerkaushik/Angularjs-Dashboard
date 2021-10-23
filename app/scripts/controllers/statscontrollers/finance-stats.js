"use strict";

var app = angular.module("my-App");

app.controller("finance-stats", function($scope) {
  var self = this;
  
  $scope.amChartOptions = {
    type: "serial",
    theme: "light",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    marginBottom: 26,
    legend: {
      equalWidths: true,
      useGraphSettings: true,
      valueAlign: "left",
      valueWidth: 120
    },
    data: [
      {
        date: "2012-01-05",
        distance: 480,
        townName: "Miami",
        townName2: "Miami",
        townSize: 15,
        latitude: 25.83,
        duration: 501,
        dashLengthLine: 5
      },
      {
        date: "2012-01-06",
        distance: 386,
        townName: "Tallahassee",
        townSize: 12,
        latitude: 30.46,
        duration: 443
      },
      {
        date: "2012-01-07",
        distance: 348,
        townName: "New Orleans",
        townSize: 12,
        latitude: 29.94,
        duration: 405
      },
      {
        date: "2012-01-08",
        distance: 238,
        townName: "Houston",
        townName2: "Houston",
        townSize: 16,
        latitude: 29.76,
        duration: 309
      },
      {
        date: "2012-01-09",
        distance: 218,
        townName: "Dalas",
        townSize: 17,
        latitude: 32.8,
        duration: 287
      },
      {
        date: "2012-01-10",
        distance: 349,
        townName: "Oklahoma City",
        townSize: 11,
        latitude: 35.49,
        duration: 485
      },
      {
        date: "2012-01-11",
        distance: 603,
        townName: "Kansas City",
        townSize: 10,
        latitude: 39.1,
        duration: 590
      },
      {
        date: "2012-01-12",
        distance: 534,
        townName: "Denver",
        townName2: "Denver",
        townSize: 18,
        latitude: 39.74,
        duration: 550
      },
      {
        date: "2012-01-13",
        townName: "Salt Lake City",
        townSize: 12,
        distance: 425,
        duration: 450,
        latitude: 40.75,
        dashLength: 8,
        alpha: 0.4
      },
      {
        date: "2012-01-14",
        latitude: 36.1,
        duration: 470,
        townName: "Las Vegas",
        townName2: "Las Vegas"
      },
      {
        date: "2012-01-15"
      }
    ],
    valueAxes: [
      {
        id: "distanceAxis",
        axisAlpha: 0,
        gridAlpha: 0,
        position: "left",
        title: "distance"
      },
      {
        id: "latitudeAxis",
        axisAlpha: 0,
        gridAlpha: 0,
        labelsEnabled: false,
        position: "right"
      },
      {
        id: "durationAxis",
        duration: "mm",
        durationUnits: {
          hh: "h ",
          mm: "min"
        },
        axisAlpha: 0,
        gridAlpha: 0,
        inside: true,
        position: "right",
        title: "duration"
      }
    ],
    graphs: [
      {
        alphaField: "alpha",
        balloonText: "[[value]] miles",
        dashLengthField: "dashLength",
        fillAlphas: 0.7,
        legendPeriodValueText: "total: [[value.sum]] mi",
        legendValueText: "[[value]] mi",
        title: "distance",
        type: "column",
        valueField: "distance",
        valueAxis: "distanceAxis"
      },
      {
        balloonText: "latitude:[[value]]",
        bullet: "round",
        lineColor: "#0D6178",
        bulletBorderColor: "#0D6178",
        bulletBorderAlpha: 1,
        useLineColorForBulletBorder: true,
        bulletColor: "#62BFDA",
        bulletSizeField: "townSize",
        dashLengthField: "dashLength",
        dashLengthLine: 5,
        dashLength: 5,
        descriptionField: "townName",
        labelPosition: "right",
        labelText: "[[townName2]]",
        legendValueText: "[[value]]/[[description]]",
        title: "latitude/city",
        fillAlphas: 0,
        valueField: "latitude",
        valueAxis: "latitudeAxis"
      },
      {
        bullet: "square",
        bulletBorderAlpha: 1,
        lineColor: "#E06A6C",
        bulletBorderColor: "#E06A6C",
        bulletBorderThickness: 1,
        dashLengthField: "dashLength",
        legendValueText: "[[value]]",
        title: "duration",
        fillAlphas: 0,
        valueField: "duration",
        valueAxis: "durationAxis"
      }
    ],
    chartCursor: {
      categoryBalloonEnabled: false,
      categoryBalloonDateFormat: "DD",
      cursorAlpha: 0.0,
      cursorColor: "#ffffff",
      fullWidth: true,
      valueBalloonsEnabled: false,
      zoomable: false
    },
    dataDateFormat: "YYYY-MM-DD",
    categoryField: "date",
    categoryAxis: {
      minVerticalGap: 320,
      dateFormats: [
        {
          period: "DD",
          format: "DD"
        },
        {
          period: "WW",
          format: "MMM DD"
        },
        {
          period: "MM",
          format: "MMM"
        },
        {
          period: "YYYY",
          format: "YYYY"
        }
      ],
      parseDates: true,
      autoGridCount: false,
      axisColor: "#555555",
      gridAlpha: 0.1,
      gridColor: "#FFFFFF",
      gridCount: 50
    }
  };

  console.log("\n dash is up and running..\n\n" + Date());
});
