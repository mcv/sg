require('../app.js');
require('angular-resource');

angular.module('spacegame').
  factory('gameConfig', function($resource){
    var gameConfigResource = $resource('game/game.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });

    return gameConfigResource.query();
  });
