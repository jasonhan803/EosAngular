angular.module('eos', ['ngMaterial']);

angular.module('eos').run(run);

function run($log) {
  $log.debug('hello world 2!')
  // body...
}

angular.module('eos').controller('MainCtrl', MainCtrl);
function MainCtrl(){
  var vm = this;

  vm.hello = 'world';
}
