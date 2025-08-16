angular.module('myApp').component('storySection', {
    templateUrl: './app/views/AboutViews/story.component.html',
    controller: function() {
        this.story = {
            badgeText: "Our Story",
            title: "From Vision to Reality:",
            image: "images/storyImg.png",
            description: [
                "Our journey began with a simple yet powerful idea, to incentivize and reward eco-friendly behaviors, making sustainability accessible and engaging for everyone.",
                "Our founders, passionate environmentalists, recognized the need for a platform that not only encourages sustainable actions but also celebrates and rewards those efforts.",
                "Our story is one of innovation and dedication. We started with a small team, united by a shared vision of creating a positive impact on the environment.",
                "We faced numerous challenges along the way, from developing a user-friendly app to partnering with like-minded organizations. However, each challenge presented an opportunity to learn and grow, shaping our platform into what it is today."
            ]
        };
    },
    controllerAs: 'story'
});
