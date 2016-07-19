'use strict';

require('../app.js');
require('../planet/planetDataService.js');
require('../fleet/fleetDataService.js');
require('../game/gameConfigService.js');
require('../fleet/fleetMode.js');

angular.module('spacegame')
    .controller('fleetController', ['$scope', 'fleetData', 'fleetMode', function ($scope, fleetData, fleetMode) {


        $scope.addWaypoint = function (coords) {
            if (fleetMode.mode() === "addWaypoint" && $scope.selection.current.fleet) {
                if ($scope.selection.current.waypoints === null || $scope.selection.current.waypoints === undefined) {
                    $scope.selection.current.waypoints = [];
                }

                var speed = $scope.selection.current.selectedSpeed;
                if (!speed) {
                    speed = 5;
                }

                $scope.selection.current.waypoints.push({
                    x: coords.x,
                    y: coords.y,
                    speed: speed
                });
            }
        };

        $scope.removeWaypoint = function (waypoint) {
            var index = $scope.selection.current.waypoints.indexOf(waypoint);
            $scope.selection.current.waypoints.splice(index, 1);
        };

    }]);