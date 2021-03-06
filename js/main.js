
// Написать функцию которая проверяет являются две строки анаграммой или нет

function isAnagramm(str1, str2) {

    if ((typeof str1 !== 'string') || (typeof str2 !== 'string')) {
        throw new Error("Wrong arguments type");
    }

    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf([str1[i]]) !== -1) {
            str2 = str2.replace(str1[i], '');
        }
    }

    return (str2 === '' );
}

// Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии.

function digitInNamber(number, index) {

    if (typeof number !== "number") {
        throw new Error("Wrong arguments type");
    }

    number = Math.abs(number);
    index = index || 1;

    if (number / Math.pow(10, index) < 1) {
        return (index);
    } 
    return digitInNamber(number, index + 1);
    
}

// Реализовать функцию которая проверяет, является ли строка палиндромом

function withoutPunct(string) {

    if (typeof string !== 'string') {
        throw new Error("Wrong arguments type");
    }

    let stringWithoutPunct = '';

    for (i = 0; i < string.length; i++) {
        let letter = string[i];
        let allLetter = '!"#$%&()*+,-./:;<=>?@[\]^_{|}~';
        if (!(allLetter.indexOf(letter) + 1)) {
            stringWithoutPunct += letter;
        }
    }

    return stringWithoutPunct;

}

function isPalindrom(string) {

    if (typeof string !== 'string') {
        throw new Error("Wrong arguments type");
    }

    onlyLeter = withoutPunct(string).toLowerCase();
    onlyLeter = onlyLeter.replace(/\s+/g, '');

        for (let i = 0; i < onlyLeter.length; i++) {
            let lastLetter = onlyLeter.length - 1;
            if (onlyLeter[i] !== onlyLeter[(lastLetter - i)]) {
            return  false;
            }
        }

    return true;
}

//Написать функцию которая вычисляет подсчет уникальных слов в предложении

function uniqueWords(string) {

    if (typeof string !== 'string') {
        throw new Error("Wrong arguments type");
    }

    let stringWithoutPunct = withoutPunct(string);
    let unique = 0;
    let arrString = stringWithoutPunct.split(' ');

    for (let i = 0; i < arrString.length; i++) {
        let word = arrString[i];
        let flag = false;

        for (let j = 0; j < arrString.length; j++) {

            if ((word === arrString[j]) && (i !== j)) {
                flag = true;
            }

            if ((j === arrString.length - 1) && (flag === false)) {
                ++unique;
            }

        }
    }
    return unique;
}

// Написать функцию которая вычисляет вхождение каждого слова в предложение

function WordsCount(string) {

    if (typeof string !== 'string') {
        throw new Error("Wrong arguments type");
    }

    let stringWithoutPunct = withoutPunct(string).toLowerCase();
    let wordsCount = {};
    let arrString = stringWithoutPunct.split(' ');

    for (let i = 0; i < arrString.length; i++) {

        if (wordsCount[arrString[i]] === undefined) {
            wordsCount[arrString[i]] = 1;
        } 
        ++ wordsCount[arrString[i]];
    }

    return wordsCount;

}

//Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов.


function Rectangle(height, width) {

    if ((typeof height !== 'number') || (typeof width !== 'number') || (height <= 0) || (width <= 0)) {
        throw new Error("Wrong arguments type");
    }

    this.height = height;
    this.width = width;


    this.squareRectangle = function () {
        return (this.height * this.width);
    };


    this.perimetrRectangle = function () {
        return (2 * (this.height + this.width));
    };

}

let calcRectangle = new Rectangle(5, 6);

function Triang(sideA, sideB, sideC) {

    if ((typeof sideA !== 'number') || (typeof sideB !== 'number') || (typeof sideC !== 'number') || (sideA <= 0) || (sideB <= 0) || (sideC <= 0) ) {
        throw new Error("Wrong arguments type");
    }

    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    this.squareTriang = function () {
        let halfPer = (this.sideA + this.sideB + this.sideC) / 2;
        return (Math.sqrt(halfPer * (halfPer - this.sideA) * (halfPer - this.sideB) * (halfPer - this.sideC)));
    };

    this.perimetrTriang = function () {
        return (this.sideC + this.sideA + this.sideB);

    }
}

let calcTriang = new Triang(5, 6, 7);

