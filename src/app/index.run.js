(function() {
  'use strict';

  angular
    .module('miOpinionInterface')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
