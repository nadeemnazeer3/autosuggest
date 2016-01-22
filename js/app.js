var app = angular.module('app', ["ngTouch", "angucomplete-alt"]);

app.controller('MainController', ['$scope', '$http', '$rootScope',
  function MainController($scope, $http, $rootScope) {
    $scope.remoteUrlRequestFn = function(str) {
      return {q: str};
    };


  }
]);
