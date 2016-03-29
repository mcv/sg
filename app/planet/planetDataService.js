require('../app.js');
require('angular-resource');

angular.module('spacegame', ['ngResource']).
  factory('planetData', function($resource){
    var planetResource = $resource('data/planets.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });

    return planetResource.query();
  });
