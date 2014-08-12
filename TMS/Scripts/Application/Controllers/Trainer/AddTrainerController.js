"use strict";

(function (app) {
    app.controller("AddTrainerController", [
         "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {

             $scope.newTrainer = {};
            
             $scope.save = function () {
                 $scope.newTrainer.employeeId = 1; // this will be change later
                 $scope.newTrainer.userId = 1;     // this will be change later
                 $scope.newTrainer.trainerType = 1; // this will be change later

                 service.post("/api/Trainer", $scope.newTrainer).then(function (result) {
                     alert("Saved Successfully!!!");
                     if (!result.preserveInput) {
                         $scope.newTrainer.name = "";
                         $scope.newTrainer.description = "";
                         $scope.newTrainer.employeeId = "";
                         $scope.newTrainer.userId = "";
                         $scope.newTrainer.trainerType = "";
                     }
                 },
                     function () {
                         alert("0 Record Saved!!!");
                     });
             };
         }
    ]);
})(angular.module("tmsApp"));
