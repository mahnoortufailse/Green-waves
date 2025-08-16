angular.module('myApp').component('charityComponent', {
    templateUrl: 'app/views/charity.component.html',
    controller: function() {
        var vm = this;
        vm.companies = [
            { name: "EC Foundation", logo: "images/logo1.png" },
            { name: "E3 Bike", logo: "images/logo2.png" },
            { name: "GibSams", logo: "images/logo3.png" },
            { name: "Eroski", logo: "images/logo4.png" }
        ];

        
    }
});
