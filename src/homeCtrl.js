 angular.module("Starship")
 .controller("homeCtrl", function($scope, starshipService) {

   $scope.characters = [];
   $scope.getCharacters = function() {
     starshipService
    .getCharacters()
    .then( function (characters) {
        $scope.characters = characters.data.results;
    })
    .catch(function(err) {
      console.error("Something broke" + err);
    })
  };
  $scope.getCharacters();

  $scope.getStarships = function(starshipUrlList) {
    starshipService.getStarships(starshipUrlList)
    .then(function(starships) {
      
      $scope.starships = starships;
    }).catch(function(err) {
      console.error(err);
    });

  }
  function init() {
    $scope.characters = [];
    $scope.starships = [];
    $scope.getCharacters();
  }

  });
