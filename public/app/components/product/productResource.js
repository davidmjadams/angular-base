/**
 * Local access to dispatcher object
 * @type {Object}
 */
var dispatcher = require('app/dispatcher');

/**
 * Product Resource Constructor, creates Restangular resource service
 * @param {angular.service} Restangular
 * @constructor
 * @ngInject
 */
function ProductResource(Restangular) {
    this.productService = Restangular.service('notes');
}

/**
 * Retrieve array of all products and emit update event with products
 * @publish {Array} products
 */
ProductResource.prototype.getAllProducts = function() {
    this.productService.getList().then(function(products) {
        dispatcher.publish('products', 'update', products);
    });
};

/**
 * Retrieve single product
 * @param  {String} id product record ID
 * @publish {Array} single product
 */
ProductResource.prototype.getOneProduct = function(id) {
    this.productService.one(id).get().then(function(products) {
        dispatcher.publish('products', 'update', products);
    });
};

module.exports = ProductResource;