angular.module('myApp').component('heroSection', {
    templateUrl: 'app/views/hero.component.html',
    bindings: {
        title: '@',
        subtitle: '@',
        description: '@',
        btnText: '@',
        btnLink: '@',
        showSocial: '<', // Boolean to control social media display
        heroImage: '@',  // Dynamic hero image
        heartImage: '@'  // Dynamic heart icon image
    },
    controller: function() {
        let $ctrl = this;

        // Ensure Boolean binding is correctly interpreted
        $ctrl.$onInit = function() {
            $ctrl.showSocial = ($ctrl.showSocial === true || $ctrl.showSocial === 'true');
            console.log("Hero Component Loaded:", $ctrl);
        };
    }
});
