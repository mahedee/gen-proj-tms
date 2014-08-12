"use strict";

(function (app) {
    app.controller("LogOffController", [
        "$scope", "$routeParams", "$location", "apiService", function ($scope, $routeParams, $location, service) {
 

            identityService.logout().success(function () {
                identityService.clearAccessToken();
                identityService.clearAuthorizedUserData();
                window.location = "#/account/login";
                //$scope.redirectToLogin();
            });
        }
    ]);
})(angular.module("tmsApp"));