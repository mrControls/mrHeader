angular.module('mrHeader', ['mrHeaderTemplates'])
.controller('HeaderController', ['$scope', function($scope) {
	$scope.menuOpen = false;
	$scope.openMenu = function() {
		angular.element(document.querySelector( 'body' )).addClass('sidebar-mask');
		$scope.menuOpen = true;
	}

	$scope.closeMenu = function () {
		angular.element(document.querySelector( 'body' )).removeClass('sidebar-mask');
		$scope.menuOpen = false;
	}
	$scope.itemClick = function($event) {
		console.log($event);
	}
}])
.directive('mrHeader', function() {
	return {
		templateUrl: 'templates/header.tpl.html',
		transclude: true
	}
})
.directive('mrHeaderBrand', function() {
	return {
		templateUrl: 'templates/header-brand.tpl.html',
		transclude: true
	}
})
.directive('mrNavbar', function() {
	return {
		templateUrl: 'templates/navbar.tpl.html',
		transclude: true
	}
})
.directive('mrNavbarItem', function() {
	return {
		templateUrl: 'templates/navbar-item.tpl.html',
		transclude: true
	}
});