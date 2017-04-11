(function() {
  'use strict';

  angular
    .module('miOpinionInterface')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm = this;
    vm.posts = [];

    $http.get('http://localhost:1337/posts').then(function(data){
console.log(data.data);
      vm.posts = data.data
    })
  }
})();
