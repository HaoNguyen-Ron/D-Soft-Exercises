//---------------------------------------------------------------------- A) Cách đặt tên biến
let myAge = 25;
const theMonth = 'March';
var student = {
    name: 'Ron',
    role: 'Fe',
    level: 'Intern'
}

// Tên biến chứa chữ, số, __ hoặc $
// Tên biến không bắt đầu bằng number
// Tên biến không được trùng với reserved keywords


//---------------------------------------------------------------------- B) Loại dữ liệu 
//-----------------------------------------------------------STRING------------------------------------------------------------------------------//

//a) Khai báo chuổi:
let fullName = 'Nguyen Ron'
let fullNameWithInstance = new String('Nguyen Ron') // Khởi tạo đối tượng

//b) Nối chuổi :
const title = 'Ron';
const age = 25;
const address = 'Danang';

let myIntro = 'My name is ' + title + ', Iam ' + age + ', i live in ' + address
let myIntro2 = `My name is ${title}, Iam ${age}, i live in ${address}`

//c) Các phương thức cho chuổi:
const greet = 'Hello World'
const greetAgain = 'Hi, again!'
let index = 6;

//length
console.log(greet.length); // 11

//charAt()
console.log(`The character at index ${index} is ${greet.charAt(index)}`); //The character at index 6 is W

//at()
console.log(`An index of ${index} returns the character ${greet.at(index)}`); //An index of 6 returns the character W

//endWith() startWith()
console.log(greet.endsWith('hi')); // false 
console.log(greet.endsWith('World')); // true 
console.log(greet.startsWith('World')); // false 
console.log(greet.startsWith('Hello')); // true 

//concat()
console.log(greet.concat(' and ', greetAgain)); //Hello World and Hi, again!
console.log(greetAgain.concat(', ', greet)); // Hi, again!, Hello World

//include()
const word = 'hi';

console.log(
    `The word "${word}" ${greet.includes(word) ? 'is' : 'is not'
    } in the sentence`,
);  //The word "hi" is not in the sentence

//indexOf(), lastIndexOf() search
console.log(greet.indexOf('o')); // 4
console.log(greet.indexOf('o', 5)); // 7
console.log(greet.indexOf('a')); // -1 (không tìm thấy)

console.log(greet.lastIndexOf('o')); // 7
console.log(greet.lastIndexOf('o', 6)); // 4

console.log(greet.search('o')); // 4

//replace() replaceAll()
console.log(greet.replace('World', 'me'));// Hello me

console.log(greet.replace(/o/g, 'a'));// Hella Warld
console.log(greet.replaceAll('o', 'a'));// Hella Warld

//split(), slice()
console.log(greet.slice(2)); // llo World
console.log(greet.slice(-2)); // ld
console.log(greet.slice(22)); //
console.log(greet.slice(-22)); // Hello World
console.log(greet.slice(4, 9)); // o Wor
console.log(greet.slice(-7, -2)); // o Wor

console.log(greet.split(' ')); // ['Hello', 'World']
console.log(greet.split('')); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

//trim() trimEnd() trimStart()
const greeting = '   Hello world!   ';

console.log(greeting); //   Hello world!   
console.log(greeting.trim()); //Hello world! 
console.log(greeting.trimStart()); //Hello world!
console.log(greeting.trimEnd()); //   Hello world!

//toUpperCase(), toLowerCase()
console.log(greet.toLowerCase()); //hello world
console.log(greet.toUpperCase()); //HELLO WORLD


//-----------------------------------------------------------NUMBER------------------------------------------------------------------------------//

//a) Khai báo số:
let theAge = 25
let PI = 3.14
let theInstanceAge = new Number(25)

//b) Các hàm làm việc với số

//isFinite() isNaN() 
console.log(Number.isFinite(1 / 0)); //false
console.log(Number.isFinite(10 / 5)); //true

console.log(Number.isNaN('abc')); //false
console.log(Number.isNaN(NaN)); //true

// toString  parseFloat() toFixed()
const str = "10";
console.log(parseInt(str)); // 10

const str2 = "10.5";
console.log(parseFloat(str)); // 10.5

const num = 10.5678;
console.log(num.toFixed(2)); // "10.57"


//-----------------------------------------------------------BOOLEAN------------------------------------------------------------------------------//
//a) Khai báo boolean:
let isValidated = true
const flag = new Boolean(false);


//b) Các hàm trả về boolean: isNaN, isFinite, Boolean, Array.isArray([]), instanceof , endsWith, startsWith
// some(), every() 
const arr = [1, 2, 3, 4, 5];

const result = arr.some(element => element > 3);
console.log(result); // true

