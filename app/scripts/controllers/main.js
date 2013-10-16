'use strict';

angular.module('myControllers', ['userServices'])
    .controller('userList', ['$scope', 'UserList', 'User', '$rootScope', '$location',
        function ($scope, UserList, User, $rootScope, $location) {
            var _refresh = function () {
                UserList.get(function (users) {
                    $scope.users = users.data;
                    $scope.notEmpty = (users.data.length === 0) ? false : true;
                });
            };

            $scope.delete = function(user){
                User.delete(user, function(result){
                    $location.path('/');
                    $rootScope.$emit('refresh', true);
                    $rootScope.$emit('successAlert','User '+user.firstName+' deleted successfully!');
                });
            };

            $rootScope.$on('deleteUser', function(event, user){
                $scope.delete(user);
            });

            _refresh();
            $rootScope.$on('refresh', function () {
                _refresh();
            });
    }])
    .controller('newUser', ['$scope', 'User', '$location', '$rootScope', function ($scope, User, $location, $rootScope) {
        $rootScope.title = 'Create new user';
        $scope.save = function (user) {
            User.save(user, function (data) {
                $rootScope.$emit('successAlert','User created successfully!');
                $location.path('/');
                $rootScope.$emit('refresh', true);
            }, function(error){
                $rootScope.$emit('errorAlert', error);
            });
        }
    }])
    .controller('editUser', ['$scope', 'User', '$location', '$rootScope', '$routeParams',
        function ($scope, User, $location, $rootScope, $routeParams){
            var _id = $routeParams._id;
            $scope.edit = function(user){
                User.put(user, function(result){
                    $location.path('/');
                    $rootScope.$emit('refresh', true);
                    $rootScope.$emit('successAlert','Updated successfully');
                });
            };

            $scope.delete = function(user){
                //delete user
                $rootScope.$emit('deleteUser', user);
            };

            User.get({"_id":_id}, function(result){
                var _user = result.data;
                $scope.user = _user;
                $rootScope.title = 'Edit user '+ _user.firstName;
            });


    }])
    .controller('kosAlerts', ['$scope', '$rootScope', function($scope, $rootScope){
        //sample alert object {type:['error','success'], message:'message'}
        var alerts=[],
            types=['success','error'];
        $scope.alerts = alerts;

        $scope.close = function(id){
            alerts.splice(id,1);
        };

        $rootScope.$on('successAlert', function(e, message){
            alerts.push({type:types[0], message:message});
        });

        $rootScope.$on('errorAlert', function(e, error){
            var message = 'Some errors occurred...'
            if(error.data && error.data.error){
                message = error.data.error;
            }
            alerts.push({type:types[1], message:message});
        });
    }]);