Array.prototype.customMap = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error("callback is not a function");
    }
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
}

Array.prototype.customFilter = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error("callback is not a function");
    }
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
}

Array.prototype.customReduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
        throw new Error("callback is not a function");
    }
    let previous;
    let cycleStart;

    if (initialValue) {
        previous = initialValue;
    } else {
        previous = this[0];
        cycleStart = 1;
    }

    for (let i = cycleStart || 0; i < this.length; i++) {
        previous = callback(previous, this[i], i, this);
    }
    return previous;
}

Array.prototype.customFind = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error("callback is not a function");
    }

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
}

Array.prototype.customForEach = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error("callback is not a function");
    }

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

Function.prototype.customBind = function (customThis, ...rest) {
    let targetFunc = this;
    return function context(args) {
        let keyName = Symbol('keyName');
        customThis[keyName] = targetFunc;
        let resultFunc = customThis[keyName](...rest, args);
        delete customThis[keyName];
        return resultFunc;
    };
}

Function.prototype.customCall = function (customThis, ...rest) {
    let keyName = Symbol('keyName');
    customThis[keyName] = this;
    let resultFunc = customThis[keyName](...rest);
    delete customThis[keyName];
    return resultFunc;
}