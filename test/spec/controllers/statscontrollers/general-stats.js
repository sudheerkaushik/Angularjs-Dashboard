'use strict';

describe('Controller: StatscontrollersGeneralStatsCtrl', function () {

  // load the controller's module
  beforeEach(module('my-app'));

  var StatscontrollersGeneralStatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatscontrollersGeneralStatsCtrl = $controller('StatscontrollersGeneralStatsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StatscontrollersGeneralStatsCtrl.awesomeThings.length).toBe(3);
  });
});
