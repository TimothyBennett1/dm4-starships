 angular.module("Starship")
 .service("starshipService", function($http, $q) {
    var baseUrl = "http://swapi.co/api/";
    var nextPage = "";

    this.getStarships = function(starshipUrlList) {
      var deffered = $q.defer();
      var starships = [];
      starshipUrlList.forEach(function(url) {
        $http.get(url).then( function(starship) {
          starships.push(starship.data);
          if (starships.length === starshipUrlList.length) {
            deffered.resolve(starships);
          }
        });
      });
      return deffered.promise;
    }

    this.getCharacters = function() {
      if(nextPage) {
        return $http.get(nextPage).then(savedNextPage)
      }
      return $http.get(baseUrl + "people").then(savedNextPage);
    }

    function savedNextPage(result) {
      nextPage = result.data.next;
      return result;
    }











 });
