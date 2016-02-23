require('angular');

angular.module('app', []).controller('MainController', function($scope) {
  $scope.message = 'Angular Works!!!!';

  console.log("it works!");
});