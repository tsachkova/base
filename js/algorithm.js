function insertionSort(arr) {
    let mixArr = arr;
    let temp;
    for (let i = 1; i < arr.length; i++) {
        sortNumber = arr[i];
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[i];
                for (let m = i; m > j; m--) {
                    arr[m] = arr[m - 1];
                }
                arr[j] = temp;
            }

        }
    }
    return console.log(mixArr)

}


function quickSort(arr) {
    let sortArr = arr;
    let temp;
    let number = 0;
    for (let i = 1; i < sortArr.length; i++) {
        if (sortArr[i] < sortArr[number]) {
            temp = sortArr[i];
            if(number === i-1) {
                sortArr[i] = sortArr[number];
                sortArr[number] = temp; 
                number = i;
            }
            else {
                sortArr[i] = sortArr[number + 1];
                sortArr[number +1] = sortArr[number];
                sortArr[number] = temp;
                number = ++number
            }
        }
    }
    // if ()
    return sortArr
}
//     function recursSort(indexMore, indexLess) {
//         indexMore = indexMore || sortArr.length;
//         indexLess = indexLess || 0;
//         let flag;
//         for (let i = indexLess; i < separator; i++) {
//             if (sortArr[separator] > sortArr[i]) {
//                 for (let j = indexMore; j > separator; j--) {
//                     if (sortArr[separator] < sortArr[i]) {
//                         temp = arr[j];
//                         arr[j] = arr[i];
//                         arr[i] = temp;
//                         indexMore = j;
//                         flag = true;
//                         break;
//                     }
                 
//                 }
//             indexLess = i;
//             break;
//         }




//     }
//     let more;
//     let less;



// }



