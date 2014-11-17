
var chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

module.exports = function() {
    this.Given(/^I am on the homepage$/, function (next) {
        browser.get('/').then(next);
    });

    this.When(/^I should see a "([^"]*)"$/, function (arg1, next) {
        var elem = element(by.css('.heading'));
        expect(elem.getText()).to.eventually.equal('All my things').and.notify(next);
    });

    this.Then(/^I should see a list of tasks$/, function (next) {
        var elems = element.all(by.repeater('product in productList.products'));
        expect(elems.count()).to.eventually.equal(2).and.notify(next);
    });
};