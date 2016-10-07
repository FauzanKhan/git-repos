app.controller('searchController', ['$scope', '$http', '$location', 'messages', 'userFactory', function($scope, $http, $location, messages, userFactory){

  $scope.searchUser = function() {
    $scope.message = messages.inProgress;
    $http.get('https://api.github.com/search/users?q=' + $scope.keyword).then(function(res) {
      if(res.status == 200){
        $scope.message = res.data.items.length > 0 ? null : messages.noResults;
        $scope.results = res.data.items;
      }
      else
        $scope.message = messages.noResponse;
    }).catch(function(){
      $scope.results = null;
      $scope.message = messages.failedRequest;
    })
  }

  $scope.selectUser = function(user) {
    userFactory.selectedUser = user;
    $location.path('/search/' + user.login);
  }

}]);
