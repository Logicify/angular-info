'use strict';

angular.module('yoAngularApp', ['myControllers', 'commonDirectives'])
    .config(function ($routeProvider, $httpProvider, $locationProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $routeProvider
            .when('/', {
                templateUrl: 'views/greet.html'
            })
            .when('/user/new',{
                templateUrl: 'views/edit.html',
                controller:'newUser'
            })
            .when('/user/edit/:_id',{
                templateUrl: 'views/edit.html',
                controller: 'editUser'
            })
            .otherwise({
                redirectTo: '/'
            });
        //$locationProvider.html5Mode(true);
    });
