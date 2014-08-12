"use strict";

(function (app) {
    app.factory("identityService", [
        "$rootScope", "$http", "apiService", function ($rootScope, $http, apiService) {
            app.http = {
                get: function (url, config) {
                    return $http.get(url, this._config(config));
                },
                post: function (url, data, config) {
                    return $http.get(url, data, this._config(config));
                },
                _config: function (config) {
                    return $.extend({ headers: getSecurityHeaders() }, config || {});
                }
            };

            var setAuthorizedUserData = function (data) {
                $rootScope.authenticatedUser = data;
            };

            var clearAuthorizedUserData = function () {
                $rootScope.authenticatedUser = {};
            };

            var getAuthorizedHeaders = function (accessToken) {
                return { "Authorization": "Bearer " + accessToken };
            };

            var getSecurityHeaders = function () {

                var accessToken = sessionStorage["accessToken"] || localStorage["accessToken"];

                if (accessToken) {
                    return getAuthorizedHeaders(accessToken);
                }

                return {};
            };

            var setAccessToken = function (accessToken, persistent) {
                if (persistent) {
                    localStorage["accessToken"] = accessToken;
                } else {
                    sessionStorage["accessToken"] = accessToken;
                }
            };

            var clearAccessToken = function () {
                localStorage.removeItem("accessToken");
                sessionStorage.removeItem("accessToken");
            };

            var archiveSessionStorageToLocalStorage = function () {
                var backup = {};

                for (var i = 0; i < sessionStorage.length; i++) {
                    backup[sessionStorage.key(i)] = sessionStorage[sessionStorage.key(i)];
                }

                localStorage["sessionStorageBackup"] = JSON.stringify(backup);
                sessionStorage.clear();
            };

            var getExternalLogins = function () {
                var config = {
                    params: {
                        returnUrl: "/",
                        generateState: true
                    }
                };
                return apiService.get("/api/Account/ExternalLogins", config);
            };

            var getUserInfo = function (accessToken) {
                var headers;

                if (typeof (accessToken) !== "undefined") {
                    headers = getAuthorizedHeaders(accessToken);
                } else {
                    headers = getSecurityHeaders();
                }
                var config = {
                    headers: headers
                };
                return apiService.get("/api/Account/UserInfo", config);
            };

            var login = function (user) {
                var data = {
                    UserName: user.userName,
                    Password: user.password,
                    grant_type: "password"
                };
                return $http({
                    method: "POST",
                    url: "/token",
                    data: data,
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj) {
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        }
                        return str.join("&");
                    }
                });
            };

            var logout = function () {
                var config = {
                    headers: getSecurityHeaders()
                };
                return apiService.post("/api/Account/Logout", {}, config);
            };

            var register = function (user) {
                var config = {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                };
                return apiService.post("api/Account/Register", user, config);
            };


            var restoreSessionStorageFromLocalStorage = function () {
                var backupText = localStorage["sessionStorageBackup"],
                    backup;

                if (backupText) {
                    backup = JSON.parse(backupText);

                    for (var key in backup) {
                        sessionStorage[key] = backup[key];
                    }

                    localStorage.removeItem("sessionStorageBackup");
                }
            };

            var verifyStateMatch = function (fragment) {
                var state;

                if (typeof (fragment.access_token) !== "undefined") {
                    state = sessionStorage["state"];
                    sessionStorage.removeItem("state");

                    if (state === null || fragment.state !== state) {
                        fragment.error = "invalid_state";
                    }
                }
            };

            var getAccessToken = function () {
                return sessionStorage.getItem("accessToken") || localStorage.getItem("accessToken");
            };

            return app.identity = {
                getExternalLogins: getExternalLogins,
                getUserInfo: getUserInfo,
                login: login,
                logout: logout,
                getSecurityHeaders: getSecurityHeaders,
                getAuthorizedHeaders: getAuthorizedHeaders,
                register: register,
                setAuthorizedUserData: setAuthorizedUserData,
                clearAuthorizedUserData: clearAuthorizedUserData,
                setAccessToken: setAccessToken,
                getAccessToken: getAccessToken,
                clearAccessToken: clearAccessToken,
                archiveSessionStorageToLocalStorage: archiveSessionStorageToLocalStorage,
                restoreSessionStorageFromLocalStorage: restoreSessionStorageFromLocalStorage,
                verifyStateMatch: verifyStateMatch,
                isLoggedIn: getAccessToken
            };
        }
    ]);

})(angular.module("tmsApp"));