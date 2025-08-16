angular.module('myApp')
    .component('navbarComponent', {
        templateUrl: './app/views/navbar.component.html', // Ensure the file exists
        controller: function($scope, $location) {
            $scope.isActive = function(viewLocation) {
                return $location.path() === viewLocation;
            };
    }});

    
    