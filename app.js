var app = angular.module("progressApp", []);

app.controller("ProgressController", function ($scope, $http) {
  $http.get('https://rawgit.com/engstrom/freezing-cyril/master/progress.json').success(function(result) {
      $scope.courses = result;
    });
});

// Add percentage filter
app.filter('percentage', ['$filter', function($filter) {
    return function(input, decimals) {
        return $filter('number')(input*100, decimals)+'%';
    };
}]);