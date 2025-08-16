angular.module('myApp').component('teamSection', {
    templateUrl: './app/views/AboutViews/team-section.component.html',
    controller: function() {
        this.team = {
            badgeText: "Why Choose Us",
            title: "Dedicated Professionals Driving Sustainability",
            subtitle: "Passionate Innovators Committed to a Greener Future",
            members: [
                { name: "Cortis Ambady", role: "Web Developer", image: "images/member1.jpg" },
                { name: "Glorius Cristian", role: "App Developer", image: "images/member2.jpg" },
                { name: "Glorius Cristian", role: "UI/UX Designer", image: "images/member3.jpg" },
                { name: "Nikolas Brooten", role: "Sales Manager", image: "images/member4.jpg" }
            ]
        };
    },
    controllerAs: 'team'
});
