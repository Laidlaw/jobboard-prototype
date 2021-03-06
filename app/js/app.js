'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute'
  // 'myApp.filters',
  // 'myApp.services',
  // 'myApp.directives',
  // 'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'views/seeker/seeker.tmpl.html', controller: 'SeekerController'});
  $routeProvider.when('/view2', {templateUrl: 'views/employer/employer.tmpl.html', controller: 'EmployerController'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
