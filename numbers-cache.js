(function(global, undefined) {
  'use strict';

  //Thrown a error if the browser don't support local storage
  if (!global.localStorage) {
    throw new Error('This browser don\'t suport local storage');
  }

  /**
  * Creates a instance to handle cache
  * @author    Eduardo Lopes (EduardoLopesDS@gmail.com)
  * @github    https://github.com/EduardoLopes/numbers-cache
  * @licence   MIT License (https://github.com/EduardoLopes/numbers-cache/blob/master/LICENSE)
  * @version   0.0.2
  * @global
  * @constructor
  */
  function NumbersCache(){
    /**
     * Hold the last cache entry
     *
     * @type Array
     * @memberof NumbersCache
     */
    this.cache = [];
  }

  /**
  * Set the result of the formula in the cache
  * @memberof NumbersCache
  * @param {String} formula The name of the formula
  * @param {Number} number The number used to calc the formula
  * @param {Number} result The result of the formula
  */
  NumbersCache.prototype.set = function(formula, number, result) {

    this.cache = this.get(formula) || [];

    if(!this.cache[number]){
      this.cache[number] = result;
    }

    localStorage.setItem(formula, JSON.stringify(this.cache));
  };

  /**
  * Get all results already in the cache
  * @memberof NumbersCache
  * @param {String} formula The name of the formula
  * @returns {Array} Return the cache for the formula
  */
  NumbersCache.prototype.get = function(formula) {

    return JSON.parse(localStorage.getItem(formula));

  };

  /**
  * Get the result for a especific number
  * @memberof NumbersCache
  * @param {String} formula The name of the formula
  * @param {Number} number The number used to calc the formula
  * @returns {Array|Boolean} Return the result if exists, if not return false
  */
  NumbersCache.prototype.getResult = function(formula, number) {

    if(!localStorage.getItem(formula)){
      return false;
    }

    return JSON.parse(localStorage.getItem(formula))[number];
  };

  /**
  * Delete the cache for a especific formula
  * @memberof NumbersCache
  * @param {String} formula The name of the formula
  */
  NumbersCache.prototype.clear = function(formula) {
    localStorage.removeItem(formula);
  };


  global.NumbersCache = NumbersCache;
}(window));