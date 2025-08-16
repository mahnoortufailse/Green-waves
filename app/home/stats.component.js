angular.module('myApp').component('statsComponent', {
    templateUrl: 'app/views/stats.component.html',
    controller: function () {
        var vm = this;
        vm.stats = [
            { icon: "fas fa-briefcase", value: "800+", label: "Companies" },
            { icon: "fas fa-user", value: "2050+", label: "Users" },
            { icon: "fas fa-download", value: "500K", label: "Downloads" },
            { icon: "fas fa-award", value: "45+", label: "Task Completed" }
        ];
    }
});
