"use strict";

(function(app) {
    app.controller("BaseController", [
        "$scope", "$location", "identityService", function ($scope, $location, identityService) {
            $scope.redirectToLogin = function() {
                $location.path("/account/login");
            };

            $scope.redirectToHome = function () {
                $location.path("/home");  //Home
            };

            $scope.logout = function() {
                identityService.logout().success(function() {
                    identityService.clearAccessToken();
                    identityService.clearAuthorizedUserData();
                    $scope.redirectToLogin();
                });
            };

            $scope.viewFrienRequest = function() {
                $location.path("/friendRequest/");
            };

            $scope.search = function (searchKey) {
                if (identityService.isLoggedIn()) {
                    $location.path("/search/" + searchKey);
                } else {
                    $scope.redirectToLogin();
                }
            };
            var signalRConnection = signalRConnectionService.getSignalRConnection();
            signalRConnection.client.myNotification = function (message, userId) {
                if (userId == $rootScope.authenticatedUser.id) {
                    notifierService.notify({
                        responseType: "success",
                        message: message
                    });
                    console.log(message);
                    $scope.$apply();
                }
                console.log(name);
            };
        }
    ]);
})(angular.module("tmsApp"));