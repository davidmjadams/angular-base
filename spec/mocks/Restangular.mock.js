var $q = require('q');

module.exports = {
    service: function() {
        return {
            getList: function() {
                var defer = $q.defer();
                defer.resolve();

                return defer.promise;
            },
            one: function() {
                return {
                    get: function() {
                        var defer = $q.defer();
                        defer.resolve();

                        return defer.promise;
                    }
                }
            }
        };
    },
};