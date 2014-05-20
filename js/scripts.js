var hoennApp = angular.module('hoennApp', []);

hoennApp.config(function ($routeProvider) {
	$routeProvider
		.when ('/littleroot',
			{
				templateUrl:'partials/Littleroot.html'
			})
		.when ('/route101',
			{
				templateUrl:'partials/Route101.html'
			})
		.when ('/oldale',
		{
			templateUrl:'partials/Oldale.html'
		})
		.otherwise({redirectTo: '/littleroot' });
});