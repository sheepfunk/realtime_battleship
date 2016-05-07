/**
 * Created by skye on 5/4/16.
 */
angular.module('app.battleshipApp').service("gameService", function($q, $http) {
    return {
        getGame: function (gameId) {
            var uri         = '/games/' + gameId + '.json';
            var deferred    = $q.defer();
            $http.get(uri).then(function(response, status){
                deferred.resolve(response['data']);
            });
            return deferred.promise;
        }
    };
});