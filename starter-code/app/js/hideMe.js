angular.module('CardsAgainstAssembly')
  .directive('hideMe', ['ngAnimate', function($animate){
    return function(scope, element, attrs){
      scope.$watch(attrs.hideMe, function(){
        if (attrs.hideMe){
          $animate.removeClass(element, "answerHidden");
        } else {
          $animate.addClass(element, "answerHidden");
        }
      })
    }
  }])
