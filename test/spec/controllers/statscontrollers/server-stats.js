'use strict';

describe('Controller: StatscontrollersServerStatsCtrl', function () {

  // load the controller's module
  beforeEach(module('my-app'));

  var StatscontrollersServerStatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatscontrollersServerStatsCtrl = $controller('StatscontrollersServerStatsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StatscontrollersServerStatsCtrl.awesomeThings.length).toBe(3);
  });
});
