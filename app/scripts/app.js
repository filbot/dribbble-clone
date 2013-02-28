'use strict';

var dribbbleApp = 

angular.module('dribbbleApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
