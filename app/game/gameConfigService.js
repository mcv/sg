require('../app.js');
require('angular-resource');

angular.module('spacegame').
  factory('gameConfig', function($resource){
    var gameConfigResource = $resource('game/game.json', {}, {
      get: {method:'GET', params:{}}
    });

    return gameConfigResource.get();
  });
