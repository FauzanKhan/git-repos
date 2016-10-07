app.controller('userController', ['$scope', '$routeParams', '$http', 'userFactory', 'messages', function($scope, $routeParams, $http, userFactory, messages){

  var username = $routeParams.username;

  var getUserInfo = function() {
    if(!userFactory.selectedUser) {
      $http.get('https://api.github.com/users/' + username).then(function(res) {
        $scope.user = res.data;
      });
    }
    else {
      $scope.user = userFactory.selectedUser;
    }
  }

  var getRepos = function() {
    $http.get('https://api.github.com/users/' + username + '/repos').then(function(res){
      if(res.status == 200) {
        $scope.message = res.data.length > 0 ? null : messages.noRepos;
        $scope.repos = res.data;
        $scope.isDataAvailable = true;
      }
      else
        $scope.message = res.noResponse
    }).catch(function() {
      $scope.message = messages.failedRequest;
    });
  }

  var init = function() {
    $scope.message = messages.fetchingData;
    $scope.isDataAvailable = false;
    getUserInfo();
    getRepos();
  };

  init();

}]);
