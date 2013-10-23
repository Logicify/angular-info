'use strict';

/* Controllers */
angular.module('7min.controllers', ['7min.services']).
	controller('Start', ['$scope', function ($scope) {
		$scope.templ = 'views/7min/greet.html';
		$scope.begin = function () {
			$scope.isBegin = true;
			$scope.templ = 'views/7min/start.html';
		};
	}])
	.controller('CountDown', ['$scope', 'stages', '$timeout',
		function ($scope, stages, $timeout) {
			//another one solution
			var stage, index,
				_stop = null,
				progressStep = 100 / Object.keys(stages).length,
				_initStage = function (stage) {
					$scope.stage = stage;
					$scope.countdown = stage.count;
					return true;
				},
				_changeStage = function () {
					if (!stage) {
						stage = stages[index];
						return _initStage(stage);
					}
					if ($scope.countdown === 0) {
						if (++index >= stages.length) {
							return false;
						}
						stage = stages[index];
						$scope.progress += progressStep;
						return _initStage(stage);
					}
					$scope.countdown--;
					return true;
				},
				tick = function (callback) {
					_stop = $timeout(function () {
						tick(callback);
					}, 1000);
					if (!callback()) {
						$scope.stop();
					}
				};
			$scope.start = function () {
				stage = null;
				index = 0;
				tick(_changeStage);
				$scope.isStarted = true;
				$scope.inAction = true;
				$scope.progress = 0;
			};
			$scope.stop = function () {
				if (_stop) {
					$timeout.cancel(_stop);
					$scope.progress = 100;
					$scope.isStarted = false;
				}
			};
			$scope.isStarted = false;
		}]);