var myApp = angular.module('myApp', ['myServices']);

myApp.controller('MyController', ['$scope', 'GraphFacebook', 
  function($scope, GraphFacebook) {
    $scope.getGraph = function() {
      $scope.result = GraphFacebook.getJSONP($scope.graph);
    };
}]);

var myServices = angular.module('myServices', ['ngResource']);

myServices.factory('GraphFacebook', ['$resource',
  function($resource) {
    return $resource('https://graph.facebook.com/:username', {}, {
      getJSONP: {
        method: 'JSONP',
        params: {
          callback: 'JSON_CALLBACK'
        }
      }
    });
  }
]);