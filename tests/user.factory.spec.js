describe('User Factory', function() {

  var $rootScope, $scope, factory;
  beforeEach(function() {
    module('gitRepos');
    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      factory = $injector.get('userFactory');
    });
  });

  it('Initializes selectedUser to null', function() {
    var user = factory.selectedUser;
    expect(user).toBe(null);
  });

  it('Sets selectedUser to correctValue', function() {
    var user = {login: 'dummy'};
    factory.selectedUser = user;
    expect(factory.selectedUser).toBe(user);
  });


})
