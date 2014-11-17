
module.exports = angular.module('app.components.product', [])
    .config(require('./state'))
    .controller('productCtrl', require('./productCtrl'))
    .service('productResource', require('./productResource'))
    .service('productModel', require('./productModel'));
