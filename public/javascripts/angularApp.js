var app = angular.module('lingo', ['ui.router']);

app.controller('TranslateCtrl', [
	'$scope',
	'$http',
	function($scope, $http){
		$scope.form = {};
	  $scope.submitTranslation = function() {
			return $http.post('/translate', $scope.form).success(function(data){
	      // do something
	    });
		};
	}]);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

	  $stateProvider
	    .state('translate', {
	      url: '/translate',
	      templateUrl: '/translate.html',
	      controller: 'TranslateCtrl'
	    })
	}]);