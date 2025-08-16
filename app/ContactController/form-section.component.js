angular.module('myApp').component('formSection', {
  templateUrl: 'app/views/ContactView/form-section.component.html',
  controller: function() {
    console.log("formSection component loaded!"); // Debugging
    this.contact = {
      phone: '+123 456 7890',
      email: 'info@example.com'
    };
  }
});
