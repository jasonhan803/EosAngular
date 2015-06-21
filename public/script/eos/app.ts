/// <reference path="../typings/angularjs/angular.d.ts"/>

module eos {
  angular.module('eos', ['ngMaterial']);

  angular.module('eos').run(run);

  function run($log) {
    $log.debug('hello world!');
    // body...
  }



  class MainCtrl {

    test:string;
    on:boolean;

    constructor(){
      var vm = this;

      vm.test = 'world';
      vm.on = false;
    }

  }

  angular.module('eos').controller('MainCtrl', MainCtrl);

}
