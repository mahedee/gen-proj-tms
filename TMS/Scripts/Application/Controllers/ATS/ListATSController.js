"use strict";

(function (app) {
    app.controller("ListATSController", [
        "$scope", "identityService", "$routeParams", "$location", "apiService", function ($scope, identityService, $routeParams, $location, service) {

            //alert(localStorage.getItem("accessToken"));
            //alert(identityService.getAccessToken());
            //identityService.getUserInfo(identityService.getAccessToken());
            //$scope.init = function () {
            if (!identityService.isLoggedIn()) {
                window.location = "#/account/login";
                //$scope.redirectToLogin();
            } else {
                //$scope.postFetchInProgresss = true;
                var config = {
                    headers: identityService.getSecurityHeaders()
                };

                service.get("/api/ATS",config).success(function (result) {
                    if (result.length) {
                        $scope.data = result;
                    }
                });
            }
            //}
        }
    ]);
})(angular.module("tmsApp"));


/*


(function (app) {
    app.controller("ListATSController", [
        "$scope", "identityService", "$routeParams", "$location", "apiService", function ($scope, identityService, $routeParams, $location, service) {
            service.get("/api/ATS").success(function (result) {
                if (result.length) {
                    $scope.data = result;
                }
            });
        }
    ]);
})(angular.module("tmsApp"));

*/