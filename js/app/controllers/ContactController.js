function ContactController($scope, $timeout) {
	$scope.name = 'Rebecca';
	
	$timeout(function() {
	  $scope.name = 'Charlotte';
	}, 2000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);