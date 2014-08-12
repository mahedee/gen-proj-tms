"use strict";

(function (app) {
    app.controller("DetailsTrainingCategoryController", [
        "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {

            //alert("Success");
            var config = {            
                params: {
                    id: $routeParams.id
                }
            };
            service.get("/api/TrainingCategory", config).success(function (data) {
                $scope.trainingCategory = data;
            });
        }
    ]);
})(angular.module("tmsApp"));