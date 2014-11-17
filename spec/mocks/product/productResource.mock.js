var dispatcher = require('app/dispatcher'),
    products = require('../../mocks/product/productData.mock');

module.exports = {
    products: [],
    getAllProducts: function() {
        dispatcher.publish('products', 'update', products);
    },
    getOneProduct: function() {
        dispatcher.publish('products', 'update', products[0]);
    }
}