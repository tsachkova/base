function isAnagramm (str1, str2) { 
    if( str1.length !== str2.length ) {
        return false;
    }
    else { 
        let string = '';
        for(let i = 0; i < str1.length; i++) {
            if(str2.indexOf([str1[i]]) !== -1) {
                string = string + str1[i];
            }
        }   
        if(str1 === string) {
            return true;
        }
        else {return false}  
    }
}


function digitInNamber (number, n) {
    n = n||1;
    if(number/Math.pow(10,n)<1) {
        console.log(n)
    } else {
        digitInNamber (number, n+1 )
    }
}

function palindrom (string) {
    let onlyLeter = '';
    for(let i = 0; i < string.length; i++) {
        if((string[i] !== '!' ) &&  (string[i] !== ' ') && (string[i] !== '-') && ((string[i] !== '?'))) {
            onlyLeter = onlyLeter + string[i]
        }
    }
    onlyLeter = onlyLeter.toLowerCase()
    let result = 'палиндром';
        for (let i = 0; i < onlyLeter.length; i++) {
            let lastLetter = onlyLeter.length -1;
            if(onlyLeter[i] !== onlyLeter[(lastLetter - i)]) {
                result = 'не палиндром'
            }
        }
    
    return (result)

}


function Rectangle (sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.squareRectangle = function() {
        return ("square rectangle = " + this.sideB * this.sideA)
    };
    this.perimetrRectangle = function() {
        return ("square rectangle = " + (2 * (this.sideA + this.sideB))) 
    }
}

calcRectangle = new Rectangle( 5, 6);
console.log(calcRectangle.squareRectangle());
console.log(calcRectangle.perimetrRectangle())

function Triang (sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.squareTriang = function() {
        let halfPer = (this.sideA + this.sideB + this.sideC) /2
        return ("square triangle = " + 
        Math.sqrt(halfPer * (halfPer - this.sideA) * (halfPer - this.sideB) * (halfPer - this.sideC)))
    };
    this.perimetrTriang = function() {
        return ("perimetr triangle = " + (this.sideC + this.sideA + this.sideB)) 
    }
}

calcRectangle = new Triang( 5, 6, 7);
console.log(calcRectangle.squareTriang());
console.log(calcRectangle.perimetrTriang())

function Circle ( radius ) {
    this.radius = radius;
    this. squareCircle = function() {
        return ('square circle = ' + (Math.PI * this.radius * this.radius))
    };
    this.perimetrCircle = function() {
        return ('square circle = ' + (Math.PI * 2 * this.radius))
    }
}

calcRectangle = new Circle( 5 );
console.log(calcRectangle.squareCircle());
console.log(calcRectangle.perimetrCircle());




let factorial = function (number, n) {
    n = n || number;
    n = n * (number - 1);
    console.log( n );
    if (number - 1 === 2) {
        console.log(n);
        return n;
    } else {
        return factorial ((number - 1), n )
    }
}

let memoiz = function () {
    let cash = {};
    return function (number){
        if(number in cash) {
            console.log('memo')
            return cash[number];
        } else { 
            console.log('calc');
            let rezult = factorial(number);
            cash[number] = rezult;
            console.log(cash)
        return rezult
        } 
    } 
}

let memoFactorial = memoiz();


let arr = [1, -1, 2, 3, 6, 5];
let sumAllFunc = function(sum, item){
                    return (sum + item)
                }

let sumEvenFunc = function(sum, item,){
                    if (item%2 === 0) {
                        return (sum + item)
                    } else {
                        return sum
                    }
                 }     
    
let sumMultOfThreeFunc = function(sum, item,){
                        if (item%3 === 0) {
                            return (sum + item)
                        } else {
                            return sum
                        }
                    }


let sumOddPositivFunc =     function(sum, item,){
                            if ((item%2 !== 0)&&(item >0)) {
                                return (sum + item)
                            } else {
                                return sum
                            }
                        }

 let sumAll = arr.reduce(sumAllFunc, 0)
 
 let sumEven = arr.reduce(sumEvenFunc, 0)

 let sumMultOfThree = arr.reduce(sumMultOfThreeFunc, 0)

 let sumOddPositiv = arr.reduce(sumOddPositivFunc, 0)

   
