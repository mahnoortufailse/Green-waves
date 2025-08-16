angular.module('myApp')
.component('featuresSection', {
    templateUrl: './app/views/AboutViews/features-section.component.html',
    controller: function() {
        this.featuresData = {
            badgeText: 'Features',
            title: 'GreenWave Green Features',
            subtitle: 'Discover how GreenWave makes sustainability rewarding and engaging',
            buttonText: 'Join us now',
            features: [
                {
                    icon: 'fas fa-leaf text-success',
                    title: 'Earn Points',
                    description: 'Complete various eco-friendly tasks like recycling, using public transport, or participating in community clean-ups to earn points.'
                },
                {
                    icon: 'fas fa-gift text-success',
                    title: 'Redeem Points',
                    description: 'Use your earned points to redeem exciting rewards and choose from a wide range of eco-friendly products, discounts, and vouchers.'
                },
                {
                    icon: 'fas fa-crown text-success',
                    title: 'Free & Premium',
                    description: 'Choose between a free or upgrade to a premium membership to earn double points. Premium members get access to rewards & offers.'
                },
                {
                    icon: 'fas fa-ticket-alt text-success',
                    title: 'Easy Voucher Management',
                    description: 'Admins can create unique vouchers for users, which can be easily scanned and redeemed at partner shops.'
                },
                {
                    icon: 'fas fa-chart-line text-success',
                    title: 'User Analytics',
                    description: 'Monitor user activity with detailed analytics. Track the number of points earned and redeemed, task completion rates.'
                },
                {
                    icon: 'fas fa-users text-success',
                    title: 'Community & Collaboration',
                    description: 'Choose between a free or upgrade to a premium membership to earn double points. Premium members get access to rewards & offers.'
                }
            ]
        };
    },
    controllerAs: 'vm' // Use `vm` instead of `$scope`
});
