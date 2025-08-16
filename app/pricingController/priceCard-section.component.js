angular.module('myApp').component('priceCardSection', { 
    templateUrl: 'app/views/PricingViews/priceCard-section.component.html', // Ensure this path is correct
    controller: function ($scope) {
    $scope.plans = [
        {
            name: 'Basic',
            price: '$0',
            description: 'Perfect for using in a personal website or a client project.',
            benefits: [
                'Double Points for Every Task',
                'Premium Rewards',
                'Priority Support and Assistance',
                'Special Events & Webinars',
                'New Features and Updates',
                'Higher Chances in Raffle Gifts'
            ]
        },
        {
            name: 'Premium',
            price: '$29',
            description: 'Perfect for using in a personal website or a client project.',
            benefits: [
                'Double Points for Every Task',
                'Premium Rewards',
                'Priority Support and Assistance',
                'Special Events & Webinars',
                'New Features and Updates',
                'Higher Chances in Raffle Gifts'
            ]
        }
    ];
}});