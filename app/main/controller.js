'use strict';

require('../app.js');
require('../planet/planetDataService.js');
require('../fleet/fleetDataService.js');


angular.module('spacegame').controller('MainController', ['$scope', 'Planet', 'Fleet', function($scope, Planet, Fleet) {
  $scope.planets = [];
  $scope.fleets = [];
  $scope.selection = {
    current : null,
    prev : null,
    fleet : null,
    planet : null
  };
  $scope.gameconfig = {
    height: 400,
    width: 400
  };
  console.log("gameconfig: ",gameconfig);
  $scope.mousecoords = {
    x: 0,
    y: 0
  };
  $scope.mode = 'std';

  $scope.detailView = function() {
//    console.log($scope.selection.current);
    if ($scope.selection.current === null) {
      return "empty";
    }
    if ($scope.selection.current.fleet) {
      return "fleet-detail";
    }
    else if ($scope.selection.current.planet) {
      return "planet-detail";
    }
    else {
      return "empty";
    }

  };

  $scope.setMode = function(mode) {
    $scope.mode = mode;
  };

  $scope.selectPlanet = function(planet) {
    console.log("selectPlanet 1: ",$scope.selection);
    planet.planet = true; // hack to let object know what it is
    $scope.selection.planet = planet;
    $scope.selection.prev = $scope.selection.current;
    $scope.selection.current = planet;
    console.log("selectPlanet 2: ",$scope.selection);
  };

  $scope.selectFleet = function(fleet) {
    fleet.fleet = true; // hack to let object know what it is
    $scope.selection.fleet = fleet;
    $scope.selection.prev = $scope.selection.current;
    $scope.selection.current = fleet;
  };

  $scope.addWaypoint = function(coords) {
    if ($scope.mode == "addWaypoint" && $scope.selection.current.fleet) {
      if ($scope.selection.current.waypoints === null) {
        $scope.selection.current.waypoints = []
      }
      $scope.selection.current.waypoints.push({
        x: coords.x,
        y: coords.y,
        speed: 5
      });
    }
  };

  $scope.setMode = function(mode) {
    $scope.mode = mode;
  };

  $scope.planets = Planet.query();
  $scope.fleets = Fleet.query();

}]);
