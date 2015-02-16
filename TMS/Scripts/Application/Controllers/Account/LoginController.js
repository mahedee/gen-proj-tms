"use strict";

(function(app) {
    app.controller("LoginController", [
        //"$scope", "$location", "identityService", function ($scope, $location, identityService)
            "$scope", "identityService", function ($scope, identityService)
            {
            $scope.loginProviders = [];
            $scope.init = function() {
                if (identityService.isLoggedIn()) {
                    $scope.redirectToHome();
                } else {
                    identityService.getExternalLogins().then(function (result) {
                        if (result.data) {
                            $scope.loginProviders = result.data;
                        }
                    });
                }
            }();
            $scope.login = function (user) {
                $scope.loginFormSubmitted = true;
                if ($scope.LoginForm.$valid) {
                    $scope.loginInProgress = true;
                    identityService.login(user).success(function (data) {
                        $scope.loginInProgress = false;
                        if (data.userName && data.access_token) {
                            identityService.setAccessToken(data.access_token);
                            identityService.setAuthorizedUserData(data);
                            //alert("Login successfully!!");
                            //$scope.redirectToHome();
                            //$location.path("/home");

                            //$window.location = "#/";
                            //$location.redirectTo("/");
                            //$window.location.href = '#/';
                            //$location.path('#/');
                            window.location = "#/";
                        }
                    }).error(function (error) {
                        $scope.loginInProgress = false;
                        if (error.error_description) {
                            notifierService.notify({ responseType: "error", message: error.error_description });
                        }
                    });
                }
            };

            $scope.externalLogin = function(loginProvider) {

                sessionStorage["state"] = loginProvider.state;
                sessionStorage["loginUrl"] = loginProvider.url;
                // IE doesn't reliably persist sessionStorage when navigating to another URL. Move sessionStorage temporarily
                // to localStorage to work around this problem.
                identityService.archiveSessionStorageToLocalStorage();
                window.location = loginProvider.url;
            };
        }
    ]);
})(angular.module("tmsApp"));