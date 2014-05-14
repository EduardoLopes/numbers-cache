numbers-cache
=============

A simple way to cache numbers using local storage

API
---

`new NumbersCache()`
Creates a instance to handle cache

`set(formula, number, result)`
Set the result of the formula in cache

`get(formula)`
Return an array with all results already in cache

`getResult(formula, number)`
Return a single result

`clear(formula)`
Delete the formula cache
