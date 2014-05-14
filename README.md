Numbers Cache
=============

A simple way to cache numbers using local storage

API
---

`new NumbersCache()`<br/>
Creates a instance to handle cache

`set(formula, number, result)`<br/>
Set the result of the formula in cache

`get(formula)`<br/>
Return an array with all results already in cache

`getResult(formula, number)`<br/>
Return a single result

`clear(formula)`<br/>
Delete the formula cache

Usage
-----

```js

var cache = new NumbersCache(),
    // get the last cache if exists
    euler = cache.get('euler') || [],
    x = Number();

for (x = 0; x < 40; x++) {

  //if the result is not in the cache, calc and put in the cache
  if(!euler[x]){

    //Euler's prime-generating polynomial - x² - x + 41
    euler[x] = Math.pow(x,2)-(x)+41;
    cache.set('euler', x, euler[x]);

  }

}

```

benchmark.js results
--------------------

**Calculating Euler's prime-generating polynomial**<br/>

With Cache x 3,243,060 ops/sec ±4.30% (87 runs sampled)<br/>
Without cache x 2,422,756 ops/sec ±9.08% (73 runs sampled)<br/>
Fastest is With Cache