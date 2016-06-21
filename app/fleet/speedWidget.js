angular.module("spacegame")
    .directive("speedWidget", [function () {
        return {
            scope: {
                fleet: '='
            },
            link: function (scope, element, attrs) {
                scope.setSpeed = function(speed) {
                    scope.fleet.selectedSpeed = speed;
                }

            },
            templateUrl: "fleet/speedWidget.html"
        }
    }]);