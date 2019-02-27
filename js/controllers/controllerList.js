app.controller("controllerList", function($scope){

    $scope.user = {};
    $scope.user.email = "";
    $scope.user.password = "";
    $scope.user.gender = "";

    $scope.listeUtilisateurs = [];
    let newUtilisateur = {
        'email': "test@gmail.com",
        'password': '1234',
        'gender': "o"
    };
    $scope.listeUtilisateurs.push(newUtilisateur);

    $scope.reset = function() {
        $scope.user = {};
        $scope.user.email = "";
        $scope.user.password = "";
        $scope.user.gender = "";
    };

    $scope.submit = function() {
        $scope.listeUtilisateurs.push($scope.user);
        $scope.reset();
    };

});