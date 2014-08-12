"use strict";

(function (app) {
    app.controller("AddTrainingController", [
         "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {
             //$(document).foundation();
             // if (identityService.isAuthenticated()) {
             $scope.newTraining = {};

        //     $scope.aTSReferenceList = [
        //{ refId: 1,refName : 'A' },       
        //{ refId: 2, refName: 'B' },
        //{ refId: 3, refName: 'C' }];

             var config = {
                 params: {
                     id: $routeParams.id
                 }
             };
             service.get("/api/ATS", config).success(function (data) {
                 $scope.aTSList = [];
                 $scope.aTSList = data;
                 $scope.aTSSelectedItem = data[1];
                 $scope.newTraining = null;
             
             });



             $scope.save = function () {
                 // if ($scope.newTrainingForm.$valid) {
                 service.post("/api/Training", $scope.newTraining).then(function (result) {

                     //.success(function (result) {

                     alert("Saved Successfully!!!");
                     //$window.location = "#/";
                     //$location.redirectTo("/");
                     if (!result.preserveInput) {
                         $scope.newTraining.title = "";
                         $scope.newTraining.description = "";
                         $scope.newTraining.startDate = "";
                         $scope.newTraining.endDate = "";
                         $scope.newTraining.atsId = "";
                         $scope.newTraining.Venue = "";
                         //$scope.newTraining.shortDescription = "";
                     }
                 },
                     function () {
                         alert("0 Record Saved!!!");
                     });

             };
         }
    ]);
})(angular.module("tmsApp"));
