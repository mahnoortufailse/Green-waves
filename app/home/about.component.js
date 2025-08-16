angular.module('myApp').component('aboutComponent', {
    
    templateUrl: 'app/views/about.component.html',
    controller: function() {
        var vm = this;

        // Debugging: Log to check if the component runs
        console.log("About Component Loaded");

        // Define features array
        vm.features = [
            { icon: 'fas fa-leaf', title: 'Sustainability', description: 'We are committed to promoting practices that contribute to a sustainable future.' },
            { icon: 'fas fa-users', title: 'Community', description: 'Building a community of like-minded individuals who care about the environment.' },
            { icon: 'fas fa-lightbulb', title: 'Innovation', description: 'Leveraging innovative solutions to reward sustainable and eco-friendly actions.' },
            { icon: 'fas fa-shield-alt', title: 'Integrity', description: 'Maintaining transparency and integrity in all our actions and initiatives.' }
        ];

        // Debugging: Check if data is assigned
        console.log("Features Data:", vm.features);
    }
});
