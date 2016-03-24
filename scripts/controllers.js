(function ControllersClosure ( angular, he, undefined ) {

  'use strict';
  'be excellent to each other';

  var throttledOnSearchStringChange =
    _.throttle( onSearchStringChange, 300 );

  function SearchController (
    $scope, $element, $attrs,
    SearchService
  ) {

    angular.extend(this, {
      $scope: $scope,
      $element: $element,
      $attrs: $attrs,
      SearchService: SearchService,
      products: {}
    });

  }

  SearchController.prototype = {
    searchString: '',
    onSearchStringChange: throttledOnSearchStringChange
  };

  function RecommendationController (
    $scope, $element, $attrs,
    RecommendationService
  ) {

    angular.extend(this, {
      $scope: $scope,
      $element: $element,
      $attrs: $attrs,
      RecommendationService: RecommendationService,
      products: {}
    });

  }

  RecommendationController.prototype = {
    selectedItem: '',
    onSelectedItemChange: onSelectedItemChange
  };

  function queryItemTransformer ( item ) {

    return {

      upc: item.upc,
      model: item.modelNumber,

      name: item.name,

      id: item.itemId,
      parent: item.parentItemId,

      descriptions: {
        short: item.shortDescription && he.decode(item.shortDescription),
        long: item.longDescription && he.decode(item.longDescription)
      },

      images: {
        small: item.thumbnailImage,
        medium: item.mediumImage,
        large: item.largeImage,
        rating: item.customerRatingImage
      },

      prices: {
        msrp: item.msrp || item.salePrice,
        sale: item.salePrice
      },

      rating: item.customerRating

    };

  }


  function onQuerySuccess (queryResults) {

    queryResults.items =
      queryResults
        .items
          .map(
            queryItemTransformer
          );

  }

  function onRecommendationQuerySuccess (queryResults) {
    queryResults = queryResults.map(
        queryItemTransformer
      );
  }

  function onQueryError (queryError) {

  }

  function onSearchStringChange () {

    var searchController = this,
      SearchService = searchController.SearchService;

    searchController.products = SearchService.query(
      {
        query: searchController.searchString
      },
      onQuerySuccess,
      onQueryError
    );

  }

  function onSelectedItemChange () {

    var recommendationController = this,
      RecommendationService = recommendationController.RecommendationService;

    recommendationController.products.items = RecommendationService.query(
      {
        itemId: recommendationController.selectedItem
      },
      onRecommendationQuerySuccess,
      onQueryError
    );

  }


  angular

    .module('application.controllers', [])

    .controller('SearchController', [

      '$scope', '$element', '$attrs',
      'SearchService',

      SearchController

    ])

    .controller('RecommendationController', [

      '$scope', '$element', '$attrs',
      'RecommendationService',

      RecommendationController

    ]);
;

}).call( null, angular, he );