function Circle(radius) {
    if ((typeof radius !== 'number') || (radius <= 0)) {
        throw new Error("Wrong arguments type");
    }

    this.radius = radius;

    this.squareCircle = function () {
        return Math.PI * this.radius * this.radius;
    };

    this.perimetrCircle = function () {
        return Math.PI * 2 * this.radius;
    };

}

let calcCircle = new Circle(5);

// class

class RectangleClass {

    constructor(height, width) {
    this.height = height;
    this.width = width;
    }


    square() {
    return (this.height * this.width);
    }


    perimetr() {
        return ((this.height + this.width) * 2);
    }
}

let calcRectangleClass  = new RectangleClass(6, 7);

class TriangClass {

    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        
    }

    square() {
        let halfPer = (this.sideA + this.sideB + this.sideC) / 2;
    return (Math.sqrt(halfPer * (halfPer - this.sideA) * (halfPer - this.sideB) * (halfPer - this.sideC)));
}

    perimetr() {
        return (this.sideA + this.sideB + this.sideC);
    }
}

let calcTriangClass  = new TriangClass(5,6,7);

class CircleClass {

    constructor(radius) {
        this.radius = radius;
    }

    square() {
        return (Math.PI * this.radius * this.radius);
    }

    perimetr() {
        return (Math.PI * 2 * this.radius);
    }

}

let calcCircleClass  = new CircleClass(5);

// Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала.

function factorialRecurs(number, result, factor) {

    factor = factor || 1;
    result = result || 1;
    result = result * factor;

    if(factor < number) {
        ++ factor;
       return factorialRecurs(number, result, factor);
    }
        factor = 1;
        return result;
}


function factorialCash(){

    let cashCalculetion = {};
    let factor = 1;
    
    return function factorialCalc(number, result) {

        result = result || 1;
        result = result * factor;
        cashCalculetion[factor] = result;

        if(factor < number) {
            ++ factor;
           return factorialCalc(number, result);
        }
        factor = 1;
        return cashCalculetion;
    }
}
    
    let factorial = factorialCash();
    
    let memoiz = function () {

        let cash = {};
        let maxCash = 0;

        return function (number) {

            if (number in cash) {
                return cash[number];
            } 
            
                let result = factorial(number);
                for(key in result) {
                    if( key > maxCash){cash[key] = result[key]}
                        }
                        maxCash = number;
                
                return result[number];
        }
    }
    
    memoizFactorial = memoiz();

//Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные), реализовать с помощью рекурсии для одномерного массива.

let sumEvenFunc = function (item) {

    if (item % 2 === 0) {
        return item;
    }
    return 0;

}

let sumMultOfThreeFunc = function (item) {

    if (item % 3 === 0) {
        return (item);
    } 
    return 0;
}

let sumOddPositivFunc = function (item) {

    if ((item % 2 !== 0) && (item > 0)) {
        return (item);
    } 
    return 0;
}


function sumArr(arr, callback) {
     if (((callback) && (typeof callback !== 'function')) || (!Array.isArray(arr))) {
        throw new Error("Wrong arguments type");
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (callback === undefined) {
            sum = sum +  arr[i];
        }
        sum = sum + (callback(arr[i]));
    }
    return sum;
}

function sumRecurs(arr, sum, index) {

    if (!Array.isArray(arr)) {
        throw new Error("Wrong arguments type");
    }

    sum = sum || 0;
    index = index || 0;
    sum = sum + arr[index];

    if (arr.length < index + 2) {
        return sum;
    }
    return sumRecurs(arr, sum, index + 1);
}

// Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа).

function nullNumb(arr) {

    if (!Array.isArray(arr)) {
        throw new Error("Wrong arguments type"); 
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            ++ count;
        }        
    }

    return count;
}

function positivNumb(arr) {

    if (!Array.isArray(arr)) {
        throw new Error("Wrong arguments type");
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            ++ count;
        }
    }
    return count;
}

function negativNumb(arr) {

    if (!Array.isArray(arr)) {
        throw new Error("Wrong arguments type"); 
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            ++ count;
        }
    }

    return count;
}

function primeNumb(arr) {

    if (!Array.isArray(arr)) {
        throw new Error("Wrong arguments type");
    }

    let count = 0;
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {

            for(let m = 2; m < arr[i]; m++) {
                if((arr[i]%m === 0)) {
                flag = true;
                } 
            }

            if(flag === false) {
            count += 1;
            }
        }
    }

    return count; 
}

//Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел).

