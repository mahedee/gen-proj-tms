"use strict";

(function (app) {
    app.controller("ListTrainerController", [
        "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {
            service.get("/api/Trainer").success(function (result) {
                if (result.length) {
                    $scope.data = result;
                }
            });
        }
    ]);
})(angular.module("tmsApp"));