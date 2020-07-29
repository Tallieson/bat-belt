const _ = {}


// extend_.extend(destination, *sources)
// Shallowly copy all of the properties in the source objects over to the destination object,
//  and return the destination object. Any nested objects or arrays will be copied by 
//  reference, not duplicated. It's in-order, so the last source will override properties 
//  of the same name in previous arguments.

_.extend = (destination, ...source) => {
 for(let i=0; i < source.length; i++){
    destination.push(source)
    }
    return destination
}


// times_.times(n, iteratee, [context])
// Invokes the given iteratee function n times. Each invocation of iteratee is called with an 
// index argument. Produces an array of the returned values.
_.times = (n, iteratee) => {
    timesedArray = []
    for(i = 0; i < n; i++){
        timesedArray.push(iteratee(timesedArray[i]))
    }
    return timesedArray
}

_.constant = () => {
    
}

_.delay = () => {
    
}