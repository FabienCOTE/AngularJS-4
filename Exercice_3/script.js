var app = angular.module("app", []);
App.controller("CarCtrl", function($scope, $http) {
  $http.get("voiture.json")
  .then(function(response) {
    $scope.cars = response.data;
  });
});
