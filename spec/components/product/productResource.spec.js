var ProductResource = require('app/components/product/productResource'),
    products = require('../../mocks/product/productData.mock'),
    Restangular = require('../../mocks/Restangular.mock'),
    dispatcher = {
        subscribe: function() {},
        publish: function() {}
    };


describe("Product resource", function() {
    var restangularSpy = sinon.spy(Restangular, "service"),
        publishSpy = sinon.spy(dispatcher, "publish"),
        productResource = new ProductResource(Restangular, dispatcher);

    it("should create a restangular service", function() {
        expect(restangularSpy).to.have.been.calledWith('notes');
    });

    it("should get all products from resource, then emit an update event", function() {
        var getListSpy = sinon.spy(productResource.productService, "getList");

        productResource.getAllProducts();

        expect(getListSpy).to.have.been.calledOnce;
        // expect(publishSpy).to.have.been.calledWith('products', 'update', products);
    });

    it("should get one product from resource, then emit an update event", function() {
        var oneSpy = sinon.spy(productResource.productService, "one");
        productResource.getOneProduct();

        expect(oneSpy).to.have.been.calledOnce;
        // expect(publishSpy).to.have.been.calledWith('products', 'update', products);
    });
});