function toBinary(numb) {

    if (typeof numb !== 'number') {
        throw new Error("Wrong arguments type");
    }

    let binaryRevers = '';
    let oneBit = 1;

    while (oneBit <= numb) {

        if (oneBit & numb) {
            binaryRevers = binaryRevers + '1';
        } 
        binaryRevers = binaryRevers + '0';
        oneBit<<= 1;
    }

    let binary = '';

    for (let i = binaryRevers.length - 1; i >= 0; i--) {
        binary = binary + binaryRevers.charAt(i);
    }

    return binary;
}

function toDex(binary) {

    if (typeof binary !== 'string') { 
        throw new Error("Wrong arguments type");
    }

    let multiplier = 1;
    let dex = 0;

    for (let i = binary.length - 1; i >= 0; i--) {

        if (binary[i] === '1') {
            dex = dex + multiplier;
        }

        multiplier = multiplier * 2;
    }

    return dex;
}

//Пункты 9 и 10 выполнить для двумерных массивов.

function twoDemensArray(arr, func) {

    if (!Array.isArray(arr)) {
         throw new Error("Wrong arguments type");
        }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let demensArr = arr[i];
        let sumDemArr = sumArr(demensArr, func || undefined);
        sum += sumDemArr;
    }

    return sum;
}

// Посчитать сумму значений чисел от min до max (всех, только тех которые
// кратны 3, только положительные). Нарисовать блок схему. Реализовать также с помощью рекурсии.

function sumMinToMax(min, max, sum) {

    if ((typeof min !== "number") || (typeof min !== "number")) { throw new Error("Wrong arguments type"); 
}

    min = min + 1;
    sum = sum || 0;
    sum = sum + min;

    if (min + 1 < max) {
        return sumMinToMax(min, max, sum);
    }

        return sum;
 }

function sumMinToMaxMultThree(min, max, sum) {

    if ((typeof min !== "number") || (typeof min !== "number")) {
         throw new Error("Wrong arguments type"); 
    }

    min = min + 1;
    sum = sum || 0;

    if (min % 3 === 0) {
        sum = sum + min;
    }

    if (min + 1 < max) {
        return sumMinToMaxMultThree(min, max, sum);
    } 

    return sum;
}

function sumMinToMaxPositiv(min, max, sum) {

    if ((typeof min !== "number") || (typeof min !== "number")) {
         throw new Error("Wrong arguments type"); 
    }

    min = min + 1;
    sum = sum || 0;

    if (min > 0) {
        sum = sum + min;
    }

    if (min + 1 < max) {
        return sumMinToMaxPositiv(min, max, sum);
    } 

    return sum;
}

function sumMinToMaxСycle(min, max) {

    if ((typeof min !== "number") || (typeof min !== "number")) {
        throw new Error("Wrong arguments type"); 
    }

    let sum = 0;

    for (let i = min + 1; i < max; i++) {
        sum = sum + i;
    }

    return sum;
}

//Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные).

function averageArrSum(arr) {

    let sum = 0;
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        sum +=  arr[j];
        ++ count;
    }

    let result = {sum, count};
    return result;
}

function averageEvenSum(arr) {
    let sum = 0;
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] % 2 === 0) {
           sum += arr[j];
           ++ count;
        }
    }

    let result = {sum, count};
    return result;
}

function averageOddSum(arr) {
    let sum = 0;
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] % 2 !== 0) {
           sum += arr[j];
           ++ count;
        }
    }

    let result = {sum, count};
    return result;
}



function average(arr, callback) {

    if (!Array.isArray(arr) || ((callback) && (typeof callback !== 'function')) ) {
         throw new Error("Wrong arguments type"); 
        }

    let count = 0;
    let sum = 0;

    if (Array.isArray(arr[0])) {

        for (let i = 0; i < arr.length; i++) {
            let arrIn = arr[i];
            let callbackResult = callback(arrIn);
            count += callbackResult.count;
            sum += callbackResult.sum;
        }

        return (sum/count);
    }

    let callbackResult = callback(arr);
    return  callbackResult.sum/callbackResult.count;
        
}

//Транспонировать матрицу, сложить две матрицы.

function transponMatrix(matrix) {

     if (!Array.isArray(matrix)) {
        throw new Error("Wrong arguments type"); 
    }

    let newMatrix = [];

    for (let j = 0; j < matrix.length; j++) {
        let matrixRow = matrix[j];

        for (let i = 0; i < matrixRow.length; i++) {
            if (j === 0) {
                newMatrix.push([]);
            }
            newMatrix[i][j] = matrixRow[i];
        }

    }

    return newMatrix;
}



