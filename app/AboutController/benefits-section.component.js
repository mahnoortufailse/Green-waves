angular.module('myApp')
.component('benefitsSection', {
    templateUrl: './app/views/AboutViews/benefits-section.component.html',
    controller: function($scope) {
        $scope.benefits = [
            { number: '01', title: 'Increased Visibility', description: 'Get featured on our eco-friendly marketplace, making your services and products more accessible to sustainable-conscious consumers.' },
            { number: '02', title: 'Enhanced Brand Reputation', description: 'Align your brand with sustainability and corporate social responsibility, strengthening trust with environmentally-aware customers.' },
            { number: '03', title: 'Direct Engagement with Customers', description: 'Engage directly with eco-conscious customers and showcase your sustainability efforts through our dedicated business portal.' },
            { number: '04', title: 'Analytics and Insights', description: 'Gain powerful data insights on user interactions, sales trends, and customer preferences to refine and tailor your offerings.' },
            { number: '05', title: 'Support Eco-Friendly Initiatives', description: 'Be a part of promoting a more sustainable world by supporting and collaborating with eco-friendly industries and partners.' }
        ];
    }
});
