require('../app.js');
require('angular-resource');

angular.module('spacegame', ['ngResource']).
  factory('fleetData', function($resource){
    var fleetResource = $resource('data/fleets.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });

    return fleetData.query();
  });
