(function() {
    angular.module('app')
        .service('LevelService', LevelService)

    function LevelService() {
        const vm = this
        vm.level = 1

        vm.setLevel = function(id) {
            vm.level = id
        }

        vm.getLevel = function() {
            return vm.level
        }
    }
})()