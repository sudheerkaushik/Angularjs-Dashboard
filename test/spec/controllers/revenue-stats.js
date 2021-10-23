'use strict';

describe('Controller: RevenueStatsCtrl', function () {

  // load the controller's module
  beforeEach(module('my-app'));

  var RevenueStatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RevenueStatsCtrl = $controller('RevenueStatsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RevenueStatsCtrl.awesomeThings.length).toBe(3);
  });
});
