var app = angular.module('lingo', ['ui.router']);

app.controller('TranslateCtrl', [
	'$scope',
	'$http',
	function($scope, $http){
		$scope.form = {};
		$scope.translation = ''
	  $scope.submitTranslation = function() {
	  	$scope.translation = ''
			return $http.post('/translate', $scope.form).success(function(data){
	      console.log(data)
	      $scope.translation = data["translation"]
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