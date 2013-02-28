'use strict';

var everyone = 'http://api.dribbble.com/shots/everyone?callback=JSON_CALLBACK&per_page=30'
var debuts = 'http://api.dribbble.com/shots/debuts?callback=JSON_CALLBACK&per_page=30'
var popular = 'http://api.dribbble.com/shots/popular?callback=JSON_CALLBACK&per_page=30'

dribbbleApp.directive('mydirective', function () {
  return function (scope, element, attrs) {
    if (scope.$last) {
      element.ready(function () {
        lazyload();
      })
    }
  }
});





dribbbleApp.controller('MainCtrl', function ($scope, $http) {
  $http.jsonp(popular).success(function (data) {
      $scope.shots = data.shots;
      lazyload($scope.shots);
    }).error(function (data) {
    });
});



function lazyload() {
   $("img.lazy").lazyload({
      effect: "fadeIn"
    });
}