require('angular');

angular.module('spacegame', []).controller('MainController', function($scope) {
  $scope.message = 'Angular Works!!!!';

  console.log("it works!");
});