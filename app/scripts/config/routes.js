app.config(['$routeProvider',
  function($routeProvider) {
  $routeProvider.
    when('/search', {
      templateUrl: 'partials/search.html',
      controller: 'searchController'
    }).
    when('/search/:username', {
      templateUrl: 'partials/user.html',
      controller: 'userController'
    }).
    otherwise({
      redirectTo: '/search'
    });
}]);
