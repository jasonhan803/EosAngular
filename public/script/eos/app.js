/// <reference path="../typings/angularjs/angular.d.ts"/>
var eos;
(function (eos) {
    angular.module('eos', ['ngMaterial']);
    angular.module('eos').run(run);
    function run($log) {
        $log.debug('hello world!');
    }
    var MainCtrl = (function () {
        function MainCtrl() {
            var vm = this;
            vm.test = 'world';
            vm.on = false;
        }
        return MainCtrl;
    })();
    angular.module('eos').controller('MainCtrl', MainCtrl);
})(eos || (eos = {}));
