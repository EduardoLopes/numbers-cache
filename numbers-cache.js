/**
 * Numbers Cache
 * A javascript canvas based 8 bit version of old school monospace fonts
 * @author    EduardoLopesDS@gmail.com
 * @github    https://github.com/EduardoLopes/numbers-cache
 * @licence   MIT License
 * @version   0.0.1
 */
(function(global, undefined) {
  'use strict';

  if (!global.localStorage) {
    throw new Error('This browser don\'t suport local storage');
  }

  function NumbersCache(){
    this.cache = [];
  }

  NumbersCache.prototype.set = function(formula, number, result) {

    this.cache = this.get(formula) || [];

    if(!this.cache[number]){
      this.cache[number] = result;
    }

    localStorage.setItem(formula, JSON.stringify(this.cache));
  };

  NumbersCache.prototype.get = function(formula) {

    return JSON.parse(localStorage.getItem(formula));

  };

  NumbersCache.prototype.clear = function(formula) {
    localStorage.removeItem(formula);
  };

  global.NumbersCache = NumbersCache;
}(window));