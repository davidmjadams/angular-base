var products = require('../../mocks/product/productData.mock');

module.exports = {
    retrieveProducts: function() {},
    getOne: function() {
        return [products[0]];
    },
    getAll: function() {
        return products;
    }
}