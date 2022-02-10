
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
    number = Math.abs(number)
    n = n||1;
    if(number/Math.pow(10,n)<1) {
        return(n)
    } else {
        return digitInNamber (number, n+1 )
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

// Написать функцию которая вычисляет вхождение каждого слова в предложение

function WordsCount(string) {
    if( typeof string !== 'string' )  {
        throw new Error("Error arguments type")}
    let stringWithoutPunct = withoutPunct(string).toLowerCase();
    let wordsCount = {}; 
    let arrString = stringWithoutPunct.split(' ');
    for (let i = 0; i < arrString.length; i++) {
        if(wordsCount[arrString[i]] === undefined){
            wordsCount[arrString[i]]  = 1;
        } else {wordsCount[arrString[i]] = wordsCount[arrString[i]] + 1
        }
    }
    return wordsCount
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
               
 function sumArr(arr, callback) {
    if (typeof callback !== 'function' ) {
        throw new Error("Error arguments type")}
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + callback(arr[i])
    }
     return sum
 }

 let sumAll = sumArr(arr, sumAllFunc );
 
 let sumEven = sumArr (arr, sumEvenFunc);

 let sumMultOfThree = sumArr (arr, sumMultOfThreeFunc)

 let sumOddPositiv = sumArr (arr, sumOddPositivFunc)

   
function sumRecurs(arr, sum, i) {
    if (!Array.isArray(arr)) {  throw new Error("Error arguments type")}
    sum = sum||0;
    i = i||0;
    sum = sum + arr[i];
       if(arr.length  < i+2) {
       return sum
    } else {
        return sumRecurs(arr, sum, i+1)
    }
}

// Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа).

function elementsCount(arr) {
    if (( typeof arr[0] !== 'number')||(!Array.isArray(arr))) { throw new Error("Error arguments type")}
    let nullNumb = 0;
    let negativNumb = 0;
    let positivNumb = 0;
    let primeNumb = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
            ++negativNumb;
        } else if (arr[i] > 0) {
            ++positivNumb
        } else {++nullNumb}
        let flag = false;
        if(arr[i] > 0){
            for(let j = 2; j < arr[i]; j++){
                if((arr[i]%j === 0)){
                flag = true;
                }
            }
            if(flag === false){
                ++primeNumb
            }
        }
    }
    return  {nullNumb,  negativNumb,  positivNumb, primeNumb} 
}

//Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел).

function toBinary(numb) {
    if ( typeof numb !== 'number') { throw new Error("Error arguments type")}
    let binaryRevers = '';
    let oneBit = 1;
    while (oneBit <= numb) {
        if(oneBit & numb) {
            binaryRevers = binaryRevers + '1'
        } else {
            binaryRevers = binaryRevers + '0'
        }
        oneBit = oneBit << 1 ;
    }
    let binary = '';
    for(let i = binaryRevers.length - 1; i >= 0; i--){
        binary = binary + binaryRevers.charAt(i);
    }
    return binary
}

function toDex(binary) {
    if ( typeof binary !== 'string') { throw new Error("Error arguments type")}
    let multiplier = 1;
    let dex = 0;
    for(let i = binary.length - 1; i >= 0; i--) {
        if(binary[i] === '1') {
            dex = dex + multiplier }
        multiplier = multiplier * 2;
    }
    return dex
}

//Пункты 9 и 10 выполнить для двумерных массивов.

function twoDemensArray(arr, func) {
     if (!Array.isArray(arr)) { throw new Error("Error arguments type")}
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        let demArr = arr[i];
        let sumDemArr = sumArr(demArr, func);
        sum = sum + sumDemArr;
    }
    return sum
}

let sumArrays = twoDemensArray(arr, sumAllFunc)
let sumEvenArrays = twoDemensArray(arr, sumEvenFunc)
let sumMultOfThreeArrays = twoDemensArray(arr, sumMultOfThreeFunc)
let sumOddPositivArrays = twoDemensArray(arr, sumOddPositivFunc)

// Посчитать сумму значений чисел от min до max (всех, только тех которые
// кратны 3, только положительные). Нарисовать блок схему. Реализовать также с помощью рекурсии.

function SumMinToMax(min, max, sum) {
    if ((typeof min !== "number") || (typeof min !== "number")) { throw new Error("Error arguments type")}
    min = min + 1;
    sum = sum || 0;
    sum = sum + min;
    if (min + 1 < max) {
        return SumMinToMax(min, max, sum)
    } else {
        return sum
    }
}

function SumMinToMaxMultThree(min, max, sum) {
    if ((typeof min !== "number") || (typeof min !== "number")) { throw new Error("Error arguments type")}
    min = min + 1;
    sum = sum || 0;
    if (min%3 === 0) {
        sum = sum + min;
    }
    if (min + 1 < max) {
       return SumMinToMaxMultThree(min, max, sum)
    } else {
        return sum
    }
}