function sumRecurs(arr, sum, i) {
    sum = sum||0;
    i = i||0;
    sum = sum + arr[i];
       if(arr.length  < i+2) {
       return console.log(sum)
    } else {
        return sumRecurs(arr, sum, i+1)
    }
}

sumRecurs(arr);

function amountOfElements(arr) {
    let nullNumb = 0;
    let negativNumb = 0;
    let positivNumb = 0;
    let primeNumb = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
            negativNumb+= 1;
        } else if (arr[i] > 0) {positivNumb+=1
        } else {nullNumb+=1};
        let flag = false;
        if(arr[i] > 0){
            for(let m = 2; m < arr[i]; m++){
                if((arr[i]%m === 0)){
                flag = true;
            } 
            }if(flag === false){primeNumb+=1}
        } 
        
    }
    return  {nullNumb,  negativNumb,  positivNumb, primeNumb} 
}



function SumMinToMax(min, max, sum) {
    min = min + 1;
    sum = sum || 0;
    sum = sum + min;
    if (min + 1 < max) {
        return SumMinToMax(min, max, sum)
    } else {
        return console.log(sum)
    }
}

function SumMinToMaxMultThree(min, max, sum) {
    min = min + 1;
    sum = sum || 0;
    if (min%3 === 0) {
        sum = sum + min;
    }
    if (min + 1 < max) {
       return SumMinToMaxMultThree(min, max, sum)
    } else {
        return console.log(sum)
    }
}

function SumMinToMaxPositiv(min, max, sum) {
    min = min + 1;
    sum = sum || 0;
    if (min > 0) {
        sum = sum + min;
    }
    if (min + 1 < max) {
       return SumMinToMaxPositiv(min, max, sum)
    } else {
        return console.log(sum)
    }
}

function SumMinToMaxСycle(min, max) {
    let sum = 0;
    for (let i = min + 1; i < max; i++) {
        sum = sum + i
    }
    return console.log(sum)
}



let multyArray = [[1, 2, 3, 4, 5, 6 ],
                 [5, 6, 7, 8, 6, 6 ], 
                 [9, 10, 11, 12, 12, 12],
                 [9, 10, 11, 12, 12, 12]];

function TransponMatrix(matrix) {
    let newMatrix = [];
    for (let j = 0; j < matrix.length; j++) {
        let matrixRow = matrix[j];
        console.log(matrixRow)
        for (let i = 0; i < matrixRow.length; i++ ) {
            if (newMatrix.length < i +1) {
                newMatrix.push([])
            }
            newMatrix[i][j] = matrixRow[i];
                  }
    }
    return console.log (newMatrix)
}

mx1 = [[1,2,1],
       [2,1,2]];

mx2 = [[2,1,2],
       [1,2,1]]

function sumMatrix( matrix1, matrix2) {
    let sumMatr = [];
    for(let i = 0; i < matrix1.length; i++) {
        sumMatr.push([]);
        let matrixRow1 = matrix1[i];
        let matrixRow2 = matrix2[i];
        for(let j = 0; j < matrixRow1.length; j++) {
            sumMatr[i][j] = matrixRow1[j] + matrixRow2[j]
        }
    }
    return console.log(sumMatr)
}

multyArray = [[1, 2, 3, 4, 5, 6 ],
              [5, 6, 7, 8, 0, 6 ], 
              [9, 10, 11, 12, 12, 12],
              [9, 0, 11, 12, 12, 12]];

function deleteStrngWithNull(arr, j) {
    j = j||0
    let arrString = arr[j];
    let flag = false;
    for( let i = 0; i < arrString.length; i++ ) {
        if(arrString[i] === 0) {
            flag = true;
        }
    }
    if(flag === true) {
        arr.splice(j, 1);
        --j;
        console.log(arr)
    }
    if(j+1 < arr.length){
        return deleteStrngWithNull(arr, j + 1)
    } else {return console.log(arr)}
}

