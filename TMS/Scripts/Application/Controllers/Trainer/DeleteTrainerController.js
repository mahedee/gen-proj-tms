"use strict";

(function (app) {
    app.controller("DeleteTrainerController", [
        "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {

            var config = {
                params: {
                    id: $routeParams.id
                }
            };

            service.get("/api/Trainer", config).success(function (data) {
                $scope.trainer = data;
            });


            $scope.delete = function ( trainer)
            {
                var config1 =
                    {
                        //method: 'DELETE',
                        params: {
                            id: $routeParams.id
                        }
                    };

                service.remove("/api/Trainer", config1).success(function (data) {
                    alert("Data Delete Successfully !!!");
                    //$scope.trainer1 = data;
                    window.location = "#/trainer/all";
                    

                })
                    .error(function (error) {
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
                });;
            }

            //service.remove("/api/Trainer", config).success(function (data) { //Service.remove to remove data
            //    //alert("Data Delete Successfully !!!");
            //    $scope.trainer = data;
            //    //notifierService.notify({ responseType: "success", message: "Profile data fetched successfully." });
            //});

        }
    ]);
})(angular.module("tmsApp"));




