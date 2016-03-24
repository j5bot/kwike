(function ApplicationClosure ( angular, undefined ) {

  'use strict';
  'be excellent to each other';

  angular

    .module('application', [

      'ngSanitize',
      'ngResource',

      'application.services',
      'application.controllers',
      'application.directives'

    ]);

}).call(null, angular);