const result2 = arr.every(element => element > 0);
console.log(result2); // true

//include()
const result3 = arr.includes(3);
console.log(result3); //true

//match() test()
const theString = "Hello world";

const result4 = theString.match(/world/);
console.log(result !== null); // true

const pattern = /world/;
console.log(pattern.test(theString)); // true


//-----------------------------------------------------------ARRAY------------------------------------------------------------------------------//
//a) Khai báo array:
const declareArr = [1, 2, 3];
const declareInstanceArr = new Array(1, 2, 3)

//b) Các hàm làm việc với mảng
//at()
let arrayindex = 2;
let arrayindex2 = 5;
console.log(`An index of ${arrayindex} returns ${declareArr.at(arrayindex)}`); //An index of 2 returns 3
console.log(`An index of ${arrayindex2} returns ${declareArr.at(arrayindex2)}`); //An index of 5 returns undefined

// indexOf()
const indexOfArr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3)); // 2



// join()
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join('')); // "FireAirWater"
console.log(elements.join('-')); // "Fire-Air-Water"

// find(): Chỉ trả về giá trị đầu tiên đúng với điều kiện
const arrNumber = [1, 2, 3, 4, 5, 7, 8, 1];
const foundElement = arrNumber.find(element => element > 2);
console.log(foundElement); // Output: 3

//findIndex() findLast()
const isLargeNumber = (element) => element > 5;
console.log(arrNumber.findIndex(isLargeNumber)); // index: 7 (số 7)
console.log(arrNumber.findLast(isLargeNumber)); //  8 

// forEach(): giống map() nhưng forEach là Hàm callback có thể thực hiện các thao tác hoặc tính toán trên phần tử, nhưng không trả về giá trị nào cũng không trả về mảng mới

/**
 * Hàm tạo ra mảng mới
 */

//concat() 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, 7, 8];

const newArr = arr1.concat(arr2);
const newArrReverse = arr2.concat(arr1);
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(newArrReverse); // [4, 5, 6, 7, 8, 1, 2, 3]

// map()
const newMapArr = arr1.map(element => element * 2);
console.log(newMapArr); // Output: [2, 4, 6]

// filter()
const newFilterArr = arr1.filter(element => element % 2 !== 0);
console.log(newFilterArr); // Output: [1, 3]

// slice()
const newSliceArr = arr.slice(1, 4);
console.log(newSliceArr); // Output: [2, 3, 4]

// spread operator (ES6)
const newSpreadArr = [...arr1];
console.log(newSpreadArr); // Output: [1, 2, 3]

// flat()

// toReversed() toSorted() toSpliced() 


/**
 * Hàm làm thay đổi array gốc
 */
const originalArr = [1, 2, 3];


// sort()
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); //[1, 100000, 21, 30, 4]


//push()
originalArr.push(4);
console.log(originalArr); // originalArr bây giờ là: [1, 2, 3, 4]

//pop()
originalArr.pop()
console.log(originalArr); //  originalArr bây giờ là: [1, 2, 3];

//shift()
originalArr.shift()
console.log(originalArr); //  originalArr bây giờ là: [2, 3]

//unshift() 
originalArr.unshift(4)
console.log(originalArr); //  originalArr bây giờ là: [4, 2, 3]

//splice()
originalArr.splice(2, 1, 6, 7, 8); // Xóa một phần tử từ vị trí 2 và thêm vào 6, 7, 8
console.log(originalArr); // originalArr bây giờ là: [4, 2, 6, 7, 8]

originalArr.splice(2); //Xóa một phần tử từ vị trí 2 đến hết
console.log(originalArr); // originalArr bây giờ là: [4, 2]

//reverse()
console.log(originalArr.reverse()) //[2, 4]


/**
 * Hàm làm phẳng array gốc (tạo mảng mới)
 */

//flat()
const messArr = [1, 2, 3, [5, 3], 5, 6];
const flattenedArr = messArr.flat();
console.log(flattenedArr); //  [1, 2, 3, 5, 3, 5, 6]

// reduce() và recursion
function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}
const messArr2 = [1, 2, 3, [5, 3], 5, [6, [7, 8]]];
const flattenedArrWithReduce = flattenArray(messArr2);
console.log(flattenedArrWithReduce); //[1, 2, 3, 4, 5, 6 , 7, 8]

//for loop
function flattenArray(arr) {
    const flattened = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                flattened.push(arr[i][j]);
            }
        } else {
            flattened.push(arr[i]);
        }
    }
    return flattened;
}

const nestedArr = [1, [2, 3], [4, [5, 6]]];
const flattenedArrWithLoop = flattenArray(nestedArr);
console.log(flattenedArrWithLoop); // Output: [1, 2, 3, 4, 5, 6]

