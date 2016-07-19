'use strict';

require('../app.js');
require('fleetController.js');

angular.module("spacegame")
    .directive("fleetList", ['fleetData', 'fleetController', function (fleetData, fleetController) {
        return {
            link: function (scope, element, attrs) {
            },
            controller: fleetController,
            templateUrl: fleetList.html
        }
    }]);