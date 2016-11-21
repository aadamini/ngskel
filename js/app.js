var app = angular.module('app',['ngRoute']);
app.conf=function ($routeProvider) { 
  $routeProvider 
    .when('/home', { 
	controller:'NoteController',
      templateUrl: 'views/home.html' 
    })
    .when('/home/:id', { 
      controller: 'NoteController', 
      templateUrl: 'views/home.html' 
    }) 

}
app.config(app.conf);