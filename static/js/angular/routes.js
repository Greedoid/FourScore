var FourScore = angular.module('FourScore.routes', ['ngRoute']);

FourScore.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : '/static/views/input.html'
	}).when('/analyze', {
		templateUrl : '/static/views/analyze.html'
	});
});