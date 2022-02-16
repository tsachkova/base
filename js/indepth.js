Array.prototype.myMap = function(callback) {
    let newArr = [];
    let myArr = this;
    
    for(let i = 0; i < myArr.length; i++) {
        newArr.push(callback(myArr[i], i, myArr));
    }

    return newArr;
}

Array.prototype.myFilter = function(callback) {
    let newArr = [];
    let myArr = this;
    
    for(let i = 0; i < myArr.length; i++) {
        let result = callback(myArr[i], i, myArr);
        if(Boolean(result)) {
            newArr.push(myArr[i]);
        }
    }

    return newArr;
}

Array.prototype.myReduce = function(callback, initial) {
    let myArr = this;
    let previous;
    let result;

    if(initial) {
    previous = initial;
    }

    if(!previous) {
        if(typeof myArr[0] === 'number') {
            previous = 0;
        }
        else {
            previous = '';
        }
    }
    
    for(let i = 0; i < myArr.length; i++) {
        if(initial){
            result = callback(previous, myArr[i], i, myArr);
        }
        else {
            result = callback(previous, myArr[i], ++i, myArr);
        }
       
        previous = result;
    }
    return previous;
}

Array.prototype.myFind = function(callback) {
    let search;
    let myArr = this;
    
    for(let i = 0; i < myArr.length; i++) {
        let result = callback(myArr[i], i, myArr);
        if(result) {
            search = myArr[i];
            break;
        }
    }

    return search;
}

Array.prototype.myForEach = function(callback) {
    let myArr = this;
    
    for(let i = 0; i < myArr.length; i++) {
        callback(myArr[i], i, myArr);
    }
}

Function.prototype.myBind = function(obj, ...rest) {
    let func = this;
    return function context(args){
       let keyName = '' + new Date();
       obj[keyName] = func;
       let resFunc = obj[keyName](...rest, args);
       delete obj[keyName];
       return resFunc;
   };
}

Function.prototype.myCall = function(obj, ...rest) {
    func = this;
    let keyName = '' + new Date();
    obj[keyName] = func;
    let resFunc = obj[keyName](...rest);
    delete obj[keyName];
    return resFunc;
}