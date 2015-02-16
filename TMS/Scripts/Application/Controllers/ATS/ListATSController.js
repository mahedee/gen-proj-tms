"use strict";

(function (app) {
    app.controller("ListATSController", [
        "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {
            service.get("/api/ATS").success(function (result) {
                if (result.length) {
                    $scope.data = result;
                }
            });
        }
    ]);
})(angular.module("tmsApp"));