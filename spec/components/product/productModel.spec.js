var productResource = require('../../mocks/product/productResource.mock'),
    ProductModel = require('app/components/product/productModel'),
    products = require('../../mocks/product/productData.mock'),
    dispatcher = require('app/dispatcher');

describe("Product store properties", function() {
    var productModel = new ProductModel(productResource);
    dispatcher.publish('products', 'update', products);

    it("should assign productResource to self", function() {
        expect(productModel.productResource).to.equal(productResource);
    });

    it("should assign product array to self", function() {
        expect(productModel.products).to.be.an('array');
        expect(productModel.products).to.have.length(3);
    });
});

describe("Product store methods", function() {
    var productModel = new ProductModel(productResource);
        dispatcher.publish('products', 'update', products);

    it("should assign all products to self", function() {
        expect(productModel.products).to.be.an('array');
        expect(productModel.products).to.have.length(3);
    });

    it("should return entire products array", function() {
        var products = productModel.getAll();

        expect(products).to.be.an('array');
        expect(products).to.have.length(3);
    });

    it("should return single product array", function() {
        var products = productModel.getOne();

        expect(products).to.be.an('array');
        expect(products).to.have.length(1);
    });

});