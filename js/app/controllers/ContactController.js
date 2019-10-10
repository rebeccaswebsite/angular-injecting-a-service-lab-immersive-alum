function ContactController($scope, $timeout) {
	$scope.name = 'Rebecca';
}

angular
	.module('app')
	.controller('ContactController', ContactController);