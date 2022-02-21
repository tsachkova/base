function insertionSort(arr) {
    let mixArr = arr;
    let temp;
    for (let i = 1; i < arr.length; i++) {
        sortNumber = arr[i];
        for (let j = 0; j < i; j++) {
            
            if (arr[j] > arr[i]) {
                console.log(mixArr)
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
    if(end === 0) {
        end === 0;
    } else {
        end = end || arr.length;
    }

    let temp;
    let number = end - 1;

    for (let i = start; i < end ; i++) {
        if ((arr[i] > arr[number])&&(number > i)) {
            temp = arr[i];
            arr[i] = arr[number - 1];
            arr[number -1] = arr[number];
            arr[number] = temp;
            number = --number;
            --i;
        }
    }
    console.log(arr);
    console.log(start);
    console.log(number);
    
    if(!((end - start) <= 2)) {
        return  quickSort(arr, start, number);
    }
    
    
    end = arr.length;
    console.log('jump');
    console.log(end);
    console.log(number);
    
    if(!((end - start) <= 2)) {
        return  quickSort(arr, ++number, end);
    }
    return arr;
          
}


function bynaryCash(){
    let root;
    return function bynaryTree(number) {
        class Node {
            constructor(number) {
                this.number = number;
                this.left = 0;
                this.right = 0;
            }
        }
        
        if (root === undefined) {
            root = new Node (number);
        } else {
            let way = root;
            console.log(way.right);
            for(let i = 0; true; i++ ) {
                if (number > way.number){
                    
                    if (way.right !==0) {

                        way = way.right;
                    } else { way.right = new Node(number);
                            break;
                    }
                }
                if (number < way.number){
                    if (way.left !== 0)  {
                        way = way.left;
                    } else { way.left = new Node(number);
                            break;
                    }    
                    
                }
          
            }
            // way = new Node (number);
        }    
            
        return root;
    }
}



let bynaryTree = bynaryCash();