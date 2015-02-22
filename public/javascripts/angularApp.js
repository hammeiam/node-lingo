var app = angular.module('lingo', ['ui.router']);

app.controller('TranslateCtrl', [
	'$scope',
	'$http',
	function($scope, $http){
	  $scope.submitTranslation = function(form) {
			return $http.post('/translate', form).success(function(data){
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