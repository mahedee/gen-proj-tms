"use strict";

(function (app) {
    app.controller("ListTrainingCategoryController", [
        "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {
            service.get("/api/TrainingCategory").success(function (result) {
                if (result.length) {
                    $scope.data = result;
                }
            });
        }
    ]);
})(angular.module("tmsApp"));