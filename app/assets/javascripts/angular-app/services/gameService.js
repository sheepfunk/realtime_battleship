/**
 * Created by skye on 5/4/16.
 */
angular.module('app.battleshipApp').factory("gameService", function($q, $http) {
    return {
        getGame: function (gameId) {
            var uri = '/games/' + gameId + '.json';
            var deferred = $q.defer();
            $http.get(uri)
                .success(function(response){
                    deferred.resolve(response);
                })
                .error(function(response, status) {
                    deferred.reject(response);
                });
            return deferred.promise;
        }
    };
});