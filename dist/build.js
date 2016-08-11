(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("avalon"));
	else if(typeof define === 'function' && define.amd)
		define("mcLib", ["avalon"], factory);
	else if(typeof exports === 'object')
		exports["mcLib"] = factory(require("avalon"));
	else
		root["mcLib"] = factory(root["avalon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/content/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(_) { 
	  
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(2), __webpack_require__(16), __webpack_require__(18), __webpack_require__(19), __webpack_require__(20),
	    __webpack_require__(21), __webpack_require__(22), __webpack_require__(25), __webpack_require__(28), __webpack_require__(31), __webpack_require__(34),
	    __webpack_require__(40), __webpack_require__(43), __webpack_require__(13), __webpack_require__(46), __webpack_require__(49), __webpack_require__(52), __webpack_require__(37),
	    __webpack_require__(55), __webpack_require__(58), __webpack_require__(7), __webpack_require__(3), __webpack_require__(10), __webpack_require__(61),
	    __webpack_require__(64), __webpack_require__(67), __webpack_require__(70), __webpack_require__(73), __webpack_require__(76), __webpack_require__(79), __webpack_require__(82),
	    __webpack_require__(85), __webpack_require__(88), __webpack_require__(91), __webpack_require__(94), __webpack_require__(97),
	    __webpack_require__(100), __webpack_require__(103),
	    __webpack_require__(106), __webpack_require__(109), __webpack_require__(112), __webpack_require__(115), __webpack_require__(118)], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	avalon.log(_);
	 avalon.log('组件库加载完毕');  
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	 
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:treeselect", {
	        //buildIn相关
	        $dialog_opt: {},
	        getDialogVM: _interface,
	        getTreeVM: _interface,
	        $treeVM: {},
	        $dialogVM: {},
	        $tree_opt: {
	            bt: false,
	            dynamic: true,
	            hasCheckbox: false,
	            clickEveryWhere: true,
	            //disableImp: true,
	            ajaxConfig: {
	                url: '/SystemManage/GetModuleList',
	                key: 'MFId'
	            },
	            idName: 'MId',
	            textName: 'MName',
	            pidName: 'MFId',
	            // isLeafName: 'IsLeaf',
	            virtualId: '0',
	            virtualClick: false,
	            //最后会出来这个 要过滤掉MID 为0什么的
	            data: [],
	            //请求
	            onEveryClick: function (item, _vm) { },
	        },
	        //外部参数
	        label: "", //提示文字
	        trace: false, //getValue是否返回路径
	        labelSize: 0,
	        value: "", //输入框内值  
	        text: "", //输入框内文字 
	        $ajaxConfig: {},  //url idName,textName
	        //silence:true,
	        //name: "", //输入框name
	        valid: "", //验证类型
	        width: 200, //宽度,默认200px
	        must: false, //是否必填,也可为数字 代表必须的长度(会将覆盖length)
	        tip: "", //填写提示信息
	        isHide: false, //是否隐藏,不可见
	        readonly: false, //是否只读，只读就div显示，否则input显示
	        //外部事件
	        onInit: _interface, //初始化接口
	        onClicked: null, //当输入框点击时触发事件
	        onChanged: null, //当输入框内值发生改变时触发事件
	
	        //外部接口
	
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        formName: "", //表单data的key,输入框name
	        submitName: "", //提交表单的name
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        isValid: true, //是否正在验证
	        validInfo: "", //错误信息
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	
	        //内部事件
	        doClick: _interface,
	        validValue: _interface,
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            if (typeof vmOpts.$tree_opt.data === 'function') vmOpts.$tree_opt.data = vmOpts.$tree_opt.data();
	            //树配置要融合
	            if (vmOpts.$tree_opt) {
	                vmOpts.$tree_opt = $.extend(true, hooks.$tree_opt, vmOpts.$tree_opt)
	            }
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //buildin 相关
	            vm.$dialog_opt = {
	                size: 'large',
	                buttons: [
	                    {
	                        label: "保存",
	                        type: "success",
	                        callback: function (ev, _vm) {
	                            //get tree val ,set到自身vm的value 
	                            var item = vm.$treeVM.getSelect();
	                            if (item) {
	                                if (vm.trace) {
	                                    vm.value = item.trace.join(",");
	                                } else {
	                                    vm.value = item.val;
	                                }
	                                vm.text = item.text;
	                            }
	                            return true;
	                        }
	                    },
	                    {
	                        label: "取消",
	                        callback: function () {
	                            return true;
	                        }
	                    }
	                ]
	            }
	
	            vm.getDialogVM = function (_vm, elem) {
	                vm.$dialogVM = _vm
	            }
	            vm.getTreeVM = function (_vm, elem) {
	                vm.$treeVM = _vm
	                //静默加载第一次   
	                //if (vm.$treeVM.data.length===0) {
	                //vm.$treeVM.setData(null).showItem(null,1, {
	                //    force: true,
	                //    silence: vm.silence
	                //});
	                // }
	
	
	            }
	            //内部事件 
	            vm.doClick = function (ev) {
	                vm.$dialogVM.showDialog();
	                //vm.$dialogVM.hideDialog({}, true);
	                vm._trigger(ev, "clicked");
	            }
	            vm.validValue = function (ev) {
	                vm.value = vm.value + ""; //保证value为字符串
	                vm.validInfo = McAvalon.validata(vm.value, vm.valid);
	                vm.isValid = vm.validInfo === "" ? true : false;
	                if (vm.isValid) {
	                    if (vm.must === true && vm.value.trim() === "") {
	                        vm.isValid = false; vm.validInfo = "该字段为必填字段";
	                    }
	                }
	            }
	
	            //内部接口
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "clicked":
	                        if (typeof vm.onclicked == "function") {
	                            vm.onClicked(ev, vm);
	                        }
	                        break;
	                    case "changed":
	                        if (typeof vm.onchanged == "function") {
	                            vm.onChanged(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	
	            //外部接口 
	            vm.getValue = function () {
	                //可能需要
	                //if (vm.value === vm.$tree_opt.virtualId) return ''
	                return vm.value;
	            }
	            vm.setValue = function (val, isReadonly) {
	                //isReadonly 传值的时候才赋值判断
	                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
	                vm.text = val;
	            }
	
	
	            vm.$watch("value", function (newVal, oldVal) {
	                vm._trigger({ newVal: newVal, oldVal: oldVal }, "changed");
	            });
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:treeselect"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-group mc-treeselect-cotar hf\" ms-class=\"mc-error: !isValid\" ms-visible=\"!isHide\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n    <div class=\"form-control mc-ipt fp\" ms-if=\"!readonly\"\r\n         ms-attr-name=\"formName\" ms-css-width=\"width\"\r\n         ms-click=\"doClick($event)\">{{text}}</div>\r\n    <div class=\"mc-text-show ftp\" ms-if=\"readonly\" ms-attr-name=\"formName\" ms-css-width=\"width\">{{text}}</div>\r\n    <span class=\"mc-text-valid-info ftp\" ms-if=\"!isValid && validInfo != ''\">{{validInfo}}</span>\r\n    <div class=\"mc-text-field-tip\" ms-css-padding-left=\"labelSize\" ms-if=\"tip\">{{tip}}</div>\r\n\r\n\r\n    <mc:dialog config=\"$dialog_opt\" title=\"\" on-init=\"getDialogVM\">\r\n        <mc:treebt slot=\"content\" config=\"$tree_opt\" on-init=\"getTreeVM\"></mc:treebt>\r\n    </mc:dialog>\r\n</div>\r\n\r\n"

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(_) {
	//todata expand checked semiChecked wait children 
	toTreeData = function (data, dynamic, impData, idName, pidName, isLeafName, disableImp, disableNonImp, disableLeaf, patTrace, _vm) {
	    //has checked data 
	    if (impData && impData.length) {
	        data.forEach(function (oriItem) {
	            var compObj = {};
	            compObj[idName] = oriItem[idName]
	            var r = _.findWhere(impData, compObj);
	            //找到 选中原来 移除这个
	            if (r) {
	                oriItem.checked = true;
	                if (disableImp) {
	                    oriItem.disabled = true;
	                }
	                //index 
	                var rI = impData.indexOf(r);
	                impData.splice(rI, 1);
	            } else {
	                //只减不增
	                //todo 忘记加ori disable什么用了= =
	                if (disableNonImp) {
	                    oriItem.disabled = true;
	                }
	            }
	        })
	    }
	
	
	    var result = [];
	    //has checked end
	    avalon.each(data, function (i, item) {
	        if (_vm.onPushStart && _vm.onPushStart(item) === false) {
	            //avalon.Array.remove(data, item);
	            return true;
	        } else {
	            result.push(item);
	        }
	        item.expand = item.expand || false;
	        item.checked = item.checked || false;
	        item.disabled = item.disabled || false;
	        item.active = false;//点击后生效,对于所有节点可选且单选很有用
	        item.semiChecked = false;
	        //trace,全路径 
	        patTrace = patTrace || [];
	        var _trace = _.clone(patTrace);
	        _trace.push(item[idName]);
	        item.$trace = _trace;
	        //disable 只增 只减
	        if (disableImp && item.checked) {
	            item.disabled = true;
	        }
	        if (disableNonImp && !item.checked) {
	            item.disabled = true;
	        }
	
	
	
	        //IsLeaf
	
	        item.wait = item.wait || dynamic;
	        if (isLeafName) {
	            item.wait = !item[isLeafName];
	            //disable isleaf 
	            if (disableLeaf && item[isLeafName]) item.disabled = true;
	        }
	        item.children = item.children || [];
	        //递归赋值 
	        if (item.children.length) {
	            item.children = toTreeData(item.children, dynamic, impData, idName, pidName, isLeafName, disableImp, disableNonImp, disableLeaf, item.$trace, _vm);
	        }
	        //item.checked = item.checked || false;
	    });
	    return result;
	};
	 
	//todo imp data,是未来展开,但已勾选的数据,只有bt模式下才有可能操作,(由于其勾选的特性可得知)..
	//正常下除非是个全展开树,不过也就没imp的说法了..可以改名叫originData
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(8), __webpack_require__(9),__webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:treebt", {
	        //buildin 相关
	        $btn_opt: {},
	        //外部参数
	        data: [],//数据源 [text,id,checked,key] 
	        textName: '',
	        hasCheckbox: true,//是否有选择功能
	        dynamic: true, //动态请求 
	        clickEveryWhere: true,
	        hideVir:false,
	        //autoExpandFirst: false,  自展开 自行调用showItem
	        //pre disable
	        //todo lazy calc,要多加属性有点问题
	        ajaxConfig: {},
	        disableImp: false,
	        disableNonImp: false,
	        disableLeaf: false,//必须isleaf存在
	        bt: true,
	        barSelectMode: false, //单行选择模式,即点击单行跟点击checkbox相同,必定有checkbox,没有按钮,只有clickCheckbox事件,无foldClick事件
	        isLR: false,
	        notUpdate:false,
	        idName: 'id',
	        pidName: 'pid',
	        virtualId: '',//虚拟顶部ID 
	        virtualText: '全部',
	        virtualClick: true,
	        disableId:"",
	        extraData:null,
	        isLeafName: '',//默认无 自己指定,就有直接判断叶子功能
	        hasButton: false,
	        autoShow: null,
	        //外部事件
	        onInit: _interface, //初始化接口 
	        onChecked: _interface, //选中
	        onUnChecked: _interface, //选中
	        onLeafClick: _interface, //叶子节点被点击
	        onEveryClick: _interface, //叶子,父,所有节点被点击
	        onDataChange: _interface, //ajax请求时返回data 
	        onPushStart: _interface, //数据加入前
	        onPushEnd: _interface, //数据加入后  都可return掉不加入
	        onLoadData: _interface, //数据加载完毕
	        //外部接口 
	        setSelectById: _interface, //设置选中项  
	        setUnCheckedById: _interface, //设置选中项  
	        getSelect: _interface, //get选中项  
	        initSelect: _interface, //clr选中项 
	        initExpand: _interface, //clr展开
	        initTree: _interface, //init
	        showItem: _interface, //打开N层  
	        getCheckedLeafData: _interface, //todo 获取叶子选中 
	        setData: _interface,//
	        getCheckedData: _interface,//获取选中数据.一维数组
	        getImpCheckedData: _interface,//
	        getAllCheckedData: _interface,//
	        getDiffData: _interface,//
	        disableRecById: _interface,// 禁用某节点以下
	        //内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号
	        impData: [],
	        oriImpData: [],
	        cacheData: null,
	        $skipArray: ['impData', 'ajaxConfig', 'oriImpData', 'cacheData', 'extraData'],
	        $tmpR: [],
	        disableRecId: null,//禁用点击到自身及其以下
	        tmpActive: {},
	        //内部事件 
	        clickCheckbox: _interface, //选中
	        foldClick: _interface, //展开
	        //内部接口
	        _trigger: _interface, //内部触发器
	        fold: _interface, //折叠
	        unfold: _interface, //展开
	        _fold: _interface, // 折叠或展开
	        toggleFold: _interface, // 折叠或展开
	        isLeaf: _interface, //是否叶子
	        isSame: _interface,//比较函数,todo 配置
	        _active: _interface,//比较函数,todo 配置
	        hasCheckedChildren: _interface,//
	        hasUncheckedChildren: _interface,//
	        hasSemiCheckedChildren: _interface,//
	        isSemiChecked: _interface,//
	        _updateParents: _interface,//
	        updateChecked: _interface,//
	        _check: _interface,//
	        _find: _interface,//
	        find: _interface,//
	        hasChildren: _interface,//
	        uncheckImp: _interface,//
	        setImpData: _interface,//
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            if (vmOpts.data) {
	                if (typeof (vmOpts.data) === 'function') {
	                    vmOpts.data = vmOpts.data();
	                }
	                vmOpts.data = toTreeData(vmOpts.data, vmOpts.dynamic, vmOpts.impData, vmOpts.idName,
	                    vmOpts.pidName, vmOpts.isLeafName, vmOpts.disableImp, vmOpts.disableNonImp, vmOpts.disableLeaf, [], vmOpts);
	            }
	            //if (vmOpts.$btn_opt && vmOpts.$btn_opt.onClick) {
	            //    //wrap 
	            //    $btn_opt.onClick
	            //}
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象 
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //内部事件
	            vm.clickCheckbox = function (ev, item) {
	                //禁用通常只禁用用户操作,不禁用API
	                if (vm.disableId && (item[vm.idName] === vm.disableId)) {
	                    return false;
	                } 
	                if (item.disabled) return false;
	                //事件,true菜触发 
	                if (!item.checked) {
	                    vm._trigger({ target: item.$model }, 'checked')
	                } else {
	                    vm._trigger({ target: item.$model }, 'unchecked')
	                }
	                vm._check(item, !item.checked);
	            }
	            vm.foldClick = function (ev, item, targetType) {
	                //todo click def
	                var foldDef = $.Deferred();
	                //2种交互 点文字,都可选 ,即所有节点都可选择
	                if (item.wait !== 0) {
	                    if (targetType === 'text' && vm.clickEveryWhere) {
	                        //虚拟 不可点击,选择
	                        if (!vm.virtualClick && vm.virtualId && (item[vm.idName] === vm.virtualId)) {
	                            // return false;
	                        }
	                            //禁用某个ID
	                        else if (vm.disableId && (item[vm.idName] === vm.disableId)) {
	                         
	                        }
	                        else {
	                            //单选模式,点文字
	                            //禁用移动到自身目录,文件夹移动有用
	                            if (vm.disableRecId) {
	                                if (item.$trace.indexOf(vm.disableRecId) > -1) {
	                                    alert('禁用移动到自身目录');
	                                    return false;
	                                }
	                            }
	                            if (!item.disabled)
	                                vm._active(item);
	                        }
	
	                    } else {
	                        //非单选,或者点的是图标 
	                        if (!vm.isLeaf(item)) {
	                            vm.toggleFold(item);
	                        } else {
	                            //叶子节点被点击
	                            vm._trigger({ target: item.$model }, 'leaf');
	                        }
	                    }
	                }
	                return foldDef;
	            }
	            //内部接口
	            //一波折叠..
	            vm.fold = function (item) {
	                vm._fold(item, false);
	            }
	            vm._fold = function (item, state) {
	                item.expand = state;
	            };
	
	            vm.unfold = function (item, silence) {
	                var def = $.Deferred();
	                var dataDef = $.Deferred();
	                if (item.wait) {
	                    item.wait = 0;
	                    //ajax获取数据 
	                    var ppp = { All: 1 };
	                    ppp[vm.ajaxConfig.key] = item[vm.idName];
	                    //额外参数
	
	                    ppp = $.extend(true, ppp, vm.ajaxConfig.extra);
	
	                    Mc.Ajax({
	                        url: vm.ajaxConfig.url,
	                        data: ppp,
	                        success: function (r) {
	                            //fix pid
	                            if (vm.isLR) {
	                                r.data.forEach(function (_item) {
	                                    _item[vm.pidName] = item[vm.idName];
	                                });
	                            }
	                            if (r.data && r.data.length) {
	                                var data = toTreeData(r.data, vm.dynamic, vm.impData, vm.idName, vm.pidName, vm.isLeafName, vm.disableImp, vm.disableNonImp, vm.disableLeaf, item.$trace,  vm );
	                            }
	                            //如果有数据
	                            if (data && data.length) {
	                                //插入
	                                item.children.pushArray(data);
	                                //自动更新所有上级的状态
	                                vm._updateParents(vm.data, item.children[0]);
	                                vm._trigger('data');
	                                //extra 
	                                if (vm.extraData && item[vm.idName] === vm.virtualId) {
	                                    var extra = toTreeData(vm.extraData, vm.dynamic, vm.impData, vm.idName, vm.pidName, vm.isLeafName, vm.disableImp, vm.disableNonImp, vm.disableLeaf, item.$trace, vm);
	                                    item.children.pushArray(extra); 
	                                }
	
	
	                            } else {
	                                //没数据
	                                //vm.fold(item);
	                            }
	                            item.wait = false;
	                            dataDef.resolve();
	                        }
	                    });
	                } else if (item.wait === false) {
	                    dataDef.resolve();
	                }
	                //数据加载后
	                dataDef.then(function () {
	                    if (!silence) {
	                        vm._fold(item, true);
	                    }
	                    def.resolve();
	                })
	                return def;
	            }
	            vm.toggleFold = function (item) {
	                var exp = !item.expand; 
	                if (exp) {
	                    vm.unfold(item)
	                } else {
	                    vm.fold(item)
	                }
	            }
	            vm._trigger = function (ev, type) {
	                switch (type) {
	
	                    case "beforeEvery":
	                        if (typeof vm.onBeforeEveryClick == "function") {
	                            return vm.onBeforeEveryClick(ev.target, vm) !== false ? true : false;
	                        }
	                        break;
	
	                    case "data":
	                        if (typeof vm.onDataChange == "function") {
	                            vm.onDataChange(vm.r);
	                        }
	                        break;
	                    case "leaf":
	                        if (typeof vm.onLeafClick == "function") {
	                            vm.onLeafClick(ev.target, vm);
	                        }
	                        break;
	                    case "every":
	                        if (typeof vm.onEveryClick == "function") {
	                            vm.onEveryClick(ev.target, vm);
	                        }
	                        break;
	                    case "checked":
	                        if (typeof vm.onChecked == "function") {
	                            vm.onChecked(ev.target);
	                        }
	                        break;
	                    case "unchecked":
	                        if (typeof vm.onUnChecked == "function") {
	                            vm.onUnChecked(ev.target);
	                        }
	                        break;
	                    case "loadData":
	                        if (typeof vm.onLoadData == "function") {
	                            vm.onLoadData(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	                return true;
	            }
	            vm.isLeaf = function (item) {
	                if (vm.isLeafName) {
	                    return !!item[vm.isLeafName];
	                }
	                if (item.wait) return false;
	                return !item.children || !item.children.length;
	            }
	            vm.isSame = function (item1, item2) {
	                return item1[vm.idName] == item2[vm.idName];
	            };
	            vm._active = function (item) {
	                if (vm._trigger({ target: item.$model }, 'beforeEvery')) {
	                    //激活 
	                    //由于单选 直接可操作tmp item,更加简洁
	                    if (vm.tmpActive.active) vm.tmpActive.active = false;
	                    item.active = true;
	                    vm.tmpActive = item;
	                    //every
	                    if (!vm.isLeaf(item)) {
	                        //vm.toggleFold(item); 不收缩,当做点击项
	                        vm._trigger({ target: item.$model }, 'every');
	                    } else {
	                        //叶子节点被点击
	                        vm._trigger({ target: item.$model }, 'leaf');
	                        vm._trigger({ target: item.$model }, 'every');
	                    }
	                }
	            };
	            //未定义
	            /**
	            * 递归检查指定节点是否有选中状态的子节点，不检查当前节点状态
	            * @param item {Object} 起始节点
	            * @return {boolean}
	            */
	            vm.hasCheckedChildren = function (item) {
	                return !!_.find(item.children, function (subItem) {
	                    return subItem.checked || vm.hasCheckedChildren(subItem);
	                });
	            };
	            /**
	             * 递归检查指定节点是否有未选中状态的子节点，不检查当前节点状态
	             * @param item {Object} 起始节点
	             * @return {boolean}
	             */
	            vm.hasUncheckedChildren = function (item) {
	                return !!_.find(item.children, function (subItem) {
	                    return !subItem.checked || vm.hasUncheckedChildren(subItem);
	                });
	            };
	            /**
	             * 指定节点是否半选状态，但不检查当前节点。即：既有被选中的子节点，也有未选中的子节点
	             * @param item {Object} 起始节点
	             * @return {boolean}
	             */
	            vm.hasSemiCheckedChildren = function (item) {
	                return vm.hasCheckedChildren(item) && vm.hasUncheckedChildren(item);
	            };
	            //alias
	            vm.isSemiChecked = vm.hasSemiCheckedChildren;
	            /**
	             * 更新item的父级节点，重新检查它们的checked和semiChecked状态
	             * @param items
	             * @param item
	             * @private
	             */
	            vm._updateParents = function (items, item) {
	                if (vm.notUpdate) return false;
	                if (vm.bt) return false;
	                if (!vm.hasCheckbox) return false;
	                avalon.each(items, function (i, subItem) {
	                    //找到所属root下一级
	                    if (vm.hasChildren(subItem, item)) {
	                        // 先要递归更新子级，否则中间节点的状态可能仍然处于选中状态，会影响当前节点的判断
	                        vm._updateParents(subItem.children, item);
	                        subItem.checked = vm.hasCheckedChildren(subItem);
	                        //半选中 todo,checked和semi可同时有,但样式semi优先
	                        subItem.semiChecked = vm.isSemiChecked(subItem);
	                    }
	                });
	            };
	            //待用 
	            vm.updateChecked = function (item) {
	                vm._updateParents(vm.data, item);
	            };
	            //级联取消imp 从上往下
	            vm.uncheckImp = function (item) {
	                if (vm.impData.length) {
	                    var childItem = _.find(vm.impData, function (impItem) {
	                        return impItem[vm.pidName] == item[vm.idName]
	                    });
	                    if (childItem) {
	                        //imp内级联
	                        vm.uncheckImp(childItem);
	                        var rIndex = vm.impData.indexOf(childItem);
	                        vm.impData.splice(rIndex, 1)
	                    }
	
	                }
	            },
	            //返回checked data
	            //todo $tmpR 去掉 
	            vm.getCheckedData = function (items) {
	
	                if (!items) {
	                    items = vm.data.$model;
	                    vm.$tmpR = [];
	                }
	
	                _.each(items, function (item) {
	                    //递归子集
	                    if (item.children && item.children.length) {
	                        vm.getCheckedData(item.children)
	                    }
	                    if (item.checked) {
	                        vm.$tmpR.push(item);
	                    }
	                })
	                return vm.$tmpR;
	            };
	            //返回imp checked data
	            vm.getImpCheckedData = function () {
	                return vm.impData;
	            };
	            //返回imp 和 data全部选中的数据
	            vm.getAllCheckedData = function () {
	                var checkedData = vm.getCheckedData();
	                var impCheckedData = vm.getImpCheckedData();
	                var all = _.flatten([impCheckedData, checkedData], true);
	                ////取ID
	                //all=all.map(function (item) {
	                //    return item[vm.idName];
	                //})
	                var allReal = []
	                //去虚拟root
	                if (vm.virtualId) {
	                    allReal = _.filter(all, function (item) {
	                        return item[vm.idName] !== vm.virtualId
	                    });
	
	                } else {
	                    allReal = all;
	                }
	
	                return allReal;
	            };
	            //获取加减的数据 diff=[ [],[] ]
	            vm.getDiffData = function () {
	                var allCheckedData = vm.getAllCheckedData();
	
	                //diff
	                //直接diff[0]处,2次diff就可以了 
	                var diff = [[], []];
	
	                //先获取id
	                var oriLeftPure = allCheckedData.map(function (item) {
	                    return item[vm.idName];
	                });
	                var rLeftPure = vm.oriImpData.map(function (item) {
	                    return item[vm.idName];
	                });
	                //id比较
	                var tl = _.difference(oriLeftPure, rLeftPure);
	                var tr = _.difference(rLeftPure, oriLeftPure);
	                //根据结果id找回item
	                tl.forEach(function (t) {
	                    var r = _.find(allCheckedData, function (oriItem) {
	                        return oriItem[vm.idName] === t
	                    })
	                    r ? diff[1].push(r)
	                    : 0
	                })
	                tr.forEach(function (t) {
	                    var r = _.find(vm.oriImpData, function (oriItem) {
	                        return oriItem[vm.idName] === t
	                    })
	                    r ? diff[0].push(r)
	                    : 0
	                })
	                return diff
	            }
	            vm._check = function (item, checked) {
	                item.checked = checked;
	                if (vm.bt) {
	                    // 把当前节点的选中状态应用到所有下级,,,bt版本 只有全选 取消功能,并且狂级联取消imp一发
	                    //要cancel imp:  非叶子 and  child为0,  :就是like叶子节点的父节点
	                    if (!checked) {
	                        //imp test
	                        if ((!vm.isLeaf(item)) && item.children.length === 0) {
	                            vm.uncheckImp(item);
	                        }
	                        //imp end
	                        avalon.each(item.children, function (i, subItem) {
	                            vm._check(subItem, false);
	                        });
	                    } else {
	                        //选中 一路上到父,用outer实现
	                        //outer找不到 直接找
	                        //如果有父属性
	                        //判非空,0,字符串都可以
	                        if (item[vm.pidName]) {
	                            var toFindTarget = {};
	                            toFindTarget[vm.idName] = item[vm.pidName]
	
	                            var pat = vm.find(toFindTarget);
	                            if (pat && (!pat.checked)) {
	                                vm._check(pat, true)
	                            }
	                        }
	                    }
	                } else {
	                    // 把当前节点的选中状态应用到所有下级
	                    if (!vm.notUpdate) {
	                        avalon.each(item.children, function (i, subItem) {
	                            vm._check(subItem, checked);
	                        });
	                        // 自动更新所有上级的状态
	                        vm._updateParents(vm.data, item);
	                    }
	                }
	            };
	            vm._find = function (items, item) {
	                if (!items)
	                    return null;
	                // 在子节点中查找
	                for (var i = 0; i < items.length; ++i) {
	                    var subItem = items[i];
	                    // 如果找到了则直接返回
	                    if (vm.isSame(subItem, item))
	                        return subItem;
	                    // 否则递归查找
	                    var subResult = vm._find(subItem.children, item);
	                    if (subResult)
	                        return subResult;
	                }
	                return null;
	            };
	            /**
	             * 查找指定的节点，会使用cbIsSame参数
	             * @param item
	             * @returns {Object}
	             */
	            vm.find = function (item) {
	                return vm._find(vm.data, item);
	            };
	            /**
	             * parent及其子节点中有没有指定的subItem节点
	             * @param parent {Object}
	             * @param subItem {Object|Array}
	             * @returns {boolean}
	             */
	            vm.hasChildren = function (parent, subItem) {
	                //wrap items
	                //toString.call(subItem) === '[object Array]'
	                var subItems = subItem.length >= 0 ? subItem : [subItem];
	                return !!_.find(subItems, function (subItem) {
	                    return vm._find(parent.children, subItem);
	                });
	            };
	            //外部事件 
	            //外部接口 
	            vm.disableRecById = function (id) {
	                vm.disableRecById = id;
	            };
	            vm.setSelectById = function (id) {
	                var toTarget = {};
	                toTarget[vm.idName] = id;
	                var r = vm.find(toTarget)
	                if (r)
	                    vm._active(r)
	            };
	            vm.setUnCheckedById = function (id) {
	                var toTarget = {};
	                toTarget[vm.idName] = id;
	                var r = vm.find(toTarget)
	                if (r)
	                    r.checked = false;
	                    //vm._active(r)
	            };
	            vm.getSelect = function () {
	                if (vm.tmpActive.active) {
	                    return { text: vm.tmpActive.$model[vm.textName], val: vm.tmpActive.$model[vm.idName], trace: vm.tmpActive.$trace }
	                } else {
	                    return null;
	                }
	
	            };
	            vm.initSelect = function () {
	                if (!vm.hasCheckbox)
	                    vm.tmpActive.active = false;
	                else {
	                    //todo clr checked
	                }
	            };
	            vm.initExpand = function () {
	                var _initExpand = function (data) {
	                    data.forEach(function (item) {
	                        vm.fold(item);
	                        if (item.children.length) {
	                            _initExpand(item.children)
	                        }
	                    });
	                   
	                };
	                _initExpand(vm.data);
	            };
	            vm.initTree = function () {
	                vm.initExpand();
	                vm.initSelect();
	            };
	            vm.setData = function (data, impData) {
	                if (impData) {
	                    vm.setImpData(impData);
	                }
	                if (!data) {
	                    var vRootItem = {}
	                    vRootItem[vm.idName] = vm.virtualId;
	                    vRootItem[vm.textName] = vm.virtualText;
	                    vRootItem.wait = true;
	                    vRootItem.$trace = [];
	                    if (vm.isLeafName) {
	                        vRootItem[vm.isLeafName] = 0;
	                    }
	                    data = [vRootItem];
	                }
	                vm.data = toTreeData(data, vm.dynamic, vm.impData, vm.idName, vm.pidName,
	                    vm.isLeafName, vm.disableImp, vm.disableNonImp, vm.disableLeaf, [], vm);
	                if (vm.autoExpandFirst) {
	                    _.each(vm.data, function (item) {
	                        vm.foldClick({}, item, 'icon')
	                    })
	                }
	                return vm;
	            };
	            vm.setImpData = function (impData) {
	                //保存 以DIFF,但不要保存V
	                vm.oriImpData = impData.map(function (item) {
	                    return _.clone(item);
	                })
	                //然后加V
	                if (impData.length) {
	                    //imp有length可知有 v root
	                    var vRootItem = {}
	                    vRootItem[vm.idName] = vm.virtualId;
	                    vRootItem[vm.textName] = vm.virtualText;
	                    if (vm.isLeafName) {
	                        vRootItem[vm.isLeafName] = 0;
	                    }
	                    impData.push(vRootItem)
	                }
	                vm.impData = impData;
	            };
	            //展开n层
	            vm.showItem = function (items, n, opt) {
	                if (n < 1) { return false; }
	                items = items || vm.data;
	                items = _.isArray(items) ? items : [items];
	                _.each(items, function (item) {
	                    if (opt.force) {
	                        //强制刷新  
	                        var couldRef = false;
	                        //直接以字段判断的特殊情况
	                        if (vm.isLeafName) {
	                            if (!item[vm.isLeafName]) {
	                                couldRef = true;
	                            }
	                        } else {
	                            couldRef = true;
	                        }
	                        if (couldRef) {
	                            item.wait = true;
	                            item.children = [];
	                            //vm.fold(item);
	                        }
	                    }
	                    vm.unfold(item, opt.silence).then(function () {
	                        vm._trigger(item, "loadData"); //触发数据加载完毕事件
	                        if (item.children.length) {
	                            //展开后有数据
	                            vm.showItem(item.children, --n, opt);
	                        }
	                    })
	                })
	            }
	            //BUG 这一层之上必须存在,也不能说是BUG..
	            vm.showItemById = function (id, n, opt) {
	                var p = {};
	                p[vm.idName] = id;
	                var item = vm.find(p);
	                if (item)
	                    vm.showItem(item, n, opt);
	            }
	            //展开所有
	            vm.showAllItem = function (items, opt) {
	                vm.showItem(null, 100, opt);
	            }
	            //观测方法
	            //注意:ms-duplex与ms-input不能用在同一元素上。用watch..
	            //   vm.$watch('data', function (newV, oldV) {
	
	            // });
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            console.log('ready  tree');
	            vm.isInit = false;
	            //传入数据需要更新..    
	            if (vm.autoShow) {
	                var opt = {
	                    force: vm.autoShow.force,
	                    silence: vm.autoShow.silence,
	                };
	                if (vm.autoShow.n)
	                    vm.setData(null).showItem(null, vm.autoShow.n, opt);
	                else
	                    vm.setData(null).showAllItem(null, opt);
	            }
	        }
	    });
	
	    var widget = avalon.components["mc:treebt"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-tree-cotar\" ms-class=\"mc-loading: isInit\">\r\n    <script type=\"avalon\" id=\"treeitem\" style=\"display: none\">\r\n        <i ms-click=\"foldClick($event,el,'icon')\" class=\"mc-ic parent\"\r\n           ms-class-1=\"expand:  el.expand\"\r\n           ms-class-2=\"unexpand:!el.expand\"\r\n           ms-class-3=\"leaf: isLeaf(el)\"\r\n           ms-class-4=\"wait: isLeafName ?  false :  el.wait\"\r\n           ms-class-5=\"waiting: el.wait===0\"\r\n           ms-visible=\"!hideVir || el[idName]!==virtualId\">\r\n        </i>\r\n\r\n\r\n\r\n        <div class=\"form-group mc-checkbox-cotar\" ms-class=\"mc-tree-bar:barSelectMode\" ms-if=\"!barSelectMode\" ms-visible=\"!hideVir || el[idName]!==virtualId\">\r\n            <i ms-if=\"hasCheckbox\" ms-click=\"clickCheckbox($event,el)\" class=\"mc-checkbox\"\r\n               ms-class-1=\"mc-active: el.checked\"\r\n               ms-class-2=\"mc-semi-checked: el.semiChecked\"\r\n               ms-class-3=\"mc-checkbox-disabled: el.disabled&&el.checked\"\r\n               ms-class-4=\"mc-checkbox-unchecked-disabled: el.disabled&& (!el.checked)\"></i>\r\n            <span ms-click=\"foldClick($event,el,'text')\" class=\"mc-checkbox-label text-field\"\r\n                  ms-class-1=\"mc-text-active: el.active\"\r\n                  ms-class-2=\"mc-text-disabled: el.disabled\">\r\n                {{el[textName]}}\r\n            </span>\r\n            <mc:button ms-if=\"hasButton\" config=\"$btn_opt\"\r\n                       ms-attr-str=\"{{JSON.stringify(el.$model)}}\">\r\n\r\n            </mc:button>\r\n        </div>\r\n        <!-- 单行选择模式 -->\r\n        <div class=\"form-group mc-checkbox-cotar mc-tree-bar\" ms-if=\"barSelectMode\" ms-click=\"clickCheckbox($event,el)\"\r\n             ms-visible=\"!hideVir || el[idName]!==virtualId\">\r\n            <i class=\"mc-checkbox\"\r\n               ms-class-1=\"mc-active: el.checked\"\r\n               ms-class-2=\"mc-semi-checked: el.semiChecked\"\r\n               ms-class-3=\"mc-checkbox-disabled: el.disabled&&el.checked\"\r\n               ms-class-4=\"mc-checkbox-unchecked-disabled: el.disabled&& (!el.checked)\"></i>\r\n            <span class=\"mc-checkbox-label text-field\"\r\n                  ms-class-1=\"mc-text-active: el.active\"\r\n                  ms-class-2=\"mc-text-disabled: el.disabled\">\r\n                {{el[textName]}}\r\n            </span>\r\n        </div>\r\n        <ul ms-visible=\"el.expand\">\r\n            <!--ms-if=\"!isLeaf(el)\"-->\r\n            <li ms-repeat=\"el.children\" ms-include=\"'treeitem'\">\r\n            </li>\r\n        </ul>\r\n    </script>\r\n    <ul class=\"tree-view\">\r\n        <li ms-repeat=\"data\" ms-include=\"'treeitem'\">\r\n        </li>\r\n    </ul>\r\n</div>\r\n\r\n"

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(11), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:button", {
	        //外部参数
	        label: "", //文本
	        type: "", //success,fail
	        mcstyle: "", //风格
	        size: "normal", //wide
	        disabled: false, //是否禁用
	
	        //外部事件
	        onInit: _interface, //初始化接口
	        onClick: null, //当按钮点击时触发事件
	
	        //外部接口
	        isDisable: _interface, //是否禁用
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	
	        //内部事件
	        clickButton: _interface, //按钮点击事件
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //内部事件
	            vm.clickButton = function (ev, _this) {
	                if (!vm.disabled) {
	                    vm._trigger(ev, "click", _this);
	                    ev.stopPropagation();
	                }
	            }
	
	            //内部接口
	            vm._trigger = function (ev, type, _this) {
	                switch (type) {
	                    case "click":
	                        if (typeof vm.onClick == "function") {
	                            vm.onClick(ev, vm, _this);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	
	            //外部事件
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:button"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-group mc-button-cotar\" ms-class-1=\"mc-button-disabled: disabled\"\r\n     ms-class-2=\"success: type=='success'\" ms-class-3=\"fail: type=='fail'\"\r\n     ms-class-4=\"mc-size-wide: size=='wide'\" ms-class-5=\"{{mcstyle}}\" ms-class-6=\"mc-loading: isInit\"\r\n     ms-click=\"clickButton($event, this)\">\r\n    <span class=\"mc-button-label\">{{label}}</span>\r\n</div>\r\n"

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(14), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:dialog", {
	        //外部参数
	        title: "", //模态窗口title
	        size: "normal", //page,large, small
	        width: null,
	        height: null,
	        padding: 15,
	        show: false, //是否显示,默认隐藏
	        buttons: [], //footer显示的按钮列表 [label 按钮文字][type 类型 [success][fail]][callback 回调函数]
	        bgClose: false, //点击背景是否可以关闭模态窗口
	        $tmpData: {}, //临时数据存储对象
	
	        //外部事件
	        onShowed: null,
	        onHided: null,
	
	        //外部接口
	        setTitle: _interface,
	        getTitle: _interface,
	        showDialog: _interface,
	        hideDialog: _interface,
	        setCallback: _interface,
	
	        getTmpData: _interface, //获取临时数据对象的值
	        setTmpData: _interface, //设置临时数据对象的值
	
	        //内部属性
	        content: "",
	        lindex: -1, //布局中的序号
	
	        //内部事件
	        btnClick: _interface,
	        clickDialog: _interface,
	
	        //内部接口
	        onInit: _interface, //初始化接口 
	        _trigger: _interface,
	        onSelectadd: _interface, //当dialog作为vm传给selectadd组件时会调用此接口,此接口在弹出层关闭时触发
	        jBtnType: _interface,
	
	        //默认配置
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //======= 内部事件 START =======//
	            /**
	             * 按钮点击事件
	             * @param {} ev 动作类型
	             * @param {} btnVm 被点击的按钮的vm
	             * @returns {} 
	             */
	            vm.btnClick = function (ev, btnVm) {
	                var callback = btnVm.lindex !== -1 && vm.buttons[btnVm.lindex].callback;
	                if (typeof callback == "function") {
	                    if (callback(ev, vm)) {
	                        vm._trigger(btnVm.lindex, "selectadd");
	                        vm.hideDialog({}, true);
	                    }
	                }
	            }
	            /**
	             * 模态窗口点击时事件
	             * @param {} ev 动作类型
	             * @returns {} 
	             */
	            vm.clickDialog = function (ev) {
	                //阻止冒泡(避免点击弹出框时 弹出框关闭)
	                ev.cancelBubble = true;
	            }
	            //======= 内部事件 END =======//
	
	            //======= 内部接口 START =======//
	            /**
	             * 事件触发器
	             * @param {} ev 动作类型
	             * @param {} type 事件类型
	             * @returns {} 
	             */
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "showed":
	                        if (typeof vm.onShowed == "function") {
	                            vm.onShowed(ev, vm);
	                        }
	                        break;
	                    case "hided":
	                        if (typeof vm.onHided == "function") {
	                            vm.onHided(ev, vm);
	                        }
	                        break;
	                    case "selectadd":
	                        if (typeof vm.onSelectadd == "function") {
	                            vm.onSelectadd(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            vm.jBtnType = function (idx) {
	                return vm.buttons[idx].type;
	            }
	            //======= 内部接口 END =======//
	
	            //======= 外部接口 START =======//
	            /**doc
	             * @description {设置title}
	             * @param {title} {要设置的title}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.setTitle = function (title) {
	                vm.title = title;
	                return vm;
	            }
	            /**doc
	             * @description {返回title}
	             * @returns {String} {title字符串}
	             */
	            vm.getTitle = function () {
	                return vm.title;
	            }
	            /**doc
	             * @description {显示模态窗口}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.showDialog = function () {
	                vm.show = true;
	                vm._trigger({}, "showed");
	                return vm;
	            }
	            /**doc
	             * @description {隐藏模态窗口}
	             * @param {ev} {动作类型}
	             * @param {noJudge} {是否不判断直接关闭}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.hideDialog = function (ev, noJudge) {
	                if (noJudge || vm.bgClose) {
	                    vm.show = false;
	                    vm._trigger(ev, "hided");
	                }
	                return vm;
	            }
	            /**doc
	             * @description {设置回调}
	             * @param {idx} {设置的按钮index}
	             * @param {callback} {对应的回调函数}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.setCallback = function (idx, callback) {
	                vm.buttons[idx] && (vm.buttons[idx].callback = callback);
	                return vm;
	            }
	            vm.getTmpData = function () {
	                return vm.$tmpData;
	            }
	            vm.setTmpData = function (val) {
	                vm.$tmpData = $.extend(vm.$tmpData, val);
	                return vm;
	            }
	            //======= 外部接口 END =======//
	        },
	        $ready: function (vm, elem) {
	            //向store注册组件
	            McAvalon.$mcPageStore && McAvalon.$mcPageStore.regist(vm);
	            vm.onInit(vm, elem); //调用外部初始化函数
	        }
	    });
	
	    var widget = avalon.components["mc:dialog"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-modal-cotar fade\" ms-click=\"hideDialog($event)\" ms-class-1=\"mc-dialog-show:show\"\r\n     ms-class-2=\"mc-dialog-hide:!show\">\r\n    <div class=\"mc-modal-dialog vm-cotar\" ms-click=\"clickDialog($event)\" ms-class-1=\"mc-modal-lg: size=='large'\"\r\n         ms-class-2=\"mc-modal-sm: size=='small'\" ms-class-3=\"mc-modal-page: size=='page'\">\r\n        <div class=\"mc-modal-content\">\r\n            <!-- modal header -->\r\n            <div class=\"mc-modal-header hf\">\r\n                <div class=\"mc-modal-title fp\">{{title}}</div>\r\n                <div class=\"mc-close-btn fp\" ms-click=\"hideDialog($event,true)\"><span>&times;</span></div>\r\n            </div>\r\n            <!-- modal body -->\r\n            <div class=\"mc-modal-body\" ms-css-padding=\"padding\" ms-css-height=\"height\">{{content|html}}</div>\r\n            <!-- modal footer -->\r\n            <div class=\"mc-modal-footer\" ms-if=\"buttons.length > 0\">\r\n                <mc:button ms-repeat=\"buttons\" ms-attr-type=\"jBtnType($index)\" on-click=\"btnClick\"\r\n                           ms-attr-lindex=\"$index\" ms-attr-label=\"el.label\">\r\n                </mc:button>\r\n            </div>\r\n        </div>\r\n        <!-- modal bg -->\r\n        <div class=\"mc-modal-bg\"></div>\r\n    </div>\r\n</div>"

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(17);
	
	//#region 图标
	McIcon = function () {
	    //可选图标列表
	    this.iconList = [
	        { iconCode: "&#xe791;" },
	        { iconCode: "&#xe78b;" },
	        { iconCode: "&#xe729;" },
	        { iconCode: "&#xe734;" },
	        { iconCode: "&#xe74a;" },
	        { iconCode: "&#xe741;" },
	        { iconCode: "&#xe739;" },
	        { iconCode: "&#xe759;" },
	        { iconCode: "&#xe753;" },
	        { iconCode: "&#xe700;" },
	        { iconCode: "&#xe6fe;" },
	        { iconCode: "&#xe706;" },
	        { iconCode: "&#xe667;" },
	        { iconCode: "&#xe665;" },
	        { iconCode: "&#xe671;" },
	        { iconCode: "&#xe676;" },
	        { iconCode: "&#xe6af;" },
	        { iconCode: "&#xe699;" },
	        { iconCode: "&#xe69b;" },
	        { iconCode: "&#xe651;" }
	    ];
	}
	McIcon.prototype.getList = function () {
	    return this.iconList;
	}
	McIcon.prototype.getIcon = function (idx) {
	    return this.iconList[idx];
	}
	//#endregion
	
	//#region McAvalon Info
	McAvalon = {
	    //版本信息
	    version: '0.4.0beta',
	    $window: $({}), //子页面的全局window对象
	    $mcPageStore: null, //子页面的store对象
	    getVm: function (identifier) { //通过identifier获取avalon的VM对象
	        return avalon.vmodels[identifier];
	    },
	    //工具函数
	    util: {
	        //生成UID(id前缀)
	        genId: function (prefix) {
	            //prefix = prefix.toUpperCase() || 'ID';
	            prefix = prefix || 'ID';
	            return String(Math.random() + Math.random()).replace(/\d\.\d{4}/, prefix);
	        },
	        //获取url参数
	        getUrlParamByName: function (name) {
	            var result = null;
	            var hash = window.location.hash;
	            var s = hash.indexOf("?");
	            if (s !== -1) {
	                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	                var r = hash.substr(s + 1).match(reg);
	                if (r != null) result = decodeURIComponent(r[2]);
	            }
	            return result;
	        }
	    },
	    //数据验证
	    validata: function (val, valids) {
	        var info = '', reg = null, flag = true, validArr = valids.split(',');
	        for (var i = 0; i < validArr.length; i++) {
	            var valid = validArr[i];
	            switch (valid) {
	                case 'int':
	                    reg = /^\-?\d+$/;
	                    info = reg.test(val) ? '' : '请输入正确的整数'; break;
	                case '+int':
	                    reg = /^\+?[1-9][0-9]*$/;
	                    info = reg.test(val) ? '' : '请输入正确的正整数'; break;
	                case '-int':
	                    reg = /^\-[1-9][0-9]*$/;
	                    info = reg.test(val) ? '' : '请输入正确的负整数'; break;
	                case 'float':
	                    reg = /^(-?\d+)(\.\d+)?/;
	                    info = reg.test(val) ? '' : '请输入正确的浮点数'; break;
	                case '+float':
	                    reg = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
	                    info = reg.test(val) ? '' : '请输入正确的正浮点数'; break;
	                case '-float':
	                    reg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
	                    info = reg.test(val) ? '' : '请输入正确的负浮点数'; break;
	                case 'ip':
	                    reg = /^(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])$/;
	                    info = reg.test(val) ? '' : 'IP地址有误'; break;
	                case 'email':
	                    reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]{2,5}$/;
	                    info = reg.test(val) ? '' : '电子邮件地址有误'; break;
	                case 'phone':
	                    reg = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
	                    info = reg.test(val) ? '' : '电话号码有误'; break;
	                case 'mobile':
	                    reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	                    info = reg.test(val) ? '' : '手机号码有误'; break;
	                default:
	                    break;
	            }
	        }
	        return info;
	    },
	
	    //图标
	    icon: new McIcon()
	}
	//#endregion
	
	//#region Avalon Config
	avalon.config({
	    paths: {
	        mmRequest: "debug/src/ass/ui/base/js/mmRequest.js",
	        mmPromise: "debug/src/ass/ui/base/js/mmPromise.js",
	        mmHistory: "debug/src/ass/ui/base/js/mmRouter/mmHistory.js",
	        mmRouter: "debug/src/ass/ui/base/js/mmRouter/mmRouter.js",
	        mmState: "debug/src/ass/ui/base/js/mmRouter/mmState.js",
	        //MCUI path
	        mcAccordion: "debug/src/ass/ui/accordion/mc.accordion.js", //手风琴
	        mcSidebar: "debug/src/ass/ui/sidebar/mc.sidebar.js", //侧边栏
	        mcSidepop: "debug/src/ass/ui/sidepop/mc.sidepop.js", //侧边弹出层
	        mcDatagrid: "debug/src/ass/ui/datagrid/mc.datagrid.js", //数据表
	        mcDatagridTest: "debug/src/ass/ui/datagridtest/mc.datagridtest.js", //数据表2
	        mcPopmenu: "debug/src/ass/ui/popmenu/mc.popmenu.js", //弹出菜单
	        mcPop: 'debug/src/ass/ui/pop/mc.pop.js', //提示框,确认框组件
	        mcDialog: 'debug/src/ass/ui/dialog/mc.dialog.js',
	        mcDialogTest: 'debug/src/ass/ui/dialogtest/mc.dialogtest.js',
	        mcForm: 'debug/src/ass/ui/form/mc.form.js',
	        mcNavbar: 'debug/src/ass/ui/navbar/mc.navbar.js',
	        mcPanel: 'debug/src/ass/ui/panel/mc.panel.js',
	        mcTab: 'debug/src/ass/ui/tab/mc.tab.js',
	        mcSearchbox: "debug/src/ass/ui/searchbox/mc.searchbox.js", //搜索框
	        mcTabs: "debug/src/ass/ui/tabs/mc.tabs.js", //tabs
	        mcCheckbox: "debug/src/ass/ui/form/checkbox/mc.checkbox.js", //复选框
	        mcCheckboxGroup: 'debug/src/ass/ui/form/checkboxGroup/mc.checkboxgroup.js',
	        mcListdataAdd: 'debug/src/ass/ui/form/ListdataAdd/mc.ListdataAdd.js',//左右选择框
	        mcTree: 'debug/src/ass/ui/form/tree/mc.tree.js',//树形
	        mcTreeBt: 'debug/src/ass/ui/form/treebt/mc.tree.js',//树形2
	        mcTreeSelect: 'debug/src/ass/ui/form/treeSelect/mc.treeSelect.js',//树形选择form
	        mcButton: "debug/src/ass/ui/form/button/mc.button.js", //按钮
	        mcDroplist: "debug/src/ass/ui/droplist/mc.droplist.js", //下拉展开列表
	        mcDatapager: "debug/src/ass/ui/datapager/mc.datapager.js", //页码
	        mcDatapagerTest: "debug/src/ass/ui/datapagertest/mc.datapagerTest.js", //页码test
	        mcDatepicker: 'debug/src/ass/ui/form/datepicker/mc.datepicker.js', //日期选择
	        mcPassword: 'debug/src/ass/ui/form/password/mc.password.js',
	        mcRadiogroup: 'debug/src/ass/ui/form/radio/mc.radiogroup.js',
	        mcRate: 'debug/src/ass/ui/form/rate/mc.rate.js',
	        mcSelectbox: "debug/src/ass/ui/form/selectbox/mc.selectbox.js", //下拉选择框
	        mcSpinner: 'debug/src/ass/ui/form/spinner/mc.spinner.js',
	        mcSwitch: 'debug/src/ass/ui/form/switch/mc.switch.js', //开关组件
	        mcText: "debug/src/ass/ui/form/text/mc.text.js", //输入行
	        mcJsonadd: "debug/src/ass/ui/form/jsonadd/mc.jsonadd.js", //输入行
	        mcUpload: "debug/src/ass/ui/form/upload/mc.upload.js", //上传组件
	        mcEditor: "debug/src/ass/ui/form/editor/mc.editor.js", //文本编辑器组件
	        mcTagadd: "debug/src/ass/ui/form/tagadd/mc.tagadd.js", //标签添加组件
	        mcSelectadd: "debug/src/ass/ui/form/selectadd/mc.Selectadd.js", //选择添加组件
	        mcPagemodal: "debug/src/ass/ui/pagemodal/mc.pagemodal.js", //页面弹窗
	        mcBread: "debug/src/ass/ui/bread/mc.bread.js", //面包屑
	        mcIconselect: "debug/src/ass/ui/form/iconselect/mc.iconselect.js", //图标选择
	        mcTextarea: 'debug/src/ass/ui/form/textarea/mc.textarea.js',
	        //MCLayout path
	        mcGrid: "debug/src/ass/ui/layout/gridlayout/mc.gridlayout.js", //网格布局
	        mcLinear: "debug/src/ass/ui/layout/linearlayout/mc.linearlayout.js", //线性布局
	        mcAbsolute: "debug/src/ass/ui/layout/absolutelayout/mc.absolutelayout.js", //绝对布局
	        mcRelative: "debug/src/ass/ui/layout/relativelayout/mc.relativelayout.js", //相对布局
	    },
	    maxRepeatSize: 50
	});
	avalon.library("mc", {
	    $init: function () { },
	    $childReady: function () { },
	    $ready: function () { },
	    $dispose: function () { }
	});
	//#endregion
	
	//#region some method
	function testSetValue(_key, _obj, _success) {
	    //121.40.186.49:8001
	    //$.ajax({
	    //    url: "http://192.168.0.109:8001/Home/set",
	    //    type: "post",
	    //    async: true,
	    //    data: {
	    //        key: _key,
	    //        value: JSON.stringify(_obj)
	    //    },
	    //    success: function () {
	    //        typeof _success === "function" && _success();
	    //    }
	    //});
	    $.ajax({
	        url: "/Home/SetData",
	        type: "post",
	        async: true,
	        data: {
	            key: _key,
	            value: JSON.stringify(_obj)
	        },
	        success: function () {
	            typeof _success === "function" && _success();
	        }
	    });
	}
	
	function testGetValue(_key, _success) {
	    //$.ajax({
	    //    url: "http://192.168.0.109:8001/Home/get",
	    //    data: {
	    //      key: _key
	    //    },
	    //    type: "post",
	    //    async: true,
	    //    success: function (result) {
	    //        typeof _success === "function" && _success.call(this, result);
	    //    }
	    //});
	    $.ajax({
	        url: "/Home/GetData",
	        type: "post",
	        async: true,
	        data: {
	            key: _key
	        },
	        success: function (result) {
	            typeof _success === "function" && _success.call(this, result);
	        }
	    });
	}
	
	//对象深度拷贝
	var deepCopy = function (source) {
	    var result = {};
	    for (var key in source) {
	        if (source.hasOwnProperty(key)) {
	            result[key] = typeof source[key] === 'object' ? window.deepCoyp(source[key]) : source[key];
	        }
	    }
	    return result;
	}
	
	
	//方式3, 设计一个assignVM方法，方便mixin N个对象
	function assignVM(vm, firstSource) {
	    for (var i = 1; i < arguments.length; i++) {
	        var nextSource = arguments[i];
	        if (nextSource && typeof nextSource !== "object")
	            continue;
	        for (var j in vm) {
	            if (vm.hasOwnProperty(j) && nextSource.hasOwnProperty(j)) {
	                vm[j] = nextSource[j];
	            }
	        }
	    }
	    return vm;
	}
	/**
	 * 转换数据为表格源数据
	 * @param {} data 待转换的数据
	 * @param {} target 目标表格vm
	 * @returns {} 转换完的数据
	 */
	toDatagridData = function (data, target) {
	    //return target ? datagridData(data, function () { target.selected.push(false) }) : datagridData(data);
	    return datagridData(data, target ? function () {
	        target.selected.push(false);
	    } : null);
	}
	
	/**
	 * 转换为数据表格数据
	 * @param {} data 原数据
	 * @param {} callback 回调函数
	 * @returns {} 新数据
	 */
	datagridData = function (data, callback) {
	    var hasCallback = false;
	    typeof callback === "function" && (hasCallback = true);
	    avalon.each(data, function (i, val) {
	        val.$tableChildVM = {};
	        val.selected = false;
	        if (hasCallback) callback.call(val, i);
	    });
	    return data;
	}
	
	McAvalon.global = {}; //存放全局变量
	
	root = avalon.define({ //存放全局变量,可双向绑定
	    $id: "app"
	});
	
	/**
	 * 辅助selectbox点击收拢
	 */
	$(document).on("click", function () {
	    if (McAvalon.global.selectboxVm) {
	        avalon.each(McAvalon.global.selectboxVm, function (i, val) {
	            val.isOpen() && val.setState(false);
	        });
	    }
	});
	
	
	//shim
	window.console = window.console || (function () {
	    var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () { };
	    return c;
	})();
	//#endregion
	
	//#region polyfill
	//author: meizz
	//对Date的扩展，将 Date 转化为指定格式的String
	//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
	//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
	//例子：
	//(new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
	//(new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
	//支持yyyyMMdd yyyy/MM/dd MM/dd/yyyy等
	Date.prototype.format = function (fmt) {
	    var o = {
	        "M+": this.getMonth() + 1,                 //月份
	        "d+": this.getDate(),                    //日
	        "h+": this.getHours(),                   //小时
	        "m+": this.getMinutes(),                 //分
	        "s+": this.getSeconds(),                 //秒
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
	        "S": this.getMilliseconds()             //毫秒
	    };
	    if (/(y+)/.test(fmt))
	        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	        if (new RegExp("(" + k + ")").test(fmt))
	            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}
	
	String.prototype.trim = function () {
	    return this.replace(/(^\s*)|(\s*$)/g, '');
	}
	String.prototype.ltrim = function () {
	    return this.replace(/(^\s*)/g, '');
	}
	String.prototype.rtrim = function () {
	    return this.replace(/(\s*$)/g, '');
	}
	String.prototype.toDate = function () {
	    var str = this;
	    var dt = null;
	    try {
	        if (str.indexOf('-') != -1) {
	            dt = new Date(str.replace(/-/g, '/'));
	        } else if (str.indexOf('/') != -1) {
	            dt = new Date(str);
	        } else if (str.length == 8) {
	            dt = new Date(str.substr(0, 4) + '/' + str.substr(4, 2) + '/' + str.substr(6, 2));
	        } else if (str.length >= 14 && str.length <= 17) {
	            dt = new Date(str.substr(0, 4) + '/' + str.substr(4, 2) + '/' + str.substr(6, 2) + ' ' + str.substr(8, 2) + ':' + str.substr(10, 2) + ':' + str.substr(12, 2));
	        }
	    } catch (e) { }
	    return dt;
	}
	
	if (typeof Array.prototype.forEach != "function") {
	    Array.prototype.forEach = function (fn, context) {
	        for (var k = 0, length = this.length; k < length; k++) {
	            if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
	                fn.call(context, this[k], k, this);
	            }
	        }
	    };
	}
	
	if (typeof Array.prototype.map != "function") {
	    Array.prototype.map = function (fn, context) {
	        var arr = [];
	        if (typeof fn === "function") {
	            for (var k = 0, length = this.length; k < length; k++) {
	                arr.push(fn.call(context, this[k], k, this));
	            }
	        }
	        return arr;
	    };
	}
	
	if (typeof Array.prototype.filter != "function") {
	    Array.prototype.filter = function (fn, context) {
	        var arr = [];
	        if (typeof fn === "function") {
	            for (var k = 0, length = this.length; k < length; k++) {
	                fn.call(context, this[k], k, this) && arr.push(this[k]);
	            }
	        }
	        return arr;
	    };
	}
	
	if (typeof Array.prototype.some != "function") {
	    Array.prototype.some = function (fn, context) {
	        var passed = false;
	        if (typeof fn === "function") {
	            for (var k = 0, length = this.length; k < length; k++) {
	                if (passed === true) break;
	                passed = !!fn.call(context, this[k], k, this);
	            }
	        }
	        return passed;
	    };
	}
	
	if (typeof Array.prototype.every != "function") {
	    Array.prototype.every = function (fn, context) {
	        var passed = true;
	        if (typeof fn === "function") {
	            for (var k = 0, length = this.length; k < length; k++) {
	                if (passed === false) break;
	                passed = !!fn.call(context, this[k], k, this);
	            }
	        }
	        return passed;
	    };
	}
	
	if (typeof Array.prototype.indexOf != "function") {
	    Array.prototype.indexOf = function (searchElement, fromIndex) {
	        var index = -1;
	        fromIndex = fromIndex * 1 || 0;
	
	        for (var k = 0, length = this.length; k < length; k++) {
	            if (k >= fromIndex && this[k] === searchElement) {
	                index = k;
	                break;
	            }
	        }
	        return index;
	    };
	}
	
	if (typeof Array.prototype.lastIndexOf != "function") {
	    Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
	        var index = -1, length = this.length;
	        fromIndex = fromIndex * 1 || length - 1;
	
	        for (var k = length - 1; k > -1; k -= 1) {
	            if (k <= fromIndex && this[k] === searchElement) {
	                index = k;
	                break;
	            }
	        }
	        return index;
	    };
	}
	
	if (typeof Array.prototype.reduce != "function") {
	    Array.prototype.reduce = function (callback, initialValue) {
	        var previous = initialValue, k = 0, length = this.length;
	        if (typeof initialValue === "undefined") {
	            previous = this[0];
	            k = 1;
	        }
	
	        if (typeof callback === "function") {
	            for (k; k < length; k++) {
	                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
	            }
	        }
	        return previous;
	    };
	}
	
	if (typeof Array.prototype.reduceRight != "function") {
	    Array.prototype.reduceRight = function (callback, initialValue) {
	        var length = this.length, k = length - 1, previous = initialValue;
	        if (typeof initialValue === "undefined") {
	            previous = this[length - 1];
	            k--;
	        }
	        if (typeof callback === "function") {
	            for (k; k > -1; k -= 1) {
	                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
	            }
	        }
	        return previous;
	    };
	}
	//#endregion
	
	; (function (McAvalon, $, undefined) {
	    "use strict";
	
	    //#region store
	    var emptyStore = null;
	    //mcStore 对象
	    function mcStore(idStore) {
	        //id的store
	        this.idStore = idStore || {};
	        //vm的store
	        this.vmStore = {};
	        //deferred的store
	        this.deferredStore = {};
	        for (var id in idStore) {
	            if (idStore.hasOwnProperty(id)) {
	                this.deferredStore[this.idStore[id]] = $.Deferred();
	            }
	        }
	    }
	
	    //创建store的方法
	    McAvalon.Store = function (idStore) {
	        var store = new mcStore(idStore);
	        McAvalon.$mcPageStore = store;
	        return store;
	    }
	
	    //获得一个空的sotre对象
	    McAvalon.EmptyStore = function () {
	        return emptyStore || (emptyStore = new mcStore({}));
	    }
	
	    //获取id
	    mcStore.prototype.getId = function (idkey) {
	        return this.idStore[idkey];
	    }
	
	    //获取vm
	    mcStore.prototype.getVm = function (idkey) {
	        return this.vmStore[this.idStore[idkey]];
	    }
	
	    //获取延迟对象
	    mcStore.prototype.getDeferred = function (idkey) {
	        console.log(this.idStore[idkey]);
	        return this.deferredStore[this.idStore[idkey]];
	    }
	
	    //组件注册
	    mcStore.prototype.regist = function (compVm) {
	        var curId = compVm.$id;
	        this.vmStore[curId] = compVm;
	        //暂不处理匿名注册情况
	        if (this.deferredStore[curId]) {
	            console.log(curId);
	            //注册成功
	            this.deferredStore[curId].resolve(compVm);
	        }
	    }
	    //#endregion
	
	})(window.McAvalon || (window.McAvalon = {}), window.jQuery);


/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//=========================================
	//  数据交互模块 by 司徒正美
	//  版本: 1.0.0
	//  最近更新: 2015/4/30
	//==========================================
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = function(avalon) {
	    var global = window
	    var DOC = global.document
	    var encode = encodeURIComponent
	    var decode = decodeURIComponent
	
	    var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
	    var rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg
	    var rnoContent = /^(?:GET|HEAD)$/
	    var rprotocol = /^\/\//
	    var rhash = /#.*$/
	    var rquery = /\?/
	    var rjsonp = /(=)\?(?=&|$)|\?\?/
	    var r20 = /%20/g
	    var radd = /\+/g
	    var r5b5d = /%5B(.*?)%5D$/;
	
	    var originAnchor = document.createElement("a")
	    originAnchor.href = location.href
	    //告诉WEB服务器自己接受什么介质类型，*/* 表示任何类型，type/* 表示该类型下的所有子类型，type/sub-type。
	    var accepts = {
	        xml: "application/xml, text/xml",
	        html: "text/html",
	        text: "text/plain",
	        json: "application/json, text/javascript",
	        script: "text/javascript, application/javascript",
	        "*": ["*/"] + ["*"] //避免被压缩掉
	    }
	
	    function IE() {
	        if (window.VBArray) {
	            var mode = document.documentMode
	            return mode ? mode : window.XMLHttpRequest ? 7 : 6
	        } else {
	            return 0
	        }
	    }
	    var useOnload = IE() === 0 || IE() > 8
	
	    function parseJS(code) {
	        var indirect = eval
	        code = code.trim()
	        if (code) {
	            if (code.indexOf("use strict") === 1) {
	                var script = document.createElement("script")
	                script.text = code;
	                head.appendChild(script).parentNode.removeChild(script)
	            } else {
	                indirect(code)
	            }
	        }
	    }
	
	    if (!String.prototype.startsWith) {
	        String.prototype.startsWith = function(searchString, position) {
	            position = position || 0;
	            return this.lastIndexOf(searchString, position) === position;
	        }
	    }
	
	    var head = DOC.getElementsByTagName("head")[0] //HEAD元素
	    var isLocal = false
	    try {
	        //在IE下如果重置了document.domain，直接访问window.location会抛错，但用document.URL就ok了
	        //http://www.cnblogs.com/WuQiang/archive/2012/09/21/2697474.html
	        isLocal = rlocalProtocol.test(location.protocol)
	    } catch (e) {
	    }
	
	    new function() {
	        //http://www.cnblogs.com/rubylouvre/archive/2010/04/20/1716486.html
	        var s = ["XMLHttpRequest",
	            "ActiveXObject('MSXML2.XMLHTTP.6.0')",
	            "ActiveXObject('MSXML2.XMLHTTP.3.0')",
	            "ActiveXObject('MSXML2.XMLHTTP')",
	            "ActiveXObject('Microsoft.XMLHTTP')"
	        ]
	        s[0] = IE() < 8 && IE() !== 0 && isLocal ? "!" : s[0] //IE下只能使用ActiveXObject
	        for (var i = 0, axo; axo = s[i++];) {
	            try {
	                if (eval("new " + axo)) {
	                    avalon.xhr = new Function("return new " + axo)
	                    break;
	                }
	            } catch (e) {
	            }
	        }}
	    var supportCors = "withCredentials" in avalon.xhr()
	
	
	
	
	    function parseXML(data, xml, tmp) {
	        try {
	            var mode = document.documentMode
	            if (window.DOMParser && (!mode || mode > 8)) { // Standard
	                tmp = new DOMParser()
	                xml = tmp.parseFromString(data, "text/xml")
	            } else { // IE
	                xml = new ActiveXObject("Microsoft.XMLDOM") //"Microsoft.XMLDOM"
	                xml.async = "false";
	                xml.loadXML(data)
	            }
	        } catch (e) {
	        xml = void  0
	        }
	        if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
	            avalon.error("Invalid XML: " + data)
	        }
	        return xml
	    }
	
	    //ajaxExtend是一个非常重要的内部方法，负责将用法参数进行规整化
	    //1. data转换为字符串
	    //2. type转换为大写
	    //3. url正常化，加querystring, 加时间戮
	    //4. 判定有没有跨域
	    //5. 添加hasContent参数
	    var defaults = {
	        type: "GET",
	        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	        async: true,
	        jsonp: "callback"
	    }
	    function ajaxExtend(opts) {
	        opts = avalon.mix({}, defaults, opts)
	        opts.type = opts.type.toUpperCase()
	        var querystring = typeof opts.data === "string" ? opts.data : avalon.param(opts.data)
	        opts.querystring = querystring || ""
	        opts.url = opts.url.replace(rhash, "").replace(rprotocol, location.protocol + "//")
	
	        if (typeof opts.crossDomain !== "boolean") { //判定是否跨域
	            var urlAnchor = document.createElement("a");
	            // Support: IE6-11+
	            // IE throws exception if url is malformed, e.g. http://example.com:80x/
	            try {
	                urlAnchor.href = opts.url;
	                // in IE7-, get the absolute path
	                var absUrl = !"1"[0] ? urlAnchor.getAttribute("href", 4) : urlAnchor.href;
	                urlAnchor.href = absUrl
	                opts.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
	            } catch (e) {
	            opts.crossDomain = true;
	            }
	        }
	        opts.hasContent = !rnoContent.test(opts.type) //是否为post请求
	        if (!opts.hasContent) {
	            if (querystring) { //如果为GET请求,则参数依附于url上
	                opts.url += (rquery.test(opts.url) ? "&" : "?") + querystring;
	            }
	            if (opts.cache === false) { //添加时间截
	                opts.url += (rquery.test(opts.url) ? "&" : "?") + "_time=" + (new Date() - 0)
	            }
	        }
	        return opts;
	    }
	    /**
	     * 伪XMLHttpRequest类,用于屏蔽浏览器差异性
	     * var ajax = new(self.XMLHttpRequest||ActiveXObject)("Microsoft.XMLHTTP")
	     * ajax.onreadystatechange = function(){
	     *   if (ajax.readyState==4 && ajax.status==200){
	     *        alert(ajax.responseText)
	     *   }
	     * }
	     * ajax.open("POST", url, true) 
	     * ajax.send("key=val&key1=val2") 
	     */
	    var XHRMethods = {
	        setRequestHeader: function(name, value) {
	            this.requestHeaders[name] = value;
	            return this;
	        },
	        getAllResponseHeaders: function() {
	            return this.readyState === 4 ? this.responseHeadersString : null;
	        },
	        getResponseHeader: function(name, match) {
	            if (this.readyState === 4) {
	                while ((match = rheaders.exec(this.responseHeadersString))) {
	                    this.responseHeaders[match[1]] = match[2];
	                }
	                match = this.responseHeaders[name];
	            }
	            return match === undefined ? null : match;
	        },
	        overrideMimeType: function(type) {
	            this.mimeType = type;
	            return this;
	        },
	        // 中止请求
	        abort: function(statusText) {
	            statusText = statusText || "abort";
	            if (this.transport) {
	                this.respond(0, statusText)
	            }
	            return this;
	        },
	        /**
	         * 用于派发success,error,complete等回调
	         * http://www.cnblogs.com/rubylouvre/archive/2011/05/18/2049989.html
	         * @param {Number} status 状态码
	         * @param {String} statusText 对应的扼要描述
	         */
	        dispatch: function(status, nativeStatusText) {
	            var statusText = nativeStatusText
	            // 只能执行一次，防止重复执行
	            if (!this.transport) { //2:已执行回调
	                return
	            }
	            this.readyState = 4
	            var isSuccess = status >= 200 && status < 300 || status === 304
	            if (isSuccess) {
	                if (status === 204) {
	                    statusText = "nocontent"
	                } else if (status === 304) {
	                    statusText = "notmodified"
	                } else {
	                    //如果浏览器能直接返回转换好的数据就最好不过,否则需要手动转换
	                    if (typeof this.response === "undefined") {
	                        var dataType = this.options.dataType || this.options.mimeType
	                        if (!dataType && this.responseText || this.responseXML) { //如果没有指定dataType，则根据mimeType或Content-Type进行揣测
	                            dataType = this.getResponseHeader("Content-Type") || ""
	                            dataType = dataType.match(/json|xml|script|html/i) || ["text"]
	                            dataType = dataType[0].toLowerCase()
	                        }
	                        var responseText = this.responseText || '',
	                            responseXML = this.responseXML || ''
	                        try {
	                            this.response = avalon.ajaxConverters[dataType].call(this, responseText, responseXML)
	                        } catch (e) {
	                        isSuccess = false
	                        this.error = e
	                        statusText = "parsererror"
	                        }
	                    }
	                }
	            }
	            this.status = status;
	            this.statusText = statusText + ""
	            if (this.timeoutID) {
	                clearTimeout(this.timeoutID)
	                delete this.timeoutID
	            }
	            this._transport = this.transport
	
	            /**
	             * global event handler
	             */
	            var that = this
	
	            // 到这要么成功，调用success, 要么失败，调用 error, 最终都会调用 complete
	            if (isSuccess) {
	                this._resolve([this.response, statusText, this])
	                /**
	                 * global event handler
	                 */
	                window.setTimeout(function() {
	                    avalon.ajaxGlobalEvents.success(that, that.options, that.response)
	                }, 0)
	            } else {
	                this._reject([this, statusText, this.error])
	                /**
	                 * global event handler
	                 */
	                window.setTimeout(function() {
	                    avalon.ajaxGlobalEvents.error(that, that.options, statusText)
	                }, 0)
	            }
	            delete this.transport
	
	            /**
	             * global event handler
	             */
	            ajaxActive--
	
	            window.setTimeout(function() {
	                avalon.ajaxGlobalEvents.complete(that, that.options)
	            }, 0)
	
	            if (ajaxActive === 0) {
	                // 最后一个
	                window.setTimeout(function() {
	                    avalon.ajaxGlobalEvents.stop()
	                }, 0)
	            }
	
	        }
	    }
	    /**
	     * global event handler
	     */
	    // 记录当前活跃的 ajax 数
	    var ajaxActive = 0
	
	    //ajax主函数
	    avalon.ajax = function(opts, promise) {
	        if (!opts || !opts.url) {
	            avalon.error("参数必须为Object并且拥有url属性")
	        }
	        opts = ajaxExtend(opts) //处理用户参数，比如生成querystring, type大写化
	        //创建一个伪XMLHttpRequest,能处理complete,success,error等多投事件
	        var XHRProperties = {
	            responseHeadersString: "",
	            responseHeaders: {},
	            requestHeaders: {},
	            querystring: opts.querystring,
	            readyState: 0,
	            uniqueID: ("" + Math.random()).replace(/0\./, ""),
	            status: 0
	        }
	        var _reject, _resolve
	        var promise = new avalon.Promise(function(resolve, reject) {
	            _resolve = resolve
	            _reject = reject
	        })
	
	        promise.options = opts
	        promise._reject = _reject
	        promise._resolve = _resolve
	
	        var doneList = [],
	            failList = []
	
	        Array("done", "fail", "always").forEach(function(method) {
	            promise[method] = function(fn) {
	                if (typeof fn === "function") {
	                    if (method !== "fail")
	                        doneList.push(fn)
	                    if (method !== "done")
	                        failList.push(fn)
	                }
	                return this
	            }
	        })
	
	        var isSync = opts.async === false
	        if (isSync) {
	            avalon.log("warnning:与jquery1.8一样,async:false这配置已经被废弃")
	            promise.async = false
	        }
	
	
	        avalon.mix(promise, XHRProperties, XHRMethods)
	
	        promise.then(function(value) {
	            value = Array.isArray(value) ? value : value === void 0 ? [] : [value]
	            for (var i = 0, fn; fn = doneList[i++];) {
	                fn.apply(promise, value)
	            }
	            return value
	        }, function(value) {
	            value = Array.isArray(value) ? value : value === void 0 ? [] : [value]
	            for (var i = 0, fn; fn = failList[i++];) {
	                fn.apply(promise, value)
	            }
	            return value
	        })
	
	
	        promise.done(opts.success).fail(opts.error).always(opts.complete)
	
	        var dataType = opts.dataType //目标返回数据类型
	        var transports = avalon.ajaxTransports
	
	        if ((opts.crossDomain && !supportCors || rjsonp.test(opts.url)) && dataType === "json" && opts.type === "GET") {
	            dataType = opts.dataType = "jsonp"
	        }
	        var name = opts.form ? "upload" : dataType
	        var transport = transports[name] || transports.xhr
	        avalon.mix(promise, transport) //取得传送器的request, respond, preproccess
	        if (promise.preproccess) { //这用于jsonp upload传送器
	            dataType = promise.preproccess() || dataType
	        }
	        //设置首部 1、Content-Type首部
	        if (opts.contentType) {
	            promise.setRequestHeader("Content-Type", opts.contentType)
	        }
	        //2.处理Accept首部
	        promise.setRequestHeader("Accept", accepts[dataType] ? accepts[dataType] + ", */*; q=0.01" : accepts["*"])
	        for (var i in opts.headers) { //3. 处理headers里面的首部
	            promise.setRequestHeader(i, opts.headers[i])
	        }
	        // 4.处理超时
	        if (opts.async && opts.timeout > 0) {
	            promise.timeoutID = setTimeout(function() {
	                promise.abort("timeout")
	                promise.dispatch(0, "timeout")
	            }, opts.timeout)
	        }
	
	        /**
	         * global event handler
	         */
	        if (ajaxActive === 0) {
	            // 第一个
	            avalon.ajaxGlobalEvents.start()
	        }
	        avalon.ajaxGlobalEvents.send(promise, opts)
	        ajaxActive++
	
	
	
	        promise.request()
	        return promise
	    };
	    "get,post".replace(avalon.rword, function(method) {
	        avalon[method] = function(url, data, callback, type) {
	            if (typeof data === "function") {
	                type = type || callback
	                callback = data
	                data = void 0
	            }
	            return avalon.ajax({
	                type: method,
	                url: url,
	                data: data,
	                success: callback,
	                dataType: type
	            })
	        };
	    })
	    function ok(val) {
	        return val
	    }
	    function ng(e) {
	        throw e
	    }
	    avalon.getScript = function(url, callback) {
	        return avalon.get(url, null, callback, "script")
	    }
	    avalon.getJSON = function(url, data, callback) {
	        return avalon.get(url, data, callback, "json")
	    }
	    avalon.upload = function(url, form, data, callback, dataType) {
	        if (typeof data === "function") {
	            dataType = callback;
	            callback = data;
	            data = void 0;
	        }
	        return avalon.ajax({
	            url: url,
	            type: "post",
	            dataType: dataType,
	            form: form,
	            data: data,
	            success: callback
	        });
	    }
	
	
	    /**
	     * global event handler
	     */
	    avalon.ajaxGlobalEvents = {};
	
	    ["start", "stop", "complete", "error", "success", "send"].forEach(function(method) {
	        avalon.ajaxGlobalEvents[method] = avalon.noop
	    })
	
	    avalon.ajaxConverters = { //转换器，返回用户想要做的数据
	        text: function(text) {
	            // return text || "";
	            return text;
	        },
	        xml: function(text, xml) {
	            return xml !== void 0 ? xml : parseXML(text)
	        },
	        html: function(text) {
	            return avalon.parseHTML(text) //一个文档碎片,方便直接插入DOM树
	        },
	        json: function(text) {
	            if (!avalon.parseJSON) {
	                avalon.log("avalon.parseJSON不存在,请升级到最新版")
	            }
	            return avalon.parseJSON(text)
	        },
	        script: function(text) {
	            parseJS(text)
	            return text;
	        },
	        jsonp: function() {
	            var json, callbackName;
	            if (this.jsonpCallback.startsWith('avalon.')) {
	                callbackName = this.jsonpCallback.replace(/avalon\./, '')
	                json = avalon[callbackName]
	                delete avalon[callbackName]
	            } else {
	                json = window[this.jsonpCallback]
	            }
	            return json;
	        }
	    }
	
	    var rbracket = /\[\]$/
	    avalon.param = function(obj) {
	        var prefix,
	            s = [],
	            add = function(key, value) {
	                // If value is a function, invoke it and return its value
	                value = typeof value === "function" ? value() : (value == null ? "" : value);
	                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
	        }
	        // 处理数组与类数组的jquery对象
	        if (Array.isArray(obj)) {
	            // Serialize the form elements
	            avalon.each(obj, add)
	
	        } else {
	            for (prefix in obj) {
	                paramInner(prefix, obj[prefix], add);
	            }
	        }
	
	        // Return the resulting serialization
	        return s.join("&").replace(r20, "+");
	    }
	
	    function paramInner(prefix, obj, add) {
	        var name;
	        if (Array.isArray(obj)) {
	            // Serialize array item.
	            avalon.each(obj, function(i, v) {
	                if (rbracket.test(prefix)) {
	                    // Treat each array item as a scalar.
	                    add(prefix, v);
	                } else {
	                    // Item is non-scalar (array or object), encode its numeric index.
	                    paramInner(
	                        prefix + "[" + (typeof v === "object" ? i : "") + "]",
	                        v,
	                        add);
	                }
	            });
	        } else if (avalon.isPlainObject(obj)) {
	            // Serialize object item.
	            for (name in obj) {
	                paramInner(prefix + "[" + name + "]", obj[name], add);
	            }
	
	        } else {
	            // Serialize scalar item.
	            add(prefix, obj);
	        }
	    }
	    //将一个字符串转换为对象
	    function tryDecodeURIComponent(value) {
	        try {
	            return decodeURIComponent(value);
	        } catch (e) {
	        return value
	        }
	    }
	
	
	    //a%5B0%5D%5Bvalue%5D a%5B1%5D%5B%5D
	    function addSubObject(host, text, value) {
	        var match = text.match(r5b5d)
	        if (!match) {
	            return true
	        }
	
	        var steps = []
	        var first = true
	        var step, index, key
	        while (index = text.lastIndexOf("%5B")) {
	            if (index === -1) {
	                break
	            }
	            key = text.slice(index).slice(3, -3)
	            text = text.slice(0, index)
	            if (key === "") {
	                steps.unshift({
	                    action: "pushArrayElement"
	                })
	            } else if ((key >>> 0) + "" === key) {
	                steps.unshift({
	                    action: "setSubArray",
	                    value: key
	                })
	            } else {
	                if (first) {
	                    steps.unshift({
	                        action: "setObjectProperty",
	                        value: tryDecodeURIComponent(key)
	                    })
	                } else {
	                    steps.unshift({
	                        action: "setSubObjet",
	                        value: tryDecodeURIComponent(key)
	                    })
	                }
	            }
	            first = false
	        }
	        first = true
	        while (step = steps.shift()) {
	            var isObject = /Object/.test(step.action)
	            if (first) {
	                if (!(text in host)) {
	                    host[text] = isObject ? {} : []
	                }
	                first = false
	                host = host[text]
	            }
	            switch (step.action) {
	                case "pushArrayElement":
	                    host.push(value)
	                    break
	                case "setObjectProperty":
	                    host[step.value] = value
	                    break
	                case "setSubObjet":
	                    if (!(step.value in host)) {
	                        host[step.value] = {}
	                    }
	                    host = host[step.value]
	                    break
	                case "setSubArray":
	                    if (!(step.value in host)) {
	                        host[step.value] = []
	                    }
	                    host = host[step.value]
	                    break
	            }
	        }
	    }
	    //  function add
	    avalon.unparam = function(qs, sep, eq) {
	        sep = sep || '&';
	        eq = eq || '=';
	        var obj = {};
	        if ((typeof qs !== "string") || qs.length === 0) {
	            return obj;
	        }
	        if (qs.indexOf("?") !== -1) {
	            qs = qs.split("?").pop()
	        }
	        var array = qs.split(sep);
	        for (var i = 0, el; el = array[i++];) {
	            var arr = el.split("=")
	            if (arr.length === 1) { //处理只有键名没键值的情况
	                obj[arr[0]] = ""
	            } else {
	                var key = arr[0].replace(radd, '%20')
	                var v = tryDecodeURIComponent(arr.slice(1).join("=").replace(radd, ' '));
	                if (addSubObject(obj, key, v)) { //处理存在中括号的情况
	                    var k = tryDecodeURIComponent(key) //处理不存在中括号的简单的情况
	                    if (!Object.prototype.hasOwnProperty.call(obj, k)) {
	                        obj[k] = v;
	                    } else if (Array.isArray(obj[k])) {
	                        obj[k].push(v);
	                    } else {
	                        obj[k] = [obj[k], v];
	                    }
	                }
	            }
	        }
	
	        return obj
	    }
	    var rinput = /select|input|button|textarea/i
	    var rcheckbox = /radio|checkbox/
	    var rline = /\r?\n/g
	    function trimLine(val) {
	        return val.replace(rline, "\r\n")
	    }
	    //表单元素变字符串, form为一个元素节点
	    avalon.serialize = function(form) {
	        var json = {};
	        // 不直接转换form.elements，防止以下情况：   <form > <input name="elements"/><input name="test"/></form>
	        Array.prototype.filter.call(form.getElementsByTagName("*"), function(el) {
	            if (rinput.test(el.nodeName) && el.name && !el.disabled) {
	                return rcheckbox.test(el.type) ? el.checked : true //只处理拥有name并且没有disabled的表单元素
	            }
	        }).forEach(function(el) {
	            var val = avalon(el).val()
	            val = Array.isArray(val) ? val.map(trimLine) : trimLine(val)
	            var name = el.name
	            if (name in json) {
	                if (Array.isArray(val)) {
	                    json[name].push(val)
	                } else {
	                    json[name] = [json[name], val]
	                }
	            } else {
	                json[name] = val
	            }
	        })
	        return avalon.param(json, false) // 名值键值对序列化,数组元素名字前不加 []
	    }
	
	    var transports = avalon.ajaxTransports = {
	        xhr: {
	            //发送请求
	            request: function() {
	                var self = this;
	                var opts = this.options;
	                var transport = this.transport = new avalon.xhr;
	                transport.open(opts.type, opts.url, opts.async, opts.username, opts.password)
	                if (this.mimeType && transport.overrideMimeType) {
	                    transport.overrideMimeType(this.mimeType)
	                }
	                //IE6下，如果transport中没有withCredentials，直接设置会报错
	                if (opts.crossDomain && "withCredentials" in transport) {
	                    transport.withCredentials = true
	                }
	
	                /*
	                 * header 中设置 X-Requested-With 用来给后端做标示：
	                 * 这是一个 ajax 请求。
	                 *
	                 * 在 Chrome、Firefox 3.5+ 和 Safari 4+ 下，
	                 * 在进行跨域请求时设置自定义 header，会触发 preflighted requests，
	                 * 会预先发送 method 为 OPTIONS 的请求。
	                 *
	                 * 于是，如果跨域，禁用此功能。
	                 */
	                if (!opts.crossDomain) {
	                    this.requestHeaders["X-Requested-With"] = "XMLHttpRequest"
	                }
	
	                for (var i in this.requestHeaders) {
	                    transport.setRequestHeader(i, this.requestHeaders[i] + "")
	                }
	
	                /*
	                 * progress
	                 */
	                if (opts.progressCallback) {
	                    // 判断是否 ie6-9
	                    var isOldIE = document.all && !window.atob;
	                    if (!isOldIE) {
	                        transport.upload.onprogress = opts.progressCallback
	                    }
	                }
	
	                var dataType = opts.dataType
	                if ("responseType" in transport && /^(blob|arraybuffer|text)$/.test(dataType)) {
	                    transport.responseType = dataType
	                    this.useResponseType = true
	                }
	                //必须要支持 FormData 和 file.fileList 的浏览器 才能用 xhr 发送
	                //标准规定的 multipart/form-data 发送必须用 utf-8 格式， 记得 ie 会受到 document.charset 的影响
	                transport.send(opts.hasContent && (this.formdata || this.querystring) || null)
	                //在同步模式中,IE6,7可能会直接从缓存中读取数据而不会发出请求,因此我们需要手动发出请求
	
	                if (!opts.async || transport.readyState === 4) {
	                    this.respond()
	                } else {
	                    if (useOnload) { //如果支持onerror, onload新API
	                        transport.onload = transport.onerror = function(e) {
	                            this.readyState = 4 //IE9+
	                            this.status = e.type === "load" ? 200 : 500
	                            self.respond()
	                        }
	                    } else {
	                        transport.onreadystatechange = function() {
	                            self.respond()
	                        }
	                    }
	                }
	            },
	            //用于获取原始的responseXMLresponseText 修正status statusText
	            //第二个参数为1时中止清求
	            respond: function(event, forceAbort) {
	                var transport = this.transport
	                if (!transport) {
	                    return
	                }
	                // by zilong：避免abort后还继续派发onerror等事件
	                if (forceAbort && this.timeoutID) {
	                    clearTimeout(this.timeoutID);
	                    delete this.timeoutID
	                }
	                try {
	                    var completed = transport.readyState === 4
	                    if (forceAbort || completed) {
	                        transport.onreadystatechange = avalon.noop
	                        if (useOnload) { //IE6下对XHR对象设置onerror属性可能报错
	                            transport.onerror = transport.onload = null
	                        }
	                        if (forceAbort) {
	                            if (!completed && typeof transport.abort === "function") { // 完成以后 abort 不要调用
	                                transport.abort()
	                            }
	                        } else {
	                            var status = transport.status
	                            //设置responseText
	                            var text = transport.responseText
	
	                            this.responseText = typeof text === "string" ? text : void 0
	                            //设置responseXML
	                            try {
	                                //当responseXML为[Exception: DOMException]时，
	                                //访问它会抛“An attempt was made to use an object that is not, or is no longer, usable”异常
	                                var xml = transport.responseXML
	                                this.responseXML = xml.documentElement
	                            } catch (e) {
	                            }
	                            //设置response
	                            if (this.useResponseType) {
	                                this.response = transport.response
	                            }
	                            //设置responseHeadersString
	                            this.responseHeadersString = transport.getAllResponseHeaders()
	
	                            try { //火狐在跨城请求时访问statusText值会抛出异常
	                                var statusText = transport.statusText
	                            } catch (e) {
	                            this.error = e
	                            statusText = "firefoxAccessError"
	                            }
	                            //用于处理特殊情况,如果是一个本地请求,只要我们能获取数据就假当它是成功的
	                            if (!status && isLocal && !this.options.crossDomain) {
	                                status = this.responseText ? 200 : 404
	                            //IE有时会把204当作为1223
	                            } else if (status === 1223) {
	                                status = 204
	                            }
	                            this.dispatch(status, statusText)
	                        }
	                    }
	                } catch (err) {
	                // 如果网络问题时访问XHR的属性，在FF会抛异常
	                // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
	                if (!forceAbort) {
	                this.dispatch(500, err)
	                }
	                }
	            }
	        },
	        jsonp: {
	            preproccess: function() {
	                var opts = this.options;
	                var name = this.jsonpCallback = opts.jsonpCallback || "avalon.jsonp" + setTimeout("1")
	                if (rjsonp.test(opts.url)) {
	                    opts.url = opts.url.replace(rjsonp, "$1" + name)
	                } else {
	                    opts.url = opts.url + (rquery.test(opts.url) ? "&" : "?") + opts.jsonp + "=" + name
	                }
	                //将后台返回的json保存在惰性函数中
	                if (name.startsWith('avalon.')) {
	                    name = name.replace(/avalon\./, '')
	                    avalon[name] = function(json) {
	                        avalon[name] = json
	                    }
	                } else {
	                    window[name] = function(json) {
	                        window[name] = json
	                    }
	                }
	                return "script"
	            }
	        },
	        script: {
	            request: function() {
	                var opts = this.options;
	                var node = this.transport = DOC.createElement("script")
	                if (opts.charset) {
	                    node.charset = opts.charset
	                }
	                var self = this;
	                node.onerror = node[useOnload ? "onload" : "onreadystatechange"] = function() {
	                    self.respond()
	                };
	                node.src = opts.url
	                head.insertBefore(node, head.firstChild)
	            },
	            respond: function(event, forceAbort) {
	                var node = this.transport
	                if (!node) {
	                    return
	                }
	                // by zilong：避免abort后还继续派发onerror等事件
	                if (forceAbort && this.timeoutID) {
	                    clearTimeout(this.timeoutID);
	                    delete this.timeoutID
	                }
	                var execute = /loaded|complete|undefined/i.test(node.readyState)
	                if (forceAbort || execute) {
	                    node.onerror = node.onload = node.onreadystatechange = null
	                    var parent = node.parentNode;
	                    if (parent) {
	                        parent.removeChild(node)
	                    }
	                    if (!forceAbort) {
	                        var args;
	                        if (this.jsonpCallback) {
	                            var jsonpCallback = this.jsonpCallback.startsWith('avalon.') ? avalon[this.jsonpCallback.replace(/avalon\./, '')] : window[this.jsonpCallback]
	                            args = typeof jsonpCallback === "function" ? [500, "error"] : [200, "success"]
	                        } else {
	                            args = [200, "success"]
	                        }
	
	                        this.dispatch.apply(this, args)
	                    }
	                }
	            }
	        },
	        upload: {
	            preproccess: function() {
	                var opts = this.options, formdata
	                if (typeof opts.form.append === "function") { //简单判断opts.form是否为FormData
	                    formdata = opts.form;
	                    opts.contentType = '';
	                } else {
	                    formdata = new FormData(opts.form) //将二进制什么一下子打包到formdata
	                }
	                avalon.each(opts.data, function(key, val) {
	                    formdata.append(key, val) //添加客外数据
	                })
	                this.formdata = formdata
	            }
	        }
	    }
	
	
	    avalon.mix(transports.jsonp, transports.script)
	    avalon.mix(transports.upload, transports.xhr)
	
	    if (!window.FormData) {
	        var str = 'Function BinaryToArray(binary)\r\n\
	                 Dim oDic\r\n\
	                 Set oDic = CreateObject("scripting.dictionary")\r\n\
	                 length = LenB(binary) - 1\r\n\
	                 For i = 1 To length\r\n\
	                     oDic.add i, AscB(MidB(binary, i, 1))\r\n\
	                 Next\r\n\
	                 BinaryToArray = oDic.Items\r\n\
	              End Function'
	        execScript(str, "VBScript");
	        avalon.fixAjax = function() {
	            avalon.ajaxConverters.arraybuffer = function() {
	                var body = this.tranport && this.tranport.responseBody
	                if (body) {
	                    return new VBArray(BinaryToArray(body)).toArray();
	                }
	            };
	            function createIframe(ID) {
	                var iframe = avalon.parseHTML("<iframe " + " id='" + ID + "'" +
	                    " name='" + ID + "'" + " style='position:absolute;left:-9999px;top:-9999px;'/>").firstChild;
	                return (DOC.body || DOC.documentElement).insertBefore(iframe, null);
	            }
	            function addDataToForm(form, data) {
	                var ret = [],
	                    d, isArray, vs, i, e;
	                for (d in data) {
	                    isArray = Array.isArray(data[d]);
	                    vs = isArray ? data[d] : [data[d]];
	                    // 数组和原生一样对待，创建多个同名输入域
	                    for (i = 0; i < vs.length; i++) {
	                        e = DOC.createElement("input");
	                        e.type = 'hidden';
	                        e.name = d;
	                        e.value = vs[i];
	                        form.appendChild(e);
	                        ret.push(e);
	                    }
	                }
	                return ret;
	            }
	            //https://github.com/codenothing/Pure-Javascript-Upload/blob/master/src/upload.js
	            avalon.ajaxTransports.upload = {
	                request: function() {
	                    var self = this;
	                    var opts = this.options;
	                    var ID = "iframe-upload-" + this.uniqueID;
	                    var form = opts.form;
	                    var iframe = this.transport = createIframe(ID);
	                    //form.enctype的值
	                    //1:application/x-www-form-urlencoded   在发送前编码所有字符（默认）
	                    //2:multipart/form-data 不对字符编码。在使用包含文件上传控件的表单时，必须使用该值。
	                    //3:text/plain  空格转换为 "+" 加号，但不对特殊字符编码。
	                    var backups = {
	                        target: form.target || "",
	                        action: form.action || "",
	                        enctype: form.enctype,
	                        method: form.method
	                    };
	                    var fields = opts.data ? addDataToForm(form, opts.data) : [];
	                    //必须指定method与enctype，要不在FF报错
	                    //表单包含文件域时，如果缺少 method=POST 以及 enctype=multipart/form-data，
	                    // 设置target到隐藏iframe，避免整页刷新
	                    form.target = ID;
	                    form.action = opts.url;
	                    form.method = "POST";
	                    form.enctype = "multipart/form-data";
	                    this.uploadcallback = avalon.bind(iframe, "load", function(event) {
	                        self.respond(event);
	                    });
	                    form.submit();
	                    //还原form的属性
	                    for (var i in backups) {
	                        form[i] = backups[i];
	                    }
	                    //移除之前动态添加的节点
	                    fields.forEach(function(input) {
	                        form.removeChild(input);
	                    });
	                },
	                respond: function(event) {
	                    var node = this.transport, child
	                    // 防止重复调用,成功后 abort
	                    if (!node) {
	                        return;
	                    }
	                    if (event && event.type === "load") {
	                        var doc = node.contentWindow.document;
	                        this.responseXML = doc;
	                        if (doc.body) { //如果存在body属性,说明不是返回XML
	                            this.responseText = doc.body.innerHTML;
	                            //当MIME为'application/javascript' 'text/javascript",浏览器会把内容放到一个PRE标签中
	                            if ((child = doc.body.firstChild) && child.nodeName.toUpperCase() === 'PRE' && child.firstChild) {
	                                this.responseText = child.firstChild.nodeValue;
	                            }
	                        }
	                        this.dispatch(200, "success");
	                    }
	                    this.uploadcallback = avalon.unbind(node, "load", this.uploadcallback);
	                    delete this.uploadcallback;
	                    setTimeout(function() { // Fix busy state in FF3
	                        node.parentNode.removeChild(node);
	                    });
	                }
	            };
	            delete avalon.fixAjax;
	        };
	        avalon.fixAjax()
	    }
	    return avalon
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/**
	 * 
	 2011.8.31
	 将会传送器的abort方法上传到avalon.XHR.abort去处理
	 修复serializeArray的bug
	 对XMLHttpRequest.abort进行try...catch
	 2012.3.31 v2 大重构,支持XMLHttpRequest Level2
	 2013.4.8 v3 大重构 支持二进制上传与下载
	 http://www.cnblogs.com/heyuquan/archive/2013/05/13/3076465.html
	 2014.12.25  v4 大重构 
	 2015.3.2   去掉mmPromise
	 2015.3.13  使用加强版mmPromise
	 2015.3.17  增加 xhr 的 onprogress 回调
	 2015.12.10 处理全局对象BUG               
	 */


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon) {
	//chrome36的原生Promise还多了一个defer()静态方法，允许不通过传参就能生成Promise实例，
	//另还多了一个chain(onSuccess, onFail)原型方法，意义不明
	//目前，firefox24, opera19也支持原生Promise(chrome32就支持了，但需要打开开关，自36起直接可用)
	//本模块提供的Promise完整实现ECMA262v6 的Promise规范
	//2015.3.12 支持async属性
	    function ok(val) {
	        return val
	    }
	    function ng(e) {
	        throw e
	    }
	
	    function done(onSuccess) {//添加成功回调
	        return this.then(onSuccess, ng)
	    }
	    function fail(onFail) {//添加出错回调
	        return this.then(ok, onFail)
	    }
	    function defer() {
	        var ret = {};
	        ret.promise = new this(function (resolve, reject) {
	            ret.resolve = resolve
	            ret.reject = reject
	        });
	        return ret
	    }
	    var msPromise = function (executor) {
	        this._callbacks = []
	        var me = this
	        if (typeof this !== "object")
	            throw new TypeError("Promises must be constructed via new")
	        if (typeof executor !== "function")
	            throw new TypeError("not a function")
	
	        executor(function (value) {
	            _resolve(me, value)
	        }, function (reason) {
	            _reject(me, reason)
	        })
	    }
	    function fireCallbacks(promise, fn) {
	        if (typeof promise.async === "boolean") {
	            var isAsync = promise.async
	        } else {
	            isAsync = promise.async = true
	        }
	        if (isAsync) {
	            window.setTimeout(fn, 0)
	        } else {
	            fn()
	        }
	    }
	//返回一个已经处于`resolved`状态的Promise对象
	    msPromise.resolve = function (value) {
	        return new msPromise(function (resolve) {
	            resolve(value)
	        })
	    }
	//返回一个已经处于`rejected`状态的Promise对象
	    msPromise.reject = function (reason) {
	        return new msPromise(function (resolve, reject) {
	            reject(reason)
	        })
	    }
	
	    msPromise.prototype = {
	//一个Promise对象一共有3个状态：
	//- `pending`：还处在等待状态，并没有明确最终结果
	//- `resolved`：任务已经完成，处在成功状态
	//- `rejected`：任务已经完成，处在失败状态
	        constructor: msPromise,
	        _state: "pending",
	        _fired: false, //判定是否已经被触发
	        _fire: function (onSuccess, onFail) {
	            if (this._state === "rejected") {
	                if (typeof onFail === "function") {
	                    onFail(this._value)
	                } else {
	                    throw this._value
	                }
	            } else {
	                if (typeof onSuccess === "function") {
	                    onSuccess(this._value)
	                }
	            }
	        },
	        _then: function (onSuccess, onFail) {
	            if (this._fired) {//在已有Promise上添加回调
	                var me = this
	                fireCallbacks(me, function () {
	                    me._fire(onSuccess, onFail)
	                });
	            } else {
	                this._callbacks.push({onSuccess: onSuccess, onFail: onFail})
	            }
	        },
	        then: function (onSuccess, onFail) {
	            onSuccess = typeof onSuccess === "function" ? onSuccess : ok
	            onFail = typeof onFail === "function" ? onFail : ng
	            var me = this//在新的Promise上添加回调
	            var nextPromise = new msPromise(function (resolve, reject) {
	                me._then(function (value) {
	                    try {
	                        value = onSuccess(value)
	                    } catch (e) {
	                        // https://promisesaplus.com/#point-55
	                        reject(e)
	                        return
	                    }
	                    resolve(value)
	                }, function (value) {
	                    try {
	                        value = onFail(value)
	                    } catch (e) {
	                        reject(e)
	                        return
	                    }
	                    resolve(value)
	                })
	            })
	            for (var i in me) {
	                if (!personal[i]) {
	                    nextPromise[i] = me[i]
	                }
	            }
	            return nextPromise
	        },
	        "done": done,
	        "catch": fail,
	        "fail": fail
	    }
	    var personal = {
	        _state: 1,
	        _fired: 1,
	        _value: 1,
	        _callbacks: 1
	    }
	    function _resolve(promise, value) {//触发成功回调
	        if (promise._state !== "pending")
	            return;
	        if (value && typeof value.then === "function") {
	//thenable对象使用then，Promise实例使用_then
	            var method = value instanceof msPromise ? "_then" : "then"
	            value[method](function (val) {
	                _transmit(promise, val, true)
	            }, function (reason) {
	                _transmit(promise, reason, false)
	            });
	        } else {
	            _transmit(promise, value, true);
	        }
	    }
	    function _reject(promise, value) {//触发失败回调
	        if (promise._state !== "pending")
	            return
	        _transmit(promise, value, false)
	    }
	//改变Promise的_fired值，并保持用户传参，触发所有回调
	    function _transmit(promise, value, isResolved) {
	        promise._fired = true;
	        promise._value = value;
	        promise._state = isResolved ? "fulfilled" : "rejected"
	        fireCallbacks(promise, function () {
	            promise._callbacks.forEach(function (data) {
	                promise._fire(data.onSuccess, data.onFail);
	            })
	        })
	    }
	    function _some(any, iterable) {
	        iterable = Array.isArray(iterable) ? iterable : []
	        var n = 0, result = [], end
	        return new msPromise(function (resolve, reject) {
	            // 空数组直接resolve
	            if (!iterable.length)
	                resolve(result)
	            function loop(a, index) {
	                a.then(function (ret) {
	                    if (!end) {
	                        result[index] = ret//保证回调的顺序
	                        n++
	                        if (any || n >= iterable.length) {
	                            resolve(any ? ret : result)
	                            end = true
	                        }
	                    }
	                }, function (e) {
	                    end = true
	                    reject(e)
	                })
	            }
	            for (var i = 0, l = iterable.length; i < l; i++) {
	                loop(iterable[i], i)
	            }
	        })
	    }
	
	    msPromise.all = function (iterable) {
	        return _some(false, iterable)
	    }
	    msPromise.race = function (iterable) {
	        return _some(true, iterable)
	    }
	    msPromise.defer = defer
	
	
	
	    avalon.Promise = msPromise
	    var nativePromise = window.Promise
	    if (/native code/.test(nativePromise)) {
	        nativePromise.prototype.done = done
	        nativePromise.prototype.fail = fail
	        if (!nativePromise.defer) { //chrome实现的私有方法
	            nativePromise.defer = defer
	        }
	    }
	    return window.Promise = nativePromise || msPromise
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	//https://github.com/ecomfe/er/blob/master/src/Deferred.js
	//http://jser.info/post/77696682011/es6-promises


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function(avalon) {
	    var anchorElement = document.createElement('a')
	
	    var History = avalon.History = function() {
	        this.location = location
	    }
	
	    History.started = false
	    //取得当前IE的真实运行环境
	    History.IEVersion = (function() {
	        var mode = document.documentMode
	        return mode ? mode : window.XMLHttpRequest ? 7 : 6
	    })()
	
	    History.defaults = {
	        basepath: "/",
	        html5Mode: false,
	        hashPrefix: "!",
	        iframeID: null, //IE6-7，如果有在页面写死了一个iframe，这样似乎刷新的时候不会丢掉之前的历史
	        interval: 50, //IE6-7,使用轮询，这是其时间时隔
	        fireAnchor: true,//决定是否将滚动条定位于与hash同ID的元素上
	        routeElementJudger: avalon.noop // 判断a元素是否是触发router切换的链接
	    }
	
	    var oldIE = window.VBArray && History.IEVersion <= 7
	    var supportPushState = !!(window.history.pushState)
	    var supportHashChange = !!("onhashchange" in window && (!window.VBArray || !oldIE))
	    History.prototype = {
	        constructor: History,
	        getFragment: function(fragment) {
	            if (fragment == null) {
	                if (this.monitorMode === "popstate") {
	                    fragment = this.getPath()
	                } else {
	                    fragment = this.getHash()
	                }
	            }
	            return fragment.replace(/^[#\/]|\s+$/g, "")
	        },
	        getHash: function(window) {
	            // IE6直接用location.hash取hash，可能会取少一部分内容
	            // 比如 http://www.cnblogs.com/rubylouvre#stream/xxxxx?lang=zh_c
	            // ie6 => location.hash = #stream/xxxxx
	            // 其他浏览器 => location.hash = #stream/xxxxx?lang=zh_c
	            // firefox 会自作多情对hash进行decodeURIComponent
	            // 又比如 http://www.cnblogs.com/rubylouvre/#!/home/q={%22thedate%22:%2220121010~20121010%22}
	            // firefox 15 => #!/home/q={"thedate":"20121010~20121010"}
	            // 其他浏览器 => #!/home/q={%22thedate%22:%2220121010~20121010%22}
	            var path = (window || this).location.href
	            return this._getHash(path.slice(path.indexOf("#")))
	        },
	        _getHash: function(path) {
	            if (path.indexOf("#/") === 0) {
	                return decodeURIComponent(path.slice(2))
	            }
	            if (path.indexOf("#!/") === 0) {
	                return decodeURIComponent(path.slice(3))
	            }
	            return ""
	        },
	        getPath: function() {
	            var path = decodeURIComponent(this.location.pathname + this.location.search)
	            var root = this.basepath.slice(0, -1)
	            if (!path.indexOf(root))
	                path = path.slice(root.length)
	            return path.slice(1)
	        },
	        _getAbsolutePath: function(a) {
	            return !a.hasAttribute ? a.getAttribute("href", 4) : a.href
	        },
	        /*
	         * @interface avalon.history.start 开始监听历史变化
	         * @param options 配置参数
	         * @param options.hashPrefix hash以什么字符串开头，默认是 "!"，对应实际效果就是"#!"
	         * @param options.routeElementJudger 判断a元素是否是触发router切换的链接的函数，return true则触发切换，默认为avalon.noop，history内部有一个判定逻辑，是先判定a元素的href属性是否以hashPrefix开头，如果是则当做router切换元素，因此综合判定规则是 href.indexOf(hashPrefix) == 0 || routeElementJudger(ele, ele.href)，如果routeElementJudger返回true则跳转至href，如果返回的是字符串，则跳转至返回的字符串，如果返回false则返回浏览器默认行为
	         * @param options.html5Mode 是否采用html5模式，即不使用hash来记录历史，默认false
	         * @param options.fireAnchor 决定是否将滚动条定位于与hash同ID的元素上，默认为true
	         * @param options.basepath 根目录，默认为"/"
	         */
	        start: function(options) {
	            if (History.started)
	                throw new Error("avalon.history has already been started")
	            History.started = true
	            this.options = avalon.mix({}, History.defaults, options)
	            //IE6不支持maxHeight, IE7支持XMLHttpRequest, IE8支持window.Element，querySelector, 
	            //IE9支持window.Node, window.HTMLElement, IE10不支持条件注释
	            //确保html5Mode属性存在,并且是一个布尔
	            this.html5Mode = !!this.options.html5Mode
	            //监听模式
	            this.monitorMode = this.html5Mode ? "popstate" : "hashchange"
	            if (!supportPushState) {
	                if (this.html5Mode) {
	                    avalon.log("如果浏览器不支持HTML5 pushState，强制使用hash hack!")
	                    this.html5Mode = false
	                }
	                this.monitorMode = "hashchange"
	            }
	            if (!supportHashChange) {
	                this.monitorMode = "iframepoll"
	            }
	            this.prefix = "#" + this.options.hashPrefix + "/"
	            //确认前后都存在斜线， 如"aaa/ --> /aaa/" , "/aaa --> /aaa/", "aaa --> /aaa/", "/ --> /"
	            this.basepath = ("/" + this.options.basepath + "/").replace(/^\/+|\/+$/g, "/")  // 去最左右两边的斜线
	
	            this.fragment = this.getFragment()
	
	            anchorElement.href = this.basepath
	            this.rootpath = this._getAbsolutePath(anchorElement)
	            var that = this
	
	            var html = '<!doctype html><html><body>@</body></html>'
	            if (this.options.domain) {
	                html = html.replace("<body>", "<script>document.domain =" + this.options.domain + "</script><body>")
	            }
	            this.iframeHTML = html
	            if (this.monitorMode === "iframepoll") {
	                //IE6,7在hash改变时不会产生历史，需要用一个iframe来共享历史
	                avalon.ready(function() {
	                    if(that.iframe) return
	                    var iframe = that.iframe || document.getElementById(that.iframeID) || document.createElement('iframe')
	                    iframe.src = 'javascript:0'
	                    iframe.style.display = 'none'
	                    iframe.tabIndex = -1
	                    document.body.appendChild(iframe)
	                    that.iframe = iframe.contentWindow
	                    that._setIframeHistory(that.prefix + that.fragment)
	                })
	
	            }
	
	            // 支持popstate 就监听popstate
	            // 支持hashchange 就监听hashchange
	            // 否则的话只能每隔一段时间进行检测了
	            function checkUrl(e) {
	                var iframe = that.iframe
	                if (that.monitorMode === "iframepoll" && !iframe) {
	                    return false
	                }
	                var pageHash = that.getFragment(), hash
	                if (iframe) {//IE67
	                    var iframeHash = that.getHash(iframe)
	                    //与当前页面hash不等于之前的页面hash，这主要是用户通过点击链接引发的
	                    if (pageHash !== that.fragment) {
	                        that._setIframeHistory(that.prefix + pageHash)
	                        hash = pageHash
	                        //如果是后退按钮触发hash不一致
	                    } else if (iframeHash !== that.fragment) {
	                        that.location.hash = that.prefix + iframeHash
	                        hash = iframeHash
	                    }
	
	                } else if (pageHash !== that.fragment) {
	                    hash = pageHash
	                }
	                if (hash !== void 0) {
	                    that.fragment = hash
	                    that.fireRouteChange(hash, {fromHistory: true})
	                }
	            }
	
	            //thanks https://github.com/browserstate/history.js/blob/master/scripts/uncompressed/history.html4.js#L272
	
	            // 支持popstate 就监听popstate
	            // 支持hashchange 就监听hashchange(IE8,IE9,FF3)
	            // 否则的话只能每隔一段时间进行检测了(IE6, IE7)
	            switch (this.monitorMode) {
	                case "popstate":
	                    this.checkUrl = avalon.bind(window, "popstate", checkUrl)
	                    this._fireLocationChange = checkUrl
	                    break
	                case  "hashchange":
	                    this.checkUrl = avalon.bind(window, "hashchange", checkUrl)
	                    break;
	                case  "iframepoll":
	                    this.checkUrl = setInterval(checkUrl, this.options.interval)
	                    break;
	            }
	            //根据当前的location立即进入不同的路由回调
	            avalon.ready(function() {
	                that.fireRouteChange(that.fragment || "/", {replace: true})
	            })
	        },
	        fireRouteChange: function(hash, options) {
	            var router = avalon.router
	            if (router && router.navigate) {
	                router.setLastPath(hash)
	                router.navigate(hash === "/" ? hash : "/" + hash, options)
	            }
	            if (this.options.fireAnchor) {
	                scrollToAnchorId(hash.replace(/\?.*/g,""))
	            }
	        },
	        // 中断URL的监听
	        stop: function() {
	            avalon.unbind(window, "popstate", this.checkUrl)
	            avalon.unbind(window, "hashchange", this.checkUrl)
	            clearInterval(this.checkUrl)
	            History.started = false
	        },
	        updateLocation: function(hash, options, urlHash) {
	            var options = options || {},
	                rp = options.replace,
	                st =    options.silent
	            if (this.monitorMode === "popstate") {
	                // html5 mode 第一次加载的时候保留之前的hash
	                var path = this.rootpath + hash + (urlHash || "")
	                // html5 model包含query
	                if(path != this.location.href.split("#")[0]) history[rp ? "replaceState" : "pushState"]({path: path}, document.title, path)
	                if(!st) this._fireLocationChange()
	            } else {
	                var newHash = this.prefix + hash
	                if(st && hash != this.getHash()) {
	                    this._setIframeHistory(newHash, rp)
	                    if(this.fragment) avalon.router.setLastPath(this.fragment)
	                    this.fragment = this._getHash(newHash)
	                }
	                this._setHash(this.location, newHash, rp)
	            }
	        },
	        _setHash: function(location, hash, replace){
	            var href = location.href.replace(/(javascript:|#).*$/, '')
	            if (replace){
	                location.replace(href + hash)
	            }
	            else location.hash = hash
	        },
	        _setIframeHistory: function(hash, replace) {
	            if(!this.iframe) return
	            var idoc = this.iframe.document
	                idoc.open()
	                idoc.write(this.iframeHTML)
	                idoc.close()
	            this._setHash(idoc.location, hash, replace)
	        }
	    }
	
	    avalon.history = new History
	
	    //https://github.com/asual/jquery-address/blob/master/src/jquery.address.js
	
	    //劫持页面上所有点击事件，如果事件源来自链接或其内部，
	    //并且它不会跳出本页，并且以"#/"或"#!/"开头，那么触发updateLocation方法
	    avalon.bind(document, "click", function(event) {
	        var defaultPrevented = "defaultPrevented" in event ? event['defaultPrevented'] : event.returnValue === false,
	            routeElementJudger = avalon.history.options.routeElementJudger
	        if (defaultPrevented || event.ctrlKey || event.metaKey || event.which === 2)
	            return
	        var target = event.target
	        while (target.nodeName !== "A") {
	            target = target.parentNode
	            if (!target || target.tagName === "BODY") {
	                return
	            }
	        }
	
	        if (targetIsThisWindow(target.target)) {
	            var href = oldIE ? target.getAttribute("href", 2) : target.getAttribute("href") || target.getAttribute("xlink:href")
	            var prefix = avalon.history.prefix
	            if (href === null) { // href is null if the attribute is not present
	                return
	            }
	            var hash = href.replace(prefix, "").trim()
	            if(!(href.indexOf(prefix) === 0 && hash !== "")) {
	                hash = routeElementJudger(target, href)
	                if(hash === true) hash = href
	            }
	            if (hash) {
	                event.preventDefault()
	                avalon.router && avalon.router.navigate(hash)
	            }
	        }
	    })
	
	    //判定A标签的target属性是否指向自身
	    //thanks https://github.com/quirkey/sammy/blob/master/lib/sammy.js#L219
	    function targetIsThisWindow(targetWindow) {
	        if (!targetWindow || targetWindow === window.name || targetWindow === '_self' || (targetWindow === 'top' && window == window.top)) {
	            return true
	        }
	        return false
	    }
	    //得到页面第一个符合条件的A标签
	    function getFirstAnchor(list) {
	        for (var i = 0, el; el = list[i++]; ) {
	            if (el.nodeName === "A") {
	                return el
	            }
	        }
	    }
	
	    function scrollToAnchorId(hash, el) {
	        if ((el = document.getElementById(hash))) {
	            el.scrollIntoView()
	        } else if ((el = getFirstAnchor(document.getElementsByName(hash)))) {
	            el.scrollIntoView()
	        } else {
	            window.scrollTo(0, 0)
	        }
	    }
	    return avalon
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	
	// 主要参数有 basepath  html5Mode  hashPrefix  interval domain fireAnchor

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
	    function Router() {
	        var table = {}
	        "get,post,delete,put".replace(avalon.rword, function(name) {
	            table[name] = []
	        })
	        this.routingTable = table
	    }
	
	    function parseQuery(url) {
	        var array = url.split("?"), query = {}, path = array[0], querystring = array[1]
	        if (querystring) {
	            var seg = querystring.split("&"),
	                    len = seg.length, i = 0, s;
	            for (; i < len; i++) {
	                if (!seg[i]) {
	                    continue
	                }
	                s = seg[i].split("=")
	                query[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
	            }
	        }
	        return {
	            path: path,
	            query: query
	        }
	    }
	
	
	    function queryToString(obj) {
	        if(typeof obj == 'string') return obj
	        var str = []
	        for(var i in obj) {
	            if(i == "query") continue
	            str.push(i + '=' + encodeURIComponent(obj[i]))
	        }
	        return str.length ? '?' + str.join("&") : ''
	    }
	
	    var placeholder = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g
	    Router.prototype = {
	        error: function(callback) {
	            this.errorback = callback
	        },
	        _pathToRegExp: function(pattern, opts) {
	            var keys = opts.keys = [],
	                    //      segments = opts.segments = [],
	                    compiled = '^', last = 0, m, name, regexp, segment;
	
	            while ((m = placeholder.exec(pattern))) {
	                name = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
	                regexp = m[4] || (m[1] == '*' ? '.*' : 'string')
	                segment = pattern.substring(last, m.index);
	                var type = this.$types[regexp]
	                var key = {
	                    name: name
	                }
	                if (type) {
	                    regexp = type.pattern
	                    key.decode = type.decode
	                }
	                keys.push(key)
	                compiled += quoteRegExp(segment, regexp, false)
	                //  segments.push(segment)
	                last = placeholder.lastIndex
	            }
	            segment = pattern.substring(last);
	            compiled += quoteRegExp(segment) + (opts.strict ? opts.last : "\/?") + '$';
	            var sensitive = typeof opts.caseInsensitive === "boolean" ? opts.caseInsensitive : true
	            //  segments.push(segment);
	            opts.regexp = new RegExp(compiled, sensitive ? 'i' : undefined);
	            return opts
	
	        },
	        //添加一个路由规则
	        add: function(method, path, callback, opts) {
	            var array = this.routingTable[method.toLowerCase()]
	            if (path.charAt(0) !== "/") {
	                throw "path必须以/开头"
	            }
	            opts = opts || {}
	            opts.callback = callback
	            if (path.length > 2 && path.charAt(path.length - 1) === "/") {
	                path = path.slice(0, -1)
	                opts.last = "/"
	            }
	            avalon.Array.ensure(array, this._pathToRegExp(path, opts))
	        },
	        //判定当前URL与已有状态对象的路由规则是否符合
	        route: function(method, path, query) {
	            path = path.trim()
	            var states = this.routingTable[method]
	            for (var i = 0, el; el = states[i++]; ) {
	                var args = path.match(el.regexp)
	                if (args) {
	                    el.query = query || {}
	                    el.path = path
	                    el.params = {}
	                    var keys = el.keys
	                    args.shift()
	                    if (keys.length) {
	                        this._parseArgs(args, el)
	                    }
	                    return  el.callback.apply(el, args)
	                }
	            }
	            if (this.errorback) {
	                this.errorback()
	            }
	        },
	        _parseArgs: function(match, stateObj) {
	            var keys = stateObj.keys
	            for (var j = 0, jn = keys.length; j < jn; j++) {
	                var key = keys[j]
	                var value = match[j] || ""
	                if (typeof key.decode === "function") {//在这里尝试转换参数的类型
	                    var val = key.decode(value)
	                } else {
	                    try {
	                        // 大数限制
	                        // 是不是应该还限制小数啊
	                        if(!(value.match(/^[0-9]{17,}$/g) || value > "9007199254740992")) val = JSON.parse(value)
	                    } catch (e) {
	                        val = value
	                    }
	                }
	                match[j] = stateObj.params[key.name] = val
	            }
	        },
	        getLastPath: function() {
	            return getCookie("msLastPath")
	        },
	        setLastPath: function(path) {
	            setCookie("msLastPath", path)
	        },
	        /*
	         *  @interface avalon.router.redirect
	         *  @param hash 访问的url hash
	         */
	        redirect: function(hash) {
	            this.navigate(hash, {replace: true})
	        },
	        /*
	         *  @interface avalon.router.navigate
	         *  @param hash 访问的url hash
	         *  @param options 扩展配置
	         *  @param options.replace true替换history，否则生成一条新的历史记录
	         *  @param options.silent true表示只同步url，不触发url变化监听绑定
	        */
	        navigate: function(hash, options) {
	            var parsed = parseQuery((hash.charAt(0) !== "/" ? "/" : "") + hash),
	                options = options || {}
	            if(hash.charAt(0) === "/")
	                hash = hash.slice(1)// 修正出现多扛的情况 fix http://localhost:8383/mmRouter/index.html#!//
	            // 在state之内有写history的逻辑
	            if(!avalon.state || options.silent) avalon.history && avalon.history.updateLocation(hash, avalon.mix({}, options, {silent: true}))
	            // 只是写历史而已
	            if(!options.silent) {
	                this.route("get", parsed.path, parsed.query, options)
	            }
	        },
	        /*
	         *  @interface avalon.router.when 配置重定向规则
	         *  @param path 被重定向的表达式，可以是字符串或者数组
	         *  @param redirect 重定向的表示式或者url
	        */
	        when: function(path, redirect) {
	            var me = this,
	                path = path instanceof Array ? path : [path]
	            avalon.each(path, function(index, p) {
	                me.add("get", p, function() {
	                    var info = me.urlFormate(redirect, this.params, this.query)
	                    me.navigate(info.path + info.query, {replace: true})
	                })
	            })
	            return this
	        },
	        /*
	         *  @interface avalon.router.get 添加一个router规则
	         *  @param path url表达式
	         *  @param callback 对应这个url的回调
	        */
	        get: function(path, callback) {},
	        urlFormate: function(url, params, query) {
	            var query = query ? queryToString(query) : "",
	                hash = url.replace(placeholder, function(mat) {
	                    var key = mat.replace(/[\{\}]/g, '').split(":")
	                    key = key[0] ? key[0] : key[1]
	                    return key in params ? params[key] : ''
	                }).replace(/^\//g, '')
	            return {
	                path: hash,
	                query: query
	            }
	        },
	        /* *
	         `'/hello/'` - 匹配'/hello/'或'/hello'
	         `'/user/:id'` - 匹配 '/user/bob' 或 '/user/1234!!!' 或 '/user/' 但不匹配 '/user' 与 '/user/bob/details'
	         `'/user/{id}'` - 同上
	         `'/user/{id:[^/]*}'` - 同上
	         `'/user/{id:[0-9a-fA-F]{1,8}}'` - 要求ID匹配/[0-9a-fA-F]{1,8}/这个子正则
	         `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	         path into the parameter 'path'.
	         `'/files/*path'` - ditto.
	         */
	        // avalon.router.get("/ddd/:dddID/",callback)
	        // avalon.router.get("/ddd/{dddID}/",callback)
	        // avalon.router.get("/ddd/{dddID:[0-9]{4}}/",callback)
	        // avalon.router.get("/ddd/{dddID:int}/",callback)
	        // 我们甚至可以在这里添加新的类型，avalon.router.$type.d4 = { pattern: '[0-9]{4}', decode: Number}
	        // avalon.router.get("/ddd/{dddID:d4}/",callback)
	        $types: {
	            date: {
	                pattern: "[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])",
	                decode: function(val) {
	                    return new Date(val.replace(/\-/g, "/"))
	                }
	            },
	            string: {
	                pattern: "[^\\/]*"
	            },
	            bool: {
	                decode: function(val) {
	                    return parseInt(val, 10) === 0 ? false : true;
	                },
	                pattern: "0|1"
	            },
	            int: {
	                decode: function(val) {
	                    return parseInt(val, 10);
	                },
	                pattern: "\\d+"
	            }
	        }
	    }
	
	    "get,put,delete,post".replace(avalon.rword, function(method) {
	        return  Router.prototype[method] = function(a, b, c) {
	            this.add(method, a, b, c)
	        }
	    })
	    function quoteRegExp(string, pattern, isOptional) {
	        var result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	        if (!pattern)
	            return result;
	        var flag = isOptional ? '?' : '';
	        return result + flag + '(' + pattern + ')' + flag;
	    }
	    function supportLocalStorage() {
	        try {
	            localStorage.setItem("avalon", 1)
	            localStorage.removeItem("avalon")
	            return true
	        } catch (e) {
	            return false
	        }
	    }
	
	    if (supportLocalStorage()) {
	        Router.prototype.getLastPath = function() {
	            return localStorage.getItem("msLastPath")
	        }
	        var cookieID
	        Router.prototype.setLastPath = function (path) {
	            if (cookieID) {
	                clearTimeout(cookieID)
	                cookieID = null
	            }
	            localStorage.setItem("msLastPath", path)
	            cookieID = setTimeout(function () {
	                localStorage.removItem("msLastPath")
	            }, 1000 * 60 * 60 * 24)
	        }
	    }
	
	       
	
	    function escapeCookie(value) {
	        return String(value).replace(/[,;"\\=\s%]/g, function(character) {
	            return encodeURIComponent(character)
	        });
	    }
	    function setCookie(key, value) {
	        var date = new Date()//将date设置为1天以后的时间 
	        date.setTime(date.getTime() + 1000 * 60 * 60 * 24)
	        document.cookie = escapeCookie(key) + '=' + escapeCookie(value) + ";expires=" + date.toGMTString()
	    }
	    function getCookie(name) {
	        var m = String(document.cookie).match(new RegExp('(?:^| )' + name + '(?:(?:=([^;]*))|;|$)')) || ["", ""]
	        return decodeURIComponent(m[1])
	    }
	
	    avalon.router = new Router
	
	    return avalon
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/*
	 <!DOCTYPE html>
	 <html>
	 <head>
	 <meta charset="utf-8">
	 <title>路由系统</title>
	 <script src="avalon.js"></script>
	 <script>
	 require(["mmRouter"], function() {
	 var model = avalon.define('xxx', function(vm) {
	 vm.currPath = ""
	 })
	 avalon.router.get("/aaa", function(a) {
	 model.currPath = this.path
	 })
	 avalon.router.get("/bbb", function(a) {
	 model.currPath = this.path
	 })
	 avalon.router.get("/ccc", function(a) {
	 model.currPath = this.path
	 })
	 avalon.router.get("/ddd/:ddd", function(a) {//:ddd为参数
	 avalon.log(a)
	 model.currPath = this.path
	 })
	 avalon.router.get("/eee", function(a) {
	 model.currPath = this.path
	 })
	 avalon.history.start({
	 html5Mode: true,
	 basepath: "/avalon"
	 })
	 avalon.scan()
	 })
	 </script>
	 </head>
	 <body >
	 <div ms-controller="xxx">
	 <ul>
	 <li><a href="#!/aaa">aaa</a></li>
	 <li><a href="#!/bbb">bbb</a></li>
	 <li><a href="#!/ccc">ccc</a></li>
	 <li><a href="#!/ddd/222">ddd</a></li>
	 <li><a href="#!/eee">eee</a></li>
	 </ul>
	 <div style="color:red">{{currPath}}</div>
	 <div style="height: 600px;width:1px;">
	 
	 </div>
	 <p id="eee">会定位到这里</p>
	 </div>
	 
	 </body>
	 </html>
	 
	 */

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * verson 0.9
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(19), __webpack_require__(21)], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	//重写mmRouter中的route方法     
	    avalon.router.route = function (method, path, query, options) {
	        path = path.trim()
	        var states = this.routingTable[method]
	        for (var i = 0, el; el = states[i++]; ) {//el为一个个状态对象，状态对象的callback总是返回一个Promise
	            var args = path.match(el.regexp)
	            if (args && el.abstract !== true) {//不能是抽象状态
	                var newParams = {params: {}}
	                avalon.mix(newParams.params, el.params)
	                newParams.keys = el.keys
	                newParams.params.query = query || {}
	                args.shift()
	                if (el.keys.length) {
	                    this._parseArgs(args, newParams)
	                }
	                if (el.stateName) {
	                    mmState.transitionTo(mmState.currentState, el, newParams.params, options)
	                } else {
	                    el.callback.apply(el, args)
	                }
	                return
	            }
	        }
	        if (this.errorback) {
	            this.errorback()
	        }
	    }
	    var _root, undefine, _controllers = {}, _states = {}
	    /*
	     *  @interface avalon.router.go 跳转到一个已定义状态上，params对参数对象
	     *  @param toName 状态name
	     *  @param params 附加参数
	     *  @param params.query 在hash后面附加的类似search的参数对
	     *  @param options 扩展配置
	     *  @param options.reload true强制reload，即便url、参数并未发生变化
	     *  @param options.replace true替换history，否则生成一条新的历史记录
	     *  @param options.confirmed true不触发onBeforeUnload,$onBeforeUnload,onBeforeExit
	     */
	    avalon.router.go = function (toName, params, options) {
	        var from = mmState.currentState,
	                to = StateModel.is(toName) ? toName : getStateByName(toName),
	                params = params || {}
	        var params = avalon.mix(true, {}, to.params, params)
	        if (to) {
	            mmState.transitionTo(from, to, params, options)
	        }
	    }
	    // 事件管理器
	    var Event = window.$eventManager = avalon.define({
	        $id: "$eventManager",
	        $flag: 0,
	        uiqKey: function () {
	            Event.$flag++
	            return "flag" + Event.$flag++
	        }
	    })
	    function removeOld() {
	        var nodes = mmState.oldNodes
	        while (nodes.length) {
	            var i = nodes.length - 1,
	                    node = nodes[i]
	            node.parentNode && node.parentNode.removeChild(node)
	            nodes.splice(i, 1)
	            node = null
	        }
	    }
	    Event.$watch("onAbort", removeOld)
	    var mmState = window.mmState = {
	        prevState: NaN,
	        currentState: NaN, // 当前状态，可能还未切换到该状态
	        activeState: NaN, // 当前实际处于的状态
	        oldNodes: [],
	        query: {}, // 从属于currentState
	        popOne: function (chain, params, callback, notConfirmed) {
	            if (mmState._toParams !== params)
	                return callback(false, {type: "abort"})
	            var cur = chain.pop(), me = this
	            if (!cur)
	                return callback()
	            // 阻止退出
	            if (notConfirmed && cur.onBeforeExit() === false)
	                return callback(false)
	            me.activeState = cur.parentState || _root
	            cur.done = function (success) {
	                cur._pending = false
	                cur.done = null
	                cur._local = null
	                if (success !== false) {
	                    if (me.activeState)
	                        return me.popOne(chain, params, callback, notConfirmed)
	                }
	                return callback(success)
	            }
	            var success = cur.onExit()
	            if (!cur._pending && cur.done)
	                cur.done(success)
	        },
	        pushOne: function (chain, params, callback, _local, toLocals) {
	            if (mmState._toParams !== params)
	                return callback(false, {type: "abort"})
	            var cur = chain.shift(), me = this
	            // 退出
	            if (!cur) {
	                chain = null
	                return callback()
	            }
	            cur.syncParams(params)
	            // 阻止进入该状态
	            if (cur.onBeforeEnter() === false) {
	                // 恢复params
	                cur.syncParams(cur.oldParams)
	                return callback(false)
	            }
	            var _local = inherit(_local)
	            me.activeState = cur // 更新当前实际处于的状态
	            cur.done = function (success) {
	                // 防止async处触发已经销毁的done
	                if (!cur.done)
	                    return
	                cur._pending = false
	                cur.done = null
	                cur.visited = true
	                // 退出
	                if (success === false) {
	                    // 这里斟酌一下 - 去掉
	                    // cur.callback.apply(cur, [params, _local])
	                    return callback(success)
	                }
	                var resolved = cur.callback.apply(cur, [params, _local])
	                resolved.$then(function (res) {
	                    // sync params to oldParams
	                    avalon.mix(true, cur.oldParams, cur.params)
	                    // 继续状态链
	                    me.pushOne(chain, params, callback, _local)
	                })
	            }
	            // 一般在这个回调里准备数据
	            var args = []
	            avalon.each(cur.keys, function (index, item) {
	                var key = item.name
	                args.push(cur.params[key])
	            })
	            cur._onEnter.apply(cur, args)
	            if (!cur._pending && cur.done)
	                cur.done()
	        },
	        transitionTo: function (fromState, toState, toParams, options) {
	            var toParams = toParams || toState.params, fromAbort
	            // state machine on transition
	            if (this.activeState && (this.activeState != this.currentState)) {
	                avalon.log("navigating to [" +
	                        this.currentState.stateName +
	                        "] will be stopped, redirect to [" +
	                        toState.stateName + "] now")
	                this.activeState.done && this.activeState.done(!"stopped")
	                fromState = this.activeState // 更新实际的fromState
	                fromAbort = true
	            }
	            mmState.oldNodes = []
	            var info = avalon.router.urlFormate(toState.url, toParams, toParams.query),
	                    me = this,
	                    options = options || {},
	                    // 是否强制reload，参照angular，这个时候会触发整个页面重刷
	                    reload = options.reload,
	                    over,
	                    fromChain = fromState && fromState.chain || [],
	                    toChain = toState.chain,
	                    i = 0,
	                    changeType, // 是params变化？query变化？这个东西可以用来配置是否屏蔽视图刷新逻辑
	                    state = toChain[i],
	                    _local = _root.sourceLocal,
	                    toLocals = []
	            // 初始化可能存在的异步state
	            var modulesToLoad = [],
	                modulesToLoadObj = {},
	                chains = [].concat(fromChain).concat(toChain)
	            avalon.each(chains, function(i, state) {
	                var stateUrl = state.stateUrl
	                if (stateUrl) {
	                    state._stateUrl = stateUrl
	                    delete state.stateUrl
	                    if (!(stateUrl in modulesToLoadObj)) {
	                        modulesToLoadObj[stateUrl] = ''
	                        modulesToLoad.push(getPromise(function (rs, rj) {
	                            avalon.controller.loader(stateUrl, function(stateConfig) {
	                                avalon.mix(state, stateConfig)
	                                state.initViewsConfig()
	                                rs()
	                            })
	                        }))
	                    }
	                }
	            })
	            chains = modulesToLoadObj = null
	
	            getPromise(modulesToLoad).then(function() {
	                if (!reload) {
	                    // 找到共有父状态chain，params未变化
	                    while (state && state === fromChain[i] && !state.paramsChanged(toParams)) {
	                        _local = toLocals[i] = state._local
	                        i++
	                        state = toChain[i]
	                    }
	                }
	                var exitChain = fromChain.slice(i), // 需要退出的chain
	                        enterChain = toChain.slice(i), // 需要进入的chain
	                        commonLocal = _local
	                // 建立toLocals，用来计算哪些view会被替换
	                while (state = toChain[i]) {
	                    _local = toLocals[i] = inherit(_local, state.sourceLocal)
	                    i++
	                }
	                mmState._local = _local
	                done = function (success, e) {
	                    if (over)
	                        return
	                    over = true
	                    me.currentState = me.activeState
	                    enterChain = exitChain = commonLocal = _local = toParams = null
	                    mmState.oldNodes = []
	                    if (success !== false) {
	                        mmState.lastLocal = mmState.currentState._local
	                        _root.fire("updateview", me.currentState, changeType)
	                        avalon.log("transitionTo " + toState.stateName + " success")
	                        callStateFunc("onLoad", me, fromState, toState)
	                    } else {
	                        return callStateFunc("onError", me, {
	                            type: "transition",
	                            message: "transitionTo " + toState.stateName + " faild",
	                            error: e,
	                            fromState: fromState,
	                            toState: toState,
	                            params: toParams
	                        }, me.currentState)
	                    }
	                }
	                toState.path = ("/" + info.path).replace(/^[\/]{2,}/g, "/")
	                if (!reload && fromState === toState) {
	                    changeType = toState.paramsChanged(toParams)
	                    if (!changeType) {
	                        // redirect的目的状态 == me.activeState && abort
	                        if (toState == me.activeState && fromAbort)
	                            return done()
	                        // 重复点击直接return
	                        return
	                    }
	                }
	
	                mmState.query = avalon.mix({}, toParams.query)
	
	                // onBeforeUnload check
	                if (options && !options.confirmed && (callStateFunc("onBeforeUnload", me, fromState, toState) === false || broadCastBeforeUnload(exitChain, enterChain, fromState, toState) === false)) {
	                    return callStateFunc("onAbort", me, fromState, toState)
	                }
	                if (over === true) {
	                    return
	                }
	                avalon.log("begin transitionTo " + toState.stateName + " from " + (fromState && fromState.stateName || "unknown"))
	                callStateFunc("onUnload", me, fromState, toState)
	                me.currentState = toState
	                me.prevState = fromState
	                mmState._toParams = toParams
	                if (info && avalon.history) {
	                    if (avalon.history.updateLocation) {
	                        avalon.history.updateLocation(info.path + info.query,
	                                avalon.mix({silent: true}, options), !fromState && location.hash)
	                    } else {
	                        avalon.history.navigate(info.path + info.query,
	                                avalon.mix({silent: true}, options))
	                    }
	                }
	                callStateFunc("onBegin", me, fromState, toState)
	                me.popOne(exitChain, toParams, function (success) {
	                    // 中断
	                    if (success === false)
	                        return done(success)
	                    me.pushOne(enterChain, toParams, done, commonLocal, toLocals)
	                }, !(options && options.confirmed))
	            }, function() {
	                throw new Error('加载stateUrl资源失败')
	            })
	        }
	    }
	    //将template,templateUrl,templateProvider等属性从opts对象拷贝到新生成的view对象上的
	    function copyTemplateProperty(newObj, oldObj, name) {
	        if (name in oldObj) {
	            newObj[name] = oldObj[name]
	            delete  oldObj[name]
	        }
	    }
	    function getCacheContainer() {
	        return document.getElementsByTagName("avalon")[0]
	    }
	    var templateCache = {},
	            cacheContainer = getCacheContainer()
	    function loadCache(name) {
	        var fragment = document.createDocumentFragment(),
	                divPlaceHolder = document.getElementById(name),
	                f,
	                eles = divPlaceHolder.eles,
	                i = 0
	        if (divPlaceHolder) {
	            while (f = eles[i]) {
	                fragment.appendChild(f)
	                i++
	            }
	        }
	        return fragment
	    }
	    function setCache(name, element) {
	        var fragment = document.createDocumentFragment(),
	                divPlaceHolder = document.getElementById(name),
	                f
	        if (!divPlaceHolder) {
	            divPlaceHolder = document.createElement("div")
	            divPlaceHolder.id = name
	            cacheContainer.appendChild(divPlaceHolder)
	        }
	        // 引用
	        if (divPlaceHolder.eles) {
	            avalon.each(divPlaceHolder.eles, function (index, ele) {
	                fragment.appendChild(ele)
	            })
	        } else {
	            divPlaceHolder.eles = []
	            while (f = element.firstChild) {
	                fragment.appendChild(f)
	                divPlaceHolder.eles.push(f)
	            }
	            templateCache[name] = true
	        }
	        divPlaceHolder.appendChild(fragment)
	    }
	    function broadCastBeforeUnload(exitChain, enterChain, fromState, toState) {
	        var lastLocal = mmState.lastLocal
	        if (!lastLocal || !enterChain[0] && !exitChain[0])
	            return
	        var newLocal = mmState._local,
	                cacheQueue = []
	        for (var i in lastLocal) {
	            var local = lastLocal[i]
	            // 所有被更新的view
	            if (!(i in newLocal) || newLocal[i] != local) {
	                if (local.$ctrl && ("$onBeforeUnload" in local.$ctrl)) {
	                    if (local.$ctrl.$onBeforeUnload(fromState, toState) === false)
	                        return false
	                }
	                if (local.element && (exitChain[0] != enterChain[0]))
	                    cacheQueue.push(local)
	            }
	        }
	        avalon.each(cacheQueue, function (index, local) {
	            var ele = local.element,
	                    name = avalon(ele).data("currentCache")
	            if (name) {
	                setCache(name, ele)
	            }
	        })
	        cacheQueue = null
	    }
	    // 靠谱的解决方法
	    avalon.bindingHandlers.view = function (data) {
	        data.expr = "'" + (data.expr || "") + "'"
	        var vmodels = data.vmodels || arguments[1]
	        var currentState = mmState.currentState,
	                element = data.element,
	                $element = avalon(element),
	                viewname = (data.value || data.expr || "").replace(/['"]+/g, ""),
	                comment = document.createComment("ms-view:" + viewname),
	                par = element.parentNode,
	                defaultHTML = element.innerHTML,
	                statename = $element.data("statename") || "",
	                parentState = getStateByName(statename) || _root,
	                currentLocal = {},
	                oldElement = element,
	                tpl = element.outerHTML
	        element.removeAttribute("ms-view") // remove right now
	        par.insertBefore(comment, element)
	        function update(firsttime, currentState, changeType) {
	            // node removed, remove callback
	            if (!document.contains(comment)) {
	                data = vmodels = element = par = comment = $element = oldElement = update = null
	                return !"delete from watch"
	            }
	            var definedParentStateName = $element.data("statename") || "",
	                    parentState = getStateByName(definedParentStateName) || _root,
	                    _local
	            if (viewname.indexOf("@") < 0)
	                viewname += "@" + parentState.stateName
	            _local = mmState.currentState._local && mmState.currentState._local[viewname]
	            if (firsttime && !_local || currentLocal === _local)
	                return
	            currentLocal = _local
	            _currentState = _local && _local.state
	            // 缓存，如果加载dom上，则是全局配置，针对template还可以开一个单独配置
	            var cacheTpl = $element.data("viewCache"),
	                    lastCache = $element.data("currentCache")
	            if (_local) {
	                cacheTpl = (_local.viewCache === false ? false : _local.viewCache || cacheTpl) && (viewname + "@" + _currentState.stateName)
	            } else if (cacheTpl) {
	                cacheTpl = viewname + "@__default__"
	            }
	            // stateB->stateB，配置了参数变化不更新dom
	            if (_local && _currentState === currentState && _local.ignoreChange && _local.ignoreChange(changeType, viewname))
	                return
	            // 需要load和使用的cache是一份
	            if (cacheTpl && cacheTpl === lastCache)
	                return
	            compileNode(tpl, element, $element, _currentState)
	            var html = _local ? _local.template : defaultHTML,
	                    fragment
	            if (cacheTpl) {
	                if (_local) {
	                    _local.element = element
	                } else {
	                    mmState.currentState._local[viewname] = {
	                        state: mmState.currentState,
	                        template: defaultHTML,
	                        element: element
	                    }
	                }
	            }
	            avalon.clearHTML(element)
	            // oldElement = element
	            element.removeAttribute("ms-view")
	            element.setAttribute("ui-view", data.value || data.expr || "")
	            // 本次更新的dom需要用缓存
	            if (cacheTpl) {
	                // 已缓存
	                if (templateCache[cacheTpl]) {
	                    fragment = loadCache(cacheTpl)
	                    // 未缓存
	                } else {
	                    fragment = avalon.parseHTML(html)
	                }
	                element.appendChild(fragment)
	                // 更新现在使用的cache名字
	                $element.data("currentCache", cacheTpl)
	                if (templateCache[cacheTpl])
	                    return
	            } else {
	                element.innerHTML = html
	                $element.data("currentCache", false)
	            }
	            // default
	            if (!_local && cacheTpl)
	                $element.data("currentCache", cacheTpl)
	            avalon.each(getViewNodes(element), function (i, node) {
	                avalon(node).data("statename", _currentState && _currentState.stateName || "")
	            })
	            // merge上下文vmodels + controller指定的vmodels
	            avalon.scan(element, (_local && _local.vmodels || []).concat(vmodels || []))
	            // 触发视图绑定的controller的事件
	            if (_local && _local.$ctrl) {
	                _local.$ctrl.$onRendered && _local.$ctrl.$onRendered.apply(element, [_local])
	            }
	        }
	        update("firsttime")
	        _root.watch("updateview", function (state, changeType) {
	            return update.call(this, undefine, state, changeType)
	        })
	    }
	    if (avalon.directives) {
	        avalon.directive("view", {
	            init: avalon.bindingHandlers.view
	        })
	    }
	    function compileNode(tpl, element, $element, _currentState) {
	        if ($element.hasClass("oni-mmRouter-slide")) {
	            // 拷贝一个镜像
	            var copy = element.cloneNode(true)
	            copy.setAttribute("ms-skip", "true")
	            avalon(copy).removeClass("oni-mmRouter-enter").addClass("oni-mmRouter-leave")
	            avalon(element).addClass("oni-mmRouter-enter")
	            element.parentNode.insertBefore(copy, element)
	            mmState.oldNodes.push(copy)
	            callStateFunc("onViewEnter", _currentState, element, copy)
	        }
	        return element
	    }
	
	    function inherit(parent, extra) {
	        return avalon.mix(new (avalon.mix(function () {
	        }, {prototype: parent}))(), extra);
	    }
	
	    /*
	     * @interface avalon.state 对avalon.router.get 进行重新封装，生成一个状态对象
	     * @param stateName 指定当前状态名
	     * @param opts 配置
	     * @param opts.url  当前状态对应的路径规则，与祖先状态们组成一个完整的匹配规则
	     * @param {Function} opts.ignoreChange 当mmState.currentState == this时，更新视图的时候调用该函数，return true mmRouter则不会去重写视图和scan，请确保该视图内用到的数据没有放到avalon vmodel $skipArray内
	     * @param opts.controller 如果不写views属性,则默认view为""，为默认的view指定一个控制器，该配置会直接作为avalon.controller的参数生成一个$ctrl对象
	     * @param opts.controllerUrl 指定默认view控制器的路径，适用于模块化开发，该情形下默认通过avalon.controller.loader去加载一个符合amd规范，并返回一个avalon.controller定义的对象，传入opts.params作参数
	     * @param opts.controllerProvider 指定默认view控制器的提供者，它可以是一个Promise，也可以为一个函数，传入opts.params作参数
	     @param opts.viewCache 是否缓存这个模板生成的dom，设置会覆盖dom元素上的data-view-cache，也可以分别配置到views上每个单独的view上
	     * @param opts.views: 如果不写views属性,则默认view【ms-view=""】为""，也可以通过指定一个viewname属性来配置【ms-view="viewname"】，对多个[ms-view]容器进行处理,每个对象应拥有template, templateUrl, templateProvider，可以给每个对象搭配一个controller||controllerUrl||controllerProvider属性
	     *     views的结构为
	     *<pre>
	     *     {
	     *        "": {template: "xxx"}
	     *        "aaa": {template: "xxx"}
	     *        "bbb@": {template: "xxx"}
	     *     }
	     *</pre>
	     *     views的每个键名(keyname)的结构为viewname@statename，
	     *         如果名字不存在@，则viewname直接为keyname，statename为opts.stateName
	     *         如果名字存在@, viewname为match[0], statename为match[1]
	     * @param opts.views.{viewname}.template 指定当前模板，也可以为一个函数，传入opts.params作参数，* @param opts.views.viewname.cacheController 是否缓存view的控制器，默认true
	     * @param opts.views.{viewname}.templateUrl 指定当前模板的路径，也可以为一个函数，传入opts.params作参数
	     * @param opts.views.{viewname}.templateProvider 指定当前模板的提供者，它可以是一个Promise，也可以为一个函数，传入opts.params作参数
	     * @param opts.views.{viewname}.ignoreChange 用法同state.ignoreChange，只是针对的粒度更细一些，针对到具体的view
	     * @param {Function} opts.onBeforeEnter 切入某个state之前触发，this指向对应的state，如果return false则会中断并退出整个状态机
	     * @param {Function} opts.onEnter 进入状态触发，可以返回false，或任意不为true的错误信息或一个promise对象，用法跟视图的$onEnter一致
	     * @param {Function} onEnter.params 视图所属的state的参数
	     * @param {Function} onEnter.resolve $onEnter return false的时候，进入同步等待，直到手动调用resolve
	     * @param {Function} onEnter.reject 数据加载失败，调用
	     * @param {Function} opts.onBeforeExit state退出前触发，this指向对应的state，如果return false则会中断并退出整个状态机
	     * @param {Function} opts.onExit 退出后触发，this指向对应的state
	     * @param opts.ignoreChange.changeType 值为"param"，表示params变化，值为"query"，表示query变化
	     * @param opts.ignoreChange.viewname 关联的ms-view name
	     * @param opts.abstract  表示它不参与匹配，this指向对应的state
	     * @param {private} opts.parentState 父状态对象（框架内部生成）
	     */
	    avalon.state = function (stateName, opts) {
	        var state = StateModel(stateName, opts)
	        avalon.router.get(state.url, function (params, _local) {
	            var me = this, promises = [], _resovle, _reject, _data = [], _callbacks = []
	            state.resolved = getPromise(function (rs, rj) {
	                _resovle = rs
	                _reject = rj
	            })
	            avalon.each(state.views, function (name, view) {
	                var params = me.params,
	                        reason = {
	                            type: "view",
	                            name: name,
	                            params: params,
	                            state: state,
	                            view: view
	                        },
	                viewLocal = _local[name] = {
	                    name: name,
	                    state: state,
	                    params: state.filterParams(params),
	                    ignoreChange: "ignoreChange" in view ? view.ignoreChange : me.ignoreChange,
	                    viewCache: "viewCache" in view ? view.viewCache : me.viewCache
	                },
	                promise = fromPromise(view, params, reason)
	                promises.push(promise)
	                // template不能cache
	                promise.then(function (s) {
	                    viewLocal.template = s
	                }, avalon.noop) // 捕获模板报错
	                var prom,
	                        callback = function ($ctrl) {
	                            viewLocal.vmodels = $ctrl.$vmodels
	                            view.$controller = viewLocal.$ctrl = $ctrl
	                            resolveData()
	                        },
	                        resolveData = function () {
	                            var $onEnter = view.$controller && view.$controller.$onEnter
	                            if ($onEnter) {
	                                var innerProm = getPromise(function (rs, rj) {
	                                    var reason = {
	                                        type: "data",
	                                        state: state,
	                                        params: params
	                                    },
	                                    res = $onEnter(params, rs, function (message) {
	                                        reason.message = message
	                                        rj(reason)
	                                    })
	                                    // if promise
	                                    if (res && res.then) {
	                                        _data.push(res)
	                                        res.then(function () {
	                                            rs(res)
	                                        })
	                                        // error msg
	                                    } else if (res && res !== true) {
	                                        reason.message = res
	                                        rj(reason)
	                                    } else if (res === undefine) {
	                                        rs()
	                                    }
	                                    // res === false will pause here
	                                })
	                                innerProm = innerProm.then(function (cb) {
	                                    avalon.isFunction(cb) && _callbacks.push(cb)
	                                })
	                                _data.push(innerProm)
	                            }
	                        }
	                // controller似乎可以缓存着
	                if (view.$controller && view.cacheController !== false) {
	                    return callback(view.$controller)
	                }
	                // 加载controller模块
	                if (view.controller) {
	                    prom = promise.then(function () {
	                        callback(avalon.controller(view.controller))
	                    })
	                } else if (view.controllerUrl) {
	                    prom = getPromise(function (rs, rj) {
	                        var url = avalon.isFunction(view.controllerUrl) ? view.controllerUrl(params) : view.controllerUrl
	                        url = url instanceof Array ? url : [url]
	                        avalon.controller.loader(url, function ($ctrl) {
	                            promise.then(function () {
	                                callback($ctrl)
	                                rs()
	                            })
	                        })
	                    })
	                } else if (view.controllerProvider) {
	                    var res = avalon.isFunction(view.controllerProvider) ? view.controllerProvider(params) : view.controllerProvider
	                    prom = getPromise(function (rs, rj) {
	                        // if promise
	                        if (res && res.then) {
	                            _data.push(res)
	                            res.then(function (r) {
	                                promise.then(function () {
	                                    callback(r)
	                                    rs()
	                                })
	                            }, function (e) {
	                                reason.message = e
	                                rj(reason)
	                            })
	                            // error msg
	                        } else {
	                            promise.then(function () {
	                                callback(res)
	                                rs()
	                            })
	                        }
	                    })
	                }
	                // is promise
	                if (prom && prom.then) {
	                    promises.push(prom)
	                }
	            })
	            // 模板和controller就绪
	            getPromise(promises).$then(function (values) {
	                state._local = _local
	                // 数据就绪
	                getPromise(_data).$then(function () {
	                    avalon.each(_callbacks, function (i, func) {
	                        func()
	                    })
	                    promises = _data = _callbacks = null
	                    _resovle()
	                })
	            })
	            return state.resolved
	
	        }, state)
	
	        return this
	    }
	
	    function isError(e) {
	        return e instanceof Error
	    }
	
	    // 将所有的promise error适配到这里来
	    function promiseError(e) {
	        if (isError(e)) {
	            throw e
	        } else {
	            callStateFunc("onError", mmState, e, e && e.state)
	        }
	    }
	
	    function getPromise(excutor) {
	        var prom = avalon.isFunction(excutor) ? new Promise(excutor) : Promise.all(excutor)
	        return prom
	    }
	    Promise.prototype.$then = function (onFulfilled, onRejected) {
	        var prom = this.then(onFulfilled, onRejected)
	        prom["catch"](promiseError)
	        return prom
	    }
	    avalon.state.onViewEntered = function (newNode, oldNode) {
	        if (newNode != oldNode)
	            oldNode.parentNode.removeChild(oldNode)
	    }
	    /*
	     *  @interface avalon.state.config 全局配置
	     *  @param {Object} config 配置对象
	     *  @param {Function} config.onBeforeUnload 开始切前的回调，this指向router对象，第一个参数是fromState，第二个参数是toState，return false可以用来阻止切换进行
	     *  @param {Function} config.onAbort onBeforeUnload return false之后，触发的回调，this指向mmState对象，参数同onBeforeUnload
	     *  @param {Function} config.onUnload url切换时候触发，this指向mmState对象，参数同onBeforeUnload
	     *  @param {Function} config.onBegin  开始切换的回调，this指向mmState对象，参数同onBeforeUnload，如果配置了onBegin，则忽略begin
	     *  @param {Function} config.onLoad 切换完成并成功，this指向mmState对象，参数同onBeforeUnload
	     *  @param {Function} config.onViewEnter 视图插入动画函数，有一个默认效果
	     *  @param {Node} config.onViewEnter.arguments[0] 新视图节点
	     *  @param {Node} config.onViewEnter.arguments[1] 旧的节点
	     *  @param {Function} config.onError 出错的回调，this指向对应的state，第一个参数是一个object，object.type表示出错的类型，比如view表示加载出错，object.name则对应出错的view name，object.xhr则是当使用默认模板加载器的时候的httpRequest对象，第二个参数是对应的state
	     */
	    avalon.state.config = function (config) {
	        avalon.mix(avalon.state, config || {})
	        return avalon
	    }
	    function callStateFunc(name, state) {
	        Event.$fire.apply(Event, arguments)
	        return avalon.state[name] ? avalon.state[name].apply(state || mmState.currentState, [].slice.call(arguments, 2)) : 0
	    }
	    // 状态原型，所有的状态都要继承这个原型
	    function StateModel(stateName, options) {
	        if (this instanceof StateModel) {
	            this.stateName = stateName
	            this.formate(options)
	        } else {
	            var state = _states[stateName] = new StateModel(stateName, options || {})
	            return state
	        }
	    }
	    StateModel.is = function (state) {
	        return state instanceof StateModel
	    }
	    StateModel.prototype = {
	        formate: function (options) {
	            avalon.mix(true, this, options)
	            var stateName = this.stateName,
	                me = this,
	                chain = stateName.split("."),
	                len = chain.length - 1/*,
	                sourceLocal = me.sourceLocal = {}*/
	            this.chain = []
	            avalon.each(chain, function (key, name) {
	                if (key == len) {
	                    me.chain.push(me)
	                } else {
	                    var n = chain.slice(0, key + 1).join("."),
	                            state = getStateByName(n)
	                    if (!state)
	                        throw new Error("必须先定义" + n)
	                    me.chain.push(state)
	                }
	            })
	            if (this.url === void 0) {
	                this.abstract = true
	            }
	            var _parent = this.chain[len - 1] || _root
	            if (_parent) {
	                this.url = _parent.url + (this.url || "")
	                this.parentState = _parent
	            }
	            // state的views等属性需要异步按需加载
	            if (!this.stateUrl) this.initViewsConfig()
	            this._self = options
	            this._pending = false
	            this.visited = false
	            this.params = inherit(_parent && _parent.params || {})
	            this.oldParams = {}
	            this.keys = []
	
	            this.events = {}
	        },
	        initViewsConfig: function () {
	            var me = this,
	                sourceLocal = this.sourceLocal = {},
	                stateName = this.statename,
	                _parent = this.parentState
	            if (!this.views && stateName != "") {
	                var view = {}
	                "template,templateUrl,templateProvider,controller,controllerUrl,controllerProvider,viewCache".replace(/\w+/g, function (prop) {
	                    copyTemplateProperty(view, me, prop)
	                })
	                var viewname = "viewname" in this ? this.viewname : ""
	                this.views = {}
	                this.views[viewname] = view
	            }
	            var views = {},
	                viewsIsArray = this.views instanceof Array // 如果是一个数组
	
	            avalon.each(this.views, function (maybeName, view) {
	                var name = viewsIsArray ? view.name || "" : maybeName // 默认缺省
	                if (name.indexOf("@") < 0) {
	                    name += "@" + (_parent ? _parent.stateName || "" : "")
	                }
	                views[name] = view
	                sourceLocal[name] = {}
	            })
	            this.views = views
	        },
	        watch: function (eventName, func) {
	            var events = this.events[eventName] || []
	            this.events[eventName] = events
	            events.push(func)
	            return func
	        },
	        fire: function (eventName, state) {
	            var events = this.events[eventName] || [], i = 0
	            while (events[i]) {
	                var res = events[i].apply(this, [].slice.call(arguments, 1))
	                if (res === false) {
	                    events.splice(i, 1)
	                } else {
	                    i++
	                }
	            }
	        },
	        unwatch: function (eventName, func) {
	            var events = this.events[eventName]
	            if (!events)
	                return
	            var i = 0
	            while (events[i]) {
	                if (events[i] == func)
	                    return events.splice(i, 1)
	                i++
	            }
	        },
	        paramsChanged: function (toParams) {
	            var changed = false, keys = this.keys, me = this, params = this.params
	            avalon.each(keys, function (index, item) {
	                var key = item.name
	                if (params[key] != toParams[key])
	                    changed = "param"
	            })
	            // query
	            if (!changed && mmState.currentState === this) {
	                changed = !objectCompare(toParams.query, mmState.query) && "query"
	            }
	            return changed
	        },
	        filterParams: function (toParams) {
	            var params = avalon.mix(true, {}, this.params), keys = this.keys
	            avalon.each(keys, function (index, item) {
	                params[item.name] = toParams[item.name]
	            })
	            return params
	        },
	        syncParams: function (toParams) {
	            var me = this
	            avalon.each(this.keys, function (index, item) {
	                var key = item.name
	                if (key in toParams)
	                    me.params[key] = toParams[key]
	            })
	        },
	        _onEnter: function () {
	            this.query = this.getQuery()
	            var me = this,
	                    arg = Array.prototype.slice.call(arguments),
	                    done = me._async(),
	                    prom = getPromise(function (rs, rj) {
	                        var reason = {
	                            type: "data",
	                            state: me,
	                            params: me.params
	                        },
	                        _reject = function (message) {
	                            reason.message = message
	                            done.apply(me, [false])
	                            rj(reason)
	                        },
	                                _resovle = function () {
	                                    done.apply(me)
	                                    rs()
	                                },
	                                res = me.onEnter.apply(me, arg.concat([_resovle, _reject]))
	                        // if promise
	                        if (res && res.then) {
	                            res.then(_resovle)["catch"](promiseError)
	                            // error msg
	                        } else if (res && res !== true) {
	                            _reject(res)
	                        } else if (res === undefine) {
	                            _resovle()
	                        }
	                        // res === false will pause here
	                    })
	        },
	        /*
	         * @interface state.getQuery 获取state的query，等价于state.query
	         *<pre>
	         *  onEnter: function() {
	         *      var query = this.getQuery()
	         *      or
	         *      this.query
	         *  }
	         *</pre> 
	         */
	        getQuery: function () {
	            return mmState.query
	        },
	        /*
	         * @interface state.getParams 获取state的params，等价于state.params
	         *<pre>
	         *  onEnter: function() {
	         *      var params = this.getParams()
	         *      or
	         *      this.params
	         *  }
	         *</pre> 
	         */
	        getParams: function () {
	            return this.params
	        },
	        _async: function () {
	            // 没有done回调的时候，防止死球
	            if (this.done)
	                this._pending = true
	            return this.done || avalon.noop
	        },
	        onBeforeEnter: avalon.noop, // 切入某个state之前触发
	        onEnter: avalon.noop, // 切入触发
	        onBeforeExit: avalon.noop, // state退出前触发
	        onExit: avalon.noop // 退出后触发
	    }
	
	    _root = StateModel("", {
	        url: "",
	        views: null,
	        "abstract": true
	    })
	
	    /*
	     * @interface avalon.controller 给avalon.state视图对象配置控制器
	     * @param name 控制器名字
	     * @param {Function} factory 控制器函数，传递一个内部生成的控制器对象作为参数
	     * @param {Object} factory.arguments[0] $ctrl 控制器的第一个参数：实际生成的控制器对象
	     * @param {Object} $ctrl.$vmodels 给视图指定一个scan的vmodels数组，实际scan的时候$vmodels.concat(dom树上下文继承的vmodels)
	     * @param {Function} $ctrl.$onBeforeUnload 该视图被卸载前触发，return false可以阻止视图卸载，并阻止跳转
	     * @param {Function} $ctrl.$onEnter 给该视图加载数据，可以返回false，或任意不为true的错误信息或一个promise对象，传递3个参数
	     * @param {Object} $ctrl.$onEnter.arguments[0] params第一个参数：视图所属的state的参数
	     * @param {Function} $ctrl.$onEnter.arguments[1] resolve $onEnter 第二个参数：return false的时候，进入同步等待，直到手动调用resolve
	     * @param {Function} $ctrl.$onEnter.arguments[2] reject 第三个参数：数据加载失败，调用
	     * @param {Function} $ctrl.$onRendered 视图元素scan完成之后，调用
	     */
	    avalon.controller = function () {
	        var first = arguments[0],
	                second = arguments[1]
	        if (first && (first instanceof _controller))
	            return first
	        var $ctrl = _controller()
	        if (avalon.isFunction(first)) {
	            first($ctrl)
	        } else if (avalon.isFunction(second)) {
	            $ctrl.name = first
	            second($ctrl)
	        } else if (typeof first == "string" || typeof first == "object") {
	            first = first instanceof Array ? first : Array.prototype.slice.call(arguments)
	            avalon.each(first, function (index, item) {
	                if (typeof item == "string") {
	                    first[index] = avalon.vmodels[item]
	                }
	                item = first[index]
	                if ("$onRendered" in item)
	                    $ctrl.$onRendered = item["$onRendered"]
	                if ("$onEnter" in  item)
	                    $ctrl.$onEnter = item["$onEnter"]
	            })
	            $ctrl.$vmodels = first
	        } else {
	            throw new Error("参数错误" + arguments)
	        }
	        return $ctrl
	    }
	    /*
	     *  @interface avalon.controller.loader avalon.controller异步引入模块的加载器，默认是通过avalon.require加载
	     */
	    avalon.controller.loader = function (url, callback) {
	        // 没有错误回调...
	        function wrapper($ctrl) {
	            callback && callback($ctrl)
	        }
	        url = url instanceof Array ? url : [url]
	        if (window.requirejs) {
	            requirejs(url, wrapper)
	        } else if ("function" === "function" && __webpack_require__(23).ensure) {
	            __webpack_require__(23).ensure(url, wrapper)
	        } else if (avalon.require) {
	            avalon.require(url, wrapper)
	        } else { // 抛个错误，方便调试
	            throw Error('未能找有效的模块加载器异步加载"' + url + '"，请参照mmState.js的avalon.controller.loader源码进行修改')
	        }
	    }
	
	    function _controller() {
	        if (!(this instanceof _controller))
	            return new _controller
	        this.$vmodels = []
	    }
	    _controller.prototype = {
	    }
	
	    function objectCompare(objA, objB) {
	        if (!objA || !objB) return false
	        for (var i in objA) {
	            if (!(i in objB) || objA[i] !== objB[i])
	                return false
	        }
	        for (var i in objB) {
	            if (!(i in objA) || objA[i] !== objB[i])
	                return false
	        }
	        return true
	    }
	
	    //【avalon.state】的辅助函数，确保返回的是函数
	    function getFn(object, name) {
	        return typeof object[name] === "function" ? object[name] : avalon.noop
	    }
	
	    function getStateByName(stateName) {
	        return _states[stateName]
	    }
	    function getViewNodes(node, query) {
	        var nodes, query = query || "ms-view"
	        if (node.querySelectorAll) {
	            nodes = node.querySelectorAll("[" + query + "]")
	        } else {
	            nodes = Array.prototype.filter.call(node.getElementsByTagName("*"), function (node) {
	                return typeof node.getAttribute(query) === "string"
	            })
	        }
	        return nodes
	    }
	
	    // 【avalon.state】的辅助函数，opts.template的处理函数
	    function fromString(template, params, reason) {
	        var promise = getPromise(function (resolve, reject) {
	            var str = typeof template === "function" ? template(params) : template
	            if (typeof str == "string") {
	                resolve(str)
	            } else {
	                reason.message = "template必须对应一个字符串或一个返回字符串的函数"
	                reject(reason)
	            }
	        })
	        return promise
	    }
	    // 【fromUrl】的辅助函数，得到一个XMLHttpRequest对象
	    var getXHR = function () {
	        return new (window.XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP")
	    }/*
	     *  @interface avalon.state.templateLoader 通过url异步加载模板的函数，默认是通过内置的httpRequest去加载，但是在node-webkit环境是不work的，因此开放了这个配置，用以自定义url模板加载器，会在一个promise实例里调用这个方法去加载模板
	     *  @param url 模板地址
	     *  @param resolve 加载成功，如果需要缓存模板，请调用<br>
	     resolve(avalon.templateCache[url] = templateString)<br>
	     否则，请调用<br>
	     resolve(templateString)<br>
	     *  @param reject 加载失败，请调用reject(reason)
	     *  @param reason 挂在失败原因的对象
	     */
	    avalon.state.templateLoader = function (url, resolve, reject, reason) {
	        var xhr = getXHR()
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState === 4) {
	                var status = xhr.status;
	                if (status > 399 && status < 600) {
	                    reason.message = "templateUrl对应资源不存在或没有开启 CORS"
	                    reason.status = status
	                    reason.xhr = xhr
	                    reject(reason)
	                } else {
	                    resolve(avalon.templateCache[url] = xhr.responseText)
	                }
	            }
	        }
	        xhr.open("GET", url, true)
	        if ("withCredentials" in xhr) {
	            xhr.withCredentials = true
	        }
	        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
	        xhr.send()
	    }
	    // 【avalon.state】的辅助函数，opts.templateUrl的处理函数
	    function fromUrl(url, params, reason) {
	        var promise = getPromise(function (resolve, reject) {
	            if (typeof url === "function") {
	                url = url(params)
	            }
	            if (typeof url !== "string") {
	                reason.message = "templateUrl必须对应一个URL"
	                return reject(reason)
	            }
	            if (avalon.templateCache[url]) {
	                return  resolve(avalon.templateCache[url])
	            }
	            avalon.state.templateLoader(url, resolve, reject, reason)
	        })
	        return promise
	    }
	    // 【avalon.state】的辅助函数，opts.templateProvider的处理函数
	    function fromProvider(fn, params, reason) {
	        var promise = getPromise(function (resolve, reject) {
	            if (typeof fn === "function") {
	                var ret = fn(params)
	                if (ret && ret.then || typeof ret == "string") {
	                    resolve(ret)
	                } else {
	                    reason.message = "templateProvider为函数时应该返回一个Promise或thenable对象或字符串"
	                    reject(reason)
	                }
	            } else if (fn && fn.then) {
	                resolve(fn)
	            } else {
	                reason.message = "templateProvider不为函数时应该对应一个Promise或thenable对象"
	                reject(reason)
	            }
	        })
	        return promise
	    }
	    // 【avalon.state】的辅助函数，将template或templateUrl或templateProvider转换为可用的Promise对象
	    function fromPromise(config, params, reason) {
	        return config.template ? fromString(config.template, params, reason) :
	                config.templateUrl ? fromUrl(config.templateUrl, params, reason) :
	                config.templateProvider ? fromProvider(config.templateProvider, params, reason) :
	                getPromise(function (resolve, reject) {
	                    reason.message = "必须存在template, templateUrl, templateProvider中的一个"
	                    reject(reason)
	                })
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./mmHistory": 20,
		"./mmHistory.js": 20,
		"./mmPromise": 24,
		"./mmPromise.js": 24,
		"./mmRouter": 21,
		"./mmRouter.js": 21,
		"./mmState": 22,
		"./mmState.js": 22
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 23;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon) {
	//chrome36的原生Promise还多了一个defer()静态方法，允许不通过传参就能生成Promise实例，
	//另还多了一个chain(onSuccess, onFail)原型方法，意义不明
	//目前，firefox24, opera19也支持原生Promise(chrome32就支持了，但需要打开开关，自36起直接可用)
	//本模块提供的Promise完整实现ECMA262v6 的Promise规范
	//2015.3.12 支持async属性
	    function ok(val) {
	        return val
	    }
	    function ng(e) {
	        throw e
	    }
	
	    function done(onSuccess) {//添加成功回调
	        return this.then(onSuccess, ng)
	    }
	    function fail(onFail) {//添加出错回调
	        return this.then(ok, onFail)
	    }
	    function defer() {
	        var ret = {};
	        ret.promise = new this(function (resolve, reject) {
	            ret.resolve = resolve
	            ret.reject = reject
	        });
	        return ret
	    }
	    var msPromise = function (executor) {
	        this._callbacks = []
	        var me = this
	        if (typeof this !== "object")
	            throw new TypeError("Promises must be constructed via new")
	        if (typeof executor !== "function")
	            throw new TypeError("not a function")
	
	        executor(function (value) {
	            _resolve(me, value)
	        }, function (reason) {
	            _reject(me, reason)
	        })
	    }
	    function fireCallbacks(promise, fn) {
	        if (typeof promise.async === "boolean") {
	            var isAsync = promise.async
	        } else {
	            isAsync = promise.async = true
	        }
	        if (isAsync) {
	            window.setTimeout(fn, 0)
	        } else {
	            fn()
	        }
	    }
	//返回一个已经处于`resolved`状态的Promise对象
	    msPromise.resolve = function (value) {
	        return new msPromise(function (resolve) {
	            resolve(value)
	        })
	    }
	//返回一个已经处于`rejected`状态的Promise对象
	    msPromise.reject = function (reason) {
	        return new msPromise(function (resolve, reject) {
	            reject(reason)
	        })
	    }
	
	    msPromise.prototype = {
	//一个Promise对象一共有3个状态：
	//- `pending`：还处在等待状态，并没有明确最终结果
	//- `resolved`：任务已经完成，处在成功状态
	//- `rejected`：任务已经完成，处在失败状态
	        constructor: msPromise,
	        _state: "pending",
	        _fired: false, //判定是否已经被触发
	        _fire: function (onSuccess, onFail) {
	            if (this._state === "rejected") {
	                if (typeof onFail === "function") {
	                    onFail(this._value)
	                } else {
	                    throw this._value
	                }
	            } else {
	                if (typeof onSuccess === "function") {
	                    onSuccess(this._value)
	                }
	            }
	        },
	        _then: function (onSuccess, onFail) {
	            if (this._fired) {//在已有Promise上添加回调
	                var me = this
	                fireCallbacks(me, function () {
	                    me._fire(onSuccess, onFail)
	                });
	            } else {
	                this._callbacks.push({onSuccess: onSuccess, onFail: onFail})
	            }
	        },
	        then: function (onSuccess, onFail) {
	            onSuccess = typeof onSuccess === "function" ? onSuccess : ok
	            onFail = typeof onFail === "function" ? onFail : ng
	            var me = this//在新的Promise上添加回调
	            var nextPromise = new msPromise(function (resolve, reject) {
	                me._then(function (value) {
	                    try {
	                        value = onSuccess(value)
	                    } catch (e) {
	                        // https://promisesaplus.com/#point-55
	                        reject(e)
	                        return
	                    }
	                    resolve(value)
	                }, function (value) {
	                    try {
	                        value = onFail(value)
	                    } catch (e) {
	                        reject(e)
	                        return
	                    }
	                    resolve(value)
	                })
	            })
	            for (var i in me) {
	                if (!personal[i]) {
	                    nextPromise[i] = me[i]
	                }
	            }
	            return nextPromise
	        },
	        "done": done,
	        "catch": fail,
	        "fail": fail
	    }
	    var personal = {
	        _state: 1,
	        _fired: 1,
	        _value: 1,
	        _callbacks: 1
	    }
	    function _resolve(promise, value) {//触发成功回调
	        if (promise._state !== "pending")
	            return;
	        if (value && typeof value.then === "function") {
	//thenable对象使用then，Promise实例使用_then
	            var method = value instanceof msPromise ? "_then" : "then"
	            value[method](function (val) {
	                _transmit(promise, val, true)
	            }, function (reason) {
	                _transmit(promise, reason, false)
	            });
	        } else {
	            _transmit(promise, value, true);
	        }
	    }
	    function _reject(promise, value) {//触发失败回调
	        if (promise._state !== "pending")
	            return
	        _transmit(promise, value, false)
	    }
	//改变Promise的_fired值，并保持用户传参，触发所有回调
	    function _transmit(promise, value, isResolved) {
	        promise._fired = true;
	        promise._value = value;
	        promise._state = isResolved ? "fulfilled" : "rejected"
	        fireCallbacks(promise, function () {
	            promise._callbacks.forEach(function (data) {
	                promise._fire(data.onSuccess, data.onFail);
	            })
	        })
	    }
	    function _some(any, iterable) {
	        iterable = Array.isArray(iterable) ? iterable : []
	        var n = 0, result = [], end
	        return new msPromise(function (resolve, reject) {
	            // 空数组直接resolve
	            if (!iterable.length)
	                resolve(result)
	            function loop(a, index) {
	                a.then(function (ret) {
	                    if (!end) {
	                        result[index] = ret//保证回调的顺序
	                        n++
	                        if (any || n >= iterable.length) {
	                            resolve(any ? ret : result)
	                            end = true
	                        }
	                    }
	                }, function (e) {
	                    end = true
	                    reject(e)
	                })
	            }
	            for (var i = 0, l = iterable.length; i < l; i++) {
	                loop(iterable[i], i)
	            }
	        })
	    }
	
	    msPromise.all = function (iterable) {
	        return _some(false, iterable)
	    }
	    msPromise.race = function (iterable) {
	        return _some(true, iterable)
	    }
	    msPromise.defer = defer
	
	
	
	    avalon.Promise = msPromise
	    var nativePromise = window.Promise
	    if (/native code/.test(nativePromise)) {
	        nativePromise.prototype.done = done
	        nativePromise.prototype.fail = fail
	        if (!nativePromise.defer) { //chrome实现的私有方法
	            nativePromise.defer = defer
	        }
	    }
	    return window.Promise = nativePromise || msPromise
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	//https://github.com/ecomfe/er/blob/master/src/Deferred.js
	//http://jser.info/post/77696682011/es6-promises


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(26), __webpack_require__(27)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:accordion", {
	        //外部属性
	        tindex: -1, //组件在表格中行index
	        tdata: "",
	        active: 0, //表示当前激活项
	        padding: 15, //panel-body 的 padding
	        //外部参数
	        panels: [],
	        onChanged: _interface,
	        //内部属性
	        isInit: true,
	        extend: {},
	        $allPanelBody: null,
	
	        //view接口
	        renderTestIn: _interface,
	        renderTest: _interface,
	
	        onInit: _interface, //必须定义此接口
	        initTableData: _interface,
	        renderContent: _interface,
	        clickPanel: _interface,
	        _trigger: _interface,
	        setActive: _interface,
	        getActive: _interface,
	
	        //默认配置
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            if (vmOpts.panels != undefined) {
	                //初始化slot标签页内容用属性
	                for (var i = 0; i < vmOpts.panels.length; i++) {
	                    hooks['content' + i] = '';
	                }
	            }
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = '';
	        },
	        $init: function (vm, elem) {
	            //内部方法
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case 'changed':
	                        if (typeof vm.onChanged == 'function') {
	                            vm.onChanged(ev, {
	                                "setActive": vm.setActive,
	                                "getActive": vm.getActive
	                            });
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            //接口方法
	            vm.renderContent = function (idx) {
	                return vm['content' + idx];
	            }
	            vm.clickPanel = function (ev, idx) {
	                if (idx != vm.active) { //判断点击的是否是当前项
	                    //非当前项
	                    vm.$allPanelBody.eq(vm.active).slideUp(300); //收起上一项
	                    vm.$allPanelBody.eq(idx).slideDown(300); //展开当前项
	                    vm.active = idx;
	                } else {
	                    //当前项
	                    vm.$allPanelBody.eq(idx).slideUp(300); //收起当前项
	                    vm.active = -1; //激活项置为-1
	                }
	            }
	            //对外方法
	            vm.setActive = function (idx) {
	                if (idx != vm.active) { //判断是否是当前项
	                    //非当前项
	                    vm.$allPanelBody.eq(vm.active).slideUp(300); //收起上一项
	                    vm.$allPanelBody.eq(idx).slideDown(300); //展开当前项
	                    vm.active = idx;
	                }
	            }
	            vm.getActive = function () {
	                return vm.active;
	            }
	            //观测方法
	            vm.$watch('active', function (newVal, oldVal) {
	                if (newVal == -1 || oldVal == -1) return;
	                vm._trigger({ newVal: newVal, oldVal: oldVal }, 'changed');
	                if (typeof vm.panels[newVal].fun == 'function') {
	                    vm.panels[newVal].fun({ newVal: newVal, oldVal: oldVal }, vm);
	                }
	            });
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.$allPanelBody = $(elem).find(".panel-body"); //缓存$allPanelBody
	            vm.$allPanelBody.eq(vm.active).slideDown(0); //展开当前项
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.initTableData(vm, elem);
	            vm.isInit = false;
	            if (typeof vm.panels[vm.active].fun == 'function') {
	                vm.panels[vm.active].fun({}, vm);
	            }
	        }
	    });
	
	    var widget = avalon.components["mc:accordion"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-accordion-cotar\">\r\n    <div class=\"panel-wrap\" ms-repeat=\"panels\" ms-class=\"last:$last\" ms-class-1=\"active:$index==active\">\r\n        <div class=\"panel-header\" ms-click=\"clickPanel($event, $index)\">\r\n            <!--<h4 class=\"panel-title\">\r\n                <a href=\"javascript:void(0)\">{{el.title}}</a>\r\n            </h4>-->\r\n            <a href=\"javascript:void(0)\">{{el.title}}</a>\r\n        </div>\r\n        <div class=\"panel-body\" ms-css-padding=\"padding\">\r\n            {{renderContent($index)|html}}\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ },
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(_) {toSideBarData = function (data) {
	    var result = [];
	    //has checked end
	    avalon.each(data, function (i, item) {
	        result.push(item);
	        item.select = item.select || false;
	        item.children = item.children || [];
	        //递归赋值 
	        if (item.children.length) {
	            item.children = toSideBarData(item.children);
	        }
	    });
	    return result;
	};
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(29), __webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:sidebar", {
	        //外部属性
	        active: 0, //表示当前激活项
	        padding: 0, //panel-body 的 padding
	        //外部参数
	        sidebarList: [],
	        //内部属性
	        isInit: true,
	        extend: {},
	        $allPanel: null,
	        $allPanelBody: null,
	        //view接口
	        onInit: _interface, //必须定义此接口
	        changeData: _interface,
	        renderContent: _interface,
	        clickPanel: _interface,
	        _trigger: _interface,
	        setActive: _interface,
	        getActive: _interface,
	        setSelect: _interface,
	        //默认配置
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            if (vmOpts.data) {
	                if (typeof (vmOpts.data) === 'function') {
	                    vmOpts.data = vmOpts.data();
	                }
	                vmOpts.data = toSideBarData(vmOpts.data);
	            }
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = "";
	        },
	        $init: function (vm, elem) {
	            //内部方法
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case 'changed':
	                        if (typeof vm.onChanged == 'function') {
	                            vm.onChanged(ev, {
	                                "setActive": vm.setActive,
	                                "getActive": vm.getActive
	                            });
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            //接口方法
	            vm.renderContent = function (idx) {
	                return vm['content' + idx];
	            }
	            vm.changeData = function (newData) {
	                //trans
	                vm.sidebarList = toSideBarData(newData);
	            }
	            vm.clickPanel = function (ev, idx) {
	                avalon.log(idx);
	                if (idx != vm.active) { //判断点击的是否是当前项
	                    //非当前项
	                    vm.$allPanelBody.eq(vm.active).slideUp(300); //收起上一项
	                    vm.$allPanelBody.eq(idx).slideDown(300); //展开当前项
	                    vm.active = idx;
	                } else {
	                    //当前项
	                    vm.$allPanelBody.eq(idx).slideUp(300); //收起当前项
	                    vm.active = -1; //激活项置为-1
	                }
	            }
	            //对外方法
	            vm.setActive = function (idx) {
	                if (idx != vm.active) { //判断是否是当前项
	                    //非当前项
	                    vm.$allPanelBody.eq(vm.active).slideUp(300); //收起上一项
	                    vm.$allPanelBody.eq(idx).slideDown(300); //展开当前项
	                    vm.active = idx;
	                }
	            }
	            vm.getActive = function () {
	                return vm.active;
	            }
	            vm.setSelect = function (href) {
	                //todo find
	                vm.sidebarList.forEach(function (pat) {
	                    //菜单文件位置但是一个文件菜单需要选中
	                    if (pat.href) {
	                        //判断href是否存在,判断是否为菜单文件还是菜单文件夹
	                        pat.select = false;
	                        if (pat.href.toLowerCase().indexOf(href.toLowerCase()) > -1) {
	                            pat.select = true;
	                        }
	                    }
	                    //子节点选中（因为只支持2级..就类似写死）
	                    //todo remove
	                    _.each(pat.children, function (child) {
	                        child.select = false;
	                    });
	                    //remove end
	                    _.find(pat.children, function (child) {
	                        if (child.href.toLowerCase().indexOf(href.toLowerCase()) > -1) {
	                            child.select = true;
	                            return false;
	                        }
	                    })
	                })
	            }
	            
	            //观测方法
	            vm.$watch('sidebarList', function (newVal, oldVal) {
	                setTimeout(function() {
	                    vm.$allPanelBody = $(".mc-accordion-cotar .panel-body"); //缓存$allPanelBody
	                    //vm.$allPanelBody.eq(vm.active).slideDown(0); //展开当前项
	                }, 500);
	            });
	
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            //vm.$allPanel = $(elem);
	            vm.$allPanelBody = $(elem).find(".panel-body"); //缓存$allPanelBody
	            vm.$allPanelBody.eq(vm.active).slideDown(0); //展开当前项
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	            //if (typeof vm.panels[vm.active].fun == 'function') {
	            //    vm.panels[vm.active].fun({}, vm);
	            //}
	        }
	    });
	
	    var widget = avalon.components["mc:sidebar"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-sidebar-cotar\" ms-class=\"mc-loading: isInit\">\r\n    <div class=\"mc-accordion-cotar\" ms-repeat=\"sidebarList\">\r\n        <div class=\"panel-wrap\" ms-class=\"last:$last\" ms-class-1=\"active:$index==active\" ms-if=\"el.children.length>0\">\r\n            <div class=\"panel-header\" ms-click=\"clickPanel($event, $index)\">\r\n                <a href=\"javascript:void(0)\">{{el.text}}</a>\r\n            </div>\r\n            <div class=\"panel-body\" ms-css-padding=\"padding\">\r\n                <div class=\"mc-accordion-cotar\" ms-repeat-el=\"el.children\">\r\n                    <div class=\"link-bar hf\" ms-class-1=\"select:el.select\">\r\n                        <a class=\"fp\" ms-attr-href=\"el.href ? el.href : 'javascript:void(0)'\">{{el.text}}</a>\r\n                        <div class=\"fp\" ms-if=\"el.$btn_opt\">\r\n                            <mc:button ms-attr-config=\"el.$btn_opt\"></mc:button>\r\n                            <!--<mc:droplist config=\"$droplist_opt\"></mc:droplist>-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel-wrap\" ms-class=\"last:$last\" ms-class-1=\"active:$index==active\" ms-if=\"el.children.length==0\">\r\n            <div class=\"panel-header\" ms-class-1=\"select:el.select\">\r\n                <a ms-attr-href=\"el.href ? el.href : 'javascript:void(0)'\">{{el.text}}</a>\r\n            </div>\r\n            <div class=\"panel-body\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(32), __webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:sidepop", {
	        //外部参数
	        headerHeight: 0, //header高度
	        footerHeight: 0, //footer高度
	        size: "normal", //large, small
	        padding: 15, //cbody面板的padding
	        show: false, //是否显示,默认隐藏
	        
	        //外部事件
	        onInit: _interface, //初始化接口
	        onShow: null, //侧边弹出层显示
	        onClose: null, //侧边弹出层关闭
	        onChange: null, //侧边弹出层状态改变
	
	        //外部接口
	        sidePopShow: _interface, //显示侧边弹出层
	        sidePopHide: _interface, //隐藏侧边弹出层
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        $scrollBody: $({}), //滚动层
	        showAnimate: false, //显示动画
	        hideAnimate: false, //关闭动画
	
	        //内部事件
	        clickSidePop: _interface, //侧边弹出层被点击事件
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	
	        //slot
	        cheader: "",
	        cbody: "",
	        cfooter: "",
	
	        //默认配置
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //======= 内部事件 START =======//
	            vm.clickSidePop = function (ev) {
	                if (ev.target.id.indexOf("_ueditor") === -1) {
	                    //阻止冒泡(避免点击弹出框时 弹出框关闭)
	                    ev.cancelBubble = true;
	                    window.event.cancelBubble = true;
	                }
	            }
	            //======= 内部事件 END =======//
	
	
	            //======= 内部接口 START =======//
	            /**doc
	             * @description {事件触发器}
	             * @param {ev} {动作类型}
	             * @param {type} {事件类型}
	             * @returns {} 
	             */
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "show":
	                        if (typeof vm.onShow == "function") {
	                            vm.onShow(ev, vm);
	                        }
	                        break;
	                    case "close":
	                        if (typeof vm.onClose == "function") {
	                            vm.onClose(ev, vm);
	                        }
	                        break;
	                    case "change":
	                        if (typeof vm.onChanger == "function") {
	                            vm.onChanger(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            //======= 内部接口 END =======//
	
	
	            //======= 外部接口 START =======//
	            vm.sidePopShow = function () {
	                if (!vm.show) {
	                    vm.show = true;
	                    vm.showAnimate = true;
	                    setTimeout(function() {
	                        vm.showAnimate = false;
	                    }, 350);
	                    vm._trigger({}, "show");
	                } else {
	                    vm.$scrollBody.scrollTop(0); //滚动条滚回顶部
	                }
	            }
	            vm.sidePopHide = function () {
	                if (vm.show) {
	                    vm.hideAnimate = true;
	                    setTimeout(function () {
	                        vm.hideAnimate = false;
	                        vm.show = false;
	                    }, 350);
	                    vm._trigger({}, "hide");
	                }
	            }
	            //======= 外部接口 END =======//
	
	
	            //======= 观测方法 START =======//
	            //弹出层显示时回调
	            vm.$watch("show", function (newVal, oldVal) {
	                vm.$scrollBody.scrollTop(0); //滚动条滚回顶部
	                vm._trigger({ newState: newVal, oldState: oldVal }, "change");
	            });
	            //======= 观测方法 END =======//
	        },
	        $ready: function (vm, elem) {
	            vm.$scrollBody = $(elem).find(".mc-scroll-wrap");
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	            McAvalon.$window.on("window_click", function (trigger, ev) {
	                //如果点击不是百度文本编辑器内产生的则关闭
	                if (ev.target.className.indexOf("edui-") === -1) {
	                    vm.sidePopHide();
	                }
	            });
	        }
	    });
	
	    var widget = avalon.components["mc:sidepop"];
	    widget.regionals = {};
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-sidepop-cotar\" ms-class-1=\"mc-sidepop-lg: size=='large'\" ms-class-2=\"mc-sidepop-sm: size=='small'\"\r\n     ms-class-3=\"mc-sidepop-page: size=='page'\" ms-class-4=\"mc-sidepop-show: show\"\r\n     ms-class-5=\"mc-hide-animate: hideAnimate\" ms-class-6=\"mc-show-animate: showAnimate\" ms-class-7=\"mc-loading: isInit\"\r\n     ms-click=\"clickSidePop($event)\">\r\n    <div class=\"mc-sidepop-wrap\">\r\n        <div class=\"mc-sidepop-header\" ms-if=\"headerHeight\" ms-css-height=\"headerHeight\">\r\n            {{cheader|html}}\r\n        </div>\r\n        <div class=\"mc-scroll-wrap\" ms-css-top=\"headerHeight\" ms-css-bottom=\"footerHeight\">\r\n            <div class=\"mc-sidepop-body\" ms-css-padding=\"padding\">\r\n                {{cbody|html}}\r\n            </div>\r\n        </div>\r\n        <div class=\"mc-sidepop-footer\" ms-if=\"footerHeight\" ms-css-height=\"footerHeight\">\r\n            {{cfooter|html}}\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(35), __webpack_require__(36), __webpack_require__(37), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:datagrid", {
	        //外部参数
	        title: "", //数据表名 //del - 有表头slot 代替
	        name: null, //样式名 - 防止动态生成的style冲突
	        tableConfig: [], //表格配置项 [headTxt - 标题信息][dataId - 绑定列id][width - 列宽][type - 列类型]
	        data: [], //数据源
	        minWidth: 0, //最小宽度
	        sortActive: true, //排序激活项 //todo 实现排序
	        //tbody: false,
	
	        dataGridState: 0, //表格状态, [0 - 数据加载中][1 - 有数据(显示数据)][2 - 无数据]
	
	        $checkBoxAllVm: null,
	        getCheckBoxAllVm: _interface,
	        $childCheckBoxVm: [],
	        $CheckBoxBaseIndex: -1,
	        getChildCheckBoxVm: _interface,
	        $childButtonVm: [],
	        $buttonBaseIndex: -1,
	        getChildButtonVm: _interface,
	        selectAll: _interface,
	        selectRow: _interface,
	        setSwitch: _interface,
	        clickSwitch: _interface,
	        setSelect: _interface,
	        changeSelect: _interface,
	        clickButton: _interface,
	
	
	        formName: "", //表单setValue使用
	        bindSize: "", //跟linearlayout布局大小层绑定的class名
	
	        allHasWidth: true, //每列是否指定了列宽
	        otherOffset: 0, //其他外部偏移（跟linearlayout内部包括的relativelayout的padding有关,暂定待修改,relativelayout跟滚动结合）
	        scrollContentOffset: 37, //滚动内容偏移值（跟样式有关系）
	        extendOffset: 0,
	
	        //外部事件
	        onInit: _interface, //初始化接口
	        onSelected: null, //行选中事件
	        onChanged: null, //改变事件(include 行选中,行取消选中)
	        onClickRow: null, //行点击事件（不论是否有复选框,当点击行的时候触发事件）
	
	        //外部接口
	        getData: _interface, //获取表格数据
	        setData: _interface, //设置表格数据
	        getSelectedRow: _interface, //获取选中列
	        getSelectedValue: _interface, //获取选中列数据(返回数组)
	        setRowState: _interface, //设置指定列的状态
	        setRowSelected: _interface, //设置选中的列
	        removeRow: _interface, //移除列
	        insertRow: _interface, //插入列
	        deleteRow: _interface, //删除列
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        selected: [], //选中项
	        lindex: -1, //布局中的序号
	        $headerContent: "", //数据表头部内容
	        $headTypeList: { //标题类型列表
	            "checkbox": 1
	        },
	        $typeList: { //列表类型列表
	            "checkbox": 1,
	            "btn": 2,
	            "img": 3,
	            "time": 4,
	            "switch": 5,
	            "selectbox": 6,
	            "icon": 7,
	            "html": 8
	        },
	        $datagridBody: null, //datagrid body 的 jQuery 对象
	
	        //内部事件
	        sort: _interface, //排序接口
	        clickRow: _interface, //行点击事件
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	        datagridRendered: _interface,
	        hideDataGrid: _interface,
	        renderHeader: _interface, //渲染头部
	        renderContent: _interface, //渲染内容
	        renderHref: _interface, //渲染链接
	        renderBtn: _interface, //渲染按钮内容
	        renderStyle: _interface, //渲染样式
	        isSelected: _interface, //是否选中
	        dataHeadType: _interface, //表头类型判断
	        datagridType: _interface, //列内容类型判断(含链接判断)
	        updateSelected: _interface, //更新选择项
	        updateChildVm: _interface, //更新子项vm方法
	        removeChildVm: _interface, //移除子项vm方法
	        addChildVm: _interface, //添加子项vm
	        //表单设置数据接口
	        setValue: _interface,
	
	        //默认配置
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            //if (vmOpts.tableConfig != undefined) {
	            //    //初始化slot标签页内容用属性
	            //    for (var i = 0; i < vmOpts.tableConfig.length; i++) {
	            //        hooks['content' + i] = '';
	            //    }
	            //}
	
	            //根据data设置表格状态
	            if (vmOpts.data) {
	                if (vmOpts.data.length) {
	                    hooks.dataGridState = 1; //有数据
	                } else {
	                    hooks.dataGridState = 2; //无数据
	                }
	            } else {
	                hooks.dataGridState = 0; //异步加载数据
	            }
	
	            //没有设置name的话动态生成一个
	            vmOpts.name || elemOpts.name || (hooks.name = McAvalon.util.genId("datagrid"));
	
	            if (vmOpts.data) {
	                vmOpts.data = toDatagridData(vmOpts.data, hooks);
	                //vmOpts.data = datagridData(vmOpts.data, function () {
	                //    hooks.selected.push(false);
	                //});
	                //avalon.each(vmOpts.data, function (i, val) {
	                //    hooks.selected.push(false);
	                //    val.selected = false;
	                //});
	            }
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            vm.$checkBoxAllVm = null,
	            //全选按钮vm
	            vm.getCheckBoxAllVm = function (_vm, elem) {
	                vm.$checkBoxAllVm = _vm;
	            },
	            vm.$childCheckBoxVm = [],
	            vm.$CheckBoxBaseIndex = -1,
	            //获得子项checkBox的vm
	            vm.getChildCheckBoxVm = function (_vm, elem) {
	                //if (vm.$CheckBoxBaseIndex === -1) vm.$CheckBoxBaseIndex = _vm.tdindex;
	                //vm.$childCheckBoxVm[_vm.tdindex - vm.$CheckBoxBaseIndex] || vm.$childCheckBoxVm.push(new Array());
	                //vm.$childCheckBoxVm[_vm.tdindex - vm.$CheckBoxBaseIndex].push(_vm);
	                //todo 修改tableChildVM的存储
	                vm.data[_vm.trindex].$tableChildVM.checkboxVM || avalon.mix(vm.data[_vm.trindex].$tableChildVM, {
	                    checkboxVM: []
	                });
	                vm.data[_vm.trindex].$tableChildVM.checkboxVM.push(_vm);
	            },
	            vm.$childButtonVm = [],
	            vm.$buttonBaseIndex = -1,
	            //获得子项checkBox的vm
	            vm.getChildButtonVm = function (_vm, elem) {
	                //if (vm.$buttonBaseIndex === -1) vm.$buttonBaseIndex = _vm.tdindex;
	                //vm.$childButtonVm[_vm.tdindex - vm.$buttonBaseIndex] || vm.$childButtonVm.push(new Array());
	                //vm.$childButtonVm[_vm.tdindex - vm.$buttonBaseIndex].push(_vm);
	                //todo 修改tableChildVM的存储
	                vm.data[_vm.trindex].$tableChildVM.ButtonVM || avalon.mix(vm.data[_vm.trindex].$tableChildVM, {
	                    ButtonVM: []
	                });
	                vm.data[_vm.trindex].$tableChildVM.ButtonVM.push(_vm);
	                //console.log(vm.data[_vm.trindex].$tableChildVM);
	            },
	            //全选
	            vm.selectAll = function (ev, _vm) {
	                if (_vm.isChecked()) { //全选
	                    avalon.each(vm.data, function (i, val) {
	                        avalon.each(val.$tableChildVM.checkboxVM, function (i, val) {
	                            val.setChecked(true);
	                        });
	                    });
	                    vm.setRowState(true);
	                } else { //取消全选
	                    avalon.each(vm.data, function (i, val) {
	                        avalon.each(val.$tableChildVM.checkboxVM, function (i, val) {
	                            val.setChecked(false);
	                        });
	                    });
	                    vm.setRowState(false);
	                }
	            },
	            //选择行
	            vm.selectRow = function (ev, _vm) {
	                if (_vm.isChecked()) { //选中
	                    vm.setRowState(_vm.trindex, true);
	                } else { //取消选中
	                    if (vm.$checkBoxAllVm && vm.$checkBoxAllVm.isChecked()) { //如果全选按钮选中则取消其选择
	                        vm.$checkBoxAllVm.setChecked(false);
	                    }
	                    vm.setRowState(_vm.trindex, false);
	                }
	            },
	            //switch ini
	            vm.setSwitch = function (_vm, elem) {
	                var trIdx = _vm.trindex;
	                var tdIdx = _vm.tdindex;
	                var isReadonly = vm.tableConfig[tdIdx].readonly ? true : false;
	                //todo 调用renderContent(或者和renderContent调用同一个底层函数,获取数据,传入trIdx和tdIdx)来获得数据
	                _vm.setValue(vm.data[trIdx] && vm.data[trIdx][vm.tableConfig[tdIdx].dataId], isReadonly);
	                //todo 修改tableChildVM的存储
	                vm.data[_vm.trindex].$tableChildVM.switchVM || avalon.mix(vm.data[_vm.trindex].$tableChildVM, {
	                    switchVM: []
	                });
	                vm.data[_vm.trindex].$tableChildVM.switchVM.push(_vm);
	            },
	            //click switch
	            vm.clickSwitch = function (ev, _vm) {
	                if (typeof vm.tableConfig[_vm.tdindex].onClick === "function") {
	                    vm.tableConfig[_vm.tdindex].onClick(vm, _vm);
	                }
	            },
	            //selectbox config
	            vm.$selectbox_opt = vm.$selectbox_opt,
	            //selectbox ini
	            vm.setSelect = function (_vm, elem) {
	                var trIdx = _vm.trindex;
	                var tdIdx = _vm.tdindex;
	                var isReadonly = vm.tableConfig[tdIdx].readonly ? true : false;
	                var tdSelectboxOpt = vm.tableConfig[tdIdx].$selectbox_opt; //当前列的选择框配置项
	                _vm.data = tdSelectboxOpt && tdSelectboxOpt.data;
	                //todo 调用renderContent(或者和renderContent调用同一个底层函数,获取数据,传入trIdx和tdIdx)来获得数据
	                _vm.setValue(vm.data[trIdx] && vm.data[trIdx][vm.tableConfig[tdIdx].dataId], isReadonly);
	                //todo 修改tableChildVM的存储
	                vm.data[_vm.trindex].$tableChildVM.selectboxVM || avalon.mix(vm.data[_vm.trindex].$tableChildVM, {
	                    selectboxVM: []
	                });
	                vm.data[_vm.trindex].$tableChildVM.selectboxVM.push(_vm);
	            },
	            //change selectbox
	            vm.changeSelect = function (ev, _vm) {
	                if (typeof vm.tableConfig[_vm.tdindex].onClick === "function") {
	                    vm.tableConfig[_vm.tdindex].onClick(vm, _vm);
	                }
	            },
	            //按钮点击事件
	            vm.clickButton = function (ev, _vm) {
	                if (typeof vm.tableConfig[_vm.tdindex].onClick === "function") {
	                    vm.tableConfig[_vm.tdindex].onClick(vm, _vm);
	                }
	            }
	
	            //vm.datagridRendered = function (action, offset, length) {
	            //    vm.tbody = true;
	            //},
	
	            //======= 内部事件 START =======//
	            /**doc
	             * @description {行点击事件}
	             * @param {ev} {动作类型动作类型}
	             * @param {trIdx} {点击的行index}
	             * @returns {}
	             */
	            vm.clickRow = function (ev, trIdx) {
	                //if (vm.data[trIdx].$tableChildVM.checkboxVM && vm.data[trIdx].$tableChildVM.checkboxVM[0]) {
	                //    vm.data[trIdx].$tableChildVM.checkboxVM[0].clickCheckbox(ev); //触发当前行复选框点击事件
	                //    ev.stopPropagation();
	                //}
	                vm._trigger(ev, "clickRow", trIdx);
	                ev.stopPropagation();
	                return vm;
	            }
	            /**doc
	             * @description {排序事件 todo 未完成}
	             * @param {ev} {动作类型}
	             * @param {idx} {点击的列index}
	             * @returns {} 
	             */
	            vm.sort = function (ev, idx) {
	                if (typeof vm.tableConfig[idx].sort == "function") {
	                    vm.data.sort(function (a, b) {
	                        if (vm.sortActive) {
	                            return vm.tableConfig[idx].sort(a, b);
	                        } else {
	                            return !vm.tableConfig[idx].sort(a, b);
	                        }
	                    });
	                    vm.sortActive = !vm.sortActive;
	                    ev.stopPropagation();
	                }
	            }
	            //======= 内部事件 END =======//
	
	
	            //======= 内部接口 START =======//
	            /**doc
	             * @description {事件触发器}
	             * @param {ev} {动作类型}
	             * @param {type} {事件类型}
	             * @returns {} 
	             */
	            vm._trigger = function (ev, type, extend) {
	                switch (type) {
	                    case "selected":
	                        if (typeof vm.onSelected == "function") {
	                            vm.onSelected(ev, vm, extend);
	                        }
	                        break;
	                    case "changed":
	                        if (typeof vm.onChanged == "function") {
	                            vm.onChanged(ev, vm, extend);
	                        }
	                        break;
	                    case "clickRow":
	                        if (typeof vm.onClickRow == "function") {
	                            vm.onClickRow(ev, vm, extend);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            /**doc
	             * @description {渲染表格头部}
	             * @returns {String} {表格头部HTML}
	             */
	            vm.renderHeader = function () {
	                return vm.$headerContent;
	            }
	            /**doc
	             * @description {渲染表格单元格内容}
	             * @param {trIdx} {行index}
	             * @param {tdIdx} {列index}
	             * @returns {String} {表格单元格内容HTML}
	             */
	            vm.renderContent = function (trIdx, tdIdx) {
	                var V = vm.data[trIdx] && vm.data[trIdx][vm.tableConfig[tdIdx].dataId];
	                if (vm.tableConfig[tdIdx].type === "time") {
	                    return (V >> 0) * 1000;
	                } else if (vm.tableConfig[tdIdx].type === "img") {
	                    if (V === null) return ""; //fix图片路径为null时,无法显示为空
	                    if (V.indexOf(",") !== -1) {
	                        //如果多图取第一张
	                        return V.split(",")[0];
	                    }
	                    return V;
	                } {
	                    //oriV| filter 
	                    if (vm.tableConfig[tdIdx].filter) {
	                        V = vm.tableConfig[tdIdx].filter(V);
	                    }
	                    return V;
	                }
	                //if (vm['content' + idx] == '') {
	                //    return vm.data[outIdx][vm.tableConfig[idx].dataId];
	                //} else {
	                //    //vm['content' + idx].childNodes[0].setAttribute('index', outIdx);
	                //    $(vm['content' + idx].childNodes[0]).find('.' + vm.$tableElem).attr("tindex", outIdx);
	                //    return vm['content' + idx].childNodes[0].outerHTML;
	                //}
	            }
	            vm.renderHref = function (trIdx, tdIdx) {
	                if (vm.data[trIdx]) {
	                    var params = vm.tableConfig[tdIdx].$params;
	                    var url = vm.tableConfig[tdIdx].tdlink;
	                    if (params && params.length) {
	                        url += "?";
	                        $.each(params, function (i, val) {
	                            if (i !== 0) url += "&";
	                            url += val + "=" + vm.data[trIdx][val];
	                        });
	                    }
	                    return url;
	                }
	            }
	            /**doc
	             * @description {渲染按钮文本}
	             * @param {trIdx} {按钮所在行index}
	             * @param {tdIdx} {按钮所在列index}
	             * @returns {String} {按钮文本HTML}
	             */
	            vm.renderBtn = function (trIdx, tdIdx) {
	                return vm.tableConfig[tdIdx].label;
	            }
	            /**doc
	             * @description {渲染表格样式}
	             * @returns {String} {样式HTML}
	             */
	            vm.renderStyle = function () {
	                var styleHtml = "";
	                if (vm.name) {
	                    styleHtml += "<style>";
	                    var allWidth = 0;
	                    vm.allHasWidth = true;
	                    for (var i = 0; i < vm.tableConfig.length; i++) {
	                        var elWidth = vm.tableConfig[i].width >> 0;
	                        if (elWidth) {
	                            styleHtml += "." + vm.name + " .col-" + i + "{width:" + elWidth + "px}";
	                            allWidth += elWidth;
	                        } else {
	                            vm.allHasWidth = false;
	                        }
	                    }
	                    styleHtml += "." + vm.name + " .mc-datagrid-scroll-cotar{";
	                    if (vm.allHasWidth) {
	                        styleHtml += "width:" + allWidth + "px;";
	                        vm.extendOffset = 18; //滚动条高度
	                    }
	                    styleHtml += "min-width:" + (vm.minWidth >> 0) + "px;";
	                    styleHtml += "}";
	                    styleHtml += "</style>";
	                }
	                return styleHtml;
	            }
	            /**doc
	             * @description {判断行是否选中}
	             * @param {idx} {要判断的行index}
	             * @returns {Boolean} {是否选中}
	             */
	            vm.isSelected = function (idx) {
	                return vm.data[idx].selected;
	            }
	            /**doc
	             * @description {判断数据表格表头类型}
	             * @param {tdIdx} {要判断的列index}
	             * @returns {String} {返回$headTypeList内对应的值 默认 [data:显示文本]}
	             */
	            vm.dataHeadType = function (tdIdx) {
	                return vm.$headTypeList[vm.tableConfig[tdIdx].type] || "data";
	            }
	            /**doc
	             * @description {判断数据表单元格类型}
	             * @param {trIdx} {要判断的行index}
	             * @param {tdIdx} {要判断的列index}
	             * @returns {String||Boolean} {[false:数据] [true:带连接的数据] [数字:$typeList内对应的值]}
	             */
	            //todo 修改 带外链的数据显示，链接字段不一定是tdlink,要分离
	            vm.datagridType = function (trIdx, tdIdx) {
	                var type = vm.$typeList[vm.tableConfig[tdIdx].type] || 0;
	                if (type !== 0) {
	                    return type;
	                } else if (vm.tableConfig[tdIdx].tdlink) {
	                    return true;
	                } else {
	                    return false;
	                }
	            }
	            /**doc
	             * @description {更新选中项所对应的内部selected数组内容}
	             * @param {newVal} {新值 [true:选中][false:未选中][新的selected数组,仅当全部更新时启用]}
	             * @param {singleUpdate} {是否单个更新 [true:单个更新][不传或false全部更新]}
	             * @param {idx} {要更新的行index}
	             * @returns {} 
	             */
	            vm.updateSelected = function (newVal, singleUpdate, idx) {
	                if (singleUpdate) { //单个更新
	                    vm.selected.set(idx, newVal);
	                } else {
	                    vm.selected = newVal;
	                }
	            }
	            /**doc
	             * @description {更新数据表内组件的vm (添加行,删除行时)}
	             * @param {idx} {要更新的起始行index,包含当前index的行}
	             * @param {nbr} {变动值 (新增的行数,或删除的行数)}
	             * @param {add} {是否添加 [true:添加][false:删除]}
	             * @returns {} 
	             */
	            vm.updateChildVm = function (idx, nbr, add) {
	                for (var i = idx; i < vm.data.length; i++) {
	                    avalon.each(vm.data[i].$tableChildVM.checkboxVM, function (i, val) {
	                        add ? val.trindex += nbr : val.trindex -= nbr;
	                    });
	                    avalon.each(vm.data[i].$tableChildVM.ButtonVM, function (i, val) {
	                        add ? val.trindex += nbr : val.trindex -= nbr;
	                    });
	                }
	            }
	            //vm.updateChildVm = function (target, idx, add) {
	            //    avalon.each(target, function (i, val) {
	            //        for (var j = idx; j < val.length; j++) {
	            //            add ? val[j].trindex++ : val[j].trindex--;
	            //        }
	            //    });
	            //}
	            /**doc
	             * @description {移除数据表内组件的vm}
	             * @param {idx} {移除的行的index}
	             * @returns {} 
	             */
	            vm.removeChildVm = function (idx) {
	                //todo 销毁子组件的vm
	                vm.updateChildVm(idx + 1, 1);
	            }
	            //vm.removeChildVm = function (target, idx) {
	            //    vm.updateChildVm(target, idx + 1);
	            //    avalon.each(target, function (i, val) {
	            //        avalon.Array.removeAt(val, idx);
	            //    });
	            //}
	            /**doc
	             * @description {添加数据表内组件的vm}
	             * @param {nbr} {新增行数}
	             * @returns {} 
	             */
	            vm.addChildVm = function (nbr) {
	                vm.updateChildVm(0, nbr, true);
	            }
	            /**
	             * 表单调用接口
	             * @param {} val 
	             * @returns {} 
	             */
	            vm.setValue = function (val) {
	                vm.setData(val);
	            }
	            //======= 内部接口 END =======//
	
	
	            //======= 外部接口 START =======//
	            vm.getData = function () {
	                return vm.data.$model;
	            }
	            //vm.hideDataGrid = function () {
	            //    vm.tbody = false;
	            //    console.log(213);
	            //}
	            vm.setData = function (data, callback) {
	                //判断表格状态
	                if (data.length) {
	                    vm.dataGridState = 1; //有数据
	                } else {
	                    vm.dataGridState = 2; //无数据
	                }
	
	                //vm.hideDataGrid();
	                setTimeout(function() {
	                    vm.selected = [];
	                    var newData = toDatagridData(data, vm);
	                    //todo 优化数据diff
	                    var newDataLength = newData.length;
	                    var oldDataLength = vm.data.length;
	                    var changeDataLength = Math.min(newDataLength, oldDataLength);
	                    var i;
	                    //替换记录
	                    //debugger;
	                    for (i = 0; i < changeDataLength; i++) {
	                        //vm.data.set(i, newData[i]);
	                        //普通数据替换
	                        var oldItem = vm.data[i];
	                        var newItem = newData[i];
	                        for (k in newItem) {
	                            if (newItem.hasOwnProperty(k)) {
	                                //替换时不对$tableChildVM进行处理,否则会丢失之前的$tableChildVM
	                                if (k !== "$tableChildVM") {
	                                    //todo 优化赋值,进行diff处理,首先测试avalon框架是否有做diff优化处理
	                                    oldItem[k] = newItem[k];
	                                }
	                            }
	                        }
	                        //特殊类型值变化（switch，selectbox）
	                        var itemTableChildVM = oldItem.$tableChildVM;
	                        //switch
	                        itemTableChildVM.switchVM && $.each(itemTableChildVM.switchVM, function(i, val) {
	                            //todo 调用内部的子组件内部的update方法去更新数据,先手动传
	                            var trIdx = val.trindex;
	                            var tdIdx = val.tdindex;
	                            val.setValue(vm.data[trIdx] && vm.data[trIdx][vm.tableConfig[tdIdx].dataId]);
	                        });
	                        //selectbox
	                        itemTableChildVM.selectboxVM && $.each(itemTableChildVM.selectboxVM, function(i, val) {
	                            //todo 调用内部的子组件内部的update方法去更新数据,先手动传
	                            var trIdx = val.trindex;
	                            var tdIdx = val.tdindex;
	                            val.setValue(vm.data[trIdx] && vm.data[trIdx][vm.tableConfig[tdIdx].dataId]);
	                        });
	                    }
	                    if (newDataLength > oldDataLength) {
	                        //增加记录条数
	                        //console.time("add");
	                        vm.data.pushArray(newData.slice(oldDataLength, newDataLength));
	                        //console.timeEnd("add");
	                        //for (i = oldDataLength; i < newDataLength; i++) {
	                        //    vm.data.set(i, newData[i]);
	                        //    //vm.data.push(newData[i]);
	                        //}
	                    } else {
	                        //减少记录条数
	                        //console.time("remove");
	                        vm.data.splice(newDataLength, oldDataLength);
	                        //console.timeEnd("remove");
	                        //for (i = newDataLength; i < oldDataLength; i++) {
	                        //    avalon.Array.removeAt(vm.data, newDataLength);
	                        //}
	                    }
	                    typeof callback === "function" && callback.call(this, vm);
	                    //vm.data = newData;
	                    //表格滚回顶部
	                    //vm.$datagridBody.animate({ scrollTop: 0 }, 500);
	                    vm.$datagridBody.scrollTop(0);
	                }, 300);
	            }
	            /**doc
	             * @description {获取选择的列}
	             * @returns {数组} {返回index数组}
	             */
	            vm.getSelectedRow = function () {
	                var s = [];
	                avalon.each(vm.data, function (i, val) {
	                    val.selected && s.push(i);
	                });
	                return s;
	            }
	            /**doc
	             * @description {获取选择的列的值}
	             * @returns {数组} {返回数据对象数组}
	             */
	            vm.getSelectedValue = function () {
	                var d = [];
	                avalon.each(vm.data, function (i, val) {
	                    val.selected && d.push(val.$model);
	                });
	                return d;
	            }
	            /**doc
	             * @description {设置行状态,选中或者不选中}
	             * @param {trIdx} {要选中的行index 特殊:[true:全选][false:全不选],此时第二个参数可不传}
	             * @param {check} {是否选中 [true:选中][false:不选中]}
	             * @returns {vm} {当前调用的vm对象} 
	             */
	            vm.setRowState = function (trIdx, check) {
	                var t = [];
	                if (trIdx === true) { //全选
	                    avalon.each(vm.data, function (i, val) {
	                        if (!val.selected) {
	                            //var t = deepCopy(val);
	                            //t.selected = true;
	                            val.selected = true;
	                            //vm.selected.set(i, true);
	                        }
	                        t.push(true);
	                    });
	                    vm.updateSelected(t);
	                } else if (trIdx === false) { //全不选
	                    avalon.each(vm.data, function (i, val) {
	                        if (val.selected) {
	                            val.selected = false;
	                            //vm.selected.set(i, false);
	                        }
	                        t.push(false);
	                        //val.selected && (val.selected = false);
	                    });
	                    vm.updateSelected(t);
	                } else { //单选
	                    if (check) {
	                        t = true;
	                        vm.data[trIdx].selected = true;
	                    } else {
	                        t = false;
	                        vm.data[trIdx].selected = false;
	                    }
	                    vm.updateSelected(t, true, trIdx);
	                }
	                return vm;
	            }
	            /**
	             * 设置选中的列
	             * @param {} selectedArr 
	             * @returns {} 
	             */
	            vm.setRowSelected = function (selectedArr) {
	                avalon.each(vm.data, function (i, val) {
	                    avalon.each(val.$tableChildVM.checkboxVM, function (i, val) {
	                        val.setChecked(false);
	                    });
	                });
	                vm.setRowState(false);
	                for (var i = 0; i < selectedArr.length; i++) {
	                    if (vm.data[selectedArr[i]]) {
	                        avalon.each(vm.data[selectedArr[i]].$tableChildVM.checkboxVM, function (i, val) {
	                            val.setChecked(true);
	                        });
	                        vm.setRowState(selectedArr[i], true);
	                    }
	                }
	            }
	            /**doc
	             * @description  {移除行}
	             * @param {trIdx} {要移除的行的行号}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.removeRow = function (trIdx) {
	                //todo 取消全选按钮选中状态
	                vm.removeChildVm(trIdx);
	                avalon.Array.removeAt(vm.data, trIdx);
	                //vm.$childButtonVm[trIdx].$dispose();
	                //vm.removeChildVm(vm.$childCheckBoxVm, trIdx);
	                //vm.removeChildVm(vm.$childButtonVm, trIdx);
	                avalon.Array.removeAt(vm.selected, trIdx);
	                //console.log(vm.$childButtonVm);
	                //console.log(vm.selected);
	                return vm;
	            }
	            /**doc
	             * @description {插入行}
	             * @param {newData} {要插入的新行的数据}
	             * @param {append} {是否追加[true:追加,添加到末行][不传或者false:则默认插入到首行]}
	             * @returns {vm} {当前调用的vm对象} 
	             */
	            vm.insertRow = function (newData, append) {
	                newData = toDatagridData(newData); //转换为表格数据
	                //todo 取消全选按钮选中状态
	                if (append) { //添加到末尾
	                    avalon.each(newData, function (i, val) {
	                        vm.data.push(val);
	                        vm.selected.push(false);
	                    });
	                } else { //添加到首行
	                    avalon.each(newData, function (i, val) {
	                        vm.data.unshift(val);
	                        vm.selected.unshift(false);
	                    });
	                    vm.addChildVm(newData.length);
	                    //vm.addChildVm(vm.$childCheckBoxVm);
	                    //vm.addChildVm(vm.$childButtonVm);
	                }
	                return vm;
	            }
	            /**doc
	             * @description {删除行}
	             * @param {newData} {删除行后需要追加的新数据}
	             * @param {trIdx} {要删除的行的index}
	             * @returns {vm} {当前调用的vm对象} 
	             */
	            vm.deleteRow = function (newData, trIdx) {
	                vm.removeRow(trIdx);
	                vm.insertRow(newData, true);
	                return vm;
	            }
	            //======= 外部接口 END =======//
	
	
	            //======= 观测方法 START =======//
	            /**
	             * @description {数据源更换监听} 
	             */
	            vm.$watch("data", function (newVal, oldVal) {
	                if (newVal) {
	                    //var _this = this;
	                    //datagridData(newVal, function () {
	                    //    _this.selected.push(false);
	                    //});
	                    //avalon.each(newVal, function (i, val) {
	                    //    _this.selected.push(false);
	                    //    val.selected = false;
	                    //});
	                }
	            });
	            /**
	             * @description {全选监听}
	             */
	            vm.$watch("selected", function (newVal, oldVal) {
	                vm._trigger({ newVal: newVal, oldVal: oldVal }, "selected");
	            });
	            /**
	             * @description {单选监听}
	             */
	            vm.$watch("selected.*", function (newVal, oldVal) {
	                //等待vm.selected对象改变,延迟50毫秒触发回调 - 可能有BUG
	                setTimeout(function () {
	                    vm._trigger({ newVal: newVal, oldVal: oldVal }, "selected");
	                }, 50);
	            });
	            //vm.$watch('active', function (newVal, oldVal) {
	            //    if (newVal == -1 || oldVal == -1) return;
	            //    vm._trigger({ newVal: newVal, oldVal: oldVal }, 'changed');
	            //    if (typeof vm.panels[newVal].fun == 'function') {
	            //        vm.panels[newVal].fun({ newVal: newVal, oldVal: oldVal }, vm);
	            //    }
	            //});
	            //======= 观测方法 END =======//
	
	        },
	        $ready: function (vm, elem) {
	            vm.$datagridBody = $(elem).find(".mc-tbody");
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            //if (typeof vm.panels[vm.active].fun == 'function') {
	            //    vm.panels[vm.active].fun({}, vm);
	            //}
	            //注册布局大小变动事件
	            McAvalon.$window.on("layout_resize", function (event, layoutSizeObj) {
	                if (layoutSizeObj["mc_li" + vm.bindSize]) {
	                    var vmHeight = layoutSizeObj["mc_li" + vm.bindSize].height;
	                    var vmWidth = layoutSizeObj["mc_li" + vm.bindSize].width;
	                    //宽度小于最小宽度时高度减去滚动条区域,每列指定了列宽则必定横向滚动条
	                    //todo 每列指定了列宽的时候自动生成最小宽度
	                    if (vm.allHasWidth || vmWidth < vm.minWidth) {
	                        vm.extendOffset = 18;
	                    } else {
	                        vm.extendOffset = 0;
	                    }
	                    vm.$datagridBody.css("height", vmHeight - vm.otherOffset - vm.scrollContentOffset - vm.extendOffset);
	                }
	            });
	            //触发布局初始化事件
	            McAvalon.$window.trigger("layout_ini");
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:datagrid"];
	    widget.regionals = {};
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-datagrid-cotar\" ms-class-1=\"{{name}}\" ms-class-2=\"mc-hide:isInit\">\r\n    <div class=\"mc-datagrid-scroll-cotar\">\r\n        {{renderHeader()|html}}\r\n        <table class=\"data-table\">\r\n            <tr>\r\n                <th ms-repeat=\"tableConfig\" ms-class=\"col-{{$index}}\" ms-class-1=\"active:sortActive\" ms-click=\"sort($event, $index)\">\r\n                    <span class=\"vm-cotar\" ms-if=\"dataHeadType($index)==='data'\">{{el.headTxt}}</span>\r\n                    <!-- 复选框 -->\r\n                    <div class=\"vm-cotar checkbox-wrap\" ms-if=\"dataHeadType($index)===1\">\r\n                        <mc:checkbox on-changed=\"selectAll\" on-init=\"getCheckBoxAllVm\" ms-attr-config=\"checkbox_opt{{$outer.$index}}\"></mc:checkbox>\r\n                    </div>\r\n                </th>\r\n            </tr>\r\n        </table>\r\n        <div class=\"mc-tbody\">\r\n            <div class=\"mc-no-data\" ms-if=\"dataGridState === 0\">\r\n                <div class=\"h1\">数据加载中</div>\r\n            </div>\r\n            <table class=\"data-table\" ms-if=\"dataGridState === 1\">\r\n                <tr ms-repeat=\"data\" ms-class=\"active:selected[$index]\" ms-click=\"clickRow($event, $index)\">\r\n                    <!-- 数据内容 -->\r\n                    <td ms-repeat-el=\"tableConfig\" ms-class=\"col-{{$index}}\">\r\n                        <!-- 正常数据 -->\r\n                        <span class=\"vm-cotar\" ms-if=\"datagridType($outer.$index,$index)===false\">{{renderContent($outer.$index,$index)}}</span>\r\n                        <!-- html数据 -->\r\n                        <span class=\"vm-cotar\" ms-if=\"datagridType($outer.$index,$index)===8\">{{renderContent($outer.$index,$index) | html }}</span>\r\n                        <!-- 时间数据 -->\r\n                        <span class=\"vm-cotar\" ms-if=\"datagridType($outer.$index,$index)===4\">{{renderContent($outer.$index,$index)| date(\"yyyy-MM-dd HH:mm:ss\")}}</span>\r\n                        <!-- 带连接数据 -->\r\n                        <a class=\"vm-cotar\" ms-if=\"datagridType($outer.$index,$index)===true\" ms-attr-href=\"{{renderHref($outer.$index,$index)}}\">{{renderContent($outer.$index,$index)}}</a>\r\n                        <!-- 复选框 -->\r\n                        <div class=\"vm-cotar checkbox-wrap\" ms-if=\"datagridType($outer.$index,$index)===1\">\r\n                            <mc:checkbox on-changed=\"selectRow\" on-init=\"getChildCheckBoxVm\" ms-attr-trindex=\"$outer.$index\" ms-attr-tdindex=\"$index\"></mc:checkbox>\r\n                        </div>\r\n                        <!-- switch -->\r\n                        <div class=\"vm-cotar switch-wrap\" ms-if=\"datagridType($outer.$index,$index)===5\">\r\n                            <mc:switch on-click=\"clickSwitch\" on-init=\"setSwitch\" ms-attr-trindex=\"$outer.$index\" ms-attr-tdindex=\"$index\"></mc:switch>\r\n                        </div>\r\n                        <!-- select box -->\r\n                        <div class=\"vm-cotar\" ms-if=\"datagridType($outer.$index,$index)===6\">\r\n                            <mc:selectbox config=\"$selectbox_opt\" on-selected=\"changeSelect\" on-init=\"setSelect\" ms-attr-trindex=\"$outer.$index\" ms-attr-tdindex=\"$index\"></mc:selectbox>\r\n                        </div>\r\n                        <!-- icon -->\r\n                        <div class=\"vm-cotar\" ms-if=\"datagridType($outer.$index,$index) === 7\">\r\n                            <span class=\"vm-cotar iconfont\"> {{renderContent($outer.$index,$index)|html}} </span>\r\n                        </div>\r\n                        <!-- 按钮 -->\r\n                        <div class=\"vm-cotar button-wrap\" ms-if=\"datagridType($outer.$index,$index)===2 && ( el.filter ?  el.filter($outer.el.$model) : true )\">\r\n                            <mc:button on-click=\"clickButton\" on-init=\"getChildButtonVm\" ms-attr-trindex=\"$outer.$index\" ms-attr-tdindex=\"$index\" ms-attr-label=\"{{renderBtn($outer.$index,$index)}}\"></mc:button>\r\n                        </div>\r\n                        <!-- 图片 -->\r\n                        <div class=\"vm-cotar img-wrap\" ms-if=\"datagridType($outer.$index,$index)===3\"><div class=\"mc-img-cotar\"><img ms-attr-src=\"renderContent($outer.$index,$index)\"></div></div>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"mc-no-data\" ms-if=\"dataGridState === 2\">\r\n                <img src=\"/Content/Include/img/img_no_data.jpg\" />\r\n                <!--<div class=\"h1\">暂无数据</div>-->\r\n            </div>\r\n        </div>\r\n        {{renderStyle()|html}}\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 36 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(38), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:checkbox", {
	        //外部参数
	        label: "", //复选框后面文本
	        checked: false, //是否选中
	        disabled: false, //是否禁用
	        readonly: false, //只读
	
	        //外部事件
	        onInit: _interface, //初始化接口
	        onChecked: null, //当复选框选中时触发事件
	        onCancel: null, //当复选框取消选中时触发事件
	        onChanged: null, //当复选框状态改变时触发事件
	
	        //外部接口
	        isChecked: _interface, //是否选中
	        setChecked: _interface, //设置选择
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        formName: "", //表单data的key,输入框name
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	
	        //内部事件
	        clickCheckbox: _interface, //复选框点击事件
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //内部事件(changed事件先于checked和cancel事件触发)
	            vm.clickCheckbox = function (ev) {
	                if (!vm.disabled && !vm.readonly) {
	                    if (vm._trigger(ev, "changed")) {
	                        if (vm.checked) {
	                            vm._trigger(ev, "cancel") && (vm.checked = false);
	                        } else {
	                            vm._trigger(ev, "checked") && (vm.checked = true);
	                        }
	                    }
	                    ev.stopPropagation();
	                }
	            }
	
	            //内部接口
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "checked":
	                        if (typeof vm.onChecked == "function") {
	                            return vm.onChecked(ev, vm) !== false ? true : false;
	                        }
	                        break;
	                    case "cancel":
	                        if (typeof vm.onCancel == "function") {
	                            return vm.onCancel(ev, vm) !== false ? true : false;
	                        }
	                        break;
	                    case "changed":
	                        if (typeof vm.onChanged == "function") {
	                            return vm.onChanged(ev, vm) !== false ? true : false;
	                        }
	                        break;
	                    default: break;
	                }
	                return true;
	            }
	
	            //外部接口
	            vm.isChecked = function () {
	                return vm.checked;
	            }
	            vm.setChecked = function (val) {
	                val ? vm.checked = true : vm.checked = false;
	            }
	            vm.getValue = function () {
	                return vm.isChecked() ? 1 : 0;
	            }
	            vm.setValue = function (val) {
	                vm.setChecked(val);
	            }
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:checkbox"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group mc-checkbox-cotar\" ms-class-1=\"mc-checkbox-disabled: disabled\"\r\n     ms-class-2=\"mc-loading: isInit\" ms-click=\"clickCheckbox($event)\">\r\n    <i class=\"mc-checkbox\" ms-class-1=\"mc-active: checked&&!disabled\"></i>\r\n    <span class=\"mc-checkbox-label\">{{label}}</span>\r\n</div>\r\n"

/***/ },
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(41), __webpack_require__(42)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:popmenu", {
	        //外部参数
	        size: "normal", //large, small, tiny
	        padding: 10,
	        position: {
	            top: 0,
	            left: 0
	        },
	        track: false, //自动追踪鼠标位置弹出
	        show: false, //是否显示,默认隐藏
	
	        //外部事件
	        onShowed: null,
	        onHided: null,
	
	        //外部接口
	        setPosition: _interface,
	        showDialog: _interface,
	        hideDialog: _interface,
	        setCallback: _interface,
	
	        //内部属性
	        content: "",
	        lindex: -1, //布局中的序号
	
	        //内部事件
	        clickBg: _interface,
	        clickDialog: _interface,
	
	        //内部接口
	        _trigger: _interface,
	        jBtnType: _interface,
	
	        //默认配置
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //======= 内部事件 START =======//
	            vm.clickBg = function (ev) {
	                vm.hideDialog();
	                ev.cancelBubble = true;
	            }
	            /**
	             * 模态窗口点击时事件
	             * @param {} ev 动作类型
	             * @returns {} 
	             */
	            vm.clickDialog = function (ev) {
	                //阻止冒泡(避免点击弹出框时 弹出框关闭)
	                ev.cancelBubble = true;
	            }
	            //======= 内部事件 END =======//
	
	            //======= 内部接口 START =======//
	            /**
	             * 事件触发器
	             * @param {} ev 动作类型
	             * @param {} type 事件类型
	             * @returns {} 
	             */
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "showed":
	                        if (typeof vm.onshowed == "function") {
	                            vm.onShowed(ev, vm);
	                        }
	                        break;
	                    case "hided":
	                        if (typeof vm.onhided == "function") {
	                            vm.onHided(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            //======= 内部接口 END =======//
	
	            //======= 外部接口 START =======//
	            /**doc
	             * @newPosition {新的位置坐标对象,需包括top和left两个值}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.setPosition = function (newPosition,offsetTop,offsetLeft) {
	                vm.position = {
	                    top: newPosition.top - (offsetTop || 0),
	                    left: newPosition.left - (offsetLeft || 0)
	                };
	                return vm;
	            }
	            /**doc
	             * @description {显示模态窗口}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.showDialog = function () {
	                vm.show = true;
	                vm._trigger({}, "showed");
	                return vm;
	            }
	            /**doc
	             * @description {隐藏模态窗口}
	             * @param {ev} {动作类型}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.hideDialog = function (ev) {
	                vm.show = false;
	                vm._trigger(ev, "hided");
	                return vm;
	            }
	            /**doc
	             * @description {设置回调}
	             * @param {idx} {设置的按钮index}
	             * @param {callback} {对应的回调函数}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.setCallback = function (idx, callback) {
	                vm.buttons[idx].callback = callback;
	                return vm;
	            }
	            //======= 外部接口 END =======//
	        },
	        $ready: function (vm) {
	
	        }
	    });
	
	    var widget = avalon.components["mc:popmenu"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-popmenu-cotar fade\" ms-click=\"hideDialog($event)\" ms-class-1=\"mc-dialog-show:show\"\r\n        ms-class-2=\"mc-dialog-hide:!show\">\r\n    <div class=\"mc-popmenu-content\" ms-click=\"clickDialog($event)\" ms-class-1=\"mc-popmenu-lg: size=='large'\"\r\n         ms-class-2=\"mc-popmenu-sm: size=='small'\" ms-class-3=\"mc-popmenu-st: size=='tiny'\" ms-css-top=\"position.top\" ms-css-left=\"position.left\">\r\n        <!-- popmenu body -->\r\n        <div class=\"mc-popmenu-body\" ms-css-padding=\"padding\">{{content|html}}</div>\r\n    </div>\r\n    <!-- popmenu bg -->\r\n    <div class=\"mc-popmenu-bg\"></div>\r\n</div>"

/***/ },
/* 42 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(44), __webpack_require__(45)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:pop", {
	        //#region 外部参数
	        mcstyle: "", //风格
	        disabled: false, //是否禁用
	        //#endregion
	
	        //#region 外部事件
	        onInit: _interface, //初始化接口
	        //#endregion
	
	        //#region 外部接口
	        isDisable: _interface, //是否禁用
	        showTip: _interface, //显示提示
	        showSuccessTip: _interface, //显示成功提示
	        showFailTip: _interface, //显示失败提示
	        showConfirm: _interface, //显示操作确认
	        //#endregion
	
	        //#region 内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	        //#endregion
	
	        //#region 内部事件
	
	        //#endregion
	
	        //#region 内部接口
	        _trigger: _interface, //内部触发器
	        //#endregion
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //#region 外部事件
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	            //#endregion
	
	            //#region 外部接口
	
	            vm.showTip = function (msg, time) {
	                if (time === undefined) {
	                    swal(msg);
	                } else {
	                    swal({ title: msg, timer: time });
	                }
	            }
	            vm.showSuccessTip = function (msg, time) {
	                if (time === undefined) {
	                    swal({ title: msg, type: "success" });
	                } else {
	                    swal({ title: msg, type: "success", timer: time });
	                }
	            }
	            vm.showFailTip = function (msg, time) {
	                if (time === undefined) {
	                    swal({ title: msg, type: "error" });
	                } else {
	                    swal({ title: msg, type: "error", timer: time });
	                }
	            }
	            /**doc
	             * 显示确认框
	             * @param {} title 确认框标题
	             * @param {} text 确认框内容
	             * @returns {Defferred对象} done执行confirm按钮事件,fail执行cancel按钮事件
	             */
	            vm.showConfirm = function (title, text) {
	                var def = $.Deferred();
	                swal({
	                    title: title,
	                    text: text,
	                    type: "warning",
	                    showCancelButton: true,
	                    confirmButtonColor: "#DD6B55",
	                    confirmButtonText: "确认",
	                    cancelButtonText: "取消",
	                    closeOnConfirm: false, //bug 依照confirm回调函数的调用时间,todo loading?
	                    closeOnCancel: true
	                }, function (isConfirm) {
	                    if (isConfirm) {
	                        vm._trigger({}, "confirm");
	                        def.resolve();
	                    } else {
	                        vm._trigger({}, "cancel");
	                        def.reject();
	                    }
	                });
	                return def;
	            }
	            //#endregion
	
	            //#region 内部事件
	
	            //#endregion
	
	            //#region 内部接口
	            vm._trigger = function (ev, type, _this) {
	                switch (type) {
	                    case "confirm":
	                        if (typeof vm.onConfirm == "function") {
	                            vm.onConfirm(ev, vm, _this);
	                        }
	                        break;
	                    case "cancel":
	                        if (typeof vm.onCancel == "function") {
	                            vm.onCancel(ev, vm, _this);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	
	            //#endregion
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:pop"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-pop-cotar\"></div>"

/***/ },
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(18), __webpack_require__(47), __webpack_require__(48)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, req, template) {
	    var _interface = function () { };
	    /**
	     * 判断子组件内是否有某个属性
	     * @param {} comp 子组件vm
	     * @param {} val 属性名
	     * @returns {} 
	     */
	    function _hasProperty(comp, propertyName) {
	        return comp.hasOwnProperty(propertyName) && comp[propertyName] !== "";
	    }
	    avalon.component("mc:form", {
	        //外部属性
	        title: "", //标题
	        cpadding: 15, //组件内边距
	        labelSize: 240,
	        //buttons: true,  //是否存在submit、reset按钮
	        hasButtons: true, //是否存在按钮
	        leftLabel: "确定", //左边按钮
	        rightLabel: "取消", //右边按钮
	        border: false,
	        btnSize: 'normal',
	        btnPos: 'left',
	        submitMode: 'ajax',
	        //autoAjaxFirst: true, //是否自动发起第一次请求
	        $defaultData: null, //默认数据
	        defaultData: null, //暴露给外部进行绑定
	        //外部参数
	        submitUrl: '',
	        loadUrl: '',
	        loadParam: {},
	        onoksubmited: null,
	        onerrsubmited: null,
	        onsubmited: null,
	        onBeforeSubmit: null,
	        onreseted: null,
	        onloaded: null,
	        onDataChange: null, //当请求到新数据时触发事件
	        onFail: null,
	        onInit: _interface, //初始化接口
	
	        //ajax相关
	        $ajaxTmpData: null, //ajax获取到的临时数据
	        $ajaxConfig: {
	            url: "",
	            data: {},
	            dataType: "json"
	        },
	        isLoadingData: false, //是否正在加载数据
	
	        //内部属性
	        isInit: true,
	        //oriData: {},
	        //view属性
	        isLoading: false,
	        //view接口
	        doSubmit: _interface,
	        doReset: _interface,
	        _trigger: _interface,
	        _ajax: _interface,
	        _checkValid: _interface,
	
	        ajaxData: _interface, //请求数据
	        checkData: _interface, //验证数据
	        $$checkData: _interface, //验证数据
	
	        getAjaxData: _interface, //获取上次ajax返回的数据
	        setAjaxData: _interface, //设置ajax返回的数据
	
	        getDefaultData: _interface, //获得表单默认数据
	        setDefaultData: _interface, //设置表单默认数据
	
	        getData: _interface,
	        $$getData: _interface,
	
	        setData: _interface,
	        submit: _interface,
	        reset: _interface,
	        reload: _interface,
	        getElements: _interface,
	        //slot
	        content: "",
	
	        $template: template,
	        $replace: true,
	        //hooks : 定义component中的属性
	        //vmOpts : 引用component时的js配置$opt 
	        //eleOpts: 使用component时标签中的属性
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //内部方法
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "data":
	                        if (typeof vm.onDataChange == "function") {
	                            vm.onDataChange(vm);
	                        }
	                        break;
	                    case "fail":
	                        if (typeof vm.onFail == "function") {
	                            vm.onFail(vm);
	                        }
	                        break;
	                    case "loaded":
	                        if (typeof vm.onloaded == "function") {
	                            vm.onloaded(ev, vm);
	                        }
	                        break;
	                    case "submited":
	                        if (typeof vm.onsubmited == "function") {
	                            vm.onsubmited(ev, vm);
	                        }
	                        break;
	                    case "beforeSubmit":
	                        if (typeof vm.onBeforeSubmit == "function") {
	                            vm.onBeforeSubmit(ev, vm);
	                        }
	                        break;
	                    case "reseted":
	                        if (typeof vm.onreseted == "function") {
	                            vm.onreseted(ev, vm);
	                        }
	                        break;
	                    case "ok":
	                        if (typeof vm.onoksubmited == "function") {
	                            vm.onoksubmited(ev, vm);
	                        }
	                    case "err":
	                        if (typeof vm.onerrsubmited == "function") {
	                            vm.onerrsubmited(ev, vm);
	                        }
	                    default: break;
	                }
	            }
	            vm._ajax = function (url, data, successCallback) {
	                if (url != "") {
	                    vm.isLoading = true;
	                    req.ajax({
	                        type: "POST",
	                        url: url,
	                        data: {
	                            data: JSON.stringify(data)
	                        },
	                        dataType: "json",
	                        headers: {},
	                        success: function (d, status, xhr) {
	                            vm.isLoading = false;
	                            successCallback(d);
	                        },
	                        error: function (d) {
	                            vm.isLoading = false;
	                            vm._trigger(d, "err");
	                        }
	                    });
	                }
	            }
	            vm._checkValid = function () {
	                var result = true;
	                for (k in vm.$refs) {
	                    var comp = vm.$refs[k];
	                    if (comp.isValid != undefined && comp.isValid === false) {
	                        result = false; break;
	                    }
	                }
	                return result;
	            }
	
	            vm.ajaxData = function (data) {
	                var config = vm.$ajaxConfig;
	                if (config.url !== "") {
	                    var param = $.extend(data, config.data);
	                    Mc.Ajax({
	                        url: config.url,
	                        data: param,
	                        success: function (response) {
	                            vm.isLoadingData = false;
	                            vm.setAjaxData(response);
	                            vm._trigger({}, "data");
	                        },
	                        beforeSend: function () {
	                            vm.isLoadingData = true;
	                        },
	                        fail: function (response) {
	                            vm.isLoadingData = false;
	                            vm._trigger({}, "fail");
	                        }
	                    });
	                }
	            }
	            vm.getAjaxData = function () {
	                return vm.$ajaxTmpData;
	            }
	            vm.setAjaxData = function (val) {
	                vm.$ajaxTmpData = val;
	            }
	
	            vm.$$checkData = function (curVm) {
	                var result = true;
	                for (k in curVm) {
	                    var comp = curVm[k];
	                    //todo 验证重构，子组件提供是否带验证，是否验证通过的方法
	                    if (comp.hasOwnProperty("validValue")) {
	                        comp.validValue(); //执行数据验证
	                        if (comp.hasOwnProperty("isValid") && !comp.isValid) {
	                            result = false;
	                            //验证单个后结束，还是验证全部
	                            //break;
	                        }
	                    }
	                }
	                return result;
	            }
	
	            vm.checkData = function () {
	                var result = true;
	                for (k in vm.$refs) {
	                    var comp = vm.$refs[k];
	                    //todo 验证重构，子组件提供是否带验证，是否验证通过的方法
	                    if (comp.hasOwnProperty("validValue")) {
	                        comp.validValue(); //执行数据验证
	                        if (comp.hasOwnProperty("isValid") && !comp.isValid) {
	                            result = false;
	                            //验证单个后结束，还是验证全部
	                            //break;
	                        }
	                    }
	                }
	                return result;
	            }
	
	            vm.doSubmit = function (ev) {
	                vm._trigger(ev, "submited");
	                var curVm = vm.getCurVm();
	                if (vm.$$checkData(curVm)) {
	                    //var data = vm.getData();
	                    var data = vm.$$getData(curVm);
	                    vm._trigger(ev, "beforeSubmit");
	                    vm.ajaxData(data);
	                }
	            }
	            vm.doReset = function (ev) {
	                vm.setData();
	                vm._trigger(ev, "reseted");
	            }
	            
	            vm.getCurVm = function () {
	                var vmArr = [];
	                var tmpData = [];
	                var judgeStateList = []; //判断statelist
	                for (k in vm.$refs) {
	                    if (vm.$refs.hasOwnProperty(k)) {
	                        var comp = vm.$refs[k];
	                        //todo 如果不跟外部switch关联(即不在外部更新字段值,则直接去获取defaultdata内该字段的值) 
	                        if (_hasProperty(comp, "judgeName")) {
	                            judgeStateList.push({
	                                "judge": comp.judgeName,
	                                "state": comp.getValue() + ""
	                            });
	                        }
	                        if (_hasProperty(comp, "fJudge")) {
	                            tmpData.push({
	                                "vm": comp,
	                                "judge": comp.fJudge,
	                                "state": comp.fState + ""
	                            });
	                        } else {
	                            vmArr.push(comp);
	                        }
	                    }
	                }
	                $.each(tmpData, function (i, dataVal) {
	                    $.each(judgeStateList, function (i, judgeVal) {
	                        if (dataVal.judge === judgeVal.judge) {
	                            var stateList = dataVal.state.split(",");
	                            $.each(stateList, function (i, stateVal) {
	                                if (stateVal === judgeVal.state) {
	                                    vmArr.push(dataVal.vm);
	                                    return false;
	                                }
	                            });
	                        }
	                    });
	                });
	                return vmArr;
	            }
	
	            vm.$$getData = function (curVm) {
	                //todo 组件是否有judgeName,submitName,formName在初始化的时候判断组装
	                var data = {};
	                for (k in curVm) {
	                    if (curVm.hasOwnProperty(k)) {
	                        var comp = curVm[k];
	                        //submitName优先级高于formName
	                        if (_hasProperty(comp, "submitName") && typeof comp.getValue == "function") {
	                            data[comp.submitName] = comp.getValue();
	                        } else if (_hasProperty(comp, "formName") && typeof comp.getValue == "function") {
	                            data[comp.formName] = comp.getValue();
	                        }
	                    }
	                }
	                return data;
	            }
	
	            //对外方法
	            vm.getData = function () {
	                //todo 组件是否有judgeName,submitName,formName在初始化的时候判断组装
	                var data = {};
	                var tmpData = [];
	                var judgeStateList = []; //判断statelist
	                for (k in vm.$refs) {
	                    if (vm.$refs.hasOwnProperty(k)) {
	                        var comp = vm.$refs[k];
	                        //submitName优先级高于formName
	                        if (_hasProperty(comp, "submitName") && typeof comp.getValue == "function") {
	                            if (_hasProperty(comp, "fJudge")) {
	                                tmpData.push({
	                                    "key": comp.submitName,
	                                    "value": comp.getValue(),
	                                    "judge": comp.fJudge,
	                                    "state": comp.fState + ""
	                                });
	                            } else {
	                                tmpData.push({
	                                    "key": comp.submitName,
	                                    "value": comp.getValue()
	                                });
	                            }
	                        } else if (_hasProperty(comp, "formName") && typeof comp.getValue == "function") {
	                            if (_hasProperty(comp, "fJudge")) {
	                                tmpData.push({
	                                    "key": comp.formName,
	                                    "value": comp.getValue(),
	                                    "judge": comp.fJudge,
	                                    "state": comp.fState + ""
	                                });
	                            } else {
	                                tmpData.push({
	                                    "key": comp.formName,
	                                    "value": comp.getValue()
	                                });
	                            }
	                        }
	                    }
	                }
	                $.each(tmpData, function (i, dataVal) {
	                    if (dataVal.judge) {
	                        $.each(judgeStateList, function (i, judgeVal) {
	                            if (dataVal.judge === judgeVal.judge) {
	                                var stateList = dataVal.state.split(",");
	                                $.each(stateList, function(i, stateVal) {
	                                    if (stateVal === judgeVal.state) {
	                                        data[dataVal.key] = dataVal.value;
	                                        return false;
	                                    }
	                                });
	                            }
	                        });
	                    } else {
	                        data[dataVal.key] = dataVal.value;
	                    }
	                });
	                return data;
	            }
	            vm.setData = function () {
	                var data = vm.getDefaultData();
	                for (k in vm.$refs) {
	                    if (vm.$refs.hasOwnProperty(k)) {
	                        var comp = vm.$refs[k];
	                        if (_hasProperty(comp, "formName") && typeof comp.setValue == "function") {
	                            var formNameList = comp.formName.split(",");
	                            var dataList = formNameList.map(function(val, i) {
	                                var dataVal = data[val];
	                                return dataVal !== null && dataVal !== undefined ? data[val] : "";
	                            });
	                            comp.setValue.apply(vm, dataList);
	                            //comp.setValue(data[comp.formName] ? data[comp.formName] : "");
	                        }
	                    }
	                }
	                return vm;
	            }
	
	            vm.getDefaultData = function () {
	                return vm.$defaultData;
	            }
	            vm.setDefaultData = function (val) {
	                vm.$defaultData = val;
	                vm.defaultData = val;
	                return vm;
	            }
	
	            vm.submit = function () {
	                vm.doSubmit({});
	            }
	            vm.reset = function () {
	                vm.doReset({});
	            }
	            vm.reload = function () {
	                if (vm.loadUrl != "") {
	                    vm._ajax(vm.loadUrl, vm.loadParam, function (d) {
	                        if (d.response.state == "success") {
	                            //vm.setData(d.response.data);
	                        }
	                        vm._trigger(d, "loaded");
	                    });
	                }
	            }
	            vm.getElements = function () {
	                var arr = [];
	                for (k in vm.$refs) {
	                    var comp = vm.$refs[k];
	                    if (comp.name != undefined && typeof comp.setValue == "function") {
	                        arr.push(comp);
	                    }
	                }
	                return arr;
	            }
	        },
	        $ready: function (vm, elem) {
	            //$.each(vm.$refs, function (val, i) {
	            //    var childVm = avalon.vmodels[val];
	            //    childVm.labelSize != undefined && (childVm.labelSize = vm.labelSize);
	            //});
	            for (k in vm.$refs) {
	                var comp = vm.$refs[k];
	                if (comp.hasOwnProperty("labelSize") && typeof comp.getValue == "function") {
	                    comp.labelSize = vm.labelSize;
	                }
	            }
	            //if (vm.autoAjaxFirst) {
	            //    vm.getData();
	            //} else {
	            //    vm.setData();
	            //}
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            //vm.oriData = vm.getData();
	            //vm.reload();
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:form"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-container mc-animate\" ms-class-1=\"mc-loading: isInit\" ms-class-2=\"mc-animate-content-show: !isInit\" \n        ms-css-padding=\"cpadding\">\n\t<div class=\"mc-form-title\" ms-if=\"title!=''\">{{title}}</div>\r\n    <div ms-class-1=\"padding_left2: border===true\" ms-class-2=\"padding_right2: border===true\" ms-class-3=\"padding_bottom: border===true\">\r\n        {{content|html}}\r\n    </div>\n\t<!--<div class=\"form-group no_margin padding_top padding_bottom\" ms-class-1=\"padding_left2: border===true\" ms-class-2=\"padding_right2: border===true\" ms-class-3=\"td_form_background: border===true\" ms-class-4=\"td_form_border_top:border===true\" ms-if=\"buttons===true\">\n\t\t<a ms-if=\"btnPos=='right'\" class=\"btn btn-default btn-primary waves-effect waves-light no_margin\" ms-class-1=\"btn-sm: btnSize=='small'\" style=\"visibility:hidden;\">&nbsp;</a>\n\t\t<a class=\"btn btn-default btn-primary waves-effect waves-light no_margin\" href=\"javascript:void(0)\" ms-class-1=\"btn-sm: btnSize=='small'\" ms-class-2=\"pull-right: btnPos=='right'\" ms-class-3=\"margin_left: btnPos=='right'\" ms-click=\"doSubmit($event)\">&nbsp;提&nbsp;&nbsp;交&nbsp;</a>\n\t\t<a class=\"btn btn-default waves-effect waves-light no_margin\" href=\"javascript:void(0)\" ms-class-1=\"btn-sm: btnSize=='small'\" ms-class-2=\"pull-right: btnPos=='right'\" ms-class-3=\"margin_left: btnPos=='left'\" ms-click=\"doReset($event)\">&nbsp;重&nbsp;&nbsp;置&nbsp;</a>\n\t</div>-->\n\t<!--<div class=\"loading-mask\" ms-visible=\"isLoading\">\n\t\t<div class=\"loading-container\">\n\t\t\t<div class=\"loading-speeding-wheel\"></div><strong>数据加载中,请稍后…</strong>\n\t\t</div>\n\t</div>-->\n    <div class=\"btn-wrap hf\" ms-if=\"hasButtons\" ms-css-padding-left=\"labelSize\">\r\n        <mc:button on-click=\"doSubmit\" ms-attr-label=\"{{leftLabel}}\" type=\"success\" size=\"wide\"></mc:button>\r\n        <mc:button on-click=\"doReset\" ms-attr-label=\"{{rightLabel}}\" size=\"wide\"></mc:button>\r\n    </div>\r</div>\n"

/***/ },
/* 48 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(50), __webpack_require__(51)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:searchbox", {
	        //#region 外部参数
	        mcstyle: "", //风格
	        disabled: false, //是否禁用
	        placeholder: "请输入要搜索的数据",
	
	        //搜索类型配置项
	        $search_type_opt: {},
	        //#endregion
	
	        //#region 外部事件
	        /**doc
	         * @description {初始化接口}
	         * @param {vm} {组件的vm}
	         * @param {elem} {组件的elem}
	         */
	        onInit: _interface, //初始化接口
	        /**doc
	         * @description {当按钮点击时触发事件}
	         * @param {ev} {事件类型,js触发的话为空对象}
	         * @param {elem} {组件的elem}
	         */
	        onSearch: null, //当按钮点击时触发事件
	        onCleanSearch: null, //全部数据按钮点击时触发事件
	        //#endregion
	
	        //#region 外部接口
	        isDisable: _interface, //是否禁用
	        search: _interface, //搜索
	        cleanSearch: _interface, //清除搜索
	        getSearchData: _interface, //获取搜索数据data
	        setSearchData: _interface, //设置搜索数据data
	        //#endregion
	
	        //#region 内部属性
	        isInit: true,
	        extend: {},
	        $searchType: "", //搜索类型
	        $searchData: {}, //搜索data
	        $searchTypeVm: null, //搜索类型下拉选择框vm
	        $searchIptVm: null, //搜索内容输入框vm
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	        //#endregion
	
	        //#region 内部事件
	        changeSearchType: _interface, //搜索类型改变事件
	        getSearchTypeVM: _interface, //获取搜索类型下拉选择框的vm
	        getSearchIptVM: _interface, //获取搜索输入框的vm
	        doSearch: _interface, //搜索事件
	        doGetAll: _interface, //全部数据事件
	        //#endregion
	
	        //#region 内部接口
	        _trigger: _interface, //内部触发器
	        setSearchType: _interface, //设置搜索类型
	        //#endregion
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //#region 外部事件
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	            //#endregion
	
	            //#region 外部接口
	            /**doc
	             * @description {搜索接口,触发onSearch回调}
	             * @returns {} 
	             */
	            vm.search = function () {
	                vm._trigger({}, "search");
	            }
	            /**doc
	             * @description {不搜索显示全部数据}
	             * @returns {} 
	             */
	            vm.cleanSearch = function () {
	                vm.$searchTypeVm.setSelectByIndex(0); //搜索类型返回第0个
	                vm.$searchIptVm.setData(""); //清空搜索框数据
	                vm._trigger({}, "cleanSearch");
	            }
	            /**doc
	             * @description {获取待搜索的数据}
	             * @returns {object} {结构key:value} 
	             */
	            vm.getSearchData = function () {
	                vm.$searchData = {};
	                vm.$searchData[vm.$searchType] = vm.$searchIptVm.getValue();
	                return vm.$searchData;
	            }
	            /**doc
	             * @description {设置搜索数据}
	             * @param {newData} {object} {结构key:value,key对应搜索类型下拉选择框的可选项,value对应搜索输入框的值}
	             * @returns {} 
	             */
	            vm.setSearchData = function(newData) {
	                vm.$searchData = {};
	                vm.$searchData = newData;
	                //同步new到view,只赋值newData里的第一对键值
	                $.each(newData, function (key, val) {
	                    vm.setSearchType(key);
	                    vm.$searchIptVm.setValue(val);
	                    return false;
	                });
	            }
	            //#endregion
	
	            //#region 内部事件
	            vm.getSearchTypeVM = function(_vm,elem) {
	                vm.$searchType = _vm.getValue();
	                vm.$searchTypeVm = _vm;
	            }
	            vm.changeSearchType = function (ev, _vm) {
	                vm.$searchType = _vm.getValue();
	                vm.$searchIptVm.setData(""); //清空搜索框数据
	            }
	            vm.getSearchIptVM = function (_vm, elem) {
	                vm.$searchIptVm = _vm;
	            }
	            vm.doSearch = function(ev) {
	                vm.search();
	            }
	            vm.doGetAll = function (ev) {
	                vm.cleanSearch();
	            }
	            //#endregion
	
	            //#region 内部接口
	            vm._trigger = function (ev, type, _this) {
	                switch (type) {
	                    case "search":
	                        if (typeof vm.onSearch == "function") {
	                            vm.onSearch(ev, vm, _this);
	                        }
	                        break;
	                    case "cleanSearch":
	                        if (typeof vm.onCleanSearch == "function") {
	                            vm.onCleanSearch(ev, vm, _this);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            vm.setSearchType = function(val) {
	                vm.$searchTypeVm.setValue(val);
	            }
	            //#endregion
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:searchbox"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-searchbox-cotar hf\" ms-class=\"mc-loading: isInit\">\r\n    <mc:selectbox class=\"fp\" config=\"$search_type_opt\" label=\"搜索\" label-size=\"40\" on-init=\"getSearchTypeVM\" on-selected=\"changeSearchType\"></mc:selectbox>\r\n    <mc:text class=\"fp\" width=\"150\" on-init=\"getSearchIptVM\" ms-attr-placeholder=\"placeholder\"></mc:text>\r\n    <mc:button class=\"fp no-radius no-lr-border\" label=\"搜索\" on-click=\"doSearch\"></mc:button>\r\n    <mc:button class=\"fp no-left-radius\" label=\"全部数据\" on-click=\"doGetAll\"></mc:button>\r\n</div>"

/***/ },
/* 51 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(53), __webpack_require__(54)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    function setContentHeight(vm, elem) {
	        var vmHeight = $(elem).css("height").replace("px", "") >>> 0; //组件高度
	        $(elem).find(".mc-tabs-body").css("height", vmHeight - vm.otherOffset - vm.scrollContentOffset);
	    }
	    var _interface = function () { };
	    avalon.component("mc:tabs", {
	        //外部参数
	        tabsName: "",
	        tabConfig: [], //tab配置项 [label: 文字信息] [callback: 回调函数]
	        activeIndex: 0, //tab激活的index
	        disabled: false, //是否禁用
	
	        bindSize: "", //跟linearlayout布局大小层绑定的class名
	
	        otherOffset: 0, //其他外部偏移（跟linearlayout内部包括的relativelayout的padding有关,暂定待修改,relativelayout跟滚动结合）
	        scrollContentOffset: 31, //滚动内容偏移值（跟样式有关系）
	
	        //外部事件
	        onInit: _interface, //初始化接口
	        onClick: null, //当tab项点击时触发事件
	
	        //外部接口
	        isDisable: _interface, //是否禁用
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	        $tabsBody: null, //tabs body 的 jQuery 对象
	
	        //内部事件
	        clickTab: _interface, //按钮点击事件
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	        renderContent: _interface, //渲染tab内容
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            if (vmOpts.tabConfig != undefined) {
	                for (var i = 0; i < vmOpts.tabConfig.length; i++) {
	                    hooks["content" + i] = "";
	                }
	            }
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //内部事件
	            vm.clickTab = function (ev, tabIdx) {
	                if (!vm.disabled) {
	                    if (vm.activeIndex !== tabIdx) {
	                        vm.activeIndex = tabIdx;
	                        typeof vm.tabConfig[tabIdx].callback === "function" && vm.tabConfig[tabIdx].callback(ev, vm);
	                        vm._trigger(ev, "click");
	                        ev.stopPropagation();
	                    }
	                }
	            }
	
	            //内部接口
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "click":
	                        if (typeof vm.onClick == "function") {
	                            vm.onClick(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            vm.renderContent = function(tabIdx) {
	                return vm["content" + tabIdx];
	            }
	
	            //外部事件
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	        },
	        $ready: function (vm, elem) {
	            vm.$tabsBody = $(elem).find(".mc-tabs-body");
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	            console.log("tabs ini");
	            //setContentHeight(vm, elem);
	            //注册布局大小变动事件
	            McAvalon.$window.on("layout_resize", function (event, layoutSizeObj) {
	                console.log(layoutSizeObj);
	                if (layoutSizeObj["mc_li" + vm.bindSize]) {
	                    var vmHeight = layoutSizeObj["mc_li" + vm.bindSize].height;
	                    vm.$tabsBody.css("height", vmHeight - vm.otherOffset - vm.scrollContentOffset);
	                }
	            });
	            //触发布局初始化事件
	            McAvalon.$window.trigger("layout_ini");
	        }
	    });
	
	    var widget = avalon.components["mc:tabs"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-tabs-cotar\" ms-class-1=\"mc_li{{bindSize}}\" ms-class-2=\"mc-loading: isInit\">\r\n    <div class=\"mc-tabs-switch-wrap hf\">\r\n        <div class=\"mc-switch-item fp\" ms-repeat=\"tabConfig\" ms-class=\"active:$index === activeIndex\" ms-click=\"clickTab($event,$index)\">\r\n            <span>{{el.label}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"mc-tabs-body\" ms-repeat=\"tabConfig\" ms-class=\"active:$index === activeIndex\" ms-visible=\"$index === activeIndex\">\r\n        {{renderContent($index)|html}}\r\n    </div>\r\n</div>"

/***/ },
/* 54 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(_) {toCheckBoxData = function (data) {
	
	    avalon.each(data, function (i, item) {
	        item.checked = false;
	    })
	    return data;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(56), __webpack_require__(57)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:checkboxgourp", {
	        //表单相关
	        formName: "", //表单data的key,输入框name
	        judgeName: "", //有不同状态的form组件,用来判断的字段
	        readonly: false, //是否只读，只读就无法修改
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        //表单相关 end
	
	        //外部参数
	        label: "", //复选框后面文本
	        labelSize:0,
	        checked: false, //是否选中
	        disabled: false, //是否禁用,包括全部
	        muilt: false,// 默认多选
	        idName: "id",// 
	        textName: "text",// 
	        data: [],//数据源 [text,value,checked]
	        valid: "", //验证类型
	        must: false, //是否必填,也可为数字 代表必须的长度(会将覆盖length)
	        tip: "", //填写提示信息
	        //外部事件
	        onInit: _interface, //初始化接口
	        onChecked: null, //当复选框选中时触发事件
	        onCancel: null, //当复选框取消选中时触发事件
	        onChanged: null, //当复选框状态改变时触发事件
	
	        //外部接口
	        isChecked: _interface, //是否有选中的东西 
	        getCheckedData: _interface, //获取选中的数据 array 
	        //内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	        checkedList: [],
	        isValid: true, //是否正在验证
	        validInfo: "", //错误信息
	        //内部事件
	        clickCheckbox: _interface, //选项点击事件
	        validValue: _interface,
	        //内部接口
	        _trigger: _interface, //内部触发器
	        setCheckedState: _interface, //设置选中状态
	        //单向流
	        //  updateAllState: _interface, //单向流总函数
	        // updateCheckedState: _interface, //更新Checked
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            if (vmOpts.data) {
	                vmOpts.data = toCheckBoxData(vmOpts.data);
	            }
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象 
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //#region outer
	            vm.getValue = function () {
	                var r = vm.getCheckedData();
	                if (r && r.length) {
	                    if (vm.muilt) {
	                        //todo 格式
	                        return r.join(';');
	                    } else {
	                        return r[0][vm.idName];
	                    }
	                }
	
	            }
	
	            vm.setValue = function (val) {
	                //init
	                vm.validInfo = "";
	                //todo clr fn
	                vm.data.forEach(function (item, i) {
	                    item.checked = false;
	                })
	                //select
	                vm.setCheckedStateById(val,true);
	            }
	
	
	            //#endregion
	
	
	
	            //内部事件
	            vm.clickCheckbox = function (ev, item) {
	                if (!(vm.disabled || vm.readonly)) {
	                    if (vm.muilt) {
	                        //多选
	                        var state = !item.checked;
	                        //set state
	                        vm.setCheckedState(item, state);
	                        //trigger
	                        if (state) {
	                            //      vm._trigger(ev, "checked");
	                        } else {
	                            //    vm._trigger(ev, "cancel");
	                        }
	                        //   vm._trigger(ev, "changed");
	                    } else {
	                        //single 
	                        var state = item.checked;
	                        if (state) {
	                            //已经选中 没操作的
	                        } else {
	                            //单选逻辑 
	                            avalon.each(vm.data, function (k, _item) {
	                                _item[vm.idName] === item[vm.idName]
	                                //self
	                                ? vm.setCheckedState(item, true)
	                                //other
	                                : vm.setCheckedState(_item, false);
	                            })
	                        }
	                    }
	                    ev.stopPropagation();
	                }
	            }
	            vm.setCheckedState = function (item, state) {
	                item.checked = state;
	                vm._trigger({}, "changed");
	                // vm.updateAllState();
	            };
	            vm.setCheckedStateById = function (id, state) {
	                var r = _.find(vm.data, function (item, i) {
	                    return item[vm.idName] === id
	                })
	                if (r)
	                    vm.setCheckedState(r, state)
	            };
	            //内部接口
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "checked":
	                        if (typeof vm.onChecked == "function") {
	                            vm.onChecked(ev, vm);
	                        }
	                        break;
	                    case "cancel":
	                        if (typeof vm.onCancel == "function") {
	                            vm.onCancel(ev, vm);
	                        }
	                        break;
	                    case "changed":
	                        if (typeof vm.onChanged == "function") {
	                            vm.onChanged(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            vm.validValue = function (ev) {
	                var value = vm.getValue();
	                
	                vm.validInfo = McAvalon.validata(value, vm.valid);
	                vm.isValid = vm.validInfo === "" ? true : false;
	                if (vm.isValid) {
	                    //fix 0 
	                    if (vm.must === true && value!==0 && (!value) ) {
	                        vm.isValid = false; vm.validInfo = "该字段为必填字段";
	                    }
	                }
	            }
	            //单向流
	            //vm.updateAllState = function () {
	            //    vm.updateCheckedState();
	            //}
	            ////更新选中
	            //vm.updateCheckedState = function () {
	            //    setTimeout(function () {
	            //        vm.checkedList = [];
	            //        avalon.each(vm.data, function (i, item) {
	            //            //第一次需要加false..
	            //            item.checked = item.checked || false
	            //            vm.checkedList[i] = item.checked;
	            //        });
	            //    }, 0)
	            //};
	            //外部接口 
	            //是否有选中的
	            vm.isChecked = function () {
	                //every unchecked
	                var r = vm.data.every(function (item) {
	                    return !item.checked;
	                });
	                return !r;
	            };
	            //获取选中vals
	            vm.getCheckedData = function () {
	                var r = vm.data.$model.filter(function (item) {
	                    return   item.checked
	                });
	                return r;
	            };
	
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	            //传入数据需要更新..
	            //vm.updateCheckedState();
	        }
	    });
	
	    var widget = avalon.components["mc:checkboxgourp"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-checkboxgroup-cotar mc-form-group\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n    <div class=\"check-list\">\r\n        <div class=\"form-group form-control mc-checkbox-cotar\"\r\n             ms-repeat-checkbox=\"data\"\r\n             ms-class=\"disabled: disabled||readonly\"\r\n             ms-click=\"clickCheckbox($event,checkbox,checkbox.value)\">\r\n            <i class=\"mc-checkbox\" ms-class-1=\"mc-active: checkbox.checked\"\r\n               ms-class-2=\"single-mode: !muilt\"\r\n               ms-class-3=\"disabled: disabled||readonly\"></i>\r\n            <span class=\"mc-checkbox-label\">{{checkbox.text}}</span>\r\n        </div>\r\n    </div>\r\n    <span class=\"mc-text-valid-info ftp\" ms-if=\"!isValid && validInfo != ''\">{{validInfo}}</span>\r\n    <div class=\"mc-text-field-tip\" ms-css-padding-left=\"labelSize\" ms-if=\"tip\">{{tip}}</div>\r\n</div>"

/***/ },
/* 57 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(_) {
	//todata
	toListAddData = function (data, cullOrigin) {
	    var r = [];
	    avalon.each(data, function (i, item) {
	        item.selected = false;
	        item.checked = item.checked || false;
	        if (cullOrigin) {
	            if (!item.checked) {
	                r.push(item);
	            }
	        } else {
	            r.push(item);
	        }
	
	    });
	
	    return r;
	};
	//todo 搜索只有indexof,全拼音后台没给 这也没做
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(59), __webpack_require__(60), __webpack_require__(10), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:listdataadd", {
	        //外部参数
	        data: [],//数据源 [text,id,checked,key] todo-->inside
	        dataConfirmConfig: null,//提交参数
	        ajax: false,//内置ajax开罐
	        idName: "id",//id name
	        textName: "text",//显示 name
	        keyName: "key", //key name 
	        cullOrigin: false,
	        //外部事件
	        onInit: _interface, //初始化接口
	        onDataChange: _interface, //数据改变
	        //外部接口 
	        setData: _interface, //设置数据源
	        //内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号
	        allLen: { left: 0, right: 0 },//全部 
	        addedList: [],//本次操作记录 ,todo
	        deledList: [],
	        seletedLen: { left: 0, right: 0 }, //在选中
	        selectedAll: { left: false, right: false },
	        originData: [],
	        diffData: [],
	        leftObj: {},//左右列表
	        rightObj: {},//
	        q: { left: "", right: "" },//搜索参数
	        r: null,//最终输出结果存储
	        $skipArray: ['data', 'r', 'originData', 'diffData'],
	        //内部事件 
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	        genGroup: _interface, //生成所有组 
	        selectItem: _interface, //先选中
	        selectAll: _interface, //全选
	        addItem: _interface, //添加选中到左右  
	        confirm: _interface, //提交 
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            if (vmOpts.data) {
	                vmOpts.data = toListAddData(vmOpts.data, vmOpts.cullOrigin);
	            }
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象 
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //内部事件
	
	
	            //内部接口
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "data":
	                        if (typeof vm.onDataChange == "function") {
	                            vm.onDataChange(vm.r, vm.originData, vm.diffData);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            var genGroup = function (str) {
	                var str = 'left';
	                var flag = false;
	
	                //生成组
	                var r = {};
	                vm.allLen[str] = vm.seletedLen[str] = 0;
	                var foo = true;
	                vm.data.forEach(function (item, i) {
	                    //对应组 
	                    if (item.checked === flag) {
	                        //q,如果有,去掉不符合
	                        var qStr = vm.q[str].trim();
	                        if (qStr && item[vm.textName].indexOf(qStr) < 0) {
	                            return false;
	                        }
	                        var key = item[vm.keyName];
	                        r[key] = r[key] || [];
	                        r[key].push(item);
	                        //其他更新
	                        //all
	                        vm.allLen[str] += 1;
	                        //selected
	                        if (item.selected) {
	                            vm.seletedLen[str] += 1;
	                        } else {
	                            foo = false;
	                        }
	                    }
	                });
	                if (foo && vm.allLen[str] > 0) {
	                    vm.selectedAll[str] = true;
	                } else {
	                    vm.selectedAll[str] = false;
	                }
	
	                vm.leftObj = r;
	
	                var str = 'right';
	                var flag = true;
	                //生成组
	                var r = {};
	                var foo = true;
	                vm.allLen[str] = vm.seletedLen[str] = 0;
	                vm.data.forEach(function (item, i) {
	                    //对应组 
	                    if (item.checked === flag) {
	                        //q,如果有,去掉不符合
	                        var qStr = vm.q[str].trim();
	                        if (qStr && item[vm.textName].indexOf(qStr) < 0) {
	                            return false;
	                        }
	                        var key = item[vm.keyName];
	                        r[key] = r[key] || [];
	                        r[key].push(item);
	                        //其他更新
	                        //all
	                        vm.allLen[str] += 1;
	                        //selected
	                        if (item.selected) {
	                            vm.seletedLen[str] += 1;
	                        } else {
	                            foo = false;
	                        }
	                    }
	                });
	                if (foo && vm.allLen[str] > 0) {
	                    vm.selectedAll[str] = true;
	                } else {
	                    vm.selectedAll[str] = false;
	                }
	                vm.rightObj = r;
	            };
	            vm.genGroup = _.throttle(genGroup, 200);
	
	
	            vm.selectItem = function (id) {
	                var r = vm.data.filter(function (item, i) {
	                    return item[vm.idName] === id;
	                });
	                //更新生成组
	                if (r[0]) {
	                    r[0].selected = !r[0].selected;
	                    //改全选
	                    vm.genGroup();
	                }
	            }
	            vm.selectAll = function (str) {
	                var flag;
	                if (str === 'left') {
	                    flag = false;
	                } else {
	                    flag = true;
	                }
	                vm.selectedAll[str] = !vm.selectedAll[str];
	                var selected = vm.selectedAll[str];
	                avalon.each(vm.data, function (i, item) {
	                    ///对应左右列表
	                    if (item.checked === flag) {
	                        item.selected = selected;
	                    }
	                })
	
	                //更新生成组
	                vm.genGroup();
	
	            }
	            vm.addItem = function (flag, str) {
	                //生成组
	                if (vm.seletedLen[str] < 1) return false;
	                vm.data
	                    .filter(function (item) {
	                        return item.selected && (item.checked === flag)
	
	                    })
	                .forEach(function (item) {
	                    item.selected = false;
	                    item.checked = !flag;
	                    //addedlist
	                    //if (flag) {
	                    //    //从右到左,取消
	                    //    vm.addedList.remove();
	                    //    vm.deledList.push();
	                    //} else {
	                    //    //从左到右,增加
	                    //}
	                });
	                //更新生成组
	                vm.genGroup();
	            }
	            vm.confirm = function () {
	                //ajax 
	                var def = $.Deferred();
	                if (vm.ajax) {
	                    var config = vm.dataConfirmConfig;
	                    var param = $.extend({}, config.data.$model);
	                    $.ajax({
	                        url: config.url,
	                        type: "POST",
	                        async: true,
	                        data: param,
	                        complete: function (result) {
	                            console.log(result);
	                            def.resolve(result);
	                        }
	                    });
	                } else {
	
	                    var r = [[], []];
	                    avalon.each(vm.data, function (i, item) {
	                        item.checked
	                        ? r[1].push(item)
	                        : r[0].push(item)
	                    });
	                    def.resolve(r);
	                }
	                //获取data更新,[ [],[] ]
	                def.then(function (r) {
	                    vm.r = r;
	                    //diff
	                    //直接diff[0]处,2次diff就可以了 
	                    var diff = [[], []];
	                    var oriLeft = [];
	                    avalon.each(vm.originData, function (i, item) {
	                        item.checked
	                        ? 0
	                        : oriLeft.push(item);
	                    });
	                    var oriLeftPure = oriLeft.map(function (item) {
	                        return item[vm.idName];
	                    });
	                    var rLeftPure = r[0].map(function (item) {
	                        return item[vm.idName];
	                    });
	                    var tl = _.difference(oriLeftPure, rLeftPure);
	                    var tr = _.difference(rLeftPure, oriLeftPure);
	                    tl.forEach(function (t) {
	                        var r = _.find(vm.originData, function (oriItem) {
	                            return oriItem[vm.idName] === t
	                        })
	                        r ? diff[1].push(r)
	                        : 0
	                    })
	                    tr.forEach(function (t) {
	                        var r = _.find(vm.originData, function (oriItem) {
	                            return oriItem[vm.idName] === t
	                        })
	                        r ? diff[0].push(r)
	                        : 0
	                    })
	                    //不能减少的模式
	                    if (vm.cullOrigin) diff[0] = [];
	                    vm.diffData = diff;
	                    vm._trigger({}, 'data');
	                })
	            }
	            //外部事件 
	            //外部接口 
	            vm.setData = function (data) {
	                vm.originData = data.map(function (item) {
	                    return _.clone(item);
	                })
	                vm.data = toListAddData(data, vm.cullOrigin);
	                vm.genGroup();
	            }
	
	            //观测方法
	            //注意:ms-duplex与ms-input不能用在同一元素上。用watch..
	            //todo 拼音,要有必须后端.分词算法库太大
	            vm.$watch('q.*', function (newV, oldV) {
	                //输入就清完selected 
	                avalon.each(vm.data, function (i, item) {
	                    item.selected = false;
	                });
	                vm.genGroup();
	            });
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	            //传入数据需要更新.. 
	            vm.genGroup();
	        }
	    });
	
	    var widget = avalon.components["mc:listdataadd"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-listdata-add-cotar\">\r\n    <div class=\"left-list group-list\">\r\n        <div class=\"all-num\">\r\n            待添加 {{allLen.left}}\r\n        </div>\r\n        <input type=\"text\" class=\"ipt\" placeholder=\"输入关键字\" ms-duplex-string=\"q.left\">\r\n        <div class=\"group-box\">\r\n            <div class=\"group-item\" ms-repeat=\"leftObj\">\r\n                <div class=\"gourp-title\">\r\n                    {{$key}} <div class=\"rfp\"> {{$val.length}}项 </div>\r\n                </div>\r\n                <div class=\"item\" ms-repeat-item=\"$val\"\r\n                     ms-class=\"active: item.selected\"\r\n                     ms-click=\"selectItem(item[idName])\">\r\n                    {{item[textName]}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- footer -->\r\n        <div class=\"gourp-footer\">\r\n            <div class=\"form-group mc-checkbox-cotar\"\r\n                 ms-click=\"selectAll('left')\">\r\n                <i class=\"mc-checkbox\" ms-class-1=\"mc-active: selectedAll.left\"></i>\r\n                <span class=\"mc-checkbox-label\">全选</span>\r\n            </div> <div class=\"rfp\">选中{{seletedLen.left}}项</div>\r\n        </div>\r\n    </div>\r\n    <!-- 操作按钮 -->\r\n    <div class=\"op-list \"> \r\n        <div class=\"vm-cotar\" >\r\n            <div class=\"btn add\" ms-click=\"addItem(false,'left')\" ms-class=\"disabled: seletedLen.left<1\">\r\n                ＞＞添加＞＞\r\n            </div>\r\n            <div class=\"btn add\" ms-click=\"addItem(true,'right')\" ms-class=\"disabled: seletedLen.right<1\">\r\n                ＜＜取消＜＜\r\n            </div>\r\n        </div> \r\n    </div>\r\n    <div class=\"right-list group-list\">\r\n        <div class=\"all-num\">\r\n            已添加 {{allLen.right}}\r\n        </div>\r\n        <input type=\"text\" class=\"ipt\" placeholder=\"输入关键字\" ms-duplex-string=\"q.right\">\r\n        <div class=\"group-box\">\r\n            <div class=\"group-item\" ms-repeat=\"rightObj\">\r\n                <div class=\"gourp-title\">\r\n                    {{$key}} <div class=\"rfp\"> {{$val.length}}项 </div>\r\n                </div>\r\n                <div class=\"item\" ms-repeat-item=\"$val\"\r\n                     ms-class=\"active: item.selected\"\r\n                     ms-click=\"selectItem(item[idName])\">\r\n                    {{item[textName]}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- footer -->\r\n        <div class=\"gourp-footer\">\r\n            <div class=\"form-group mc-checkbox-cotar\"\r\n                 ms-click=\"selectAll('right')\">\r\n                <i class=\"mc-checkbox\" ms-class-1=\"mc-active: selectedAll.right\"></i>\r\n                <span class=\"mc-checkbox-label\">全选</span>\r\n            </div> <div class=\"rfp\">选中{{seletedLen.right}}项</div> \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"the-op-footer\">\r\n        <!--\r\n        本次操作:添加{{addedList.size()}}部门,取消{{deledList.length}} 部门\r\n        -->\r\n\r\n        <div class=\"hor-list  \"> \r\n            <mc:button class=\"item\" label=\"保存\" mcstyle=\"\" on-click=\"confirm\"></mc:button>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ },
/* 60 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(62), __webpack_require__(63)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:droplist", {
	        //外部参数
	        active: false, //是否处于展开状态
	        data: [], //droplist数据 [label: 文字信息] [state: 标志颜色[1绿色2黄色3红色]]
	        width: 100, //默认展开后宽度
	        mcstyle: "", //外挂样式
	        label: "", //展开按钮文字
	        disabled: false, //是否禁用
	
	        //外部事件
	        onInit: _interface, //初始化接口
	        onClick: null, //当tab项点击时触发事件
	
	        //外部接口
	        isDisable: _interface, //是否禁用
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	
	        //内部事件
	        clickDrop: _interface, //展开按钮点击事件
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	
	        $template: template,
	        //$replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //内部事件
	            vm.clickDrop = function (ev) {
	                if (!vm.disabled) {
	                    vm.active = !vm.active;
	                    vm._trigger(ev, "click");
	                    ev.stopPropagation();
	                }
	            }
	
	            //内部接口
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "click":
	                        if (typeof vm.onClick == "function") {
	                            vm.onClick(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	
	            //外部事件
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:droplist"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-droplist-cotar\" ms-class-1=\"mc-active: active\" ms-class-2=\"{{mcstyle}}\" ms-css-width=\"width\">\r\n    <div class=\"mc-droplist-btn\" ms-click=\"clickDrop($event)\"><span>{{label}}</span></div>\r\n    <div class=\"mc-droplist-body\">\r\n        <div class=\"mc-droplist-item\" ms-repeat=\"data\">{{el.label}}</div>\r\n        <i ms-class-1=\"green: el.state === 1\" ms-class-2=\"yellow: el.state === 2\" ms-class-3=\"red: el.state === 3\"></i>\r\n    </div>\r\n</div>"

/***/ },
/* 63 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(65), __webpack_require__(66)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:datapager", {
	        //外部参数
	        autoAjaxFirst: true, //是否自动发起第一次请求
	        active: false, //是否处于展开状态
	        allCount: 0, //总条数
	        width: 100, //默认展开后宽度
	        mcstyle: 0, //外挂样式
	        label: "", //展开按钮文字
	        curPage: 1,//当前页数
	        jumpPageIndex: 1,//跳转的pageIndex
	        pageSize: 0, //每页条数
	        disabled: false, //是否禁用
	
	        $computed: {
	            //总页数
	            allPageCount: {
	                set: _interface,
	                get: function () {
	                    return Math.ceil(this.allCount / this.pageSize);
	                }
	            },
	            //数据开始位置
	            dataStartIndex: {
	                set: _interface,
	                get: function () {
	                    return this.pageSize * (this.curPage - 1) + 1;
	                }
	            },
	            //数据结束位置
	            dataEndIndex: {
	                set: _interface,
	                get: function () {
	                    //判断是否为最后一页
	                    if (this.curPage === this.allPageCount) {
	                        return this.allCount;
	                    } else {
	                        return this.pageSize * this.curPage;
	                    }
	                }
	            }
	        },
	
	        $page_size_opt: { //每页显示条数下拉选择框配置对象
	            data: [
	                {
	                    text: "20", value: 20
	                },
	                {
	                    text: "30", value: 30
	                },
	                {
	                    text: "50", value: 50
	                }
	            ]
	        },
	
	        $ajaxTmpData: null, //ajax获取到的临时数据
	
	        //ajax相关
	        $ajaxConfig: {
	            url: "",
	            data: {},
	            dataType: "json"
	        },
	
	        //外部事件
	        onInit: _interface, //初始化接口
	        onClick: null, //当tab项点击时触发事件
	        onDataChange: null, //当请求到新数据时触发事件
	        onPageChange: null, //当页码改变时触发事件
	
	        //外部接口
	        isDisable: _interface, //是否禁用
	        refreshPage: _interface, //刷新当前页数据
	        addCondition: _interface, //添加请求条件(data),extend实现
	        delCondition: _interface, //删除请求条件(data),需要传入要删除的条件的key
	        changeCondition: _interface, //改变请求条件(data),只保留传入的条件以及pageSize和pageIndex
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        $pageSelectVm: null, //下拉选择框对象vm
	        $pageJumpVm: null, //获取输入页码的ipt的vm
	        $ajaxData: null, //ajax获得的数据
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	
	        //内部事件
	        getSelectPageVM: _interface, //获取分页下拉选择框vm
	        clickDrop: _interface, //下拉选择框点击事件
	        getPageJumpVM: _interface, //获取输入页码的ipt的vm
	        changePageSize: _interface, //分页大小改变事件
	
	        getAjaxData: _interface, //获取上次ajax返回的数据
	        setAjaxData: _interface, //设置ajax返回的数据
	
	        getAllCount: _interface, //获取allCount
	        setAllCount: _interface, //设置allCount
	
	        ajaxData: _interface, //获取数据
	        turnPage: _interface, //指定页
	        nextPage: _interface, //后一页
	        prevPage: _interface, //前一页
	        jumpPage: _interface, //跳转页
	        firstPage: _interface, //首页
	        lastPage: _interface, //尾页  
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	
	        $template: template,
	        //$replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            vmOpts.$ajaxConfig && (vmOpts.$ajaxConfig = $.extend(hooks.$ajaxConfig, vmOpts.$ajaxConfig));
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //var datapagerVM = avalon.define({
	            //    $id: "datapager",
	            //    $pageSelectVm: null,
	            //    $page_size_opt: vm.$page_size_opt,
	            //    getPageSelectVM: function(vm,elem) {
	            //        datapagerVM.$pageSelectVm = vm;
	            //    }
	            //});
	            //内部事件
	            vm.clickDrop = function (ev) {
	                if (!vm.disabled) {
	                    vm.active = !vm.active;
	                    vm._trigger(ev, "click");
	                    ev.stopPropagation();
	                }
	            }
	            vm.getSelectPageVM = function (_vm, elem) {
	                vm.$pageSelectVm = _vm;
	                vm.pageSize = _vm.getValue();
	            }
	            vm.getPageJumpVM = function (_vm, elem) {
	                vm.$pageJumpVm = _vm;
	            }
	            vm.changePageSize = function (ev, _vm) {
	                //bug 网速慢时不触发请求
	                vm.pageSize = _vm.getValue();
	            }
	            //跳转分页
	            vm.jumpPage = function (ev) {
	                var jumpPage = vm.$pageJumpVm.getValue() >> 0;
	                if (jumpPage > 0 && jumpPage <= vm.allPageCount) {
	                    vm._changeCurPage(ev, jumpPage);
	                }
	            }
	            vm.nextPage = function (ev) {
	                if (vm.curPage < vm.allPageCount) {
	                    vm._changeCurPage(ev, vm.curPage + 1);
	                }
	            }
	            vm.prevPage = function (ev) {
	                if (vm.curPage > 1) {
	                    vm._changeCurPage(ev, vm.curPage - 1);
	                }
	            }
	            vm.firstPage = function (ev) {
	                vm._changeCurPage(ev, 1);
	            }
	            vm.lastPage = function (ev, p) {
	                vm._changeCurPage(ev, vm.allPageCount);
	            }
	            //ajax 
	            vm.ajaxData = function () {
	                var config = vm.$ajaxConfig;
	                if (config.url !== "") {
	                    var param = $.extend(config.data, { "pageIndex": vm.curPage, "pageSize": vm.pageSize });
	                    Mc.Ajax({
	                        url: config.url,
	                        data: param,
	                        success: function (response) {
	                            vm.setAjaxData(response);
	                            vm.$pageJumpVm.setValue(vm.curPage); //设置跳转页码输入框页码
	                            vm._trigger({}, "data");
	                        }
	                    });
	                }
	            }
	            vm.getAjaxData = function () {
	                return vm.$ajaxData;
	            }
	            vm.setAjaxData = function (val) {
	                vm.$ajaxData = val;
	            }
	
	            //获取allCount
	            vm.getAllCount = function () {
	                return vm.allCount;
	            }
	            //设置allCount
	            vm.setAllCount = function (val) {
	                var newAllCount = val >> 0;
	                if (newAllCount > 0) {
	                    vm.allCount = newAllCount;
	                }
	            }
	
	            vm.refreshPage = function() {
	                vm.ajaxData();
	            }
	            vm.addCondition = function (newData) {
	                vm.$ajaxConfig.data = $.extend(vm.$ajaxConfig.data, newData);
	            }
	            vm.delCondition = function (keyArray) {
	                $.each(keyArray, function (i, val) {
	                    console.log(val);
	                    delete vm.$ajaxConfig.data[val];
	                });
	            }
	            vm.changeCondition = function (newData) {
	                vm.$ajaxConfig.data = newData;
	            }
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	
	            //#region 内部接口
	            /**
	             * 内部事件触发器
	             * @param {} ev 
	             * @param {} type 
	             * @returns {} 
	             */
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "data":
	                        if (typeof vm.onDataChange == "function") {
	                            vm.onDataChange(vm);
	                        }
	                        break;
	                    case "size":
	                        // if (typeof vm.onPageSizeChange == "function") {
	                        //     vm.onPageSizeChange(ev, vm.pageSize);
	                        //  }
	                        break;
	                    case "page":
	                        if (typeof vm.onPageChange == "function") {
	                            vm.onPageChange(ev, vm.curPage);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            //bug 尽量不要使用avalon的watch来监听触发事件,不靠谱...还是手动触发靠谱
	            /**
	             * 改变分页大小
	             * @returns {} 
	             */
	            vm._changePageSize = function() {
	                if (vm.curPage !== 1) {
	                    vm.curPage = 1;
	                }
	                vm._changeCurPage({}, 1);
	            }
	            /**
	             * 改变当前页
	             * @param {} ev 
	             * @param {} p 
	             * @returns {} 
	             */
	            vm._changeCurPage = function (ev, p) {
	                if (vm.curPage !== p) {
	                    vm.curPage = p;
	                    vm.ajaxData();
	                    vm._trigger(ev, "page");
	                }
	            }
	            //#endregion
	
	            ////分页大小改变,跳一页,再ajax
	            //vm.$watch("pageSize", function (newVal, oldVal) {
	            //    vm.curPage = 1;
	            //    //  vm._trigger({}, "size");
	            //});
	            ////页码改变
	            //vm.$watch("curPage", function (newVal, oldVal) {
	            //    vm.ajaxData();
	            //    vm._trigger({ newVal: newVal, oldVal: oldVal }, "page");
	            //});
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            if (vm.autoAjaxFirst) {
	                vm.ajaxData(); //请求数据
	            }
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:datapager"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-datapager-cotar hf\">\r\n    <div class=\"item\">显示行数</div>\r\n    <mc:selectbox class=\"bar-group item\" config=\"$page_size_opt\" width=\"60\" arrow-down=\"false\" on-init=\"getSelectPageVM\" on-selected=\"changePageSize\"></mc:selectbox>\r\n    <div class=\"item\"><em>{{dataStartIndex}}-{{dataEndIndex}}条/</em><span>共{{allCount}}条</span></div>\r\n    <div class=\"bar-group item hf\">\r\n        <mc:button class=\"bar-item bl\" label=\"首页\" on-click=\"firstPage\"></mc:button>\r\n        <mc:button class=\"bar-item bm\" label=\"上一页\" on-click=\"prevPage\"></mc:button>\r\n        <mc:button class=\"bar-item bm\" label=\"下一页\" on-click=\"nextPage\"></mc:button>\r\n        <mc:button class=\"bar-item br\" label=\"尾页\" on-click=\"lastPage\"></mc:button>\r\n    </div>\r\n    <div class=\"bar-group item hf\">\r\n        <mc:text class=\"fp bar-item bl\" label=\"前往\" label-size=\"40\" width=\"40\" on-init=\"getPageJumpVM\"></mc:text>\r\n        <mc:button class=\"fp bar-item br\" label=\"跳转\" on-click=\"jumpPage\"></mc:button>\r\n    </div>\r\n    <div class=\"item\"><span>共{{allPageCount}}页</span></div>\r\n</div>\r\n"

/***/ },
/* 66 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(68), __webpack_require__(69)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:datepicker", {
	        //#region 外部参数
	        value: "",
	        width: 200, //宽度
	        mcstyle: "", //风格
	        disabled: false, //是否禁用
	        placeholder: "",
	        readonly: false,
	        tip:"",
	        //表单相关
	        formName: "", //表单data的key,输入框name
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	        //#endregion
	
	        //#region 外部事件
	        onInit: _interface, //初始化接口
	        //#endregion
	
	        //#region 外部接口
	        isDisable: _interface, //是否禁用
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        //#endregion
	
	        //#region 内部属性
	        isInit: true,
	        extend: {},
	        $datepicker_ipt: "",
	        $datepickerIptOpt: $({}),
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	        //#endregion
	
	        //#region 内部事件
	        doDatepicker: _interface,
	        //#endregion
	
	        //#region 内部接口
	        _trigger: _interface, //内部触发器
	        //#endregion
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            hooks.$datepicker_ipt = McAvalon.util.genId("datepickIpt");
	            hooks.$datepicker = McAvalon.util.genId("datepick");
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //#region 外部事件
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	            //#endregion
	
	            //#region 外部接口
	            vm.show = function () {
	                vm.$datepickerIptOpt.trigger("focus");
	            }
	            //#endregion
	
	            //#region 内部事件
	            vm.doDatepicker = function(ev) {
	                vm.show();
	            }
	            //#endregion
	
	            //#region 内部接口
	            vm._trigger = function (ev, type, _this) {
	                switch (type) {
	                    case "confirm":
	                        if (typeof vm.onConfirm == "function") {
	                            vm.onConfirm(ev, vm, _this);
	                        }
	                        break;
	                    case "cancel":
	                        if (typeof vm.onCancel == "function") {
	                            vm.onCancel(ev, vm, _this);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            vm.iniDatepicker = function () {
	                vm.readonly || vm.$datepickerIptOpt.date_input();
	            }
	            vm.getValue = function () {
	                return (new Date(vm.value).getTime() / 1000) >> 0;
	            }
	            vm.setValue = function (val, isReadonly) {
	                //isReadonly 传值的时候才赋值判断
	                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
	                vm.value = new Date(val * 1000).format("yyyy-M-d");
	            }
	            //#endregion
	        },
	        $ready: function (vm, elem) {
	            vm.$datepickerIptOpt = $(elem).find("#" + vm.$datepicker_ipt);
	            vm.iniDatepicker();
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:datepicker"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-group mc-datepicker-cotar hf\" ms-class-1=\"mc-loading: isInit\" ms-class-2=\"mc-readonly: readonly\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n    <div class=\"ftp mc-datepicker-wrap\">\r\n        <div class=\"mc-datepicker-content ftp\" ms-click=\"doDatepicker\" ms-attr-name=\"formName\" ms-css-width=\"width\">{{value}}</div>\r\n        <input ms-attr-id=\"$datepicker_ipt\" class=\"form-control mc-datepicker-ipt\" type=\"text\" ms-attr-placeholder=\"placeholder\"\r\n               ms-attr-name=\"formName\" ms-duplex=\"value\" />\r\n        <div class=\"item mc-text-field-tip\" ms-css-width=\"width\">\r\n            {{tip}}\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ },
/* 69 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(71), __webpack_require__(72)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:selectbox", {
	        //外部参数
	        label: "", //提示文字
	        labelSize: 0,
	        data: [], //下拉数据源
	        arrowDown: true, //默认往下展开
	        width: 250, //下拉选择框宽度,默认250px
	        select: 0, //默认选中项
	        active: false, //是否展开
	        disabled: false, //是否禁用
	        readonly: false, //是否只读
	
	        //外部事件
	        onInit: _interface, //初始化接口
	        onClick: null, //当按钮点击时触发事件
	        onSelected: null, //当选择时触发事件
	
	        //外部接口
	        isDisable: _interface, //是否禁用
	        isOpen: _interface,
	        setState: _interface,
	        getSelect: _interface, //获取选择项
	        setSelectByIndex: _interface, //通过index设置选中项
	        setSelectByTxt: _interface,
	        setSelectByValue: _interface,
	        setData: _interface,
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        formName: "", //表单data的key,输入框name
	        judgeName: "", //有不同状态的form组件,用来判断的字段
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	
	        //内部事件
	        clickSelectbox: _interface, //下拉选择框点击事件
	        clickLi: _interface, //选择项点击事件
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            if (typeof vmOpts.data === "function") {
	                vmOpts.data = vmOpts.data();
	            }
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //内部事件
	            vm.clickSelectbox = function (ev) {
	                if (!vm.disabled && !vm.readonly) {
	                    //如果有其他下拉选择框,且处于打开状态则关闭
	                    if (McAvalon.global.selectboxVm) {
	                        avalon.each(McAvalon.global.selectboxVm, function (i, val) {
	                            val !== vm && val.isOpen() && val.setState(false);
	                        });
	                    }
	                    vm.active = !vm.active;
	                    vm._trigger(ev, "click");
	                    ev.stopPropagation();
	                }
	            }
	            vm.clickLi = function (ev, idx) {
	                vm.select = idx;
	                vm.active = false;
	                vm._trigger(ev, "selected");
	                ev.stopPropagation();
	            }
	
	            //内部接口
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "click":
	                        if (typeof vm.onClick == "function") {
	                            vm.onClick(ev, vm);
	                        }
	                        break;
	                    case "selected":
	                        if (typeof vm.onSelected == "function") {
	                            vm.onSelected(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	
	            //外部接口
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	            vm.isOpen = function () {
	                return vm.active;
	            }
	            vm.setState = function (state) {
	                state ? vm.active = true : vm.active = false;
	            }
	            vm.getSelect = function () {
	                return vm.data[vm.select] && vm.data[vm.select].$model;
	            }
	            vm.getValue = function () {
	                return vm.data[vm.select] && vm.data[vm.select].$model.value;
	            }
	            vm.setValue = function (val, isReadonly) {
	                //isReadonly 传值的时候才赋值判断
	                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
	                var oriData = vm.data.$model;
	                if (oriData.length) {
	                    var target = null;
	                    for (var i = 0; i < oriData.length; i++) {
	                        if (oriData[i].value == val) {
	                            target = i;
	                        }
	                    }
	                    if (target != null) {
	                        vm.select = target;
	                    }
	                }
	            }
	            vm.setData = function (data) {
	                vm.data = data;
	            }
	            vm.setSelectByIndex = function (idx) {
	                vm.select = idx;
	                return vm;
	            }
	            vm.setSelectByTxt = function (txt) {
	                avalon.each(vm.data, function (i, val) {
	                    console.log(i + "||" + val);
	                    if (val.text == txt) {
	                        vm.select = i;
	                        return false;
	                    }
	                });
	                return vm;
	            }
	            vm.setSelectByValue = function (value) {
	                avalon.each(vm.data, function (i, val) {
	                    console.log(i + "||" + val);
	                    if (val.value == value) {
	                        vm.select = i;
	                        return false;
	                    }
	                });
	                return vm;
	            }
	        },
	        $ready: function (vm, elem) {
	            McAvalon.global.selectboxVm || (McAvalon.global.selectboxVm = []);
	            McAvalon.global.selectboxVm.push(vm);
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:selectbox"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-group mc-selectbox-cotar hf\" ms-class-1=\"mc-selectbox-disabled: disabled\" ms-class-2=\"mc-loading: isInit\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n    <div class=\"mc-selectbox-wrap fp\" ms-class=\"mc-active: active\" ms-if=\"!readonly\"\r\n         ms-css-width=\"width\" ms-click=\"clickSelectbox($event)\">\r\n        <input type=\"hidden\" ms-attr-value=\"data[select] && data[select].value\">\r\n        <div class=\"mc-txt\">{{data[select] && data[select].text}}</div>\r\n        <ul class=\"mc-select-list\" ms-class-1=\"mc-arrow-down: arrowDown\" ms-class-2=\"mc-arrow-up: !arrowDown\">\r\n            <li ms-repeat=\"data\" ms-click=\"clickLi($event,$index)\">{{el.text}}</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"mc-readonly-txt fp\" ms-if=\"readonly\">{{data[select] && data[select].text}}</div>\r\n</div>"

/***/ },
/* 72 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(74), __webpack_require__(75)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:switch", {
	        //#region 外部参数
	        label: "", //提示文字
	        labelSize: 0,
	        mcstyle: "", //风格
	        width: 200, //宽度,默认200px
	        disabled: false, //是否禁用
	        //表单相关
	        formName: "", //表单data的key,输入框name
	        readonly: false, //是否只读，只读就无法修改
	        judgeName: "", //有不同状态的form组件,用来判断的字段
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	        //#endregion
	
	        //#region 外部事件
	        onInit: _interface, //初始化接口
	        onChanged: _interface, //状态变化接口
	        onClick: _interface, //开关点击接口
	        //#endregion
	
	        //#region 外部接口
	        isDisable: _interface, //是否禁用
	        isActive: _interface, //是否激活
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        //#endregion
	
	        //#region 内部属性
	        isInit: true,
	        switchActive: false, //是否打开(激活)
	        extend: {},
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	        //#endregion
	
	        //#region 内部事件
	        doClick: _interface, //switch点击事件
	        //#endregion
	
	        //#region 内部接口
	        _trigger: _interface, //内部触发器
	        //#endregion
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //#region 外部事件
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	            //#endregion
	
	            //#region 外部接口
	            vm.getValue = function () {
	                return vm.switchActive ? 1 : 0;
	            }
	            vm.setValue = function (val, isReadonly) {
	                //isReadonly 传值的时候才赋值判断
	                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
	                val ? vm.switchActive = true : vm.switchActive = false;
	                vm._trigger({},"changed");
	            }
	            vm.isActive = function () {
	                return vm.switchActive;
	            }
	            //#endregion
	
	            //#region 内部事件
	            vm.doClick = function (ev) {
	                if (!vm.readonly) {
	                    vm.switchActive = !vm.switchActive;
	                    vm._trigger({}, "click");
	                    vm._trigger({}, "changed"); //todo 跟上面的setValue合并changed
	                    ev.stopPropagation();
	                }
	            }
	            //#endregion
	
	            //#region 内部接口
	            vm._trigger = function (ev, type, _this) {
	                switch (type) {
	                    case "changed":
	                        if (typeof vm.onChanged == "function") {
	                            vm.onChanged(ev, vm, _this);
	                        }
	                        break;
	                    case "click":
	                        if (typeof vm.onClick == "function") {
	                            vm.onClick(ev, vm, _this);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            //#endregion
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:switch"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-group mc-switch-cotar hf\" ms-class=\"mc-loading: isInit\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n    <div class=\"mc-switch-wrap ftp\" ms-class-1=\"mc-switch-open:switchActive\"\r\n         ms-class-2=\"mc-switch-readonly:readonly\" ms-click=\"doClick\">\r\n        <div class=\"mc-switch-btn\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 75 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(77), __webpack_require__(78)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:text", {
	        //外部参数
	        label: "", //提示文字
	        labelSize: 0,
	        value: "", //输入框内值
	        placeholder: "", //输入框内提示文字
	        pwd: false, //是否是密码数据框
	        //name: "", //输入框name
	        valid: "", //验证类型
	        max: "", //当为数值验证时的最大值
	        min: "", //当为数值验证时的最小值
	        maxlen: 999, //最大长度
	        width: 200, //宽度,默认200px
	        must: false, //是否必填,也可为数字 代表必须的长度(会将覆盖length)
	        tip: "", //填写提示信息
	        mult: false, //是否为多行文本框显示
	        isHide: false, //是否隐藏,不可见
	        readonly: false, //是否只读，只读就div显示，否则input显示
	
	        //外部事件
	        onInit: _interface, //初始化接口
	        onGetValue: null, //获取值触发事件
	        onSetValue: null, //设置值触发事件
	        onClicked: null, //当输入框点击时触发事件
	        onChanged: null, //当输入框内值发生改变时触发事件
	
	        //外部接口
	        isDisable: _interface, //是否禁用
	        getData: _interface,
	        setData: _interface,
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        formName: "", //表单data的key,输入框name
	        submitName: "", //提交表单的name
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        isValid: true, //是否正在验证
	        validInfo: "", //错误信息
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	
	        //内部事件
	        doClick: _interface,
	        validValue: _interface,
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //内部事件
	            vm.doClick = function (ev) {
	                vm._trigger(ev, "clicked");
	            }
	            vm.validValue = function (ev) {
	                vm.value = vm.value + ""; //保证value为字符串
	                vm.validInfo = McAvalon.validata(vm.value, vm.valid);
	                vm.isValid = vm.validInfo === "" ? true : false;
	                if (vm.isValid) {
	                    if (vm.must === true && vm.value.trim() === "") {
	                        vm.isValid = false; vm.validInfo = "该字段为必填字段";
	                    } else if (typeof vm.must == "number" && vm.value.length !== vm.must) {
	                        vm.isValid = false; vm.validInfo = "该字段长度有误";
	                    } else if (vm.valid.indexOf("int") !== -1 || vm.valid.indexOf("float") !== -1) {
	                        if (vm.max !== "" && vm.value > vm.max) {
	                            vm.isValid = false; vm.validInfo = "超过最大限制";
	                        } else if (vm.min !== "" && vm.value < vm.min) {
	                            vm.isValid = false; vm.validInfo = "低于最小限制";
	                        }
	                    }
	                }
	            }
	
	            //内部接口
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "getValue":
	                        if (typeof vm.onGetValue == "function") {
	                            vm.onGetValue(ev, vm);
	                        }
	                        break;
	                    case "setValue":
	                        if (typeof vm.onSetValue == "function") {
	                            vm.onSetValue(ev, vm);
	                        }
	                        break;
	                    case "clicked":
	                        if (typeof vm.onclicked == "function") {
	                            vm.onClicked(ev, vm);
	                        }
	                        break;
	                    case "changed":
	                        if (typeof vm.onchanged == "function") {
	                            vm.onChanged(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	
	            //外部接口
	            vm.getData = function () {
	                var data = {};
	                data[vm.name] = vm.value;
	                return data;
	            }
	            vm.setData = function (newData) {
	                vm.value = newData;
	            }
	            vm.getValue = function () {
	                vm._trigger({}, "getValue");
	                return vm.value;
	            }
	            vm.setValue = function (val, isReadonly) {
	                //init
	                vm.validInfo = "";
	                //isReadonly 传值的时候才赋值判断
	                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
	                if (val !== vm.value) {
	                    vm.value = val;
	                    vm.validValue(null);
	                    vm._trigger({}, "setValue");
	                }
	            }
	
	            vm.$watch("value", function (newVal, oldVal) {
	                vm._trigger({ newVal: newVal, oldVal: oldVal }, "changed");
	            });
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:text"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-group mc-text-cotar hf\" ms-class-1=\"mc-error: !isValid\" ms-class-2=\"mc-loading: isInit\" ms-class-3=\"mc-ishide: isHide\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n    <input class=\"form-control mc-ipt fp\" ms-attr-type=\"pwd?'password':'text'\" ms-attr-placeholder=\"placeholder\" ms-if=\"!readonly && !mult\"\r\n           ms-attr-maxlength=\"maxlen\" ms-attr-name=\"formName\" ms-duplex=\"value\" ms-css-width=\"width\"\r\n           ms-input=\"validValue($event)\" ms-paste=\"validValue($event)\" ms-click=\"doClick($event)\" />\r\n    <textarea class=\"form-control mc-mult-ipt ftp\" type=\"text\" ms-attr-placeholder=\"placeholder\" ms-if=\"!readonly && mult\"\r\n              ms-attr-maxlength=\"maxlen\" ms-attr-name=\"formName\" ms-duplex=\"value\" ms-css-width=\"width\" ms-css-max-width=\"width\" ms-css-min-width=\"width\"\r\n              ms-input=\"validValue($event)\" ms-paste=\"validValue($event)\" ms-click=\"doClick($event)\"></textarea>\r\n    <div class=\"mc-text-show ftp\" ms-if=\"readonly\" ms-attr-name=\"formName\" ms-css-width=\"width\">{{value}}</div>\r\n    <span class=\"mc-text-valid-info ftp\" ms-if=\"!isValid && validInfo != ''\">{{validInfo}}</span>\r\n    <div class=\"mc-text-field-tip\" ms-css-padding-left=\"labelSize\" ms-if=\"tip\">{{tip}}</div>\r\n</div>"

/***/ },
/* 78 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(80), __webpack_require__(81), __webpack_require__(76), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:jsonadd", {
	        //外部参数
	        label: "", //提示文字
	        labelSize: 0,
	        value: [], //输入框内值
	        placeholder: "", //输入框内提示文字
	        //name: "", //输入框name
	        // json格式
	        keyName: "key",
	        valName: "val",
	        // 格式
	        valid: "", //验证类型  
	        width: 200, //宽度,默认200px
	        must: false, //是否必填,也可为数字 代表必须的长度(会将覆盖length)
	        tip: "", //填写提示信息
	        mult: false, //是否为多行文本框显示
	        isHide: false, //是否隐藏,不可见
	        readonly: false, //是否只读，只读就div显示，否则input显示
	
	        //外部事件
	        onInit: _interface, //初始化接口
	        onClicked: null, //当输入框点击时触发事件
	        onChanged: null, //当输入框内值发生改变时触发事件
	
	        //外部接口
	        isDisable: _interface, //是否禁用
	        getData: _interface,
	        setData: _interface,
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        formName: "", //表单data的key,输入框name
	        submitName: "", //提交表单的name
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        isValid: true, //是否正在验证
	        validInfo: "", //错误信息
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	        keyIpt: "",
	        valIpt: "",
	        //内部事件
	        doClick: _interface,
	        validValue: _interface,
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	        clrIpt: _interface, // 清理资源
	        clrEnv: _interface, // 清理资源
	        addItem: _interface,
	        //buildin
	        getValIptVM: _interface, // child vm
	        getKeyIptVM: _interface, // child vm
	        $keyIptVm: _interface, // child vm
	        $valIptVm: _interface, // child vm
	        //buildin end
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //#region buildin 
	            vm.getValIptVM = function (_vm, elem) { 
	                vm.$valIptVm = _vm;
	            }
	            vm.getKeyIptVM = function (_vm, elem) {
	                vm.$keyIptVm = _vm;
	            }
	            //#endregion
	            //内部事件
	            vm.validValue = function (ev) {
	                //vm.value = vm.value + ""; //保证value为字符串
	                //vm.validInfo = McAvalon.validata(vm.value, vm.valid);
	                //vm.isValid = vm.validInfo === "" ? true : false;
	                //if (vm.isValid) {
	                //    if (vm.must === true && vm.value.trim() === "") {
	                //        vm.isValid = false; vm.validInfo = "该字段为必填字段";
	                //    }
	                //}
	            }
	
	            //内部接口
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "changed":
	                        if (typeof vm.onchanged == "function") {
	                            vm.onChanged(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            vm.addItem = function () {
	                var key=vm.$keyIptVm.getValue();
	                var val = vm.$valIptVm.getValue();
	                if (key && val) { 
	                    vm.value = vm.value || [];
	                    var obj={};
	                    obj[vm.keyName]=key;
	                    obj[vm.valName]=val;
	                    vm.value.push(obj)
	                    vm.clrIpt();
	                } else {
	                    alert('..缺少')
	                } 
	            }
	            vm.clrIpt = function () {
	                vm.$valIptVm.setData("");
	                vm.$keyIptVm.setData("");
	            }
	            vm.clrEnv = function () {
	                vm.clrIpt();
	                vm.value = [];
	            }
	            
	            //外部接口
	            vm.getData = function () {
	                var data = {};
	                data[vm.name] = vm.value;
	                return data;
	            }
	            vm.setData = function (newData) {
	                vm.value = newData;
	            }
	            vm.getValue = function () { 
	              
	                // debugger;
	               // return JSON.stringify([{ GoodsJsonName: "可可脂", GoodsJsonValueName: "100%" }]);
	                return JSON.stringify(vm.value.$model);
	            }
	            vm.setValue = function (val, isReadonly) {
	                vm.clrEnv();
	                 
	                if (val) { 
	                   var val = typeof val === 'string' ? JSON.parse(val) : val;
	
	                    //isReadonly 传值的时候才赋值判断
	                    isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
	                    if (val !== vm.value) {
	                        vm.value = val;
	                        //vm.validValue(null);
	                    }
	                }
	
	            }
	
	
	            vm.$watch("value", function (newVal, oldVal) {
	                vm._trigger({ newVal: newVal, oldVal: oldVal }, "changed");
	            });
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:jsonadd"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-group mc-jsonadd-cotar hf\" ms-class-1=\"mc-error: !isValid\" ms-class-2=\"mc-loading: isInit\" ms-visible=\"!isHide\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n\r\n\r\n    <!--添加区 -->\r\n    <div class=\"add-area\" ms-if=\"!readonly\">\r\n        <mc:text width=\"100\" on-init=\"getKeyIptVM\" ms-attr-placeholder=\"placeholder\"></mc:text> \r\n        &nbsp;&nbsp;\r\n        <mc:text width=\"100\" on-init=\"getValIptVM\" ms-attr-placeholder=\"placeholder\"></mc:text>\r\n        <mc:button on-click=\"addItem\" label=\"增加\" type=\"success\"></mc:button>\r\n    </div>\r\n\r\n\r\n    <!--显示区 -->\r\n    {{JSON.stringify(value)}}\r\n    <div class=\"show-area\" ms-css-margin-left=\"labelSize\">\r\n        <table>\r\n            <tr ms-repeat-item=\"value\">\r\n                <td class=\"key-item\">{{item[keyName]}}</td>\r\n                <td class=\"val-item\">{{item[valName]}}</td>\r\n                <td class=\"\"><mc:button  label=\"删除\" on-click=\"$remove\"></mc:button></td>\r\n            </tr>\r\n           \r\n        </table>\r\n    </div>\r\n\r\n\r\n    <!--X区 -->\r\n    <div class=\"mc-text-show ftp\" ms-if=\"readonly\" ms-attr-name=\"formName\" ms-css-width=\"width\"></div>\r\n    <span class=\"mc-text-valid-info ftp\" ms-if=\"!isValid && validInfo != ''\">{{validInfo}}</span>\r\n    <div class=\"mc-text-field-tip\" ms-css-padding-left=\"labelSize\" ms-if=\"tip\">{{tip}}</div>\r\n</div>"

/***/ },
/* 81 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(83), __webpack_require__(84), __webpack_require__(73)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    avalon.filters.uri = function (str) {
	
	        var r = '';
	        try {
	            var arr = str.split('/');
	            var long = arr[arr.length - 1].split('.');
	            long[0] = long[0].substring(1, 10);
	            r = long.join('.');
	        } catch (e) {
	            console.info(str);
	        }
	        return r
	    }
	    var _interface = function () { };
	    //todo 配置要上传的 fileType 不是在传一个文件以后判断文件扩展名来判断
	    //todo 单图上传，多图上传合并，看情况是否使用JQ插件
	    avalon.component("mc:upload", {
	        //#region 外部参数
	        uploadFormId: McAvalon.util.genId("_uploadForm"), //上传的form
	        label: "", //提示文字
	        labelSize: 0,
	        tip: "",
	        mult: false, //多图上传,默认关闭
	        fileSrc: "", //图片路径
	        fileSrcList: [], //多图上传图片路径
	        fileSize: null, //文件大小
	        uploadType: "default", //后台上传图片的分类类型
	        fileType: "", // 当前的类型
	        allowFileType: "img",//允许文件类型    默认图片  --img video audio office
	        mcstyle: "", //风格
	        size: "normal", //small large
	        width: 200, //宽度,默认200px
	        disabled: false, //是否禁用
	        //外链
	        allowOuter: false,//允许
	        isOuter: false,//是否 
	        //表单相关
	        formName: "", //表单data的key,输入框name
	        readonly: false, //是否只读，只读就无法更改上传的图片，不显示上传按钮
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	        //#endregion
	
	        //#region 外部事件
	        onInit: _interface, //初始化接口
	        onClick: null, //当按钮点击时触发事件
	        //#endregion
	
	        //#region 外部接口
	        isDisable: _interface, //是否禁用
	        submit: _interface, //上传
	        reset: _interface, //重置
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        //#endregion
	
	        //buildin 
	        //switch,text
	        getSwitchVM: _interface, // 
	        outerChanged: _interface, // 
	        getOuterTextVM: _interface, // 
	        $outerTextVM: {},
	        $outerSwitchVM: {},
	        setOuter: _interface, // 
	        //builin end
	
	
	        //#region 内部属性
	        //对应格式
	        $fileTypeFormat: {
	            img: ['.jpg', '.png'],
	            video: [".rm", ".rmvb", ".wmv", ".avi", ".mpg", ".mpeg", ".mp4"],
	            audio: [".mp3", ".wma", ".wav", ".amr"],
	            office: [".doc", ".docx", ".pdf", ".ppt", ".pptx"]
	        },
	        isInit: true,
	        extend: {},
	        $jQuploadForm: $({}), //上传图片的表单的jQuery对象
	        s_upload: false, //状态-是否正在上传的
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	        //#endregion
	
	        //#region 内部事件
	        fileChange: _interface, //上传input change事件
	        doDel: _interface, //多图上传 删除 事件
	        //#endregion
	
	        //#region 内部接口
	        _trigger: _interface, //内部触发器
	        getRealUrl: _interface, //获取.多种URL
	        getFormat: _interface, //获取对应格式
	        setRealUrl: _interface, //设置.多种URL
	        judgeOuter: _interface, //判断是否外链
	        delImg: _interface, //删除图片
	        //#endregion
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //buildin
	            vm.getOuterTextVM = function (_vm, elem) {
	                vm.$outerTextVM = _vm
	            }
	            vm.getSwitchVM = function (_vm, elem) {
	                vm.$outerSwitchVM = _vm
	            }
	            vm.outerChanged = function (e, _vm) {
	                vm.isOuter = _vm.isActive()
	            }
	
	            vm.setOuter = function (_val) {
	                var val = _val ? 1 : 0;
	                vm.$outerSwitchVM.setValue(val);
	            }
	            //builin end
	
	            //#region 外部事件
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	            //#endregion
	
	            //#region 外部接口
	            vm.submit = function (_fileType) {
	                //UpAudioFileByMvc
	                var url = "/Home/UpdateImg/";
	                //get url
	                if (_fileType === 'office')
	                    url = "/Home/UpOfficFileByMvc/";
	                else if (_fileType === 'video')
	                    url = "/Home/UpVideoFileByMvc/";
	                else if (_fileType === 'audio')
	                    url = "/Home/UpAudioFileByMvc/";
	                vm.s_upload = true;
	                //get params,response
	                var ssFn = {};
	                if (_fileType === 'img') {
	                    ssFn = function (response) {
	                        vm.s_upload = false;
	                        console.log(response);
	                        var result = JSON.parse(response);
	                        if (vm.mult) { //多图
	                            vm.fileSrcList.push(result.url);
	                        } else {
	                            vm.fileSrc = result.url;
	                        }
	                        //closeLoading();
	                    }
	                } else {
	                    ssFn = function (response) {
	                        vm.s_upload = false;
	                        console.log(response);
	                        var result = JSON.parse(response);
	                        vm.fileSize = result.sizeList[0];
	                        vm.fileSrc = result.URLList[0];
	                        //closeLoading();
	                    }
	                }
	                //showLoading();
	                vm.$jQuploadForm.ajaxSubmit({
	                    url: url,
	                    type: "POST",
	                    data: {
	                        "type": vm.uploadType
	                    },
	                    timeout: 600000, //超时时间：10mins
	                    async: true,
	                    success: ssFn
	                });
	            }
	            vm.getValue = function () {
	                if (vm.mult) { //多图上传
	                    return vm.fileSrcList.join(",");
	                }
	                return vm.getRealUrl();
	            }
	            vm.setValue = function (val, isReadonly) {
	                //isReadonly 传值的时候才赋值判断
	                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
	                if (vm.mult) { //多图上传
	                    if (val !== "") {
	                        vm.fileSrcList = val.split(",");
	                    } else {
	                        vm.fileSrcList = [];
	                    }
	                } else {
	                    //先清
	                    vm.$outerTextVM.setValue("");
	                    //fix bug 相等时会有问题
	                    if (vm.fileSrc === val) {
	                        var n = val;
	                        //todo change filetype
	                        var all = n.split('.');
	                        var _f = '.' + all[all.length - 1];
	                        vm.fileType = vm.getFormat(_f);
	                        //todo change svm active ,setvalue,有点冗余问题不大 
	                        vm.judgeOuter(n)
	                        ? vm.$outerSwitchVM.setValue(1)
	                        : vm.$outerSwitchVM.setValue(0)
	
	                        //todo change svm active ,setvalue,有点冗余问题不大 
	                        vm.judgeOuter(n)
	                        ? vm.$outerTextVM.setValue(n)
	                        : 0
	                    }
	                    // if (val !== vm.fileSrc) {
	                    vm.fileSrc = val;
	                    // }
	                }
	            }
	            //#endregion
	
	            //#region 内部事件
	            vm.fileChange = function (ev, _this) {
	                console.log(_this.files);
	                if (!vm.s_upload) {
	                    //todo check file type
	                    if (_this.files && _this.files.length) {
	                        var all = _this.files[0].name.split('.');
	                        var _f = '.' + all[all.length - 1];
	                        var f = vm.getFormat(_f);
	                        if (f && vm.allowFileType.indexOf(f) > -1)
	                            vm.submit(f);
	                        else {
	                            alert("不支持所传格式");
	                        }
	                    } else if (_this.value) { //IE
	                        //todo ie check
	                        vm.submit();
	                    }
	                }
	            }
	            //多图上传时删除图片
	            vm.doDel = function (ev, idx) {
	                vm.delImg(idx);
	            }
	            //#endregion
	
	            //#region 内部接口
	            vm._trigger = function (ev, type, _this) {
	                switch (type) {
	                    case "click":
	                        if (typeof vm.onClick == "function") {
	                            vm.onClick(ev, vm, _this);
	                        }
	                        break;
	                    case "url":
	                        if (typeof vm.onClick == "function") {
	                            vm.onChanged(ev, vm, _this);
	                        }
	                        break;
	                    case "outer":
	                        if (typeof vm.onClick == "function") {
	                            vm.onOuter(ev, vm, _this);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            //删除图片
	            vm.delImg = function (idx) {
	                avalon.Array.removeAt(vm.fileSrcList, idx);
	            }
	            //get url by text, or filesrc
	            vm.getRealUrl = function () {
	                if (!vm.isOuter)
	                    //内
	                    return vm.fileSrc
	                else
	                    //外
	                    return vm.$outerTextVM.getValue();
	            }
	            //get format
	            vm.getFormat = function (_f) {
	                //_f  .mp3  
	                var r = '';
	                for (key in vm.$fileTypeFormat) {
	                    if (vm.$fileTypeFormat[key].indexOf(_f) > -1) {
	                        r = key;
	                        // return false;
	                    }
	                }
	                return r
	            }
	            //判断
	            vm.judgeOuter = function (url) {
	                return url.indexOf('http') > -1
	            }
	            //设置到text或者 
	            vm.setRealUrl = function (url) {
	
	                if (vm.judgeOuter(url)) {
	                    //outer
	                    vm.$outerTextVM.setValue(url, vm.readonly);
	                } else {
	                    //
	
	                }
	                vm.fileSrc = url;
	            }
	            //#endregion
	            //观测方法
	            vm.$watch('fileSrc', function (n, o) {
	                //todo change filetype
	                var all = n.split('.');
	                var _f = '.' + all[all.length - 1];
	                vm.fileType = vm.getFormat(_f);
	                //todo change svm active ,setvalue,有点冗余问题不大 
	                vm.judgeOuter(n)
	                ? vm.$outerSwitchVM.setValue(1)
	                : vm.$outerSwitchVM.setValue(0)
	
	                //todo change svm active ,setvalue,有点冗余问题不大 
	                vm.judgeOuter(n)
	                ? vm.$outerTextVM.setValue(n)
	                : 0
	
	                vm._trigger({}, 'url')
	            });
	            vm.$watch('isOuter', function (n, o) {
	                vm._trigger({}, 'outer')
	            });
	        },
	        $ready: function (vm, elem) {
	            vm.$jQuploadForm = $(elem).find("#" + vm.uploadFormId); //获取表单的jQuery对象
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:upload"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-group mc-upload-cotar hf\" ms-class-1=\"mc-upload-lg: size=='large'\"\r\n     ms-class-2=\"mc-upload-sm: size=='small'\" ms-class-3=\"mc-loading: isInit\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n    <div class=\"fp\">\r\n        <!-- tip -->\r\n        <div ms-visible=\"tip\" class=\"item mc-text-field-tip\" ms-css-width=\"width\">\r\n            {{tip}}\r\n        </div>\r\n        <div class=\"vm-cotar\" ms-visible=\"allowOuter && (!readonly)\">\r\n            <mc:switch label-size=\"76\" label=\"是否外链\" on-init=\"getSwitchVM\" on-changed=\"outerChanged\"></mc:switch>\r\n        </div>\r\n        <div class=\"vm-cotar\" ms-visible=\"!isOuter\">\r\n            <form ms-attr-id=\"uploadFormId\" ms-if=\"!readonly\">\r\n                <label class=\"mc-button-label\">\r\n                    <input class=\"ms-upload-ipt\" ms-change=\"fileChange($event,this)\" type=\"file\" name=\"uploadImg\">\r\n                    <span class=\"mc-upload-btn\" ms-visible=\"!s_upload\">{{ allowFileType==='img'  ? '选择图片'  :   allowFileType==='video'? '选择视频' : '请选择'}}</span>\r\n                    <span class=\"mc-upload-btn\" ms-visible=\"s_upload\">上传中..</span>\r\n                </label>\r\n            </form>\r\n        </div>\r\n        <div class=\"vm-cotar\" ms-visible=\"isOuter && (!readonly) \">\r\n            <mc:text on-init=\"getOuterTextVM\"> </mc:text>\r\n        </div> \r\n        <!-- 图片直接显示,其他直接url text, -->\r\n        <div ms-if=\"fileType==='img' && !mult\" class=\"mc-img-show-cotar\" ms-css-width=\"width\">\r\n            <img ms-attr-src=\"fileSrc\" ms-if=\"fileSrc != ''\">\r\n        </div>\r\n        <!-- 多图上传 -->\r\n        <div ms-if=\"mult\" class=\"mc-img-show-cotar mc-mult-img-cotar\" ms-css-width=\"width\">\r\n            <div class=\"mc-img-item\" ms-repeat=\"fileSrcList\">\r\n                <div class=\"mc-close-btn\" ms-click=\"doDel($event,$index)\" ms-if=\"!readonly\">&times;</div>\r\n                <img ms-attr-src=\"el\">\r\n            </div>\r\n        </div>\r\n        <div class=\"vm-cotar\" ms-visible=\"fileSrc != '' && fileType!=='img' && (!isOuter) && (!readonly)\">\r\n            已选择:{{fileSrc}}\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 84 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(86), __webpack_require__(87)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:editor", {
	        //#region 外部参数
	        ueditorId: "", //百度文本编辑器的id
	        label: "", //提示文字
	        labelSize: 0,
	        tip:"",
	        placeholder: "",
	        mcstyle: "", //风格
	        size: "normal", //small large
	        width: 900, //宽度,默认900px
	        height: 600, //高度,默认600px
	        disabled: false, //是否禁用
	        //表单相关
	        formName: "", //表单data的key,输入框name
	        readonly: false, //是否只读，只读就无法更改上传的图片，不显示上传按钮
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	        //#endregion
	
	        //#region 外部事件
	        onInit: _interface, //初始化接口
	        onClick: null, //当按钮点击时触发事件
	        //#endregion
	
	        //#region 外部接口
	        isDisable: _interface, //是否禁用
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        //#endregion
	
	        //#region 内部属性
	        isInit: true,
	        extend: {},
	        isFullscreen: false, //是否全屏
	        $ueditorObj: null, //百度文本编辑器对象
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	        //#endregion
	
	        //#region 内部事件
	
	        //#endregion
	
	        //#region 内部接口
	        _trigger: _interface, //内部触发器
	        iniEditor: _interface, //初始化百度文本编辑器
	        destroy: _interface, //销毁当前的百度文本编辑器对象
	        //#endregion
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            hooks.ueditorId = McAvalon.util.genId("_ueditor");
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //#region 外部事件
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	            //#endregion
	
	            //#region 外部接口
	            vm.getValue = function () {
	                //获得百度文本编辑器内容
	                return vm.$ueditorObj.getContent();
	            }
	            vm.setValue = function (val, isReadonly) {
	                //isReadonly 传值的时候才赋值判断
	                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
	                //如果在源代码模式则先切换回编辑模式
	                if (vm.$ueditorObj.queryCommandState('source')) {
	                    vm.$ueditorObj.execCommand('source');
	                }
	                vm.$ueditorObj.setContent(val);
	            }
	            //#endregion
	
	            //#region 内部事件
	
	            //#endregion
	
	            //#region 内部接口
	            vm._trigger = function (ev, type, _this) {
	                switch (type) {
	                    case "click":
	                        if (typeof vm.onClick == "function") {
	                            vm.onClick(ev, vm, _this);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            vm.iniEditor = function() {
	                //UE.clearCache(vm.ueditorId);
	                //实例化编辑器
	                vm.$ueditorObj = UE.getEditor(vm.ueditorId);
	                //fix fullscreen bug
	                //vm.$ueditorObj.addListener("afterfullscreenchange", function () {
	                //    vm.isFullscreen = !vm.isFullscreen;
	                //});
	            }
	            vm.destroy = function () {
	                //销毁当前的百度文本编辑器对象
	                //UE.clearCache(vm.ueditorId);
	            }
	            //#endregion
	        },
	        $ready: function (vm, elem) {
	            vm.iniEditor(); //初始化百度文本编辑器
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:editor"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-group mc-editor-cotar hf\" ms-class=\"mc-loading: isInit\" ms-css-min-width=\"labelSize + width\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n    <div class=\"mc-editor-wrap ftp\" ms-class=\"mc-editor-fullscreen: isFullscreen\">\r\n        <div class=\"item mc-text-field-tip\" ms-css-width=\"width\">\r\n            {{tip}}\r\n        </div>\r\n        <script ms-attr-id=\"ueditorId\" name=\"content\" type=\"text/plain\" ms-css-width=\"width\" ms-css-height=\"height\">\r\n        </script>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 87 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(89), __webpack_require__(90)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:tagadd", {
	        //#region 外部参数
	        label: "", //提示文字
	        labelSize: 0,
	        mcstyle: "", //风格
	        size: "normal", //small large
	        width: 200, //宽度,默认200px
	        disabled: false, //是否禁用
	        placeholder: "", //提示文字
	        tip:"",//
	        type: "normal", //normal 无类型 | group 组 | person 员工 | department 部门
	        iconCodeList: {
	            normal: "",
	            group: "&#xe739;",
	            person: "&#xe78b;",
	            department: "&#xe753;"
	        }, //图标字体code
	        value: "", //值
	        tagList: [], //标签列表
	        //表单相关
	        formName: "", //表单data的key,输入框name
	        readonly: false, //是否只读，只读就无法添加，删除标签
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	        //#endregion
	
	        //#region 外部事件
	        onInit: _interface, //初始化接口
	        onAdd: null, //当添加按钮点击时触发事件
	        onDel: null, //当删除按钮点击时触发事件
	        //#endregion
	
	        //#region 外部接口
	        isDisable: _interface, //是否禁用
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        //#endregion
	
	        //#region 内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	        //#endregion
	
	        //#region 内部事件
	        doKeyDown: _interface, //标签按钮keyDown事件
	        doAdd: _interface, //标签添加事件
	        doDel: _interface, //标签添加事件
	        //#endregion
	
	        //#region 内部接口
	        _trigger: _interface, //内部触发器
	        addTag: _interface, //添加标签
	        delTag: _interface, //删除标签
	        getIcon: _interface, //获取图标
	        //#endregion
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //#region 外部事件
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	            //#endregion
	
	            //#region 外部接口
	            vm.getValue = function () {
	                //todo 对must的支持,判断标签是否为空
	                var dataArr = [];
	                $.each(vm.tagList, function (i, val) {
	                    dataArr.push(val.tagName);
	                });
	                return dataArr.join(";");
	            }
	            vm.setValue = function (val, isReadonly) {
	                //isReadonly 传值的时候才赋值判断
	                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
	                console.log(vm.tagList);
	                if (val !== "") {
	                    var dataArr = val.split(";");
	                    vm.tagList = dataArr.map(function (val, i) {
	                        return {
	                            tagName: val
	                        }
	                    });
	                }
	            }
	            //#endregion
	
	            //#region 内部事件
	            vm.doKeyDown = function (ev) {
	                if (ev.keyCode === 13) {
	                    vm.addTag();
	                }
	            }
	            vm.doAdd = function (ev) {
	                vm.addTag();
	            }
	            vm.doDel = function (ev, idx) {
	                vm.delTag(idx);
	            }
	            //#endregion
	
	            //#region 内部接口
	            vm._trigger = function (ev, type, _this) {
	                switch (type) {
	                    case "add":
	                        if (typeof vm.onAdd == "function") {
	                            vm.onAdd(ev, vm, _this);
	                        }
	                        break;
	                    case "del":
	                        if (typeof vm.onDel == "function") {
	                            vm.onDel(ev, vm, _this);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            vm.addTag = function () {
	                //todo 空标签提示
	                //todo 不能添加重复的标签
	                if (vm.value.trim() !== "") {
	                    vm.tagList.push({
	                        tagName: vm.value
	                    });
	                    vm.value = "";
	                    vm._trigger({}, "add");
	                }
	            }
	            vm.delTag = function (idx) {
	                avalon.Array.removeAt(vm.tagList, idx);
	                vm._trigger({}, "del");
	            }
	            vm.getIcon = function() {
	                return vm.iconCodeList[vm.type] || "";
	            }
	            //#endregion
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:tagadd"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-group mc-tagadd-cotar hf\" ms-class-1=\"mc-tagadd-lg: size=='large'\"\r\n     ms-class-2=\"mc-tagadd-sm: size=='small'\" ms-class-3=\"mc-loading: isInit\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n    <div class=\"ftp\">\r\n        <div class=\"hf\">\r\n            <input class=\"form-control mc-ipt fp\" type=\"text\" ms-attr-placeholder=\"placeholder\" ms-if=\"!readonly\"\r\n                   ms-duplex=\"value\" ms-keydown=\"doKeyDown\" ms-css-width=\"width\" />\r\n            <div class=\"mc-add-btn fp\" ms-click=\"doAdd\" ms-if=\"!readonly\">添加</div>\r\n        </div>\r\n        <div class=\"item mc-text-field-tip\" >\r\n            {{tip}}\r\n        </div>\r\n        <div class=\"mc-tag-show-cotar hf\" ms-css-width=\"width + 80\">\r\n            <div class=\"mc-tag-item fp\" ms-repeat=\"tagList\">\r\n                <div class=\"mc-close-btn\" ms-click=\"doDel($event,$index)\" ms-if=\"!readonly\">&times;</div>\r\n                <div class=\"mc-tag-type iconfont\" ms-class=\"mc-type-{{type}}\" ms-if=\"type != 'normal'\">{{getIcon() | html}}</div>\r\n                <div class=\"mc-tag-name\" ms-class=\"mc-type : type != 'normal'\">{{el.tagName}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 90 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(92), __webpack_require__(93)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:pagemodal", {
	        //外部参数
	        title: "", //模态窗口title
	        padding: 15,
	        modalIsShow: false, //是否显示,默认隐藏
	        $tmpData: {}, //临时数据存储对象
	
	        //外部事件
	        onInit: _interface, //初始化接口
	        onShowed: null,
	        onHided: null,
	
	        //外部接口
	        setTitle: _interface,
	        getTitle: _interface,
	        show: _interface,
	        hide: _interface,
	        setCallback: _interface,
	
	        getTmpData: _interface, //获取临时数据对象的值
	        setTmpData: _interface, //设置临时数据对象的值
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        content: "",
	        lindex: -1, //布局中的序号
	        $scrollBody: $({}), //滚动层
	
	        //内部事件
	        btnClick: _interface,
	        clickDialog: _interface,
	
	        //内部接口
	        _trigger: _interface,
	        jBtnType: _interface,
	
	        //默认配置
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //======= 内部事件 START =======//
	            /**
	             * 模态窗口点击时事件
	             * @param {} ev 动作类型
	             * @returns {} 
	             */
	            vm.clickDialog = function (ev) {
	                console.log(ev);
	                //阻止冒泡(避免点击弹出框时 弹出框关闭)
	                //ev.cancelBubble = true;
	            }
	            //======= 内部事件 END =======//
	
	            //======= 内部接口 START =======//
	            /**
	             * 事件触发器
	             * @param {} ev 动作类型
	             * @param {} type 事件类型
	             * @returns {} 
	             */
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "showed":
	                        if (typeof vm.onshowed == "function") {
	                            vm.onShowed(ev, vm);
	                        }
	                        break;
	                    case "hided":
	                        if (typeof vm.onhided == "function") {
	                            vm.onHided(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            //======= 内部接口 END =======//
	
	            //======= 外部接口 START =======//
	            /**doc
	             * @description {设置title}
	             * @param {title} {要设置的title}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.setTitle = function (title) {
	                vm.title = title;
	                return vm;
	            }
	            /**doc
	             * @description {返回title}
	             * @returns {String} {title字符串}
	             */
	            vm.getTitle = function () {
	                return vm.title;
	            }
	            /**doc
	             * @description {显示模态窗口}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.show = function () {
	                vm.modalIsShow = true;
	                vm._trigger({}, "showed");
	                return vm;
	            }
	            /**doc
	             * @description {隐藏模态窗口}
	             * @param {ev} {动作类型}
	             * @param {noJudge} {是否不判断直接关闭}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.hide = function () {
	                vm.modalIsShow = false;
	                vm._trigger({}, "hided");
	                return vm;
	            }
	            /**doc
	             * @description {设置回调}
	             * @param {idx} {设置的按钮index}
	             * @param {callback} {对应的回调函数}
	             * @returns {vm} {当前调用的vm对象}
	             */
	            vm.setCallback = function (idx, callback) {
	                vm.buttons[idx] && (vm.buttons[idx].callback = callback);
	                return vm;
	            }
	            vm.getTmpData = function() {
	                return vm.$tmpData;
	            }
	            vm.setTmpData = function(val) {
	                vm.$tmpData = $.extend(vm.$tmpData, val);
	                return vm;
	            }
	            //======= 外部接口 END =======//
	            //弹出层显示时回调
	            vm.$watch("modalIsShow", function () {
	                vm.$scrollBody.scrollTop(0); //滚动条滚回顶部
	            });
	        },
	        $ready: function (vm, elem) {
	            vm.$scrollBody = $(elem).find(".mc-modal-content");
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:pagemodal"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-pagemodal-cotar fade\" ms-class-1=\"mc-pagemodal-show:modalIsShow\"\r\n     ms-class-2=\"mc-pagemodal-hide:!modalIsShow\" ms-class-3=\"mc-loading: isInit\">\r\n    <div class=\"mc-modal-content\">\r\n        <!-- modal header -->\r\n        <div class=\"mc-modal-header hf\">\r\n            <div class=\"mc-modal-title fp\">{{title}}</div>\r\n        </div>\r\n        <!-- modal body -->\r\n        <div class=\"mc-modal-body\" ms-css-padding=\"padding\">{{content|html}}</div>\r\n    </div>\r\n</div>"

/***/ },
/* 93 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(95), __webpack_require__(96)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:bread", {
	        //外部参数
	        data: [],
	        padding: 15,
	
	        //外部事件
	        onInit: _interface, //初始化接口
	
	        //外部接口
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号
	        $scrollBody: $({}), //滚动层
	
	        //内部事件
	        btnClick: _interface,
	        clickDialog: _interface,
	
	        //内部接口
	        _trigger: _interface,
	
	        //默认配置
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //======= 内部事件 START =======//
	
	            //======= 内部事件 END =======//
	
	            //======= 内部接口 START =======//
	            /**
	             * 事件触发器
	             * @param {} ev 动作类型
	             * @param {} type 事件类型
	             * @returns {} 
	             */
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    default: break;
	                }
	            }
	            //======= 内部接口 END =======//
	
	            //======= 外部接口 START =======//
	            
	            //======= 外部接口 END =======//
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:bread"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-bread-cotar\" ms-class=\"mc-loading: isInit\">\r\n    <div class=\"mc-bread-list hf\">\r\n        <a class=\"mc-bread-item fp mc-active\" ms-repeat=\"data\"\r\n           ms-attr-href=\"el.href\" ms-if-loop=\"el.href\">{{el.text}}</a>\r\n        <div class=\"mc-bread-item fp mc-cur-item\" ms-repeat=\"data\" ms-class=\"mc-active: el.href\"\r\n             ms-if-loop=\"!el.href\">{{el.text}}</div>\r\n    </div>\r\n</div>"

/***/ },
/* 96 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(98), __webpack_require__(99)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:iconselect", {
	        //#region 外部参数
	        label: "", //提示文字
	        labelSize: 0,
	        mcstyle: "", //风格
	        width: 200, //宽度,默认200px
	        disabled: false, //是否禁用
	        iconCode: "", //图标字体code
	        iconList: McAvalon.icon.getList(),
	        //表单相关
	        formName: "", //表单data的key,输入框name
	        readonly: false, //是否只读，只读就无法添加，删除标签
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	        //#endregion
	
	        //#region 外部事件
	        onInit: _interface, //初始化接口
	        onChanged: null, //当改变图片的时候触发事件
	        //#endregion
	
	        //#region 外部接口
	        isDisable: _interface, //是否禁用
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        //#endregion
	
	        //#region 内部属性
	        isInit: true,
	        popShow: false,
	        extend: {},
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	        //#endregion
	
	        //#region 内部事件
	        doPopSelect: _interface, //显示图标选择层事件
	        doSelect: _interface, //图标选择事件
	        //#endregion
	
	        //#region 内部接口
	        _trigger: _interface, //内部触发器
	        //#endregion
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //#region 外部事件
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	            //#endregion
	
	            //#region 外部接口
	            vm.getValue = function () {
	                return vm.iconCode;
	            }
	            vm.setValue = function (val, isReadonly) {
	                //isReadonly 传值的时候才赋值判断
	                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
	                vm.iconCode = val;
	            }
	            //#endregion
	
	            //#region 内部事件
	            vm.doPopSelect = function (ev) {
	                vm.popShow = !vm.popShow;
	            }
	            vm.doSelect = function (ev, code) {
	                if (vm.iconCode !== code) {
	                    vm.iconCode = code;
	                    vm._trigger({}, "changed");
	                }
	                vm.popShow = false;
	            }
	            //#endregion
	
	            //#region 内部接口
	            vm._trigger = function (ev, type, _this) {
	                switch (type) {
	                    case "changed":
	                        if (typeof vm.onChanged == "function") {
	                            vm.onChanged(ev, vm, _this);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            //#endregion
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:iconselect"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-group mc-iconselect-cotar hf\" ms-class=\"mc-loading: isInit\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n    <div class=\"mc-select-cotar ftp hf\">\r\n        <div class=\"mc-selected-icon iconfont fp\" ms-click=\"doPopSelect\" ms-if=\"iconCode != ''\">{{iconCode|html}}</div>\r\n        <div class=\"mc-select-btn fp\" ms-click=\"doPopSelect\" ms-if=\"iconCode == '' && !readonly\">选择图标</div>\r\n        <div class=\"mc-iconselect-content hf\" ms-class=\"mc-show: popShow\" ms-if=\"!readonly\">\r\n            <div class=\"mc-item iconfont fp\" ms-repeat=\"iconList\" ms-click=\"doSelect($event, el.iconCode)\">{{el.iconCode|html}}</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 99 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//todo 右边 data需要写出来
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4),__webpack_require__(101), __webpack_require__(102),__webpack_require__(103), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:listselect", {
	        //buildIn相关
	        $dialog_opt: {},
	        getDialogVM: _interface, 
	        $listId: McAvalon.util.genId("_letterlist"), //id 
	        $dialogVM: {},
	        //buildin 
	        $list_opt: {
	        
	        },
	        $data_opt:{
	
	        },
	        data: [],
	        dataSelect: null,
	        dataClick: _interface, //
	        //外部参数
	        label: "", //提示文字
	        trace: false, //getValue是否返回路径
	        labelSize: 0,
	        value: "", //输入框内值   
	        text: "", //输入框内文字    
	        valid: "", //验证类型
	        width: 200, //宽度,默认200px
	        must: false, //是否必填,也可为数字 代表必须的长度(会将覆盖length)
	        tip: "", //填写提示信息
	        isHide: false, //是否隐藏,不可见
	        readonly: false, //是否只读，只读就div显示，否则input显示
	        //外部事件
	        onInit: _interface, //初始化接口
	        onClicked: null, //当输入框点击时触发事件
	        onChanged: null, //当输入框内值发生改变时触发事件
	
	        //外部接口
	
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        formName: "", //表单data的key,输入框name
	        submitName: "", //提交表单的name
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	
	        //内部属性 
	        isInit: true,
	        extend: {},
	        isValid: true, //是否正在验证
	        validInfo: "", //错误信息
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	
	        //内部事件
	        doClick: _interface,
	        validValue: _interface,
	
	        //内部接口
	        _trigger: _interface, //内部触发器
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            //树配置要融合
	            if (vmOpts.$list_opt) {
	                vmOpts.$list_opt = $.extend(true, hooks.$list_opt, vmOpts.$list_opt)
	            }
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //buildin 相关
	            //data
	
	            vm.dataClick = function (item) {
	                vm.dataSelect ? vm.dataSelect.selected = false : 0;
	                vm.dataSelect = item;
	                item.selected = true;
	            }
	            //list
	            vm.$list_opt.onClickBefore = function (_item) {
	                //
	                vm.dataSelect = null;
	                _item[vm.$list_opt.idName]
	                var ajaxConfig = vm.$data_opt.$ajaxConfig;
	                var p={}; 
	                p[ajaxConfig.key] = _item[ajaxConfig.key]
	                p = $.extend(true, p, ajaxConfig.extra); 
	                Mc.Ajax({
	                    url:  ajaxConfig.url,
	                    data:p,
	                    success: function (response) {
	                        vm.data = response.data.map(function (item) {
	                            item.selected = false;
	                            return item;
	                        })
	                    }
	                });
	            };
	            //dialog
	            vm.$dialog_opt = {
	                size: 'large',
	                buttons: [
	                    {
	                        label: "保存",
	                        type: "success",
	                        callback: function (ev, _vm) {
	                            //get self val
	                            //debugger;
	                            vm.value = vm.dataSelect[vm.$data_opt.idName];
	                            vm.text = vm.dataSelect[vm.$data_opt.textName];
	                            return true;
	                        }
	                    },
	                    {
	                        label: "取消",
	                        callback: function () {
	                            return true;
	                        }
	                    }
	                ]
	            }
	
	            vm.getDialogVM = function (_vm, elem) {
	                vm.$dialogVM = _vm
	            }
	           
	            //内部事件 
	            vm.doClick = function (ev) {
	                vm.$dialogVM.showDialog();
	                //vm.$dialogVM.hideDialog({}, true);
	                vm._trigger(ev, "clicked");
	            }
	            vm.validValue = function (ev) {
	                vm.value = vm.value + ""; //保证value为字符串
	                vm.validInfo = McAvalon.validata(vm.value, vm.valid);
	                vm.isValid = vm.validInfo === "" ? true : false;
	                if (vm.isValid) {
	                    if (vm.must === true && vm.value.trim() === "") {
	                        vm.isValid = false; vm.validInfo = "该字段为必填字段";
	                    }
	                }
	            }
	
	            //内部接口
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "clicked":
	                        if (typeof vm.onclicked == "function") {
	                            vm.onClicked(ev, vm);
	                        }
	                        break;
	                    case "changed":
	                        if (typeof vm.onchanged == "function") {
	                            vm.onChanged(ev, vm);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	
	            //外部接口 
	            vm.getValue = function () { 
	                return vm.value;
	            }
	            vm.setValue = function (val, isReadonly) {
	                //todo clr fns抽离
	                //data
	                vm.dataSelect = null;
	                vm.data = [];
	                //tree 
	                McAvalon.getVm(vm.$listId).q = ""; 
	                var tmp = McAvalon.getVm(vm.$listId).getSelect() 
	                    tmp ? tmp.selected = false : 0;
	                //clr end
	
	                //isReadonly 传值的时候才赋值判断
	                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
	                vm.text = val; 
	               // vm.value = val;
	            }
	
	
	            vm.$watch("value", function (newVal, oldVal) {
	                vm._trigger({ newVal: newVal, oldVal: oldVal }, "changed");
	            });
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:listselect"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "\r\n \r\n<div class=\"mc-form-group mc-list-select-cotar hf\" ms-class=\"mc-error: !isValid\" ms-visible=\"!isHide\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n    <div class=\"form-control mc-ipt fp\" ms-if=\"!readonly\"\r\n         ms-attr-name=\"formName\" ms-css-width=\"width\"\r\n         ms-click=\"doClick($event)\">{{text}}</div>\r\n    <div class=\"mc-text-show ftp\" ms-if=\"readonly\" ms-attr-name=\"formName\" ms-css-width=\"width\">{{text}}</div>\r\n    <span class=\"mc-text-valid-info ftp\" ms-if=\"!isValid && validInfo != ''\">{{validInfo}}</span>\r\n    <div class=\"mc-text-field-tip\" ms-css-padding-left=\"labelSize\" ms-if=\"tip\">{{tip}}</div>\r\n\r\n\r\n    <mc:dialog config=\"$dialog_opt\" title=\"\" on-init=\"getDialogVM\">\r\n        <div slot=\"content\">\r\n            <!-- list -->\r\n            <mc:letterlist config=\"$list_opt\" ms-attr-identifier=\"$listId\"></mc:letterlist>\r\n            <!-- data -->\r\n            <div class=\"data-list\">\r\n                <div class=\"item\" ms-repeat-item=\"data\" ms-click=\"dataClick(item)\" ms-class=\"active: item.selected\">{{item[$data_opt.textName]}}</div>\r\n            </div>\r\n        </div>\r\n\r\n    </mc:dialog>\r\n</div>\r\n\r\n"

/***/ },
/* 102 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(_) {
	//todata
	toLetterListData = function (data, cullOrigin) {
	    var r = [];
	    avalon.each(data, function (i, item) {
	        item.selected = false; 
	        r.push(item); 
	
	    });
	
	    return r;
	};
	//todo 搜索只有indexof,全拼音后台没给 这也没做
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(104), __webpack_require__(105), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:letterlist", {
	        //外部参数 
	        idName: "id",//id name
	        textName: "text",//显示 name
	        keyName: "key", //key name  
	        picName: "pic", //item小图片 name  
	        hasPic:false,
	        //外部事件
	        onInit: _interface, //初始化接口
	        onDataChange: _interface, //数据改变
	        onClickBefore: _interface, //点击前
	        //外部接口 
	        setData: _interface, //设置数据源
	        getSelect: _interface, //获取选中
	        //内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号   
	        tmpActive: null,
	        $originData: [],
	        data: null,//数据源 [text,id,selected,key]
	        q:"",
	        $skipArray: [''],
	        //内部事件 
	        
	        //内部接口
	        _trigger: _interface, //内部触发器  
	        click: _interface, //内部触发器  
	        select : _interface, //内部触发器  
	        _select : _interface, //内部触发器  
	        genGroup: _interface, //内部触发器  
	        renderDataLen: _interface, //内部触发器  
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            if (vmOpts.data) {
	                vmOpts.data = toLetterListData(vmOpts.data, vmOpts.cullOrigin);
	            }
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象 
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //内部事件
	
	
	            //内部接口
	            vm._trigger = function (ev, type) {
	                switch (type) {
	                    case "data":
	                        if (typeof vm.onDataChange == "function") {
	                            vm.onDataChange(vm.r, vm.originData, vm.diffData);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	       
	            //选中,该交互类radio
	            vm.click = function (item) { 
	                if (vm.onClickBefore(item,vm) === false) {
	                    return false;
	                }
	                vm.select(item);
	            }
	            vm.select = function (item) {
	                vm.tmpActive ? vm.tmpActive.selected = false : 0;
	                vm._select(item, true);
	                vm.tmpActive = item;
	            }
	            //选中基本方法
	            vm._select = function (item, select) {
	                item.selected = select; 
	            }
	            //生成q对应组
	            //todo filter = gen + watch,就没必要写一堆gen,关键在于框架支持 | filter (var)
	            var genGroup = function () { 
	                var r = {};
	                var q = vm.q.trim();
	                //e.x{A:[ item ],B:[]  }..
	                vm.$originData.forEach(function (item, i) {
	                    if (q && item[vm.textName].indexOf(q) < 0) {
	                        return false;
	                    }
	                    var key = item[vm.keyName];
	                    r[key] = r[key] || [];
	                    r[key].push(item);
	                });
	                vm.data = r;
	            }
	            vm.genGroup = _.throttle(genGroup, 250);
	            vm.renderDataLen = function () {
	                var data = vm.data.$model;
	                var sum = 0;
	                for (key in data) {
	                    if (data[key] && data[key].length) {
	                        sum += data[key].length;
	                    }
	                }
	
	
	                return sum;
	            }
	            //外部事件 
	            //外部接口 
	            vm.setData = function (_data) {
	                var data = toLetterListData(_data);
	                vm.$originData = data;
	                //vm.$originData = data.map(function (item) {
	                //    return _.clone(item);
	                //}) 
	                vm.genGroup();
	            }
	            vm.getSelect = function () { 
	                return  vm.tmpActive;
	            }
	            
	            //观测方法
	            //注意:ms-duplex与ms-input不能用在同一元素上。用watch.. 
	            vm.$watch('q', function (newV, oldV) {
	                //输入就清完selected 
	                //avalon.each(vm.data, function (i, item) {
	                //    item.selected = false;
	                //});
	                vm.genGroup();
	            });
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	            vm.genGroup();
	        }
	    });
	
	    var widget = avalon.components["mc:letterlist"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-letter-list-cotar\">\r\n    <div class=\"left-list group-list\">\r\n        <div class=\"all-num\">\r\n            <!--总数 {{renderDataLen(data)}}-->\r\n        </div>\r\n        <input type=\"text\" class=\"ipt\" placeholder=\"输入关键字\" ms-duplex-string=\"q\">\r\n        <div class=\"group-box\">\r\n            <div class=\"group-item\" ms-if-loop=\"data\" ms-repeat=\"data\">\r\n                <div class=\"gourp-title\">\r\n                    {{$key}} <div class=\"rfp\"> {{$val.length}}项 </div>\r\n                </div>\r\n                <div class=\"item\" ms-repeat-item=\"$val\"\r\n                     ms-class=\"active: item.selected\"\r\n                     ms-click=\"click(item)\">\r\n                    <img ms-if=\"hasPic\" ms-attr-src=\"item[picName]\" class=\"sm-pic\" alt=\"\"> \r\n                    <span>{{item[textName]}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 105 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(107), __webpack_require__(108)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:gridlayout", {
	        //外部属性
	        gridConfig: {},
	        ln: 0,
	        cn: 0,
	        padding: 15, //panel-body 的 padding
	        //内部属性
	        isInit: true,
	        extend: {},
	        tr: [],
	        td: [],
	
	        //view接口
	
	        onInit: _interface, //必须定义此接口
	        renderContent: _interface,
	        _trigger: _interface,
	
	        //默认配置
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            if (vmOpts.ln || vmOpts.cn || elemOpts.ln || elemOpts.cn) {
	                //初始化slot标签页内容用属性
	                var gridTr = vmOpts.ln || elemOpts.ln;
	                var gridTd = vmOpts.cn || elemOpts.cn;
	                if (gridTr === (gridTr >>> 0) && gridTd === (gridTd >>> 0)) { //判断是否为非负正整数
	                    for (var i = 0; i < gridTr; i++) {
	                        for (var j = 0; j < gridTd; j++) {
	                            hooks["grid" + i + j] = "";
	                            if (i === 0) {
	                                hooks.td.push("");
	                            }
	                        }
	                        hooks.tr.push("");
	                    }
	                }
	            }
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //接口方法
	            vm.renderContent = function (trIdx, tdIdx) {
	                return vm["grid" + trIdx + tdIdx];
	            }
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:gridlayout"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-gridlayout-cotar\">\r\n    <table class=\"mc-grid-table\">\r\n        <!--<thead ms-if=\"hasHead\" ms-class=\"mc-hide:isInit\">\r\n            <tr>\r\n                <th ms-repeat=\"$td\" ms-class=\"col-{{$index}}\">\r\n\r\n                </th>\r\n            </tr>\r\n        </thead>-->\r\n        <tbody ms-class=\"mc-hide:isInit\">\r\n            <tr ms-repeat=\"tr\">\r\n                <td ms-repeat-el=\"td\" ms-class=\"col-{{$index}}\">\r\n                    {{renderContent($outer.$index,$index)|html}}\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ },
/* 108 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(110), __webpack_require__(111)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    //获取内部保存项路径
	    function getPath(d, hooks) {
	        for (var i = 0; i < d.length; i++) {
	            hooks[d[i]._p] = "";
	            if (d[i]._c.length) {
	                getPath(d[i]._c, hooks);
	            }
	        }
	    }
	    //初始化布局
	    function iniLayout(vm, elem) {
	        //把线性布局与布局管理器关联
	        //var $linear = $(elem).find(".mc-linear-item");
	        var layoutSizeObj = {};
	        var styleHtml = "";
	        styleHtml += "<style>";
	        console.log(vm.$mamager);
	        vm.$mamager.each(function (i, val) {
	            var className = $(val).attr("class").split(" ");
	            $.each(className, function (j, item) {
	                if (item.indexOf("mc_ai") !== -1) {
	                    layoutSizeObj[item.replace("mc_ai", "mc_li")] = {
	                        width: val.offsetWidth,
	                        height: val.offsetHeight
	                    }
	                    styleHtml += "#" + vm.layoutid + " ." + item.replace("mc_ai", "mc_li") + "{width:" + val.offsetWidth + "px;height:" + val.offsetHeight + "px}";
	                    return false;
	                }
	            });
	            //$linear.eq(i).css({
	            //    height: val.offsetHeight,
	            //    width: val.offsetWidth
	            //});
	        });
	        styleHtml += "</style>";
	        vm.sizeStyle = styleHtml;
	        return layoutSizeObj;
	    }
	    var _interface = function () { };
	    avalon.component("mc:linearlayout", {
	        //外部属性
	        mode: "v",
	        data: {},
	        mcstyle: "",
	        width: false,
	        height: false,
	        padding: false,
	        pt: false,
	        pl: false,
	        pr: false,
	        pb: false,
	        layoutz: {},
	        //内部属性
	        isInit: true,
	        layoutid: "", //布局id
	        tmpid: "",
	        mtmpid: "",
	        $mamager: null, //布局管理器
	        extend: {},
	
	        sizeStyle: "", //大小样式
	
	        //view接口
	        test: _interface,
	        onInit: _interface, //必须定义此接口
	        renderStyle: _interface,
	        calPosition: _interface,
	        renderContent: _interface,
	        _trigger: _interface,
	
	        //默认配置
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            hooks.layoutid = McAvalon.util.genId("layout");
	            hooks.tmpid = McAvalon.util.genId("linear");
	            hooks.mtmpid = McAvalon.util.genId("manager");
	            getPath(vmOpts.data._c, hooks);
	            console.log(hooks);
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //接口方法
	            vm.renderStyle = function (style) {
	                if (vm[style] !== false) {
	                    return vm[style];
	                }
	                //var style = "<style>." + vm.$id + "{";
	                //vm.top === false || (style += "top:" + vm.top + "px;");
	                //vm.left === false || (style += "left:" + vm.left + "px;");
	                //vm.right === false || (style += "right:" + vm.right + "px;");
	                //vm.bottom === false || (style += "bottom:" + vm.bottom + "px;");
	                //vm.width === false || (style += "width:" + vm.width + "px;");
	                //style += "}</style>";
	                //console.log(vm);
	                //return style;
	            }
	            vm.test = function (data) {
	                console.log(data);
	                console.log(data._m);
	                console.log(vm.data);
	            }
	            vm.renderContent = function (path, cNbr) {
	                if (!cNbr) { //判断是否为末块
	                    return vm[path];
	                }
	                return "";
	            }
	            vm.calPosition = function (pType, data, idx) {
	                //todo 支持多个百分比
	                var tmp, i;
	                if (pType === "top") {
	                    if (data._m === "h") {
	                        return 0;
	                    } else {
	                        tmp = 0;
	                        for (i = 0; i < idx; i++) {
	                            if (data._c[i].w.indexOf("%") !== -1) return false;
	                            tmp += data._c[i].w >>> 0;
	                        }
	                        return tmp;
	                    }
	                } else if (pType === "bottom") {
	                    if (data._m === "h") {
	                        return 0;
	                    } else {
	                        tmp = 0;
	                        for (i = idx + 1; i < data._c.length; i++) {
	                            if (data._c[i].w.indexOf("%") !== -1) return false;
	                            tmp += data._c[i].w >>> 0;
	                        }
	                        return tmp;
	                    }
	                } else if (pType === "left") {
	                    if (data._m === "v") {
	                        return 0;
	                    } else {
	                        tmp = 0;
	                        for (i = 0; i < idx; i++) {
	                            if (data._c[i].w.indexOf("%") !== -1) return false;
	                            tmp += data._c[i].w >>> 0;
	                        }
	                        return tmp;
	                    }
	                } else if (pType === "right") {
	                    if (data._m === "v") {
	                        return 0;
	                    } else {
	                        tmp = 0;
	                        for (i = idx + 1; i < data._c.length; i++) {
	                            if (data._c[i].w.indexOf("%") !== -1) return false;
	                            tmp += data._c[i].w >>> 0;
	                        }
	                        return tmp;
	                    }
	                }
	            }
	        },
	        $ready: function (vm, elem) {
	            vm.$mamager = $(elem).find(".mc-absolute-item");
	            console.log(vm.$mamager);
	            //注册布局初始化事件
	            McAvalon.$window.on("layout_ini", function () {
	                console.log("layout_ini");
	                //触发布局大小变动事件
	                McAvalon.$window.trigger("layout_resize", iniLayout(vm, elem));
	            });
	            //注册窗口大小变动事件
	            McAvalon.$window.on("window_resize", function () {
	                console.log("layout_resize");
	                //触发布局大小变动事件
	                McAvalon.$window.trigger("layout_resize", iniLayout(vm, elem));
	            });
	            //iniLayout(vm, elem);
	            console.log("linearlayout ini");
	            //触发布局初始化事件
	            McAvalon.$window.trigger("layout_ini");
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        },
	        $childReady: function (a,b) {
	            console.log(a);
	            console.log(b);
	        }
	    });
	
	    var widget = avalon.components["mc:linearlayout"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-layout-cotar\" ms-attr-id=\"layoutid\">\r\n    {{sizeStyle|html}}\r\n\r\n    <div class=\"mc-linearlayout-cotar mc-animate\" ms-class-1=\"mc-loading: isInit\" ms-class-2=\"mc-animate-page-show: !isInit\"\r\n         ms-class-3=\"{{mcstyle}}\" ms-css-width=\"renderStyle('width')\"\r\n         ms-css-height=\"renderStyle('height')\"\r\n         ms-css-padding=\"renderStyle('padding')\" ms-css-padding-top=\"renderStyle('pt')\"\r\n         ms-css-padding-left=\"renderStyle('pl')\" ms-css-padding-right=\"renderStyle('pr')\"\r\n         ms-css-padding-bottom=\"renderStyle('pb')\"\r\n         ms-class-4=\"hf: data._m === 'h'\">\r\n        <script type=\"avalon\" ms-attr-id=\"tmpid\" style=\"display: none\">\r\n            <div class=\"mc-linear-item\" ms-repeat=\"el._c\" ms-class-1=\"hf: el._c.size() && el._m === 'h'\"\r\n                 ms-class-2=\"ftp: $outer.el._m === 'h'\" ms-class-3=\"mc_li{{el.s}}: el.s\" ms-css-padding=\"el.p\">\r\n                {{renderContent(el._p, el._c.size())|html}}\r\n                <div ms-include=\"tmpid\" ms-if=\"el._c.size()\" data-include-replace=\"true\"></div>\r\n            </div>\r\n        </script>\r\n        <div class=\"mc-linear-item\" ms-repeat=\"data._c\" ms-class-1=\"hf: el._c.size() && el._m === 'h'\"\r\n             ms-class-2=\"ftp: data._m === 'h'\" ms-class-3=\"mc_li{{el.s}}: el.s\" ms-css-padding=\"el.p\">\r\n            {{renderContent(el._p, el._c.size())|html}}\r\n            <div ms-include=\"tmpid\" ms-if=\"el._c.size()\" data-include-replace=\"true\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mc-layout-manager-cotar\" ms-class-1=\"{{mcstyle}}\" ms-css-width=\"renderStyle('width')\"\r\n         ms-css-height=\"renderStyle('height')\"\r\n         ms-css-padding=\"renderStyle('padding')\" ms-css-padding-top=\"renderStyle('pt')\"\r\n         ms-css-padding-left=\"renderStyle('pl')\" ms-css-padding-right=\"renderStyle('pr')\"\r\n         ms-css-padding-bottom=\"renderStyle('pb')\"\r\n         ms-class-2=\"hf: data._m === 'h'\">\r\n        <script type=\"avalon\" ms-attr-id=\"mtmpid\" style=\"display: none\">\r\n            <div class=\"mc-absolute-item\" ms-repeat=\"el._c\" ms-class-1=\"mc_ai{{el.s}}: el.s\"\r\n                 ms-css-width=\"$outer.el._m === 'h' && el.w.indexOf('%') === -1 && el.w\" ms-css-height=\"$outer.el._m !== 'h' && el.w.indexOf('%') === -1 && el.w\"\r\n                 ms-css-top=\"calPosition('top', $outer.el, $index)\" ms-css-bottom=\"calPosition('bottom', $outer.el, $index)\"\r\n                 ms-css-left=\"calPosition('left', $outer.el, $index)\" ms-css-right=\"calPosition('right', $outer.el, $index)\"\r\n                 ms-css-padding=\"el.p\">\r\n                <div ms-include=\"mtmpid\" ms-if=\"el._c.size()\" data-include-replace=\"true\"></div>\r\n            </div>\r\n        </script>\r\n        <div class=\"mc-absolute-item\" ms-repeat=\"data._c\" ms-class-1=\"mc_ai{{el.s}}: el.s\"\r\n             ms-css-width=\"data._m === 'h' && el.w.indexOf('%') === -1 && el.w\" ms-css-height=\"data._m !== 'h' && el.w.indexOf('%') === -1 && el.w\"\r\n             ms-css-top=\"calPosition('top', data, $index)\" ms-css-bottom=\"calPosition('bottom', data, $index)\"\r\n             ms-css-left=\"calPosition('left', data, $index)\" ms-css-right=\"calPosition('right', data, $index)\"\r\n             ms-css-padding=\"el.p\">\r\n            <div ms-include=\"mtmpid\" ms-if=\"el._c.size()\" data-include-replace=\"true\"></div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 111 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(113), __webpack_require__(114)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:absolutelayout", {
	        //外部属性
	        mcstyle: "",
	        top: false,
	        left: false,
	        right: false,
	        bottom: false,
	        width: false,
	        height: false,
	        padding: false,
	        pt: false,
	        pl: false,
	        pr: false,
	        pb: false,
	        minWidth: false,
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        content: "",
	
	        //view接口
	
	        onInit: _interface, //必须定义此接口
	        renderStyle: _interface,
	        renderContent: _interface,
	        _trigger: _interface,
	
	        //默认配置
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //接口方法
	            vm.renderStyle = function (style) {
	                if (vm[style] !== false) {
	                    return vm[style];
	                }
	                //var style = "<style>." + vm.$id + "{";
	                //vm.top === false || (style += "top:" + vm.top + "px;");
	                //vm.left === false || (style += "left:" + vm.left + "px;");
	                //vm.right === false || (style += "right:" + vm.right + "px;");
	                //vm.bottom === false || (style += "bottom:" + vm.bottom + "px;");
	                //vm.width === false || (style += "width:" + vm.width + "px;");
	                //style += "}</style>";
	                //console.log(vm);
	                //return style;
	            }
	            vm.renderContent = function () {
	                return vm["content"];
	            }
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:absolutelayout"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-absolutelayout-cotar\" ms-class-1=\"{{mcstyle}}\" ms-class-2=\"mc-loading: isInit\" ms-css-width=\"renderStyle('width')\"\r\n     ms-css-height=\"renderStyle('height')\"\r\n     ms-css-top=\"renderStyle('top')\" ms-css-left=\"renderStyle('left')\"\r\n     ms-css-right=\"renderStyle('right')\" ms-css-bottom=\"renderStyle('bottom')\"\r\n     ms-css-padding=\"renderStyle('padding')\" ms-css-padding-top=\"renderStyle('pt')\"\r\n     ms-css-padding-left=\"renderStyle('pl')\" ms-css-padding-right=\"renderStyle('pr')\"\r\n     ms-css-padding-bottom=\"renderStyle('pb')\" ms-css-min-width=\"renderStyle('minWidth')\">\r\n    {{renderContent()|html}}\r\n</div>\r\n"

/***/ },
/* 114 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(116), __webpack_require__(117)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:relativelayout", {
	        //外部属性
	        mcstyle: "",
	        width: false,
	        padding: false,
	        ptl: false,
	        pt: false,
	        pl: false,
	        pr: false,
	        pb: false,
	
	        //内部属性
	        isInit: true,
	        extend: {},
	        content: "",
	
	        //view接口
	
	        onInit: _interface, //必须定义此接口
	        renderStyle: _interface,
	        renderContent: _interface,
	        _trigger: _interface,
	
	        //默认配置
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options; //返回VM的定义对象
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //接口方法
	            vm.renderStyle = function (style) {
	                if (vm[style] !== false) {
	                    return vm[style];
	                }
	            }
	            vm.renderContent = function () {
	                return vm["content"];
	            }
	        },
	        $ready: function (vm, elem) {
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:relativelayout"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-relativelayout-cotar\" ms-class-1=\"{{mcstyle}}\" ms-class-2=\"mc-loading: isInit\" ms-css-width=\"renderStyle('width')\"\r\n     ms-css-padding=\"renderStyle('padding')\" ms-css-padding-top=\"renderStyle('pt')\"\r\n     ms-css-padding-left=\"renderStyle('pl')\" ms-css-padding-right=\"renderStyle('pr')\"\r\n     ms-css-padding-bottom=\"renderStyle('pb')\">\r\n    {{renderContent()|html}}\r\n</div>\r\n"

/***/ },
/* 117 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(_) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(119), __webpack_require__(120)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	    var _interface = function () { };
	    avalon.component("mc:selectadd", {
	        //#region 外部参数
	        label: "", //提示文字
	        labelSize: 0,
	        size: "normal", //small large
	        width: 300, //宽度,默认300px
	        disabled: false, //是否禁用
	        value: "", //值
	        tagList: [], //标签列表 tagType,tagValue,tagName
	        noAddBtn: false,
	        //normal 无类型 | group 组 | person 员工 | department 部门
	        iconCodeList: {
	            normal: "",
	            group: "&#xe739;",
	            person: "&#xe78b;",
	            department: "&#xe753;"
	        }, //图标字体code
	        //弹出层vmid
	        $dialog_vmid: null,
	        $dialog_vmidTmp: null,
	        //表单相关
	        formName: "", //表单data的key,输入框name
	        readonly: false, //是否只读，只读就无法添加，删除标签
	        fJudge: "", //绑定的判断字段
	        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
	        //#endregion
	
	        //#region 外部事件
	        onInit: _interface, //初始化接口
	        onAdd: null, //当添加按钮点击时触发事件
	        //#endregion
	
	        //#region 外部接口
	        isDisable: _interface, //是否禁用
	        //表单相关
	        getValue: _interface, //供表单组件调用返回数据
	        setValue: _interface, //供表单组件调用设置数据
	        setData: _interface, //设置标签数据,传入数组
	        getData: _interface, //获取标签数据,返回数组
	        //#endregion
	
	        //#region 内部属性
	        isInit: true,
	        extend: {},
	        lindex: -1, //布局中的序号
	        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
	        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
	        $dialogVm: null, //弹出框(弹出框类)vm
	        //#endregion
	
	        //#region 内部事件
	        doAdd: _interface, //标签添加事件
	        doDel: _interface, //标签添加事件
	        //#endregion
	
	        //#region 内部接口
	        _trigger: _interface, //内部触发器
	        addTag: _interface, //添加标签
	        delTag: _interface, //删除标签
	        delTagByVal: _interface, //删除标签
	        getIcon: _interface, //获取图标
	        //#endregion
	
	        $template: template,
	        $replace: true,
	        $construct: function (hooks, vmOpts, elemOpts) {
	            var options = avalon.mix(hooks, vmOpts, elemOpts);
	            return options;
	        },
	        $dispose: function (vm, elem) {
	            elem.innerHTML = elem.textContent = "";
	        },
	        $init: function (vm, elem) {
	            //#region 外部事件
	            vm.isDisable = function () {
	                return vm.disabled;
	            }
	            //#endregion
	
	            //#region 外部接口
	            vm.getValue = function () {
	                //todo 对must的支持,判断标签是否为空
	                var dataArr = [];
	                $.each(vm.tagList, function (i, val) {
	                    dataArr.push(val.tagValue);
	                });
	                return dataArr.join(";");
	            }
	            vm.setValue = function (val, text, isReadonly) {
	                //isReadonly 传值的时候才赋值判断
	                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
	                if (val !== "" && text !== "") {
	                    var valArr = val.split(";");
	                    var textArr = text.split(";");
	                    vm.tagList = valArr.map(function (val, i) {
	                        return {
	                            tagValue: val,
	                            tagName: textArr[i]
	                        }
	                    });
	                }
	            }
	            /**
	             * 设置数据
	             * @param {} arr 的每一项必须包括 {tagValue,tagName} 
	             * @returns {} 
	             */
	            vm.setData = function (arr) {
	                avalon.type(arr) === "array" && (vm.tagList = arr);
	            }
	            vm.getData = function () {
	                return vm.tagList;
	            }
	            //#endregion
	
	            //#region 内部事件
	            vm.doAdd = function (ev) {
	                vm.addTag();
	            }
	            vm.doDel = function (ev, idx) {
	                vm.delTag(idx);
	            }
	            //#endregion
	
	            //#region 内部接口
	            vm._trigger = function (ev, type, _this,_item) {
	                switch (type) {
	                    case "add":
	                        if (typeof vm.onAdd == "function") {
	                            vm.onAdd(ev, vm, _this);
	                        }
	                        break;
	                    case "del":
	                        if (typeof vm.onDel == "function") {
	                        return    vm.onDel(ev, vm, _this, _item);
	                        }
	                        break;
	                    default: break;
	                }
	            }
	            vm.addTag = function () {
	                //bug 第二次进入的时候vm.$dialogVm !== avalon.vmodels里面的对象,导致无法双向同步
	                //所以每次点击时重新获取
	                vm.$dialogVm = McAvalon.getVm(vm.$dialog_vmidTmp());
	                vm.$dialogVm && vm.$dialogVm.showDialog();
	            }
	            //内部 add
	            vm._addTag = function (item) {
	                //{tagType,tagValue,tagName}
	                vm.tagList.push(item);
	                vm._trigger({}, "add", {});
	            }
	            vm.delTag = function (idx) {
	                //console.log(idx);
	                var r = vm._trigger({}, "del", {}, { tagType: vm.tagList[idx].tagType, tagValue: vm.tagList[idx].tagValue });
	                if (r === false) return false;
	                avalon.Array.removeAt(vm.tagList, idx);
	            }
	            vm.delTagByVal = function (v) {
	                var r = _.find(vm.tagList, function (tag) {
	                    return tag.tagValue === v;
	                });
	                if (r)
	                //alon.Array.removeAt(vm.tagList, idx);
	                    avalon.Array.remove(vm.tagList, r);
	            }
	            vm.$dialog_vmid && McAvalon.$mcPageStore.getDeferred(vm.$dialog_vmid).done(function (_vm) {
	                vm.$dialogVm = _vm;
	                _vm.onSelectadd = function (idx, _vm) {
	                    //bug vm与传入的绑定,当有2个selectadd对应相同的$dialog_vmid会混乱
	                    vm._trigger(idx, "add", _vm);
	                }
	            });
	            vm.getIcon = function (el) {
	                return vm.iconCodeList[el.tagType] || "";
	            }
	            //#endregion
	        },
	        $ready: function (vm, elem) {
	            //向store注册组件
	            McAvalon.$mcPageStore && McAvalon.$mcPageStore.regist(vm);
	            //初始化操作
	            vm.onInit(vm, elem); //调用外部初始化函数
	            vm.isInit = false;
	        }
	    });
	
	    var widget = avalon.components["mc:selectadd"];
	    widget.regionals = {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mc-form-group mc-selectadd-cotar hf\" ms-class-1=\"mc-selectadd-lg: size=='large'\"\r\n     ms-class-2=\"mc-selectadd-sm: size=='small'\" ms-class-3=\"mc-loading: isInit\">\r\n    <label class=\"control-label mc-tip fp\" ms-if=\"label != ''\" ms-css-width=\"labelSize\">{{label}}</label>\r\n    <div class=\"ftp\">\r\n        <div class=\"hf\" ms-if=\"!noAddBtn && !readonly\">\r\n            <div class=\"mc-add-btn fp\" ms-click=\"doAdd\">添加</div>\r\n        </div>\r\n        <div class=\"mc-tag-show-cotar hf\" ms-css-width=\"width + 80\">\r\n            <div class=\"mc-tag-item fp\" ms-repeat=\"tagList\">\r\n                <div class=\"mc-close-btn\" ms-click=\"doDel($event,$index)\" ms-if=\"!readonly\">&times;</div>\r\n                <div class=\"mc-tag-type iconfont\" ms-class=\"mc-type-{{el.tagType}}\" ms-if=\"el.tagType != 'normal'\">{{getIcon(el) | html}}</div>\r\n                <div class=\"mc-tag-name\" ms-class=\"mc-type | el.tagType != 'normal'\">{{el.tagName}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 120 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;
//# sourceMappingURL=build.js.map