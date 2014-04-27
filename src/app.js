var app = angular.module("progressApp", []);

app.controller("ProgressController", function ($scope, $http) {
  $http.get('data/progress.json')
    .success(function(result) {
      $scope.courses = result;
    });
});