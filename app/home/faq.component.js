angular.module('myApp').component('faqComponent', {
    templateUrl: './app/views/faq.component.html',
    controller: function () {
        var vm = this;
        vm.faqs = [
            {
                question: "What is the Green Wave Loyalty Card?",
                answer: "The Green Wave Loyalty Card is a platform where users can earn points by completing eco-friendly tasks and redeem these points for rewards.",
                isOpen: true // Set the first item to open by default
            },
            { question: "How do I download the app?", answer: "The Green Wave Loyalty Card is a platform where users can earn points by completing eco-friendly tasks and redeem these points for rewards.", isOpen: false },
            { question: "How do I earn points?", answer: "The Green Wave Loyalty Card is a platform where users can earn points by completing eco-friendly tasks and redeem these points for rewards.", isOpen: false },
            { question: "How much is each point worth?", answer: "The Green Wave Loyalty Card is a platform where users can earn points by completing eco-friendly tasks and redeem these points for rewards.", isOpen: false },
            { question: "What kind of rewards can I get?", answer: "The Green Wave Loyalty Card is a platform where users can earn points by completing eco-friendly tasks and redeem these points for rewards.", isOpen: false }
        ];

        vm.toggleFAQ = function (index) {
            vm.faqs[index].isOpen = !vm.faqs[index].isOpen;
        };
    }
});
