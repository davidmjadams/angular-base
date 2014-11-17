/**
 * Product state config
 * @param  {angular.service} $stateProvider
 * @ngInject
 */
function productState($stateProvider) {
    'use strict';

    $stateProvider.state('productList', {
        url: '',
        templateUrl: '/app/components/product/views/index.html',
        controller: 'productCtrl',
        controllerAs: 'productList'
    });
};

module.exports = productState;