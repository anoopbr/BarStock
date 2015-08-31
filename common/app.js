(function() {

  angular.module('barstock', ['ngRoute']).config(moduleConfig);

  function moduleConfig($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '../order/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'hctrl'
      })
      .when('/summary', {
        templateUrl: '../summary/summary.html',
        controller: 'SummaryCtrl',
        controllerAs: 'sctrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }

})();