function deleteСolumnWithNull(arr, j) {
    j = j||0
    let arrString = arr[j];
    for( let i = 0; i < arrString.length; i++ ) {
        if(arrString[i] === 0) {
            for(let m = 0; m < arr.length; m++) {
                arr[m].splice(i, 1)
            }
        }
    }
    if(j+1 < arr.length){
        return deleteСolumnWithNull(arr, j + 1)
    } else {return console.log(arr)}
}

multyArray = [[1, 2, 3, 4 ],
              [5, 6, 7, 8], 
              [9, 10, 11, 12],
              [9, 0, 11, 12]];

function underDiagonalMatrixSum(matrix) {
    let sum = 0;
    console.log(matrix)
    for (let i = 1; i < matrix.length; i++) {
        matrixString = matrix[i];
        console.log(matrixString)
        for(let m = 0; m < i; m++) {
            console.log(matrixString[m])
            sum = sum + matrixString[m]
        }
    }
    return console.log(sum)
}

function underDiagonalMatrix(matrix) {
    let sum = 0;
    let nullElement = 0;
    let count = 0;
    console.log(matrix)
    for (let i = 1; i < matrix.length; i++) {
        matrixString = matrix[i];
        console.log(matrixString)
        for(let m = 0; m < i; m++) {
            count+= 1
            sum = sum + matrixString[m];
            if (matrixString[m] === 0) {
                nullElement+= 1;
            }

        }
    }
    let average = sum/ count;
    return console.log(sum, nullElement, average )
}

function overDiagonalMatrix(matrix) {
    let sum = 0;
    let nullElement = 0;
    let count = 0;
    console.log(matrix)
    for (let i = 0; i < matrix.length; i++) {
        matrixString = matrix[i];
        console.log(matrixString)
        for(let m = i+1; m < matrixString.length; m++) {
            count+= 1
            sum = sum + matrixString[m];
            if (matrixString[m] === 0) {
                nullElement+= 1;
            }

        }
    }
    let average = sum/ count;
    return console.log(sum, nullElement, average )
}

function DiagonalMatrix(matrix) {
    let sum = 0;
    let nullElement = 0;
    let count = 0;
    console.log(matrix)
    for (let i = 0; i < matrix.length; i++) {
        matrixString = matrix[i];
        sum = sum + matrixString[i];
        count+= 1;
        if (matrixString[i] === 0) {
            nullElement+= 1;
        }
    }
    let average = sum/ count;
    return console.log(sum, nullElement, average )
}

function averageArr (arr){
    let sumOdd = 0;
    let sumEven = 0;
    let sum = 0;
    let countEven = 0;
    let countOdd = 0;
    let count = 0;
    function cycle(arr) {        
        for(let j = 0; j < arr.length; j++){
        if(arr[j] % 2 === 0) {
            sumEven = sumEven + arr[j]; 
            countEven = countEven + 1;
        } else {sumOdd = sumOdd +arr[j]
            countOdd = countOdd + 1;}
        sum = sum + arr[j];
        count = count + 1;
    }}
    if (Array.isArray(arr[0])) {
        for(let i = 0; i < arr.length; i++) {
            let arrIn = arr[i];
            cycle(arrIn)
        }
    } else {
       cycle(arr)
    }
    let averageSum = sum/count;
    let averageOdd = sumOdd/countOdd;
    let averageEven = sumEven/countEven;
    
    return {averageSum, averageOdd, averageEven}
}

function withoutPunct(string) {
    let stringWithoutPunct = '';
    for (i = 0; i < string.length; i++) {
        let letter = string[i];
        let allLetter = '!"#$%&()*+,-./:;<=>?@[\]^_{|}~';
        if(!(allLetter.indexOf(letter) + 1)) {
            stringWithoutPunct = stringWithoutPunct + letter
        }
    }
    return stringWithoutPunct;

}

