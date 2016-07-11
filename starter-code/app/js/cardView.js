angular.module('CardsAgainstAssembly')
  .directive('card', cardView);

  function cardView(){
    var directive = {};
      directive.restrict = 'E';
      directive.replace = true;
      directive.templateUrl = "_cardView.html";
    return directive;
  }
