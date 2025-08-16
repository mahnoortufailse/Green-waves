// contact-us.component.js
angular.module('myApp').component('contactUsComponent', {
    templateUrl: '/app/views/contactUs.component.html',
    controller: function () {
        var vm = this;
        vm.formData = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };

        vm.submitForm = function () {
            alert('Message sent successfully!');
            console.log('Form Data:', vm.formData);
            vm.formData = { name: '', email: '', phone: '', message: '' }; // Reset form
        };
    }
});
