angular.module('myApp').component('pricingPlan', {
    templateUrl: 'app/views/PricingViews/pricing-plan.component.html', // Ensure this path is correct
    controller: function () {
        this.plans = [
            {
                name: "Golden",
                popular: false,
                details: [
                    "Featured listing on app",
                    "Up to 50 products",
                    "Advanced analytics",
                    "Advanced analytics",
                    "Monthly promotional campaigns",
                    "Enhanced community engagement"
                ]
            },
            {
                name: "Diamond",
                popular: true,
                details: [
                    "Featured listing on app & website",
                    "Up to 200 products",
                    "Comprehensive analytics",
                    "Comprehensive analytics",
                    "Bi-weekly promotional campaigns",
                    "Priority engagement opportunities"
                ]
            },
            {
                name: "Platinum",
                popular: false,
                details: [
                    "Premium listing on app & website",
                    "Unlimited products",
                    "Tailored business insights",
                    "Tailored business insights",
                    "Weekly promotional campaigns",
                    "Exclusive engagement opportunities"
                ]
            }
        ];

        this.features = [
            { name: "Price" },
            { name: "Visibility" },
            { name: "Products" },
            { name: "Analytics" },
            { name: "Promotions" },
            { name: "Engagement" }
        ];
    }
});
