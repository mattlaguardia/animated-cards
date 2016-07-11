angular.module('CardsAgainstAssembly')
  .controller('cardsController', ['$scope', '$http', function($scope, $http){

    $scope.hideMe = function(){
      $scope.answerHidden = true;
      if($scope.answerHidden === true){
        return false;
      } else {
        $scope.answerHidden = false;
        return true;
      }
    };

    $http.get('https://fast-sands-24095.herokuapp.com/api/flashcards')
      .then(function(res, err){
        if(err){
          console.log("Error: "+ err)
        } else {
          for(var i=0; i<res.data.length; i++){
            $scope.cards.push(res.data[i])
          }
        }
      })

    $scope.cards = [
      {question: "What is Batman's guilty pleasure?", answer: "Ben Afflac", answerHidden: true},
      {question: "I'm sorry professor, I couldn't complete my homework because _________.", answer: "Ben ate it.", answerHidden: true},
      {question: "I get by with a little help from _________.", answer: "Pokemon", answerHidden: true},
      {question: "_________. It's a trap!", answer: "OMG!", answerHidden: true},
      {question: "The class field trip was completely ruined by _________.", answer: "a volcano!", answerHidden: true},
      {question: "What's my secret power?", answer: "undefined", answerHidden: true}
    ]
  }]);
