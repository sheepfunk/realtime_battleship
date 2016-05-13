angular.module('app.battleshipApp').controller("MoveCtrl", ['$scope', '$window', '$log', 'gameService', function($scope, $window, $log, gameService) {

    $scope.game;
    $scope.welcome = "Hi Sailor!";
    $scope.$log = $log;

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

    // https://github.com/mikeatlas/realtime-rails/blob/master/app/views/realtime/_realtime_message_console_logger.html.erb
    debugger;
    if ($window.realtime.enabled && $window.realtime.eventBus){
        // handle events in the queue with eventing
        var realtimeMessageEventConsoleLogger = function(message) {

            $scope.message = "Hi";
            $scope.message = message;
            $scope.message = "Muffin";
        };
        $window.realtime.eventBus.on('realtimeMessage', realtimeMessageEventConsoleLogger);

    } else if ($window.realtime.enabled) {
        // handle events in the queue without eventing
        messageQueueConsoleLogger = function() {
            message = window.realtime.messageQueue.shift();
            if (message) {
                $scope.message = "Hi";
                $scope.message = message;
                $scope.message = "Muffin";
            }
        };
        setInterval(messageQueueConsoleLogger, 100);

    } else {
        console.log('Error: Realtime was not enabled.')
    }




}]);
