"use strict";

(function (app) {
    app.controller("ListTrainingController", [
        "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {
            service.get("/api/Training").success(function (result) {
                if (result.length) {
                    $scope.data = result;
                }
            });
        }
    ]);
})(angular.module("tmsApp"));