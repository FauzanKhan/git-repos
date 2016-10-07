describe('Search Controller', function() {

  var $rootScope, $scope, controller;
  beforeEach(function() {
    module('gitRepos');
    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')('searchController', {$scope: $scope});
    });
  });

  it('Should not display a message initially', function() {
    expect($scope.message).toBeUndefined();
  });

  it('Displays a message while search is in progress', function() {
    $scope.searchUser();
    expect($scope.message).toBeDefined();
  });

})