function sumMatrix(matrix1, matrix2) {

    if ((!Array.isArray(matrix1)) || (!Array.isArray(matrix2))) {
        throw new Error("Wrong arguments type"); 
    }

    let sumMatr = [];

    for (let i = 0; i < matrix1.length; i++) {
        sumMatr.push([]);
        let matrixRow1 = matrix1[i];
        let matrixRow2 = matrix2[i];
        for (let j = 0; j < matrixRow1.length; j++) {
            sumMatr[i][j] = matrixRow1[j] + matrixRow2[j];
        }
    }

    return sumMatr;
}

// Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.

function deleteStrngWithNull(arr, index) {

    if (!Array.isArray(arr)) {
         throw new Error("Wrong arguments type"); 
        }

    index = index || 0;
    let arrString = arr[index];
    let flag = false;

    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i] === 0) {
            flag = true;
        }
    }

    if (flag === true) {
        arr.splice(index, 1);
        -- index;
    }

    if (index + 1 < arr.length) {
        return deleteStrngWithNull(arr, index + 1);
    } 

    return arr;
}

function deleteСolumnWithNull(arr, index) {

    if (!Array.isArray(arr)) {
         throw new Error("Wrong arguments type");
    }

    index = index || 0;
    let arrString = arr[index];

    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i] === 0) {
            for (let m = 0; m < arr.length; m++) {
                arr[m].splice(i, 1);
                
            }
            -- i;
        }
    }

    if (index + 1 < arr.length) {
        return deleteСolumnWithNull(arr, index + 1);
    } 

    return arr; 
}

//Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы над
// и под главной диагональю и на главной диагональю.

function underDiagonalMatrixSum(arr, i) {
    let sum = 0;

    for (let m = arr.length - 1; m > i; m--) { 
        sum += arr[m];
    }

    return sum;
}

function overDiagonalMatrixSum(arr, i) {
    let sum = 0;

    for (let m = 0; m < i; m++) { 
        sum += arr[m];
    }

    return sum;
}

function countNullUnderDiagonalMatrix(arr, i) {
    let count = 0;

    for (let m = arr.length - 1; m > i; m--) {
        if(arr[m] === 0){
        ++ count;
        }
    }

    return  count;
}

function countNullOverDiagonalMatrix(arr, i) {
    let count = 0;

    for (let m = 0; m < i; m++) {
        if(arr[m] === 0){
        ++ count;
        }
    }

    return  count;
}

function calculationMatrix(matrix, callback) {

    if (!Array.isArray(matrix)) {
        throw new Error("Wrong arguments type"); 
    }

    for(i = 0; i < (matrix.length - 1); i++){
        if(matrix[i].length !== matrix.length) {
            throw new Error("arrey is not matrix");     
        }
    }

    let resultAll = 0;

    for (let i = 0; i < matrix.length; i++) {
        matrixString = matrix[i];        
        resultAll += callback(matrixString, i);
    }

    return resultAll;

}

function avarageUnderDiagonalMatrix(matrix) {

    if (!Array.isArray(matrix)) {
        throw new Error("Wrong arguments type");
    }

    for(i = 0; i < (matrix.length - 1); i++){
        if(matrix[i].length !== matrix.length) {
            throw new Error("arrey is not matrix");     
        }
    }

    let count = 0;
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        matrixString = matrix[i];
        for (let m = matrixString.length - 1; m > i; m--) {    
            sum += matrixString[m];
            ++ count;
        }
    }

    return sum / count;
}

function avarageOverDiagonalMatrix(matrix) {

    if (!Array.isArray(matrix)) {
        throw new Error("Wrong arguments type");
    }

    for(i = 0; i < (matrix.length - 1); i++){
        if(matrix[i].length !== matrix.length) {
            throw new Error("arrey is not matrix");    
        }
    }

    let count = 0;
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        matrixString = matrix[i];
        for (let m = 0; m < i; m++) {    
            sum += matrixString[m];
            ++ count;
        }
    }

    return sum / count;
}

function DiagonalMatrixSum(matrix) {

        if (!Array.isArray(matrix)) {
             throw new Error("Wrong arguments type");
        }

        for(i = 0; i < (matrix.length - 1); i++){
            if(matrix[i].length !== matrix.length) {
                throw new Error("arrey is not matrix");     
            }
        }

        let sum = 0;

        for (let i = 0; i < matrix.length; i++) {
            let matrixString = matrix[i];
            sum += matrixString[i];
        }

        return sum;
    }

   

