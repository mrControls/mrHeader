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
        scope: 
            {
                navItems: '=items',
                actions: '=actions'
            },
        transclude: true,
        controller: ['$scope', function($scope) {
        }]
    }
}).directive('mrNavbarItem', function() {
    return {
        templateUrl: 'templates/navbar-item.tpl.html',
        scope: {
            'actions': '=',
            'id': '=actionId'
        },
        transclude: true,
        controller: ['$scope', function($scope) {
            $scope.actions.setSelected = function(event) {
                currentSelection = document.querySelector('.mr-nav-list-item.selected');
                angular.element(currentSelection).removeClass('selected');
                angular.element(event.currentTarget).addClass('selected'); 
            }
        }]
    }
});