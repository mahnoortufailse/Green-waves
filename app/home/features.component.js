angular.module('myApp').component('featuresComponent', {
    templateUrl: 'app/views/features.component.html',
    controller: function() {
        var vm = this;

        // Features Data with Correct Icons
        vm.features = [
            {   
                id: 1,
                image: '/images/feature1.png',
                icon: 'fas fa-seedling', // Eco-friendly icon
                title: 'Earn Points for Eco-Friendly Actions',
                description: 'Complete various eco-friendly tasks such as recycling, using public transport, or supporting green initiatives. Collect points and redeem them for rewards.'
            },
            {
                id: 2,
                image: '/images/feature2.png',
                icon: 'fas fa-gift', // Rewards/gift icon
                title: 'Redeem Points for Rewards',
                description: 'Use your points to get discounts, donate to charities, or enjoy exclusive benefits. Choose from a wide range of eco-friendly shopping discounts.'
            },
            {
                id: 3,
                image: '/images/feature3.png',
                icon: 'fas fa-crown', // Membership/loyalty program icon
                title: 'Free and Premium Memberships',
                description: 'Choose between a free or premium membership to unlock exclusive features and maximize your eco-friendly impact.'
            },
            {
                id: 4,
                image: '/images/feature4.png',
                icon: 'fas fa-ticket-alt', // Voucher/ticket icon
                title: 'Easy Voucher Management',
                description: 'Admins can create unique vouchers for users, which can be easily scanned and redeemed at partner shops. Track voucher usage and ensure secure, single-use transactions with unique barcodes.'
            },
            {
                id: 5,
                image: '/images/feature5.png',
                icon: 'fas fa-chart-line', // Analytics/stats icon
                title: 'User Analytics',
                description: 'Monitor user activity with detailed analytics. Track the number of users, points earned and redeemed, task completion rates, and more to gain valuable insights into engagement and platform performance.'
            },
            {
                id: 6,
                image: '/images/feature6.png',
                icon: 'fas fa-barcode', // Barcode icon for voucher tracking
                title: 'Secure Voucher Redemption',
                description: 'Admins can create unique vouchers for users, which can be easily scanned and redeemed at partner shops. Track voucher usage and ensure secure, single-use transactions with unique barcodes.'
            }
        ];
    }
});
