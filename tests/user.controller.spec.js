describe('User Controller', function() {

  var $rootScope, $scope, controller, userFactory;
  beforeEach(function() {
    module('gitRepos');
    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')('userController', {$scope: $scope});
      userFactory = $injector.get('userFactory');
    });
  });

  it('Sets gets the user from usersFactory if available', function() {
    var user = {login: 'dummy'};
    userFactory.selectedUser = user;
    controller.getUserInfo();
    expect($scope.user).toBe(user);
  });

  it('gets User Info on initialization', function() {
    spyOn(controller, 'getUserInfo');
    controller.init();
    expect(controller.getUserInfo).toHaveBeenCalled();
  });

  it('gets User Repos on initialization', function() {
    spyOn(controller, 'getRepos');
    controller.init();
    expect(controller.getRepos).toHaveBeenCalled();
  })

})
