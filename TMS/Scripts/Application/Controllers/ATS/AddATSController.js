"use strict";

(function (app) {
    app.controller("AddATSController", [
         "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {

             $scope.newATS = {};
             $scope.save = function () {

                 $scope.newATS.trainerId = 1; //This is now hard coded, this should come from UI
                 $scope.newATS.statusId = 1; //This is now hard coded, this should come from UI
                 
                 service.post("/api/ATS", $scope.newATS).then(function (result) {
                     alert("Saved Successfully!!!");
                     if (!result.preserveInput) {
                         $scope.newATS.trainingCode = "";
                         $scope.newATS.iteration = "";
                         $scope.newATS.trainerId = "";
                         $scope.newATS.topic = "";
                         $scope.newATS.batchSize = "";
                         $scope.newATS.startDate = "";
                         $scope.newATS.endDate = "";
                         $scope.newATS.trainersResponsibility = "";
                         $scope.newATS.statusId = "";
                         $scope.newATS.calendarYear = "";                       
                     }
                 },
                     function () {
                         alert("0 Record Saved!!!");
                     });
             };
         }
    ]);
})(angular.module("tmsApp"));
