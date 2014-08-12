"use strict";

(function (app) {
    app.controller("DeleteTrainingController", [
        "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {

            //alert("delete controller." + $routeParams.id);
            var config = {
                //headers: identityService.getSecurityHeaders(),
                method: 'DELETE',
                params: {
                    id: $routeParams.id
                }
            };
            service.remove("/api/Training", config).success(function (data) { //Service.remove to remove data
                //alert("Data Delete Successfully !!!");
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




