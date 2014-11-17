module.exports = function (version) {
    var name = require('../package.json').name;
    version = version || require('../package.json').version;

  return version + '.' + name + '.' + 'min';
};
