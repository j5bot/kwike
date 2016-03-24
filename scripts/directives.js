(function DirectivesClosure ( angular, undefined ) {

  'use strict';
  'be excellent to each other';

  function selectProduct (event) {
    var $target = $(event.target),
      $parent = $target.parent(),
      $rec = $parent.prevAll('recommendations'),
      productId =
        $parent
          .attr('data-product-id'),

      rec = $rec.scope().rec;

    rec.selectedItem = productId;
    rec.onSelectedItemChange();
  }

  function ProductListDirectiveLinkFunction (
    $scope, $element, $attrs, $ctrl
  ) {
    $element.on('click', 'h3,img', selectProduct);
  }

  angular

    .module('application.directives', [])

    .directive('searchControls', [
      function SearchControlsDirectiveDefinition () {
        return {
          controller: 'SearchController',
          controllerAs: 'search',

          scope: false,
          restrict: 'E',
          templateUrl: 'search-controls.html'
        };
      }
    ])

    .directive('recommendations', [

      function RecommendationsDirectiveDefinition () {

        return {

          controller: 'RecommendationController',
          controllerAs: 'rec',

          scope: false,
          restrict: 'E',
          templateUrl: 'recommendations.html'

        };

      }

    ])

    .directive('productList', [

      function ProductListDirectiveDefinition () {

        return {

          controller: 'SearchController',
          controllerAs: 'search',

          scope: false,
          restrict: 'E',
          templateUrl: 'product-list.html',

          link: ProductListDirectiveLinkFunction

        };

      }

    ])

    .directive('product', [

      function ProductDirectiveDefinition () {

        return {

          controller: 'SearchController',
          controllerAs: 'search',

          scope: false,
          restrict: 'E',
          templateUrl: 'product.html'

        };

      }

    ]);

}).call( null, angular );
