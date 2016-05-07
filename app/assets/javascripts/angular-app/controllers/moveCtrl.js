angular.module('app.battleshipApp').controller("MoveCtrl", ['$scope', 'gameService', function($scope, gameService) {
    $scope.game;

    $scope.init = function(playerId, gameId)
    {
        $scope.playerId = playerId;
        $scope.gameId = gameId;
        $scope.game = gameService.getGame($scope.gameId);
        debugger;
    };


    $scope.welcome = "Hi Sailor!";

}]);
