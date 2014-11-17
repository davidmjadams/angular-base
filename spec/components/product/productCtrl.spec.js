var ProductCtrl = require('app/components/product/productCtrl'),
    productModel = require('../../mocks/product/productModel.mock'),
    products = require('../../mocks/product/productData.mock'),
    dispatcher = require('app/dispatcher');

describe('Product controller', function() {
    var productCtrl = new ProductCtrl(productModel);
    dispatcher.publish('products', 'update', products);

    it("should retrieve all products", function() {
        var spy = sinon.spy(productModel, "retrieveProducts");
        productCtrl.retrieveProducts();

        expect(spy).to.have.been.calledOnce;
    });

    it("should set initial product array", function() {
        expect(productCtrl.products).to.be.an('array');
        expect(productCtrl.products.length).to.equal(3);
    });

    it("should show one product", function() {
        var spy = sinon.spy(productModel, "getOne");
        productCtrl.showOne();

        expect(spy).to.have.been.calledOnce;
        expect(productCtrl.products.length).to.equal(1);
    });

    it("should show all products", function() {
        var spy = sinon.spy(productModel, "getAll");
        productCtrl.showAll();

        expect(spy).to.have.been.calledOnce
        expect(productCtrl.products.length).to.equal(3);
    });
});
