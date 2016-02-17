angular.module('mrHeaderTemplates', ['templates/header-brand.tpl.html', 'templates/header.tpl.html', 'templates/navbar-item.tpl.html', 'templates/navbar.tpl.html']);

angular.module("templates/header-brand.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/header-brand.tpl.html",
    "<div class=\"mr-header-brand\" id=\"mr-header-brand\">\n" +
    "	<div class=\"container-fluid col-lg-3 col-md-3 col-sm-12 col-xs-12 header-brand-wrapper\">\n" +
    "		<div class=\"header text-sm-center text-xs-center\" ng-transclude></div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("templates/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/header.tpl.html",
    "<div class=\"mr-header\" id=\"mr-header\">\n" +
    "	<div class=\"menu-btn-wrapper hidden-md hidden-lg\" id=\"mr-menu-btn\">\n" +
    "		<button class=\"mr-menu-open\" ng-if=\"!menuOpen\" ng-click=\"openMenu()\">\n" +
    "			<span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n" +
    "		</button>\n" +
    "		<button class=\"mr-menu-close\" ng-if=\"menuOpen\" ng-click=\"closeMenu()\">\n" +
    "			<span class=\"glyphicon glyphicon-remove-circle\"></span>\n" +
    "		</button>\n" +
    "	</div>\n" +
    "	<div class=\"container-fluid col-lg-12 col-md-12 col-sm-12 col-xs-12 header-wrapper\" ng-class=\"menuOpen? 'open': 'closed'\" id=\"mr-header-wrapper\" ng-transclude></div>\n" +
    "</div>");
}]);

angular.module("templates/navbar-item.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/navbar-item.tpl.html",
    "<li class=\"mr-nav-list-item row\" ng-click=\"itemClick($event)\" ng-transclude></li>");
}]);

angular.module("templates/navbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/navbar.tpl.html",
    "<div class=\"mr-navbar\" id=\"mr-navbar\">\n" +
    "	<nav class=\"mr-navbar-wrapper  col-lg-9 col-md-9 col-sm-12 col-xs-12 text-lg-right text-md-right text-sm-center text-xs-center\">\n" +
    "		<ul class=\"mr-navbar-list nav container-fluid\" ng-transclude>\n" +
    "		</ul>\n" +
    "	</nav>\n" +
    "</div>");
}]);

angular.module('mrHeader', [
    'mrHeaderTemplates'
]).directive('mrHeader', function() {
    return {
        templateUrl: 'templates/header.tpl.html',
        transclude: true,
        controller: ['$scope', function($scope) {
            $scope.menuOpen = false;
            $scope.openMenu = function() {
                angular.element(document.querySelector('body')).addClass('sidebar-mask');
                $scope.menuOpen = true;
            }
            $scope.closeMenu = function() {
                angular.element(document.querySelector('body')).removeClass('sidebar-mask');
                $scope.menuOpen = false;
            }
        }]
    }
}).directive('mrHeaderBrand', function() {
    return {
        templateUrl: 'templates/header-brand.tpl.html',
        transclude: true
    }
}).directive('mrNavbar', function() {
    return {
        templateUrl: 'templates/navbar.tpl.html',
        transclude: true
    }
}).directive('mrNavbarItem', function() {
    return {
        templateUrl: 'templates/navbar-item.tpl.html',
        transclude: true,
        controller: ['$scope', function($scope) {
            $scope.itemClick = function(event) {
                angular.element(document.querySelector('.mr-nav-list-item.selected')).removeClass('selected');
                console.log(angular.element(event.currentTarget).addClass('selected'));
            }
        }]
    }
});