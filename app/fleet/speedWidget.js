angular.module("spacegame").
directive("speedWidget", [function() {
    return {
        scope: {
            fleet: '='
        },
        link: function(scope, element, attrs) {
            console.log("fleet: ",fleet);

        },
        templateUrl: speedWidget.html
    }
}]);