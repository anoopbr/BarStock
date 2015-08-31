(function() {

  angular.module('barstock')
    .controller('SummaryCtrl', function($scope, Order) {
      $scope.drinksOrdered = Order;

      $scope.totalOrder = function() {
        var totalOrder = 0;
        angular.forEach($scope.drinksOrdered, function(drinkOrdered) {
          totalOrder += drinkOrdered.quantity;
        });
        return totalOrder;
      };
    });
})();