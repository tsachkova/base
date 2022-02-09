
// Написать функцию которая проверяет являются две строки анаграммой или нет

function isAnagramm (str1, str2) { 
    if(( typeof str1 !== 'string' ) || (typeof str2 !== 'string')) {
        throw new Error("Error arguments type")
    }
    if( str1.length !== str2.length ) {
        return false;
    }
    else { 
        for(let i = 0; i < str1.length; i++) {
            if(str2.indexOf([str1[i]]) !== -1) {
                str2 = str2.replace(str1[i], '')
            }
        }   
        if(str2 === '') {
            return true;
        }
        else {return false}  
    }
}

// Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии.

function digitInNamber (number, n) {
    if(typeof number !== "number"){
        throw new Error("Error arguments type")
    }
    n = n||1;
    if(number/Math.pow(10,n)<1) {
        return(n)
    } else {
        digitInNamber (number, n+1 )
    }
}

// Реализовать функцию которая проверяет, является ли строка палиндромом

function withoutPunct(string) {
    if( typeof string !== 'string' )  {
        throw new Error("Error arguments type")}
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

function isPalindrom (string) {
    if( typeof string !== 'string' )  {
        throw new Error("Error arguments type")}
    onlyLeter = withoutPunct(string).toLowerCase();
    onlyLeter = onlyLeter.replace(/\s+/g, '');
    console.log(onlyLeter)
    let result = true;
        for (let i = 0; i < onlyLeter.length; i++) {
            let lastLetter = onlyLeter.length -1;
            if(onlyLeter[i] !== onlyLeter[(lastLetter - i)]) {
                result = false
            }
        }
    return (result)
}

//Написать функцию которая вычисляет подсчет уникальных слов в предложении

function uniqueWords(string) {
    if( typeof string !== 'string' )  {
        throw new Error("Error arguments type")}
    let stringWithoutPunct = withoutPunct(string);
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

//Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов.


function Rectangle (height, width) {
    if(( typeof height !== 'number' ) || (typeof width !== 'number')) {
        throw new Error("Error arguments type")}
    this.height = height;
    this.width = width;
    this.squareRectangle = function() {
        return ("square rectangle = " + (this.width * this.width))
    };
    this.perimetrRectangle = function() {
        return ("square rectangle = " + (2 * (this.width + this.width))) 
    }
}

calcRectangle = new Rectangle( 5, 6);
let squareRectangle = calcRectangle.squareRectangle();
let perimetrRectangle = calcRectangle.perimetrRectangle()

function Triang (sideA, sideB, sideC) {
    if(( typeof sideA !== 'number' ) || (typeof sideB !== 'number')|| (typeof sideC !== 'number')) {
        throw new Error("Error arguments type")}
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

calcTriang = new Triang( 5, 6, 7);
squareTriang = calcTriang.squareTriang();
perimetrTriang = calcTriang.perimetrTriang()

function Circle ( radius ) {
    if ( typeof radius !== 'number' ) {
        throw new Error("Error arguments type")}
    this.radius = radius;
    this. squareCircle = function() {
        return ('square circle = ' + (Math.PI * this.radius * this.radius))
    };
    this.perimetrCircle = function() {
        return ('square circle = ' + (Math.PI * 2 * this.radius))
    }
}

calcCircle = new Circle( 5 );
squareCircle = calcCircle.squareCircle();
perimetrCircle = calcCircle.perimetrCircle();

// Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала.


let factorial = function (number, n) {
    if ( typeof number !== 'number' ) {
        throw new Error("Error arguments type")}
    n = n || number;
    n = n * (number - 1);
    if (number - 1 === 2) {
        return n;
    } else {
        return factorial ((number - 1), n )
    }
}

let memoiz = function () {
    let cash = {};
    return function (number){
        console.log(cash)
        if(number in cash) {
           return cash[number];
        } else { 
            let result = factorial(number);
            cash[number] = result;
            return result
        } 
    } 
}

let memoFactorial = memoiz();
let resultfactorial = memoFactorial(5);


//Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные), реализовать с помощью рекурсии для одномерного массива.

let arr = [1, -1, 2, 3, 6, 5];

let sumAllFunc = function(item){
                    return item
                }

let sumEvenFunc = function(item){
                    if (item%2 === 0) {
                        return  item
                    }
                    else {return 0}
                }    
    
let sumMultOfThreeFunc = function(item){
                        if (item%3 === 0) {
                            return (item)
                        } else {
                            return 0
                        }
                    }


let sumOddPositivFunc =     function(item){
                            if ((item%2 !== 0)&&(item >0)) {
                                return (item)
                            } else {
                                return 0
                            }
                        }
               
 function sum(arr, callback) {
    if (( typeof arr[0] !== 'number') || (typeof callback !== 'function' )) {
        throw new Error("Error arguments type")};
     let sum = 0;
     for(let i = 0; i < arr.length; i++) {
        sum = sum + callback(arr[i])
     }
     return sum
 }
arr3 = [1,2,3,4,5,6,7,-8]
 let sumAll = sum(arr3, sumAllFunc );
 
 let sumEven = sum (arr3, sumEvenFunc);

 let sumMultOfThree = sum (arr3, sumMultOfThreeFunc)

 let sumOddPositiv = sum (arr3, sumOddPositivFunc)

   
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

function InvertBit(numb){
    let multiplier = 1;
    let dex = 0;
    for(let i = binary.length - 1; i >= 0; i--) {
        if(binary[i] === '1') {
        dex = dex + multiplier }
        multiplier = multiplier * 2; 
    }
    return dex
}

// Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа 
//фибоначчи (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. 
//Реализовать с помощью рекурсии.

let fibonachiIterator = {
    num: 18
}
fibonachiIterator[Symbol.iterator] = function() {

    let prev = 1;
    let next = 1;
    let num = this.num;
    let res;

    return {
        next() {
            if (prev <= num) {
                res = prev + next;
                prev = next;
                next = res;

                return {
                    done: false,
                    value: res
                };
            } else {
                return {
                    done: true
                };
            }
        }

    }
};
let l = 0;
for (let num of fibonachiIterator) {
    console.log(num)
    if (l++ > 10)
        break;
}

function* fibonachiGenerator(){
    let n = 10
    let prev;
    let next;
    let res;
    if (prev === undefined){
        prev = 0;
        next = 1;
    }

    while (prev < n){
        res = prev + next;
        prev = next;
        next = res;
        yield res
    }
}

let generator = fibonachiGenerator();



function recursFibonachi(n, arr, numb2, res) {
    arrFibonachi = arr||[];
    let numb1 = 0;
    numb2 = numb2||1;
    res = res||0;
    if(arrFibonachi.length < (n-1)){
    numb1 = numb2;
    numb2 = res;
    res = numb1 + numb2;
    arrFibonachi.push(res);
    console.log(arrFibonachi);
    return recursFibonachi(n, arrFibonachi, numb2, res)}
    else {return arrFibonachi}
  
}


function fibonachiMemo(){
    
    let cash = [];
    
    return function(n){
        if(n > cash.length){
            cash = recursFibonachi(n);
            console.log(cash);
            
            
        }
        
        else{
            console.log('memo');
            let arrResult  = [];
            for(let i = 0; i < n; i++) {
                arrResult.push(cash[i])
            }
            return arrResult
        }
    }
}
        let fiboMemo = fibonachiMemo();


//         console.log(countCash);
//         console.log(countIn);
//         console.log(cash);
//         ++countIn;
//         if((countIn >= countCash)||(cash.length = 0)){
//             result = generator.next();
//             if(result.done)
//             {countIn = 0}
//             else {++countCash}
//             cash.push(result);
//             console.log('calc');
//             return result;
//         }
//         else{
//             console.log('memo')
//             return cash[countIn - 1]
//         }
//     } 
// }

// let memoizFibonachi = fibonachiMemo()
    

//     console.log(memoizFibonachi())
   





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





// function Counter(...args) {
//     for(let item in args) {
//         this[item] = args[item];
//     }
//     this.length = args.length;
// }

// Counter.prototype[Symbol.iterator] = function() {
//     return {
//         self: this,
//         index: 0,
//         next() {
//             if(this.index < this.self.length) {
//                 return {
//                     value: this.self[this.index++],
//                     done: false,
//                 };
//             }

//             return {
//                 value: undefined,
//                 done: true,
//             };
//         },
//     };
// };

// let counter = new Counter(1,2,3,4,5,6,7,8,9,10);
// let sum = 0;
// for(let item of counter) {
//     sum += item;
// }
// console.log(sum);

//let it = counter[Symbol.iterator]();



// let obj = {  index: 100,
//             [Symbol.iteration]:function(){
//                                      let j = 1;
//                                      let prev = 1;
//                                      let new1 = 1;
//                                      function next() {
//                                          if(j++ < 100) {
//                                             [prew, new1] = [new1, (new1 + prev)||1];
//                                             return {prev, done:false}
//                                          }
//                                          else {
//                                              return {done:true}
//                                         }
//                                     }
//              }
//         }
   
        
//         for(let num of obj){console.log(prev)}
//                                     return { 
//                                         prew : 0,
//                                         start : 1,
//                                         new : 0,
//                                         next(){
//                                                  if(this.index < 1000){
//                                                 this.new = this.start + this.prev;
//                                                 this.start = this.prev;
//                                                 this.prew = this.new;
function FibonachiRecurs(){
    let numbPrev = 1;
    let numbNext = 1;
     

}
    //                                      let j = 1;
    //                                      let prev = 1;
    //                                      let new1 = 1;
    //                                      function next() {
    //                                          if(j++ < 100) {
    //                                             [prew, new1] = [new1, (new1 + prev)||1];
    //                                             return {prev, done:false}
    //                                          }
    //                                          else {
    //                                              return {done:true}
    //                                         }
    //                                     }
    //              }
    //         }
       
            
    //         for(let num of obj){console.log(prev)}
//                                                 return {value: this.new, done:false}}
//                                                 return {done:true}

//                                                 }

//                                         }
// }}

// for (let value of obj) {let obj = {[Symbol.iteration]:function(){
//     let index = 0;
//         return { 
//             prew : 0,
//             start : 1,
//             new : 0,
//             next(){
//                      if(this.index < 1000){
//                     this.new = this.start + this.prev;
//                     this.start = this.prev;
//                     this.prew = this.new;

//                     return {value: this.new, done:false}}
//                     return {done:true}

//                     }

//             }
// }}

// for (let value of obj) {
// console.log(value);

// if (counter++ > 1000) { // let's make sure we get out!
// break;
// }


// function* fibonachi(){
//     let next = 1;
//     let second = 1;
//     if(true){
//        value = second;
//        second = next;
//        next = second + value;
       
//         }
//     }



// let b = fibonachi();
// console.log(b.next())

let range = {
    to: 9,
    res: 0,
    prv: 1,
    nxt: 1,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        // if (this.prv === undefined){
        //
        // }

        if (this.prv <= this.to) {
            this.res = this.prv + this.nxt;
            this.prv = this.nxt;
            this.nxt = this.res;
            return {
                done: false,
                value: this.res
            };
        } else {
            this.prv = 1
            this.nxt = 1

            return {
                done: true
            };
        }
    }

};

//////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////

// range.nxt = 8
// let n = 0;
// for (let num of range) {
//     console.log(num);

//     if (n++ > 30)
//         break;
// }

function* fib(){
    let prev;
    let next;
    let res;

    if (prev === undefined){
        prev = 0
        next = 1
    }

    while (true){
        res = prev + next;
        prev = next;
        next = res;

        yield res
    }
}

// let fb = fib();
//
// let n = 0;
// console.log(fb.next().value);
// console.log(fb.next().value);
// console.log(fb.next().value);
// console.log(fb.next().value);
// console.log(fb.next().value);
// console.log(fb.next().value);
// for (let num of fb) {
//     console.log(num);
//
//     if (n++ > 9)
//         break;
// }


function* tlGenerator(){
    while (true)
    {
        yield 'red'
        yield 'yellow'
        yield 'green'
        yield 'yellow'
    }
}

let t = tlGenerator();

// setInterval(
//     function (){
//         console.log(t.next().value);
//     },
//     5000
// );


let tlIterator = {
    num: 0,
    colors: [
        'red',
        'yellow',
        'green',
        'yellow',
    ],
    [Symbol.iterator]() {
        return this;
    },
    next() {
            if (this.num > 3)
                this.num = 0;

            return {
                done: false,
                value: this.colors[this.num++]
            };

    }
}

// let n = 0;
// for (let num of tlIterator) {
//     console.log(num);

//     if (n++ > 6)
//         break;
// }