function SumMinToMaxPositiv(min, max, sum) {
    if ((typeof min !== "number") || (typeof min !== "number")) { throw new Error("Error arguments type")}
    min = min + 1;
    sum = sum || 0;
    if (min > 0) {
        sum = sum + min;
    }
    if (min + 1 < max) {
       return SumMinToMaxPositiv(min, max, sum)
    } else {
        return sum
    }
}

function SumMinToMaxСycle(min, max) {
    if ((typeof min !== "number") || (typeof min !== "number")) { throw new Error("Error arguments type")}
    let sum = 0;
    for (let i = min + 1; i < max; i++) {
        sum = sum + i
    }
    return sum
}

//Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные).

function averageArr (arr){
    if (!Array.isArray(arr)) { throw new Error("Error arguments type")}
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
        }
    }
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

    return {averageSum, averageOdd, averageEven}}

let multyArray = [[1, 2, 3, 4, 5, 6 ],
                 [5, 6, 7, 8, 6, 6 ], 
                 [9, 10, 11, 12, 12, 12],
                 [9, 10, 11, 12, 12, 12]];

//Транспонировать матрицу, сложить две матрицы.

function TransponMatrix(matrix) {
    if (!Array.isArray(arr)) { throw new Error("Error arguments type")}
    let newMatrix = [];
    for (let j = 0; j < matrix.length; j++) {
        let matrixRow = matrix[j];
        for (let i = 0; i < matrixRow.length; i++ ) {
            if (newMatrix.length < i +1) {
                newMatrix.push([])
            }
            newMatrix[i][j] = matrixRow[i];
        }
    }
    return newMatrix
}

mx1 = [[1,2,1],
       [2,1,2]];

mx2 = [[2,1,2],
       [1,2,1]]

function sumMatrix( matrix1, matrix2) {
    if (!Array.isArray(arr)) { throw new Error("Error arguments type")}
    let sumMatr = [];
    for(let i = 0; i < matrix1.length; i++) {
        sumMatr.push([]);
        let matrixRow1 = matrix1[i];
        let matrixRow2 = matrix2[i];
        for(let j = 0; j < matrixRow1.length; j++) {
            sumMatr[i][j] = matrixRow1[j] + matrixRow2[j]
        }
    }
    return sumMatr
}

// Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.

function deleteStrngWithNull(arr, j) {
    if (!Array.isArray(arr)) { throw new Error("Error arguments type")}
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
    }
    if(j+1 < arr.length){
        return deleteStrngWithNull(arr, j + 1)
    } else {return arr}
}

function deleteСolumnWithNull(arr, j) {
    if (!Array.isArray(arr)) { throw new Error("Error arguments type")}
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

//Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы над
// и под главной диагональю и на главной диагональю.

function underDiagonalMatrixSum(matrix) {
    if (!Array.isArray(arr)) { throw new Error("Error arguments type")}
    let sum = 0;
    for (let i = 1; i < matrix.length; i++) {
        matrixString = matrix[i];
        for(let m = 0; m < i; m++) {
            sum = sum + matrixString[m]
        }
    }
    return sum
}

function underDiagonalMatrix(matrix) {
    if (!Array.isArray(arr)) { throw new Error("Error arguments type")}
    let sum = 0;
    let nullElement = 0;
    let count = 0;
    for (let i = 1; i < matrix.length; i++) {
        matrixString = matrix[i];
        for(let m = 0; m < i; m++) {
            count+= 1
            sum = sum + matrixString[m];
            if (matrixString[m] === 0) {
                ++nullElement;
            }
        }
    }
    let average = sum/ count;
    return {sum, nullElement, average}
}

function overDiagonalMatrix(matrix) {
    if (!Array.isArray(arr)) { throw new Error("Error arguments type")}
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
    if (!Array.isArray(arr)) { throw new Error("Error arguments type")}
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

//Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа
//фибоначчи (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию.
//Реализовать с помощью рекурсии.

let fibonachiIterator = {
    num: 10
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
                }
            } else {
                return {
                    done: true
                }
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
    if (typeof n !== "number") { throw new Error("Error arguments type")}
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

//Реализовать с помощью итератора и генератора светофор. При каждой следующей итерации мы должны получать
//следующий корректный цвет по логике светофора.

function* trafficLightGenerator(){
    while (true)
    {
        yield 'red';
        yield 'yellow';
        yield 'green';
        yield 'yellow';
    }
}

let trafficLight = trafficLightGenerator();
let n =0;
while (true) {
    console.log(trafficLight.next().value);
    if (n++ > 10)
        break;
}

let trafficLightIterator = {
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
for (let num of trafficLightIterator) {
    console.log(num)
    if (l++ > 10)
        break;}


// Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля (побитово).
//     Посчитать количество битов числакоторые установлены в единицу и которые установлены в 0.
// Написать свою реализацию для ~, двумя способами).

function isNegative (number) {
    if((number >> 31)&1) {
        return true;
    } else {return false}
}

function countOfNumber(numb) {
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
    return toDex(binary)
}

function toInvertBit2(numb) {
    if(numb < 0) {
        return Math.abs(numb) - 1
    } else { return -(numb + 1)}
}








