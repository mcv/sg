
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

      $scope.drawFleetShape = function(fleet) {
        var fleetShape = 'M'+fleet.x+','+fleet.y+'L'+(fleet.x-5)+','+fleet.y+',L'+fleet.x+','+(fleet.y+10)+'L'+(fleet.x+5)+','+fleet.y+'Z';

        return fleetShape;
      };

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


      $scope.$watch('selection.current', function(selected, oldselected) {
//        console.log("selection changed");
        if (selected !== oldselected && selected !== null) {
          if (selected.fleet) {
            $scope.$watchCollection('selected.waypoints', function() {
              $scope.selection.current.shape.remove();
              $scope.drawFleet(selected);
            });
            selected.shape.attr({"fill": $scope.mapconfig.selectedfleetcolour, "stroke": $scope.mapconfig.selectedfleetcolour});
          }
          else if (selected.planet) {
            selected.shape.attr({"fill": $scope.mapconfig.selectedplanetcolour, "stroke": $scope.mapconfig.selectedplanetcolour});
          }
          if (oldselected !== null) {
            if (oldselected.fleet) {
              oldselected.shape.attr({"fill": $scope.mapconfig.fleetcolour, "stroke": $scope.mapconfig.fleetcolour});
            }
            else if (oldselected.planet) {
              oldselected.shape.attr({"fill": $scope.mapconfig.planetcolour, "stroke": $scope.mapconfig.planetcolour});
            }
          }
        }
      })

      $scope.$watch('mode', function(mode, oldmode) {
        if (mode == 'addWaypoint') {
          iElement.on('mousemove', function($event) {
            $scope.mousecoords.x = $event.offsetX;
            $scope.mousecoords.y = $event.offsetY;
            $scope.$apply();
          })
          iElement.on("click", function(event) {
            $scope.addWaypoint({x: event.offsetX, y: event.offsetY});
            $scope.setMode(oldmode);
            $scope.$apply();
          });
        }
        else if (oldmode == 'addWaypoint') {
          iElement.off("mousemove click");
        }
      })


    }
  }
}]);
