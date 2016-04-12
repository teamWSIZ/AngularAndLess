
//List modules which it uses
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.controllers'
]);

app.config(['$routeProvider', function ($routeProvider) {
    var urlBase='partials/';

    $routeProvider.when('/', {
        templateUrl: urlBase + 'otherView.html',
        controller: 'masterCtrl'
    }).when('/view1', {
        templateUrl: urlBase + 'otherView.html',
        controller: 'masterCtrl'
    }).when('/rezerwacje', {
        templateUrl: urlBase + 'rezerwacjeView.html',
        controller: 'masterCtrl'
    }).when('/view2', {
        templateUrl: urlBase + 'exampleView.html',
        controller: 'masterCtrl'
    });
}]);

app.run(function ($rootScope) {
    //Model object --- main data
    $rootScope.M = {};
    $rootScope.M.url = 'http://localhost:8090/forum-0.1.1/';
});