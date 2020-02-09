var cache = {};
export const memoizee = function(func) {
    var stringifyJson = JSON.stringify;

    var cachedfun = function() {
        var hash = stringifyJson(arguments);
        // console.log("Hash in Cache",((hash+func.name) in cache), arguments[2])
        return ((hash+func.name) in cache) ? cache[hash+func.name] : cache[hash+func.name] = func.apply(this, arguments);
    };

    cachedfun.__cache = (function() {
        cache.remove || (cache.remove = function() {
            var hash = stringifyJson(arguments);
            return (delete cache[hash]);
        });
        return cache;
    }).call(this);

    return cachedfun;
};

