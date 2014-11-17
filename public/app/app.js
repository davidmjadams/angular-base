window._ = require('lodash');
require('angular');
require('angular-ui-router');
require('restangular');

module.exports = angular.module('app', [
    'ui.router',
    'restangular',
    'templateCache',
    require('./components/product/module').name
])

/**
 * @ngInject
 */
.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://private-f04eb9-dadamssessiondigital.apiary-mock.com/');
})
