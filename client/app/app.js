(function() {
  var app = angular.module('notely', [
    'ui.router','notely.notes'
  ]);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }

  config['$inject'] = ['$stateProvider', '$urlRouterProvider'];
  app.config(config);
})();
