Array.prototype.myMap = function(callback) {
    if(typeof callback !== 'function') {
        throw new Error("callback is not a function"); 
       }
    let newArr = [];
    let myArr = this;
    
    for(let i = 0; i < myArr.length; i++) {
        newArr.push(callback(myArr[i], i, myArr));
    }

    return newArr;
}

Array.prototype.myFilter = function(callback) {
    if(typeof callback !== 'function') {
        throw new Error("callback is not a function"); 
       }
    let newArr = [];
    let myArr = this;
    
    for(let i = 0; i < myArr.length; i++) {
        if(callback(myArr[i], i, myArr)) {
            newArr.push(myArr[i]);
        }
    }

    return newArr;
}

Array.prototype.myReduce = function(callback, initialValue) {
    if(typeof callback !== 'function') {
        throw new Error("callback is not a function"); 
       }
    let myArr = this;
    let previous;
   
    if(initialValue) {
        previous = initialValue;
        for(let i = 0; i < myArr.length; i++) {
            previous = callback(previous, myArr[i], i, myArr);
        }
        return previous;
    }

    previous = myArr[0];
    for(let i = 1; i < myArr.length; i++) {
        previous = callback(previous, myArr[i], i, myArr);
    }
        
    return previous;
}

Array.prototype.myFind = function(callback) {
    if(typeof callback !== 'function') {
        throw new Error("callback is not a function"); 
       }
    let myArr = this;
    
    for(let i = 0; i < myArr.length; i++) {
        if(callback(myArr[i], i, myArr)){
            return myArr[i];
        }
    }
}

Array.prototype.myForEach = function(callback) {
    if(typeof callback !== 'function') {
        throw new Error("callback is not a function"); 
       }
    let myArr = this;
    
    for(let i = 0; i < myArr.length; i++) {
        callback(myArr[i], i, myArr);
    }
}

Function.prototype.myBind = function(myThis, ...rest) {
    let targetFunc = this;
    return function context(args){
       let keyName = Symbol('keyName');
       myThis[keyName] = targetFunc;
       let resultFunc = myThis[keyName](...rest, args);
       delete myThis[keyName];
       return resultFunc;
   };
}

Function.prototype.myCall = function(myThis, ...rest) {
    let targetFunc = this;
    let keyName = Symbol('keyName');
    myThis[keyName] = targetFunc;
    let resultFunc = myThis[keyName](...rest);
    delete myThis[keyName];
    return resultFunc;
}