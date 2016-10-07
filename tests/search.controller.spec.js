describe("Search Controller", function() {

  var $rootScope, $scope, controller;
  beforeEach(function() {
    module('gitRepos');
    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')('searchController', {$scope: $scope});
    });
  });

  describe("Init", function() {

    it("Sets displays a message while search is in progress", function() {
      expect($scope.message).toBeUndefined();
      $scope.searchUser();
      expect($scope.message).toBeDefined();
    });

    it("Sets displays a message while search is in progress", function() {
      expect($scope.message).toBeUndefined();
      $scope.searchUser();
      expect($scope.message).toBeDefined();
    });

  })

})
