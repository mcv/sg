
angular.module('spacegame').directive("sgMap2", [function() {
  return {
    restrict: 'AE',
//    templateUrl: "map/map2.html",
    templateUrl: "map/map2.html",

    controller: function($scope) {

      $scope.mapconfig = {
        fleetcolour: "#fff",
        planetcolour: "#0ff",
        planetradius: 10,
        selectedfleetcolour: "#f0f",
        selectedplanetcolour: "#090",
        waypointcolour: "#c0c"
      };

      $scope.cfg = $scope.mapconfig;

    },
    link: function ($scope, iElement, iAttrs, controller, transcludeFn) {
      //
//      console.log("link 2");
//
//      console.log("setting style: "+$scope.gameconfig.height);
//      iElement.style = {height: $scope.gameconfig.height, width: $scope.gameconfig.width};

      $scope.waypointString = function(fleet) {
        var wpstring = "M"+fleet.x+","+fleet.y;
        angular.forEach(fleet.waypoints, function(wp) {
          wpstring = wpstring + "L"+wp.x+","+wp.y;
        });
        return wpstring;
      };

      $scope.fleetRotate = function(fleet) {
        if (fleet.waypoints != null && fleet.waypoints[0]!= null) {
          return $scope.rotate(fleet, fleet.waypoints[0]);
        }
        else {
          return 0;
        }
      };
      $scope.rotate = function(origin, direction) {
        var rad = Math.atan2(direction.y - origin.y, direction.x - origin.x);
        var deg = rad*180/Math.PI - 90; // correction for our fleets pointing down rather than to the right
        return deg;
      };

    }
  }
}]);
