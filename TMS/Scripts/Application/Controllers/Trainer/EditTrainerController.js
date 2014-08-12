"use strict";

(function (app) {
    app.controller("EditTrainerController", [

          "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {
              // alert("Its for editing..");

              var config = {
                  //headers: identityService.getSecurityHeaders(),
                  params: {
                      id: $routeParams.id
                  }
              };
              service.get("/api/Trainer", config).success(function (data) {
                  $scope.trainer = data;
                  //notifierService.notify({ responseType: "success", message: "Profile data fetched successfully." });
              });


              $scope.update = function (trainer) {
                  //alert("Working..");
                  //$scope.profileEditFormSubmitted = true;
                  //if ($scope.ProfileEditForm.$valid) {
                  //$scope.profileEditInProgresss = true;
                  config = {
                      //headers: identityService.getSecurityHeaders()
                      //id: training.id,
                      //data: $scope.training
                  };
                  //training.id = training.id;
                  service.put("/api/Trainer/", $scope.trainer).success(function () {
                      alert("Data update successfully");
                      window.location = "#/trainer/all";
                      //$scope.profileEditInProgresss = false;
                      //$rootScope.authenticatedUser.userName = user.email;
                      //notifierService.notify({ responseType: "success", message: "Profile data updated successfully." });
                  }).error(function (error) {
                      //$scope.profileEditInProgresss = false;
                      if (error.modelState) {
                          $scope.localRegisterErrors = _.flatten(_.map(error.modelState, function (items) {
                              return items;
                          }));
                      } else {
                          var data = {
                              responseType: "error",
                              message: error.message
                          };
                          //notifierService.notify(data);
                      }
                  });
                  //}
              };

          }
    ]);
})(angular.module("tmsApp"));