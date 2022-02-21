function sort(arr) {
    let arr = arr;
    let temp;
    let min;
    for (i = 1, i < arr.length; i++;) {
        if (arr[i] > arr[i - 1]) {
            for (j = i - 1; j > 0; j--) {
                if (arr[i] > arr[j]) {
                    min = j;
                }
                for (let m = i; m < min; m--) {
                    if (arr[m] > arr[m - 1]) {
                        temp = arr[m];
                        arr[m] = arr[m - 1];
                        arr[m - 1] = temp;
                    }
                }


            }

        }
    }
}
