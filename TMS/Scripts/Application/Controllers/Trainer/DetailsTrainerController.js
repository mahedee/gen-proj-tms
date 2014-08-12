"use strict";

(function (app) {
    app.controller("DetailsTrainerController", [
        "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {


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
        }
    ]);
})(angular.module("tmsApp"));