'use strict';

require('../app.js');
require('../planet/planetDataService.js');
require('../fleet/fleetDataService.js');
require('../game/gameConfigService.js');
require('../fleet/fleetMode.js');

angular.module('spacegame')
    .controller('MainController', ['$scope', 'planetData', 'fleetData', 'fleetMode', 'gameConfig', function ($scope, planetData, fleetData, fleetMode, gameConfig) {
        $scope.planets = planetData;
        $scope.fleets = fleetData;
        $scope.gameConfig = gameConfig;
        $scope.selection = {
            current: null,
            prev: null,
            fleet: null,
            planet: null
        };

        $scope.mousecoords = {
            x: 0,
            y: 0
        };

        $scope.mode = fleetMode.mode;

        //@todo: put this in a general game config for both fleet and planet
        $scope.planetsOrderOptions = [
            {name: "ID", value: "id"},
            {name: "Alphabetical", value: "name"},
            {name: "Population", value: "colony.pop"}
        ];

        $scope.planetsOrder = $scope.planetsOrderOptions[0].value;

        $scope.fleetsOrderOptions = [
            {name: "ID", value: "id"},
            {name: "Alphabetical", value: "name"}
        ];

        $scope.fleetsOrder = $scope.fleetsOrderOptions[0].value;

        $scope.selectPlanet = function (planet) {
            if (fleetMode.mode() != "addWaypoint") {
                planet.planet = true; // hack to let object know what it is
                $scope.selection.planet = planet;
                $scope.selection.prev = $scope.selection.current;
                $scope.selection.current = planet;
            }
        };

        $scope.selectFleet = function (fleet) {
            if(fleetMode.mode() != 'addWaypoint') {
                fleet.fleet = true; // hack to let object know what it is
                $scope.selection.fleet = fleet;
                $scope.selection.prev = $scope.selection.current;
                $scope.selection.current = fleet;
            }
        };

    }]);