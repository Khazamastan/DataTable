/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
const cache = {};
export const memoizee = function(func) {
  const stringifyJson = JSON.stringify;

  const cachedfun = function() {
    const hash = stringifyJson(arguments);
    // console.log("Hash in Cache",((hash+func.name) in cache), arguments[2])
    return hash + func.name in cache
      ? cache[hash + func.name]
      : (cache[hash + func.name] = func.apply(this, arguments));
  };

  cachedfun.__cache = function() {
    cache.remove ||
      (cache.remove = function() {
        const hash = stringifyJson(arguments);
        return delete cache[hash];
      });
    return cache;
  }.call(this);

  return cachedfun;
};
