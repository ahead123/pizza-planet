app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Pizza Medditeraneo',
      description: 'Fennel, sausage, ricotta, olive',
      price: 10.95
    },
    {
      name: 'Spaghetti Classico',
      description: 'Angel hair pasta, olive oil, lemon, garlic',
      price: 12.95
    },
    {
      name: 'Sea Bass',
      description: 'Blackened, rosemary, capers, lemon oil',
      price: 15.95
    }
  ];
  
   $scope.extras = [
    {
      name: 'Breadsticks',
      description: 'Old country butter, parmesan',
      price: 1.95
    },
    {
      name: 'Garlic Knots',
      description: 'Special dough, garlic butter toss',
      price: 2.95
    },
    {
      name: 'Olives',
      description: 'Italian vineyard green olives',
      price: 3.95
    }
  ];
  
}]);