function uniqueWords(string) {
    let stringWithoutPunct = withoutPunct(string);
    console.log(stringWithoutPunct)
    let unique = 0;
    let arrString = stringWithoutPunct.split(' ');
    
    for (let i = 0; i < arrString.length; i++) {
        let word = arrString[i];
        let flag = false;
        
        for(let j = 0; j < arrString.length; j++) {
           
            if((word === arrString[j]) && (i !== j)) {
                console.log(arrString[j])
                flag = true
            }
            if ((j === arrString.length -1) && (flag === false )) {
                unique = unique + 1
            }
        }  
    } 
    return unique      
}

arr = [[1, -1, 3],
      [4, 5, 6, 0]]

function twoArray(arr, func) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
        let embededArr = arr[i];
        console.log(embededArr)
        let sumEmbededArr = embededArr.reduce(func, 0);
        sum = sum + sumEmbededArr;
    }
    return console.log(sum)
}

let sumArrays = twoArray(arr, sumAllFunc)
let sumEvenArrays = twoArray(arr, sumEvenFunc)
let sumMultOfThreeArrays = twoArray(arr, sumMultOfThreeFunc)
let sumOddPositivArrays = twoArray(arr, sumOddPositivFunc)

// function amountOfElementsArreys(arr) {
//     let nullNumbArrs = 0;
//     let negativNumbArrs = 0;
//     let positivNumbArrs = 0;
//     let primeNumbArrs = 0;
//     for(let i = 0; i < arr.length; i++) {
//         let embededArr = arr[i];
//         let rezultEmbArr = amountOfElements(embededArr);
//         nullNumbArrs = nullNumbArrs + rezultEmbArr.nullNumb
//         negativNumbArrs = negativNumbArrs + rezultEmbArr.negativNumb
//         positivNumbArrs = positivNumbArrs + rezultEmbArr.positivNumb
//         primeNumbArrs = primeNumbArrs + rezultEmbArr.primeNumb
//     }
//     return console.log(nullNumbArrs, negativNumbArrs, positivNumbArrs, primeNumbArrs)
// }
// amountOfElementsArreys(arr)

// й

// Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел).
function toBinary(numb) {
    let binaryBacward = '';
    let oneBit = 1;
    while (oneBit <= numb) {
        if(oneBit & numb) {
            binaryBacward = binaryBacward + '1'
        } else { 
            binaryBacward = binaryBacward + '0'
        }
    oneBit = oneBit << 1 ;
    }
    let binary = '';
    for(let i = binaryBacward.length - 1; i >= 0; i--){
        binary = binary + binaryBacward.charAt(i);
    }
    return binary
}

function toDex(binary) {
    let multiplier = 1;
    let dex = 0;
    for(let i = binary.length - 1; i >= 0; i--) {
        if(binary[i] === '1') {
        dex = dex + multiplier }
        multiplier = multiplier * 2; 
    }
    return dex
}

function isNegative (number) {
    if((number >> 31)&1) {
        return true;
    } else {return console.log('positsve')}
}

function amountOfElements(numb) {
    let count = 0;
    let countOne = 0;
    let countZero = 0;
    let oneBit = 1;
    while (oneBit <= numb) {
        if(oneBit & numb) {
            ++countOne;
        } else { 
            ++countZero;
        }
        oneBit = oneBit << 1 ;
        ++count;
    }
    if((numb >> 31)&1) { 
        countOne = countOne + (32 - count) 
    } else {
        countZero = countZero + (32 - count)
    }
    return {count, countOne, countZero}
}

// function InvertBit(numb)
//     let multiplier = 1;
//     let dex = 0;
//     for(let i = binary.length - 1; i >= 0; i--) {
//         if(binary[i] === '1') {
//         dex = dex + multiplier }
//         multiplier = multiplier * 2; 
//     }
//     return dex
// }

function toInvertBit(numb) {
    let binaryBacward = '';
    let oneBit = 1;
    for(let i = 0; i < 32; i++) {
        if(oneBit & numb) {
            binaryBacward = binaryBacward + '0'
        } else { 
            binaryBacward = binaryBacward + '1'
        }
    oneBit = oneBit << 1 ;
    }
    let binary = '';
    for(let i = binaryBacward.length - 1; i >= 0; i--){
        binary = binary + binaryBacward.charAt(i);
    }
    return console.log(binary)
}