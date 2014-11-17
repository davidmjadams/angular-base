module.exports = function () {
    this.Before(function(scenario, next){
        console.log("\n\n" + scenario.getName(), "(" + scenario.getUri() + ":" + scenario.getLine() + ")\n");
        next();
    });
};