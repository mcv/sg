angular.module("spacegame")
    .directive("speedWidget", [function () {
        return {
            scope: {
                fleet: '='
            },
            link: function (scope, element, attrs) {
                scope.setSpeed = function(speed) {
                    console.log("setSpeed ",speed);
                    scope.fleet.selectedSpeed = speed;
                }
                console.log("fleet: ", scope.fleet);

            },
            templateUrl: "fleet/speedWidget.html"
        }
    }]);