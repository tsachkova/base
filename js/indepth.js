function myMap(arr, callback) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr;

}