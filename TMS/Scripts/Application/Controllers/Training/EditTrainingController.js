"use strict";

(function (app) {
    app.controller("EditTrainingController", [
        //"$scope", "$rootScope", "$routeParams", "$location", "apiService", "notifierService", "identityService", function ($scope, $rootScope, $routeParams, $location, service, notifier, identityService) {
          "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {
         // alert("Its for editing..");
            
            var config = {
                //headers: identityService.getSecurityHeaders(),
                params: {
                    id: $routeParams.id
                }
            };
            service.get("/api/Training", config).success(function (data) {
                $scope.training = data;
                //notifierService.notify({ responseType: "success", message: "Profile data fetched successfully." });
            });
            

            $scope.update = function (training) {
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
                service.put("/api/Training/", $scope.training).success(function () {
                    window.location = "#/";
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
              

            //$(document).foundation();
            //if (identityService.isAuthenticated()) {
                //$scope.book = {};
                //$scope.categories = [];
                //service.get("/books/book/" + $routeParams.id).success(function (result) {
                //    if (result.data) {
                //        $scope.book = result.data;

                //        service.get("/categories/").success(function (category) {
                //            $scope.categories = category.data;
                //        });
                //    } else {
                //        $location.path("/").replace();
                //    }
                //});
        //    } else {
        //        identityService.createAccessDeniedResponse();
        //        $location.path("/account/login").replace();
        //    }
        //    $scope.update = function (book) {
        //        if (identityService.isAuthenticated() && $scope.BookEditForm.$valid) {
        //            service.post("/books/edit/", book).success(function (result) {
        //                notifier.notify(result.response);
        //            });
        //        }
           // };
        }
    ]);
        })(angular.module("tmsApp"));