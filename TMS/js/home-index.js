//"use strict"; //show browser error
//home-index.js
var module = angular.module("homeIndex", []);


module.config(function ($routeProvider) {
    $routeProvider.when("/", {
        controller: "trainingController",
        templateUrl: "/templates/trainingView.html"
    });
    $routeProvider.when("/newmessage", {
        controller: "newTopicController",
        templateUrl: "/templates/newTopicView.html"
    });
    $routeProvider.when("/newTraining", {
        controller: "trainingEntryController",
        templateUrl: "/templates/TrainingEntryView.html"
    });


    $routeProvider.otherwise({ redirectTo: "/" });
    //$routeProvider.otherwise("/");
    //$routePro vider.otherwise("/");
    //$routeProvider.otherwise({ redirectTo: "/" });
});


function trainingController($scope, $http) {
    $scope.data = [];
    $scope.isBusy = true;
    //$scope.dataCount = 0;

    $http.get("/api/Training")
      .then(function (result) {
          // success
          angular.copy(result.data, $scope.data);
          // $scope.dataCount = result.data.length;
      },
      function () {
          // error
          alert("could not load topics");
      })
      .then(function () {
          $scope.isBusy = false;
      });
}

function newTopicController($scope, $http, $window) {
    $scope.newTopic = {};
    $scope.save = function () {
        $http.post("/api/v1/topics", $scope.newTopic)
        .then(function (result) {
            //success
            var newTopic = result.data;
            $window.location = "#/";
        },
        function () {
            //failure
            alert("");
        })


        //alert($scope.newTopic.title);
    };
}

function trainingEntryController($scope, $http, $window) {
    $scope.newTraining = {};
    $scope.save = function () {
        $http.post("/api/Training", $scope.newTraining)
        .then(function (result) {
            //success
            var newTopic = result.data;
            alert("Saved Successfully!!!");
            $window.location = "#/";
        },
        function () {
            //failure
            alert("0 Record Saved!!!");
        })


        //alert($scope.newTopic.title);
    };
}

module.controller('DeleteTrainingController', ['$scope', '$http', function ($scope, $http) {
    $scope.deleteTraining = function (Id)
    {
        $http({
            method: 'DELETE',
            url: '/api/Training/' + Id
        }).
       then(function (result) {
           //success
           alert("Data Delete Successfully !!!");
         
       },
      function () {
          //failure
          alert("0 Record Delete");
      })
    }
}]);






