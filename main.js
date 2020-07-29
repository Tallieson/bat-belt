const _ = {}

_.each = (array, iteratee) => {
  for (let i = 0; i < array.length; i++) {
    iteratee(array[i], i, array)
  }
}


// map_.map(list, iteratee, [context]) Alias: collect
// Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.

_.map = (array, iteratee) => {
  var mappedArray = []
  for (let i = 0; i < array.length; i++) {
    let value = iteratee(array[i], i, array)
    mappedArray.push(value)
}
  return mappedArray
}

// filter_.filter(list, predicate, [context]) Alias: select
// Looks through each value in the list, returning an array of all the values that pass a truth test 
// (predicate). predicate is transformed through iteratee to facilitate shorthand syntaxes.

_.filter = (array, predicate) => {
  let filteredArray = []
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
        filteredArray.push(array[i])
      }
    }
  return filteredArray
}

// find_.find(list, predicate, [context]) Alias: detect
// Looks through each value in the list, returning the first one that passes a truth test (predicate), 
// or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, 
// and doesn't traverse the entire list. predicate is transformed through iteratee to facilitate shorthand syntaxes.

_.find = (array, predicate) => {
for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
        return array[i]
      }
    }
  }


_.random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

// range_.range([start], stop, [step])
// A function to create flexibly-numbered lists of integers, handy for each and map loops. start, if omitted, defaults 
// to 0; step defaults to 1. Returns a list of integers from start (inclusive) to stop (exclusive), incremented 
// (or decremented) by step, exclusive. Note that ranges that stop before they start are considered to be zero-length 
// instead of negative — if you'd like a negative range, use a negative step.
_.range = (start, stop, step=1) => {
  let rangeArray = []
  for(let i = start; i < stop; i += step){
    rangeArray.push(i)
  }
  return rangeArray
}


export default _
