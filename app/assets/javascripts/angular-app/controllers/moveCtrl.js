angular.module('app.battleshipApp').controller("MoveCtrl", ['$scope', 'gameService', function($scope, gameService) {
    $scope.game;

    $scope.init = function(playerId, gameId)
    {
        $scope.playerId = playerId;
        $scope.gameId = gameId;
        gameService.getGame($scope.gameId).then(
            /* success function */
            function(game) {
                $scope.game     = game;
                $scope.myTurn   = ($scope.playerId == $scope.game.turn_id);
            },
            /* error function */
            function(result) {
                console.log("Failed to get the game, result is " + result);
            }
        );
    };




    $scope.welcome = "Hi Sailor!";


}]);
