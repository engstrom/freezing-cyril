var app = angular.module("progressApp", []);

app.controller("ProgressController", function ($scope, $http) {
  $http.get('https://rawgit.com/engstrom/freezing-cyril/master/progress.json')
    .success(function(result) {
      $scope.courses = result;
    });
});