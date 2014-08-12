"use strict";

(function (app) {
    app.controller("DetailsTrainingController", [
        "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {
            

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
            

            //service.get("/api/Training").success(function (result) {
            //    if (result.length) {
            //        $scope.data = result;
            //    }
            //});
            

        }
    ]);
})(angular.module("tmsApp"));