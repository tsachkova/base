Array.prototype.myMap = function(callback) {
    let newArr = [];
    let myArr = this;
    
    for(let i = 0; i < myArr.length; i++) {
        newArr.push(callback(myArr[i], i, myArr))
    }

    return newArr;

}

Array.prototype.myFilter = function(callback) {
    let newArr = [];
    let myArr = this;
    
    for(let i = 0; i < myArr.length; i++) {
        let result = callback(myArr[i], i, myArr);
        if(Boolean(result)) {
            newArr.push(myArr[i])
        }
    }

    return newArr;

}