function DiagonalMatrixNull(matrix) {

    if (!Array.isArray(matrix)) {
        throw new Error("Wrong arguments type");
    }

    for(i = 0; i < (matrix.length - 1); i++){
        if(matrix[i].length !== matrix.length) {
            throw new Error("arrey is not matrix");     
        }
    }

    let nullElemCount = 0;

    for (let i = 0; i < matrix.length; i++) {
        if(matrix[i][i] === 0) {
        ++ nullElemCount;
        }
    }

    return nullElemCount;
}

function DiagonalMatrixAvarage(matrix) {

    if (!Array.isArray(matrix)) {
        throw new Error("Wrong arguments type"); 
    }

    for(i = 0; i < (matrix.length - 1); i++){
        if(matrix[i].length !== matrix.length) {
            throw new Error("arrey is not matrix");     
        }
    }

    let elemCount = 0;
    let sum = 0;

    for (let j = 0; j < matrix.length; j++) {
        sum += matrix[j][j];
        ++ elemCount;
    }

    return sum / elemCount;
}

//Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа
//фибоначчи (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию.
//Реализовать с помощью рекурсии.

let fibonachiIterator = {
    num: 10,
}

fibonachiIterator[Symbol.iterator] = function () {
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
            }   
            return {
                done: true
            }
        }
    }
};
let i = 0;
for (let num of fibonachiIterator) {
    console.log(num)
    if (i ++ > 10)
        break;
}

function* fibonachiGenerator() {
    let max = 10;
    let prev;
    let next;
    let res;

    if (prev === undefined) {
        prev = 0;
        next = 1;
    }

    while (prev < max) {
        res = prev + next;
        prev = next;
        next = res;
        yield res;
    }
}

let generator = fibonachiGenerator();

function recursFibonachi(index, arr, numb2, res) {

    if (typeof index !== "number") {
        throw new Error("Wrong arguments type");
    }

    arrFibonachi = arr || [];
    let numb1 = 0;
    numb2 = numb2 || 1;
    res = res || 0;

    if (arrFibonachi.length < (index - 1)) {
        numb1 = numb2;
        numb2 = res;
        res = numb1 + numb2;
        arrFibonachi.push(res);
        return recursFibonachi(index, arrFibonachi, numb2, res);
    }

    return arrFibonachi;
}

function fibonachiMemo() {
    let cash = [];

    return function (index) {

        if (index > cash.length) {
            cash = recursFibonachi(index);
            console.log(cash);
        }
        let arrResult = [];
        for (let i = 0; i < index; i++) {
            arrResult.push(cash[i]);
        }
        return arrResult;
    }
}
let fiboMemo = fibonachiMemo();

//Реализовать с помощью итератора и генератора светофор. При каждой следующей итерации мы должны получать
//следующий корректный цвет по логике светофора.

function* trafficLightGenerator() {

    while (true) {
        yield 'red';
        yield 'yellow';
        yield 'green';
        yield 'yellow';
    }
}

let trafficLight = trafficLightGenerator();

let index = 0;
while (true) {
    console.log(trafficLight.next().value);
    if (index ++ > 10)
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
let ind = 0;
for (let num of trafficLightIterator) {
    console.log(num);
    if (ind ++ > 10)
        break;
}


// Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля (побитово).
//     Посчитать количество битов числакоторые установлены в единицу и которые установлены в 0.
// Написать свою реализацию для ~, двумя способами).

function isNegative(number) {

    if ((number >> 31) & 1) {
        return true;
    } 
    return false 
}

function countOfNumber(numb) {
    let count = 0;
    let countOne = 0;
    let countZero = 0;
    let oneBit = 1;

    while (oneBit <= numb) {

        if (oneBit & numb) {
            ++ countOne;
        } 
            ++ countZero;
    

        oneBit <<= 1;
        ++ count;
    }

    if ((numb >> 31) & 1) {
        countOne = countOne + (32 - count);
    } 
    countZero = countZero + (32 - count);
    

    return { count, countOne, countZero };
}

function tildaMath(numb) {

    if (numb < 0) {
        return Math.abs(numb) - 1;
    } 
    return -(numb + 1) }



function tilda(number) {

    let numb = number;
    for (let i = 0; i < 32; i++) {
        numb = numb ^ (1 << i)
    }
    return numb;
}