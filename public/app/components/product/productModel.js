var dispatcher = require('app/dispatcher');

/**
 * ProductModel
 * @param {angular.service} productResource
 * @ngInject
 *
 */
function ProductModel(productResource) {
    this.productResource = productResource;
    this.products = [];

    dispatcher.subscribe('products', 'update', this.setProducts.bind(this));
}

ProductModel.prototype.retrieveProducts = function() {
    this.productResource.getAllProducts();
};

ProductModel.prototype.setProducts = function(products) {
    this.products = products;
};

ProductModel.prototype.getAll = function() {
    return this.products;
};

ProductModel.prototype.getOne = function() {
    return [this.products[0]];
};

module.exports = ProductModel;