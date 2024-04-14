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

// join()
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join('')); // "FireAirWater"
console.log(elements.join('-')); // "Fire-Air-Water"

//isArray()
console.log(Array.isArray([1, 3, 5])); // true
console.log(Array.isArray('[]')); //false

// find(): Chỉ trả về giá trị đầu tiên đúng với điều kiện
const arrNumber = [1, 2, 3, 4, 5, 7, 8, 1];
const foundElement = arrNumber.find(element => element > 2);
console.log(foundElement); // Output: 3

//findIndex() findLast()
const isLargeNumber = (element) => element > 5;
console.log(arrNumber.findIndex(isLargeNumber)); // index: 7 (số 7)
console.log(arrNumber.findLast(isLargeNumber)); //  8 

// forEach(): giống map() nhưng forEach là Hàm callback có thể thực hiện các thao tác hoặc tính toán trên phần tử, nhưng không trả về giá trị nào cũng không trả về mảng mới

// sort()
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); //[1, 100000, 21, 30, 4]


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


//----------------------------------------------------------------------Vòng lặp :
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

