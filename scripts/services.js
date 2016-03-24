(function ServicesClosure ( angular, undefined ) {

  'use strict';
  'be excellent to each other';

  angular

    .module('application.services', [])

    .constant('WALMART_API_KEY',
              'vxjxvgq752276jsj2p77e9c2')

    .constant('WALMART_API_SEARCH_ENDPOINT',
              'http://api.walmartlabs.com/v1/search')
    .constant('WALMART_API_RECOMMENDATION_ENDPOINT',
              'http://api.walmartlabs.com/v1/nbp')

    .factory('SearchService', [

      '$resource',
      'WALMART_API_KEY',
      'WALMART_API_SEARCH_ENDPOINT',

      function SearchServiceProvider (

        $resource,
        WALMART_API_KEY,
        WALMART_API_SEARCH_ENDPOINT

      ) {

        // sample URL:
        // http://api.walmartlabs.com/v1/search?query=ipod&format=json&apiKey=vxjxvgq752276jsj2p77e9c2

        var SearchService = $resource(
              WALMART_API_SEARCH_ENDPOINT,
              {
                format: 'json',
                apiKey: WALMART_API_KEY,
                callback: 'JSON_CALLBACK'
              },
              {
                query: {
                  method: 'jsonp',
                  isArray: false,
                  cache: true
                }
              }
            );

        return SearchService;

      }

    ])

    .factory('RecommendationService', [

      '$resource',
      'WALMART_API_KEY',
      'WALMART_API_RECOMMENDATION_ENDPOINT',

      function RecommendationServiceProvider (

        $resource,
        WALMART_API_KEY,
        WALMART_API_RECOMMENDATION_ENDPOINT

      ) {

        var RecommendationService = $resource(
              WALMART_API_RECOMMENDATION_ENDPOINT,
              {
                format: 'json',
                apiKey: WALMART_API_KEY,
                callback: 'JSON_CALLBACK'
              },
              {
                query: {
                  method: 'jsonp',
                  isArray: true,
                  cache: true
                }
              }
            );

        return RecommendationService;

      }

    ]);

}).call( null, angular );
