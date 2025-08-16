angular.module('myApp')
    .component('footerComponent', {
        templateUrl: './app/views/footer.component.html', // Ensure the file exists
        controller: function() {
            console.log('Navbar component loaded!');
        }
    });
