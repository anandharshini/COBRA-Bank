'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.Alerts = [
			{
				icon: {
					className: 'glyphicon glyphicon-user',
					type: 'btn btn-success'
				},
				value: '12,345',
				mutedText: 'Total customers'
			},
			{
				icon: {
					className: 'glyphicon glyphicon-cog',
					type: 'btn btn-success'
				},
				value: '9,345',
				mutedText: 'Total customers'
			},
			{
				icon: {
					className: 'glyphicon glyphicon-user',
					type: 'btn btn-info'
				},
				value: '12,345',
				mutedText: 'Total customers'
			},
			{
				icon: {
					className: 'glyphicon glyphicon-cog',
					type: 'btn btn-warning'
				},
				value: '12,345',
				mutedText: 'Total customers'
			},
			{
				icon: {
					className: 'glyphicon glyphicon-user',
					type: 'btn btn-success'
				},
				value: '12,345',
				mutedText: 'Total customers'
			},
			{
				icon: {
					className: 'glyphicon glyphicon-cog',
					type: 'btn btn-success'
				},
				value: '9,345',
				mutedText: 'Total customers'
			},
			{
				icon: {
					className: 'glyphicon glyphicon-user',
					type: 'btn btn-info'
				},
				value: '12,345',
				mutedText: 'Total customers'
			},
			{
				icon: {
					className: 'glyphicon glyphicon-cog',
					type: 'btn btn-warning'
				},
				value: '12,345',
				mutedText: 'Total customers'
			},
		];
	}
]);