/**
 * Hàm trả về boolean
 */

//include()
const includeArr = [1, 2, 3, 4, 5];
console.log(includeArr.includes(3)); // true

//isArray()
console.log(Array.isArray([1, 3, 5])); // true
console.log(Array.isArray('[]')); //false

//some()
const someArr = [10, 20, 30, 40, 50];
const someresult = arr.some(element => element > 25);
console.log(someresult); // true

//every()
const everyArr = [10, 20, 30, 40, 50];
const everyResult = arr.every(element => element > 25);
console.log(everyResult); //  false

//-----------------------------------------------------------OBJECT------------------------------------------------------------------------------//
//a) Khai báo object:
const declareObj = {
    name: 'Ron',
    age: 25
};

const declareInstanceObj = new Object();
declareInstanceObj.name = 'Ron';
declareInstanceObj.age = 25;

console.log(declareInstanceObj); //{ name: 'Ron', age: 25 }


//b) Các hàm làm việc với Object:
const obj = { name: 'Ron', age: 25 };

// key()
const keys = Object.keys(declareObj);
console.log(keys); // ['name', 'age']

//value()
const values = Object.values(declareObj);
console.log(values); // ['Ron', 25]

//entry()
const entries = Object.entries(declareObj);
console.log(entries); // [['name', 'Ron'], ['age', 25]]

//assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // Object { a: 1, b: 4, c: 5 }

//freeze() isFrozen()
Object.freeze(declareObj);
declareObj.age = 40;
console.log(obj); // { name: 'Ron', age: 25 }

//seal() isSeal()
Object.seal(declareObj);
declareObj.age = 30
console.log(obj); // { name: 'Ron' , age: 30}

//-----------------------------------------------------------DATETIME------------------------------------------------------------------------------//
//a) khởi tạo 1 object date
const currentDate = new Date();

//getFullYear()
const currentYear = currentDate.getFullYear();
console.log(currentYear); // 2024

//getMonth()
const currentMonth = currentDate.getMonth();
console.log(currentMonth); // 3 tháng 4

//getDate()
const currentDay = currentDate.getDate();
console.log(currentDay); //5 ngày 5

//getDay()
const currentWeekDay = currentDate.getDay();
console.log(currentWeekDay);//5 thứ 6

//getHours(), getMinutes(), getSeconds()
const currentHour = currentDate.getHours();
console.log(currentHour);

//toLocaleDateString()
const localeDateString = currentDate.toLocaleDateString();
console.log(localeDateString);


//----------------------------------------------------------------------C) Toán tử :

//a) toán tử gán: 
let x = 1; // biến x được gác thành số 1 (Number)
x += 2 // 3
x -= 2 // 1 
x *= 2 // 2
x **= 2 // 4
x /= 2 // 2
x %= 2 // 0

//b) Toán tử so sánh:

// ==  (không kiểm tra kiểu dữ liệu)
console.log(5 == 5); // true
console.log(5 == '5'); // true

// === (có kiểm tra kiểu dữ liệu)
console.log(5 === 5); // true
console.log(5 === '5'); // false

//  != (không kiểm tra kiểu dữ liệu)
console.log(5 != '5'); // false

// !== (có kiểm tra kiểu dữ liệu)
console.log(5 != '5'); // true

// > < <= >=
console.log(10 > 5); //  true
console.log(5 < 10); //  true
console.log(10 >= 10); //  true
console.log(5 <= 10); //  true


// c) Toán tử logic:
// && || 
console.log(true && false) // false
console.log(true && true) // true
console.log(true || false)// true
console.log(true || true)// true

// ! 
console.log(!false) // true

//----------------------------------------------------------------------D) Vòng lặp :
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const originalStr = 'hello';
const reversedStr = reverseString(originalStr);
console.log(reversedStr); // Output: 'olleh'

// while 
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

function calculateSum(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}

const n = 5;
const whileLoopResult = calculateSum(n);
console.log(whileLoopResult); //15 (1 + 2 + 3 + 4 + 5 = 15)

// do-while
let j = 0;
do {
    console.log(i);
    j++;
} while (i < 5);

// let userInput;
// do {
//     userInput = prompt("Nhập một số dương:");
// } while (isNaN(userInput) || userInput <= 0);

// console.log("Bạn đã nhập số dương hợp lệ:", userInput);


// for in: 
const theObj = { a: 1, b: 2, c: 3 };
for (let key in theObj) {
    console.log(key + ': ' + theObj[key]);
}

// for of
const theArr = [1, 2, 3];
for (let item of theArr) {
    console.log(item);
}