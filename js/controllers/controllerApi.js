app.controller("controllerApi", function($scope, $http, $log){

    $http.get('https://geo.api.gouv.fr/departements')
        .then(
            function(result) {
                $scope.listeDeps = result.data;
            },
            function(error) {
                $log.error("Erreur de chargement ", error)
            }
        );

});