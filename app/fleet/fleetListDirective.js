angular.module("spacegame")
    .directive("fleetList", ['fleetData', function (fleetData) {
        return {
            link: function (scope, element, attrs) {
                console.log("foo");

            },
            templateUrl: fleetList.html
        }
    }]);