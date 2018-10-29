var app = angular.module("app", []);

app.controller("CarCtrl", function($scope, $http) {
  $http.get("voiture.json")
  .then(function(response) {
    $scope.cars = response.data;
  });
});
