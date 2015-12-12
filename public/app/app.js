angular
.module('myApp', [
  'ngRoute',
  'myApp.signup'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/signup', {
      templateUrl: 'app/components/signup/signup.html',
      controller: 'SignupController'
    })
}])
.controller('AppController', ['$scope', function($scope){
  console.log('Inside App Controller');
}])
