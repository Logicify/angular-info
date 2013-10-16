'use strict';

angular.module('commonDirectives',[])
    .directive('kosTitle',['$rootScope', function($rootScope){
          return {
            link: function(scope, element, attrs){
                scope.title = scope.title||'My First Angular app';
            }
          };
    }]);