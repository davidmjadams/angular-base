var dispatcher = require('app/dispatcher');

/**
 * Product controller constructor
 * Subscribe to product update and create showall callback
 * @param  {angular.service} productModel
 * @ngInject
 */
function productCtrl(productModel) {
    this.productModel = productModel;
    this.products = [];

    dispatcher.subscribe('products', 'update', this.showAll.bind(this));
    this.retrieveProducts();
}

productCtrl.prototype.retrieveProducts = function() {
    this.productModel.retrieveProducts();
};

productCtrl.prototype.showOne = function() {
    this.products = this.productModel.getOne();
};

productCtrl.prototype.showAll = function() {
    this.products = this.productModel.getAll();
};

module.exports = productCtrl;
