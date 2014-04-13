var app = angular.module("progressApp", []);

app.controller("ProgressController", function ($scope, $http) {
  $http.get('https://rawgit.com/engstrom/school-progress/master/data/progress.json')
    .success(function(result) {
      $scope.courses = result;
    });
});