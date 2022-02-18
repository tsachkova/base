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


function quickSort(arr, start, end) {
    start = start || 0;
    end = end || arr.length;
    if((end - start) <= 1){
        return;
    }
    let temp;
    let separator;
    let number = end - 1;
    //let separat = Math.round((end - start) / 1);
    for (let i = start; i < end; i++) {
        if ((arr[i] >= arr[number])&&(number>i)) {

            temp = arr[i];
            // if(number === i+1) {
            //     arr[i] = arr[number];
            //     arr[number] = temp; 
            //     number = i;
            //     --i
            // }
            
                arr[i] = arr[number - 1];
                arr[number -1] = arr[number];
                arr[number] = temp;
                number = --number;
                --i;
                       
        }
    }
    console.log(arr);
    console.log(number);
    
    
    if(start === 0) {
        console.log('lll')
    quickSort(arr, start, number);
    }
    console.log('jamp');
    
    
    return  quickSort(arr, number +1, 0);
    

    // console.log('jamp');
    // quickSort(arr, number +1, end);
    
  
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



