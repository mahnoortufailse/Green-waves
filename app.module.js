var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./app/views/home.component.html",
            controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "./app/views/AboutViews/AboutPage.component.html",
            controller: "AboutController"
        })
        .when("/pricing", {
            templateUrl: "./app/views/PricingViews/pricingPage.component.html",
            controller: "pricingController"
        })
        .when("/contact", {
            templateUrl: "./app/views/ContactView/contactPage.component.html",
            controller: "contactController"
        })
       
        .otherwise({ redirectTo: "/" });
});
