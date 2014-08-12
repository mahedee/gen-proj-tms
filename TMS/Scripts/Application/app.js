"use strict";

(function () {
    var tmsApp = angular.module("tmsApp", ["ngRoute"]);
    tmsApp.run(function ($rootScope) {
        $rootScope.$on("$viewContentLoaded", function () {
            $(document).foundation();
        });
    });

    tmsApp.config([
        "$routeProvider", function ($routeProvider) {
            $routeProvider
                .when("/", {
                templateUrl: "/Templates/Default/Default.html",
                controller: "DefaultController"

                }).when("/home", {
                    templateUrl: "/Templates/Default/Default.html",
                    controller: "DefaultController"

                }).when("/training/all", {
                controller: "ListTrainingController",
                templateUrl: "/Templates/Training/All.html"

            }).when("/training/add", {
                controller: "AddTrainingController",
                templateUrl: "/Templates/Training/Add.html"

            }).when("/training/:id", {
                controller: "DetailsTrainingController",
                templateUrl: "/Templates/Training/Details.html"

            }).when("/training/delete/:id", {
                controller: "DeleteTrainingController",
                templateUrl: "/Templates/Training/Delete.html"

            }).when("/training/edit/:id", {
                templateUrl: "/Templates/Training/Edit.html",
                controller: "EditTrainingController"

            }).when("/default/uconstruction", {
                templateUrl: "/Templates/Default/UConstruction.html",
                controller: "UConstructionController"

            }).when("/trainingCategory/all", {
                templateUrl: "/Templates/trainingCategory/All.html",
                controller: "ListTrainingCategoryController"

            }).when("/trainingCategory/add", {
                templateUrl: "/Templates/trainingCategory/Add.html",
                controller: "AddTrainingCategoryController"

            }).when("/trainingCategory/:id", {
                controller: "DetailsTrainingCategoryController",
                templateUrl: "/Templates/trainingCategory/Details.html"

            }).when("/trainingCategory/delete/:id", {
                controller: "DeleteTrainingCategoryController",
                templateUrl: "/Templates/trainingCategory/Delete.html"

            }).when("/trainingCategory/edit/:id", {
                controller: "EditTrainingCategoryController",
                templateUrl: "/Templates/trainingCategory/Edit.html"

            }).when("/aTS/all", {
                controller: "ListATSController",
                templateUrl: "/Templates/ATS/All.html"

            }).when("/aTS/add", {
                controller: "AddATSController",
                templateUrl: "/Templates/ATS/Add.html"

            }).when("/aTS/:id", {
                controller: "DetailsATSController",
                templateUrl: "/Templates/ATS/Details.html"

            }).when("/aTS/delete/:id", {
                controller: "DeleteATSController",
                templateUrl: "/Templates/ATS/Delete.html"

            }).when("/aTS/edit/:id", {
                controller: "EditATSController",
                templateUrl: "/Templates/ATS/Edit.html"

<<<<<<< .mine
            }).when("/account/register", {
                controller: "RegisterController",
                templateUrl: "/Templates/Account/Register.html"
=======
            }).when("/trainer/all", {
                controller: "ListTrainerController",
                templateUrl: "/Templates/Trainer/All.html"
>>>>>>> .r66

<<<<<<< .mine
            }).when("/account/login", {
                controller: "LoginController",
                templateUrl: "/Templates/Account/Login.html",
                reloadOnSearch: false

            })
=======
           }).when("/trainer/add", {
               controller: "AddTrainerController",
               templateUrl: "/Templates/Trainer/Add.html"

           }).when("/trainer/:id", {
               controller: "DetailsTrainerController",
               templateUrl: "/Templates/Trainer/Details.html"

           }).when("/trainer/delete/:id", {
               controller: "DeleteTrainerController",
               templateUrl: "/Templates/Trainer/Delete.html"

           }).when("/trainer/edit/:id", {
               controller: "EditTrainerController",
               templateUrl: "/Templates/Trainer/Edit.html"
           })


>>>>>>> .r66
                .otherwise({ redirectTo: "/" });

        }
    ]);
})();

/*

var tmsApp = angular.module("tmsApp", ["ngRoute"]); //module = tmsApp


tmsApp.config(function ($routeProvider) {
    

    $routeProvider
    
    .when("/", {        
        templateUrl: "/Templates/Default/Default.html",
        controller: "UConstructionController"
        
    }).when("/training/all", {
        controller: "ListTrainingController",
        templateUrl: "/Templates/Training/All.html"

    }).when("/training/add", {
        controller: "AddTrainingController",
        templateUrl: "/Templates/Training/Add.html"

    }).when("/training/:id", {
        controller: "DetailsTrainingController",
        templateUrl: "/Templates/Training/Details.html"

    }).when("/training/delete/:id", {
        controller: "DeleteTrainingController",
        templateUrl: "/Templates/Training/Delete.html"

    }).when("/training/edit/:id", {
        templateUrl: "/Templates/Training/Edit.html",
        controller: "EditTrainingController"
        
    }).when("/default/uconstruction", {
        templateUrl: "/Templates/Default/UConstruction.html",
        controller: "UConstructionController"
        
    }).otherwise({ redirectTo: "/" });

    //$routeProvider.otherwise("/");
    //$routePro vider.otherwise("/");
    //$routeProvider.otherwise({ redirectTo: "/" });
});

*/