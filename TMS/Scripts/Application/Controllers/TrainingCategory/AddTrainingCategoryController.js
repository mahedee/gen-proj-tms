"use strict";

(function (app) {
    app.controller("AddTrainingCategoryController", [
         "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {
           
             $scope.newTrainingCategory = {};
             $scope.save = function () {
    
                 service.post("/api/TrainingCategory", $scope.newTrainingCategory).then(function (result) {
                     alert("Saved Successfully!!!");
                     if (!result.preserveInput) {
                         $scope.newTrainingCategory.Name = "";
                         $scope.newTrainingCategory.description = "";
                     }
                 },
                     function () {
                         alert("0 Record Saved!!!");
                     });
             };
         }
    ]);
})(angular.module("tmsApp"));
