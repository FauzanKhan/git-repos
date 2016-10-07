var app = angular.module('gitRepos', ['ngRoute']);

angular.module('gitRepos').run(['$templateCache', function($templateCache) {$templateCache.put('partials/search.html','<div class="search-container">\n  <input type="text" class="search-input"\n          ng-change="searchUser()"\n          ng-model="keyword"\n          ng-model-options="{ debounce: 200 }"\n          placeholder="Search Github Users" />\n  <div class="result-container">\n    <ul class="results-list">\n      <li class="results-list__item" ng-repeat="user in results" ng-click="selectUser(user)">\n        <div class="result-item clearfix">\n          <div class="result-item__image">\n            <img src="{{user.avatar_url}}" alt="" width="60px">\n          </div>\n          <div class="result-item__name">\n            <span>{{user.login}}</span>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class="message-container" ng-if="message">\n    <p>{{message}}</p>\n  </div>\n</div>\n');
$templateCache.put('partials/user.html','<div class="user-info" ng-if="isDataAvailable">\n  <img src="{{user.avatar_url}}" alt="" height="200px" ng-if="user.avatar_url">\n  <h1>\n    <a class="text-primary text-no-decoration" href="{{user.html_url}}" target="_blank">{{user.login}}</a>\n  </h1>\n  <h2>{{repos.length}} Repos</h2>\n</div>\n<div class="user-repos">\n  <div>\n    <ol class="repo-list">\n      <li class="repo-list__item" ng-repeat="repo in repos">\n        <div class="clearfix repo">\n          <a class="repo__link" href="{{repo.html_url}}" target="_blank">{{repo.name}}</a>\n          <span class="repo__info float-right hide-on-medium-below">(\n            <span>{{repo.language}}</span>\n            <span class="divider">|</span>\n            <span>{{repo.stargazers_count}} Stars</span>\n            <span class="divider">|</span>\n            <span>{{repo.forks_count}} Forks</span>\n          )</span>\n        </div>\n      </li>\n    </ol>\n  </div>\n</div>\n<div ng-if="!isDataAvailable">\n  <p class="text-large text-center">{{message}}</p>\n</div>\n');}]);
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

app.constant('messages', {
  noResults: "The User does not exist.",
  noResponse: "Something went wrong. Please Try Again!",
  noRepos: "The user has no Repositories",
  inProgress: "Searching...",
  fetchingData: "Fetching Data...",
  failedRequest: "Failed Request. Please Try Again!"
});

app.controller('mainController', function($scope){
  $scope.name = 'Main';
});

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

app.factory('userFactory', function(){
  return {
    selectedUser: null
  }
})
