// -----Function inwokion in For Loop-----

// 🎯 Code Objective

// This code defines a function that prints a name and then uses a loop to print that name 10 times.

// ✅ One-line Memory Trick:

// 👉 “Loop runs 10 times → function prints 10 times.”

// 🧠 What happens in memory?;

// Function print() is stored once in memory.

// Loop runs 10 times.

// Each time, it calls the same function, printing "Rajasree".

// -----Code-----

// function print() {
//     console.log("Rajasree");
// }
// for (let i = 0; i < 10; i++) {
//     print()
// }

// in console this print like
// Rajasree
// Rajasree
// Rajasree
// Rajasree
// Rajasree
// Rajasree
// Rajasree
// Rajasree
// Rajasree
// Rajasree

// ✅ Final Explanation

// The function print() prints "Rajasree", and the for loop calls this function 10 times, so the name is printed 10 times on the screen.

//-----Sqaure-----

// 🎯 Code Objective

// This code defines a function that calculates the square of a number and prints the result.

// ✅ One-Line Memory Trick:

// 👉 “Parameter goes in → local variable works → value comes out.”

// 🧠 What happens in memory?

// Square function is stored once in memory.

// When Square(2) runs:

// x = 2 (stored in function’s local memory)

// result = 4

// 4 is returned

// After execution, local variables (x, result) are cleared.

// -----Code-----

// function Square(x) {
//     let result = x*x
//     return result
// }
// console.log(Square(2));

// in console this print like
// 4

// ✅ Final Explanation

// The function Square(x) returns the square of the number passed to it. When we call Square(2), it calculates 2 × 2 and prints the result, which is 4.

//-----mixing two codes-----

// 🎯 Code Objective

// This program calculates and prints the square of numbers from 1 to 10.

// ✅ One-Line Memory Trick:

// 👉 “Loop changes the input, function reuses the logic.”

// 🧠 What happens in memory?

// Square is stored once in memory.

// Loop runs from 1 to 10.

// Each time:

// i value is passed to Square(i)

// New local memory is created (x, result)

// Result is returned

// Local memory is cleared

// This happens 10 times.

// -----Code-----

// function Square(x) {
//     let result = x*x;
//     return result;
// }
// for (let i = 1; i <= 10; i++) {
//     console.log(i,'*',i,'=',Square(i));
// }

// in console this print like
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25
// 6 * 6 = 36
// 7 * 7 = 49
// 8 * 8 = 64
// 9 * 9 = 81
// 10 * 10 = 100


// ✅ Final Explanation

// The function Square(x) calculates the square of a number. The for loop runs from 1 to 10 and calls this function each time to compute and print the square of the current
// number.

//-----Eligible to Vote-----

// function vote(age) {
//     if (age <= 18) {
//         console.log( "your age is ", age,"you can vote" );
//     }
//     else if (age<0 ) {
//         console.log("your age is ", age,"invaild output");
//     }
//         else{
//         console.log("your age is ", age,"you can't vote");
//     }
// }
// vote(15)


// in console this print like
// your age is  15 you can vote

// 🎯 Code Objective

// This function checks a person’s age and prints whether they can vote or not.

// ✅ Final Explanation

// The function uses conditional statements to decide voting eligibility based on age. However, because the first condition checks age <= 18, it incorrectly allows
//  minors and blocks the negative age check. Reordering the conditions fixes the logic.

// ✅ One-Line Memory Trick:

// 👉 “Condition checks top to bottom — first true block executes.”

// 🧠 Memory Understanding:

// Function vote is stored once.

// When vote(15) runs:

// age = 15 stored in local memory.

// age <= 18 → ✅ true

// So it prints and skips remaining conditions.

// Local memory clears after execution.

// -----Counting Negatives-----

// let arr = [70,-86,-46,-79,25];

// function countingNegative() {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]<0) {
//             count = count + 1;
//         }
//     }
//     return count;
// }
// console.log(arr,"count of Negative is",countingNegative());

// in console this print like
// 3

// 🎯 Code Objective

// The goal of this program is to count the total number of negative values present in an array.

// ✅ Final Explanation

// The function loops through the array and checks each number. Whenever it finds a number less than zero, it increases a counter. After the loop ends, the counter tells us
//  how many negative numbers are in the array.

// ✅ One-Line Memory Trick:

// 👉 “Loop checks each element → condition filters → counter increases.”

// 🧠 Memory Understanding:

// arr stored once in memory.

// countingNegative() is stored once.

// When function runs:

// count = 0

// Loop visits each array element.

// Every negative number increases count.

// After loop ends → returns total negatives.

// Local variables (count, i) are cleared.


// So:

// 👉 Function created once, executed 10 times with new temporary memory each time.

//-----Counting Digits-----

// function CountingDigits(n) {
//     if (n==0) return 1;
//     n = Math.abs(n);
//     let count = 0;
//     while(n>0){
//         n = Math.floor(n/10)
//         count++;
//     }
//     return count;
// }
// let num = -298;
// console.log(CountingDigits(num));

// in console this print like
// 3

// 🎯 Code Objective

// The goal of this function is to count the number of digits in a given integer (positive or negative).

// ✅ Final Explanation

// The function counts digits by repeatedly dividing the number by 10 and removing the last digit each time. It handles negative numbers by converting them
// to positive and treats 0 as a special case with one digit.

// ✅ One-Line Memory Trick:

// 👉 “Remove sign → keep dividing by 10 → count until zero.”

// 🧠 Memory Understanding:

// Function stored once.

// num = -298

// Math.abs(n) → makes it 298

// Each loop:

// 298 → 29 → 2 → 0

// count increases: 1 → 2 → 3

// When n becomes 0, loop stops.

// Returns 3.

// 🔥 Super fast exam memory line:

// 👉 “Digits = number of times you can divide by 10 before reaching 0.”

// -----Serach Element-----

// let arr = [56,90,23,45,35,89];

// function searchEle(arr,x) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==x) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(searchEle(arr,65));

// in console this print like
// -1

// 🎯 Code Objective

// The goal of this function is to search for a given element in an array and return its index.

// If the element is found → return its position

// If not found → return -1

// ✅ Final Explanation

// The function scans the array from start to end, comparing each element with the target value. If a match is found, it returns the index immediately.
// If no match is found after checking all elements, it returns -1.

// ✅ One-Line Memory Trick:

// 👉 “Scan left to right → if found return index → else return -1.”

// 🧠 Memory Understanding:

// arr stored once.

// Function stored once.

// Loop checks each element one by one.

// If element equals x, function immediately returns index.

// If loop finishes without match → returns -1.

// 🔥 Super exam shortcut line:

// 👉 “Linear Search = Check one by one.”

// -----While Loop-----

// let i = 0;

// while(i<10){
//     console.log("m",i);
//     i++;
// }

// in console this print like
// m 0
// m 1
// m 2
// m 3
// m 4
// m 5
// m 6
// m 7
// m 8
// m 9

// 🎯 Code Objective

// The goal of this code is to print numbers from 0 to 9 using a while loop.

// ✅ Final Explanation

// The loop starts at i = 0 and keeps running while i is less than 10. During each iteration, it prints the value of i and then increases it by 1. When i becomes 10,
//  the condition fails and the loop stops.

// ✅ One-Line Memory Trick:

// 👉 “Initialize → Check → Execute → Increment → Repeat.”

// 🧠 Memory Understanding:

// i = 0 stored in memory.

// while(i < 10) checks condition.

// If true:

// Prints "m", i

// Increments i

// Loop continues until i becomes 10.

// When i = 10, condition becomes false → loop stops.

// 🔥 Super exam shortcut:

// 👉 “While loop runs until condition becomes false.”

// -----Finding Largest NUmber in an Array------

// let arr = [13,89,68,75,470,990,100,210,90];

// function Largest() {
//     let largest = -Infinity;
//     for(let i = 0; i<arr.length;i++){
//         if (arr[i]>largest) {
//             largest=arr[i];
//         }
//     }
//     return largest;
// }
// console.log(Largest());

// in console this print like
// 990

// 🎯 Code Objective

// The goal of this code is to find and return the largest element in an array.

// ✅ Final Explanation

// The function loops through the array, comparing each value with the current largest number. Whenever a bigger number is found, it updates the largest variable.
//  After the loop finishes, the largest number in the array is returned.

// ✅ One-Line Memory Trick:

// 👉 “Assume smallest → compare each → update if bigger.”

// 🧠 Memory Understanding:

// arr stored once.

// largest starts as -Infinity (so any number is bigger).

// Loop checks each element:

// If current element > largest, update it.

// After loop ends → largest holds maximum value.

// Local variables cleared after function execution.

// 🔥 Super exam shortcut:

// 👉 “Keep updating max while scanning array.”

// -----Finding Second NUmber in an Array------

// let arr = [130,89,68,705,470,980,100,210,190];

// function secondLargest() {
//     let firstlargest = -Infinity;
//     let secondlargest = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]> largest){
//             secondlargest = firstlargest;
//             fristlargest = arr[i];
//         }
//         else if (arr[i]>secondlargest && arr[i] != firstlargest) {
//             secondlargest = arr[i];
//         }
//     }
//     return secondlargest;
// }
// console.log(secondLargest());

// in console this print like
// 705

// 🎯 Code Objective

// The goal of this function is to find the second largest number in an array without sorting it.

// ✅ Final Explanation

// The function scans the array once, updating the largest and second largest values as it goes. Whenever a new largest number is found,
// the previous largest becomes second largest. At the end, the second largest value is returned.

// ✅ One-Line Memory Trick:

// 👉 “Track two values → update both when new max comes.”

// 🧠 Memory Understanding:

// largest = -Infinity

// seconde = -Infinity

// Loop checks each element:

// If new number > largest

// Move old largest → seconde

// Update largest

// Else if number fits between largest & second

// Update seconde

// After loop → seconde holds second biggest number.

// 🔥 Super exam shortcut:

// 👉 “Maintain max and second max in one loop.”

// -----Loop with in a Loop-----

// for (let i = 1; i <= 2; i++) {
//     console.log(i)
//     for (let j = 0; j < 3; j++) {
//         console.log("i =" , i , "j =" ,j);
//     }
// }
// in console this print like
// 1
// i = 1 j = 0
// i = 1 j = 1
// i = 1 j = 2
// 2
// i = 2 j = 0
// i = 2 j = 1
// i = 2 j = 2

// 🎯 Code Objective

// This code demonstrates how nested loops work —
// an outer loop runs first, and for each of its iterations, the inner loop runs completely.

// ✅ Final Explanation

// The outer loop controls how many times the inner loop runs. For each value of i, the inner loop runs fully from j = 0 to j = 2.
// This results in every combination of i
//  and j being printed.

// ✅ One-Line Memory Trick:

// 👉 “Outer loop controls rows, inner loop runs fully for each row.”

// 🧠 Memory Understanding:

// i loop runs 2 times → (1, 2)

// For each i, inner loop j runs 3 times → (0, 1, 2)

// So total inner executions = 2 × 3 = 6 times

// 🔥 Super exam shortcut:

// 👉 “Nested loops multiply.”
// (Time Complexity = O(n × m))

// -----Star Patterns-----

// let n = 4;

// for (let i = 0; i < n; i++) {
//     let row = ""
//     for (let j = 0; j < n; j++) {
//         row = row + " * "
//     }
//     console.log(row,i);
// }

// in console this print like:

// *  *  *  *
// *  *  *  *
// *  *  *  *
// *  *  *  *

//_______________________________________________________

// let n = 4;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i+1; j++) {
//         row = row + " * ";
//     }
//     console.log(row,i);
// }

// in console this print like:

// *
// *  *
// *  *  *
// *  *  *  *

//_______________________________________________________

// let n = 4;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n-i; j++) {
//         row = row + " * ";
//     }
//     console.log(row,i);
// }

// in console this print like:

// *  *  *  *
// *  *  *
// *  *
// *

//_______________________________________________________

// let n = 4;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n-(i+1); j++) {
//         row = row +"  ";
//     }
//     for (let k = 0; k < i+1; k++) {
//         row = row +"*";
//     }
//     console.log(row,i);
// }

// in console this print like:

//           *
//        *  *
//     *  *  *
//*  *   *   *

//_______________________________________________________

// let n = 4;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row = row + (i+1);
//     }
//     console.log(row,i);
// }
// in console this print like:

// 1
// 2  2
// 3  3  3
// 4  4  4  4
//_______________________________________________________

// let n = 4;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i+1; j++) {
//         row = row + (j+1);
//     }
//     console.log(row,i);
// }
// in console this print like:

// 1
// 1  2
// 1  2  3
// 1  2  3  4

//_______________________________________________________

// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     let toggle = 1;
//     for (let j = 0; j < i+1; j++) {
//         row = row + toggle;
//         if (toggle == 1) {
//             toggle = 0;
//         }
//         else{
//             toggle = 1;
//         }
//     }
//     console.log(row,i);
// }

// in cosole this print like:

// 1
// 1  0
// 1  0  1
// 1  0  1  0

//_______________________________________________________

// let n = 5;
// let toggle = 1;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i+1; j++) {
//         row = row + toggle;
//         if (toggle == 1) {
//            toggle = 0;

//         }
//         else{
//            toggle = 1;

//         }
//     }
//     console.log(row,i);
// }

// in console this print like:

// 1
// 0  1
// 0  1  0
// 1  0  1  0
// 1  0  1  0  1

// ________mixing two codes___________

// let n = 4;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i+1; j++) {
//         row = row + " * ";
//     }
//     console.log(row);
// }
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n-i; j++) {
//         row = row + " * ";
//     }
//     console.log(row);
// }

// in console this print like:

// *
// *  *
// *  *  *
// *  *  *  *
// *  *  *  *
// *  *  *
// *  *
// *

// ____________another Mixing  two codes______________

// let n = 4;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n - i; j++) {
//         row  = row + " * ";
//     }
//     console.log(row);
// }
// let n1 = 4;

// for (let i = 0; i < n1; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//         row  = row + " * ";
//     }
//     console.log(row);
// }

// In console this print like:

// *  *  *  *
// *  *  *
// *  *
// *
// *
// *  *
// *  *  *
// *  *  *  *

// For this all 8 Star Patterns this is the  ✅ One-Line Memory Trick:

// ✅ Ultimate One-Line Memory Trick for ALL Star & Number Patterns:

// 👉 “Outer loop decides rows, inner loop decides what and how many to print.”

// That’s it. 💯

// If you want even shorter:

// 👉 “Rows outside, shape inside.”

// Or ultra-short exam version:

// 👉 “Change inner loop = change pattern.”

// No matter:

// Square

// Increasing

// Decreasing

// Right side

// Numbers

// 1 & 0

// All follow the same rule:

// Outer loop → how many rows
// Inner loop → what to print and how many.

// -------DO THIS IN RELEXING TIME-------

// -----try this-----

// if (window==this) {
//     console.log("True");
// }
// else{
//     console.log("False");
// }
// in console this print like:
// True

// ------Another One-----

// if (window<this) {
//     console.log("True");
// }
// else{
//     console.log("False");
// }
// in console this print like:
// False

// ------Another One-----

// let j = 9
// for (let i = 0; i <= j; i++) {
//     console.log(j,i);
// }

//-----Palindrome------

// var ispalindorme = function(x) {
//     let xCopy = x;

//     let rev = 0;
//     while(x>0){
//         let rem = x%10;
//         rev  = (10 * rev) + rem;
//         x = Math.floor(x/10);
// }
// if (rev === xCopy) {
//     return true;
// }
// else{
//     return false;
// }
// }
// console.log( ispalindorme(23432));

// in console this print like:

// true

// 🎯 Code Objective:

// The function checks whether a given integer is a palindrome number.

// ✅ Final Explanation

// The function reverses the digits of the number and checks if the reversed value is equal to the original. If they match,
// the number is a palindrome; otherwise, it is not.


// ✅ One-Line Memory Trick:

// 👉 “Reverse the number and compare with original.”

// 🧠 How to Remember Logic Quickly:

// Take last digit (% 10)

// Build reverse (rev = rev*10 + digit)

// Remove last digit (/ 10)

// Compare reverse with original

// 🔥 Ultra-short exam memory line:

// 👉 “Palindrome = Same forward and backward.”


//-----Removing Duplicates-----

// var removingDuplicates = function (nums) {
//     if(nums.length === 0)return 0;
//     let x = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i]>nums[x]) {
//             x = x  + 1;
//             nums[x] = nums[i]
//         }
//     }
//     return x;
// }
// let nums = [0, 0, 1, 1, 2, 2, 3, 3, 4];

// console.log(removingDuplicates(nums));

// in console this print like:
// 7

// 🎯 Code Objective

// This function removes duplicate values from an array in-place and returns the number of unique elements.

// ⚠️ Important: This logic only works correctly if the array is sorted.

// ✅ Final Explanation

// This function removes duplicates from a sorted array by keeping track of the last unique value using pointer x. When a new larger
// value is found, it’s placed next
// in the array. After the loop, the first x + 1 elements are the unique values.

// ✅ One-Line Memory Trick:

// 👉 “Slow pointer stores unique, fast pointer scans array.”

// 🧠 Memory Understanding (Very Important):

// i → fast pointer (moves every time)

// x → slow pointer (moves only when new unique found)

// When new greater value appears:

// Move x

// Copy value to nums[x]

// Finally:
// 👉 Return x + 1 (count of unique elements)

// 🔥 Ultra-short exam memory line:

// 👉 “Two pointers: one reads, one writes.”

// -----Removing Elements-----

// var removeElemet  = function (nums,val) {
//     let x = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[x] = nums[i]
//             x = x + 1;
//         }
//     }
//     return x;
// }
// let nums = [1,1,2,2,3,3,4,4];

// let val = 3;

// console.log(removeElemet(nums,val));

// in console this print like:

// 6

// 🎯 Code Objective

// This function removes all occurrences of a given value from an array in-place and returns how many elements are left that are not
//  equal to that value.

// ✅ Final Explanation

// The function scans the array and copies only the elements that are not equal to val to the front using pointer x.
// Elements equal to val are skipped.
// At the end, x represents the number of valid elements left in the array.

// ✅ One-Line Memory Trick:

// 👉 “Keep what you want, skip what you don’t.”

// 🧠 Memory Understanding:

// i → scans every element

// x → stores valid elements

// If nums[i] !== val

// Copy to nums[x]

// Move x

// Return x → new length after removal

// 🔥 Ultra-short exam memory line:

// 👉 “Two pointers: filter in-place.”

// -----Reverse Strings-----

// var reverseStrings = function (s) {
//     let len = s.length;
//     let halfLen=Math.floor(len / 2);

//     for (let i = 0; i < halfLen; i++) {
//         let temp = s[i];
//         s[i] = s[len - 1 - i];
//         s[len-1-i]= temp;
//     }
//     return s;
// }
// let s = ["M","E","E","N","A","K","S","H","I"];

// console.log(reverseStrings(s));

// in console this print like:

// I H S K A N E E M

// 🎯 Code Objective

// This function reverses an array of characters without using extra space.

// ✅ Final Explanation

// The code reverses the character array by swapping elements from the beginning and end, moving inward until the middle is reached.
//  Since it swaps in place and only loops
//  halfway, it is efficient in both time and memory.

// ✅ One-Line Memory Trick:

// 👉 “Swap from both ends moving toward center.”

// 🧠 Memory Understanding:

// Only loop till half length (no need full loop).

// For each i:

// Swap s[i]

// With s[len - 1 - i]

// Stops at center.

// 🔥 Ultra-short exam memory line:

// 👉 “Two pointers, meet in middle.”

// -----Reverse Integers-----

// var reverseInteger = function (x) {
//     let xcopy = x;
//     x = Math.abs(x);
//     let rev = 0;
//     while (x > 0) {
//         let last = x % 10;
//         rev = (10 * rev ) + last;
//         x = Math.floor(x/10);
//     }
//     return (xcopy < 0) ? -rev : rev;
// }
// console.log(reverseInteger(-123));

// in console this print like:

// -321

// 🎯 Code Objective

// This function reverses the digits of an integer.

// If the number is positive, return reversed number

// If negative, return reversed number with negative sign

// If the reversed number goes outside 32-bit signed integer range, return 0

// ✅ Final Explanation

// This code reverses an integer by repeatedly taking the last digit and building a new number.
// It keeps track of the original sign, checks for overflow beyond 32-bit integer limits, and returns the correctly signed reversed
// number.

// ✅ One-Line Memory Trick:

// 👉 “Reverse digits, then restore sign.”

// 🧠 Memory Understanding:

// Save original number (xcopy)

// Convert to positive (Math.abs)

// Extract last digit (% 10)

// Build reverse (rev = rev * 10 + digit)

// Remove last digit (/ 10)

// If original was negative → return negative reverse

// 🔥 Ultra-short exam memory line:

// 👉 “Digit by digit reverse.”

// -----Another Way to Write Reverse Integers------

// var reverseInteger = function (x) {
//     let xcopy = x;
//     x = Math.abs(x);
//     let rev = 0;
//     while (x > 0) {
//         let last = x % 10;
//         rev = (10 * rev ) + last;
//         x = Math.floor(x/10);
//     }
//     let limit = Math.pow(2,31)
//     if(rev < -limit || rev >limit)return 0
//     return (xcopy < 0) ? -rev : rev;
// }
// console.log(reverseInteger(123));

// in console this print like:
// 321

// How it works (easy way)

// Think of it like this:

// Take the last digit of the number

// Add it to a new number

// Remove the last digit

// Repeat until nothing is left

// 🎯 Code Objective

// This function reverses the digits of an integer.

// If the number is positive, return reversed number

// If negative, return reversed number with negative sign

// If the reversed number goes outside 32-bit signed integer range, return 0

//✅ One-line logic

// 👉 Take last digit → add to result → remove last digit → repeat

// Tiny diagram (super simple)

// For 123:

// x = 123        rev = 0

// 123 → take 3 → rev = 3     → x = 12
// 12  → take 2 → rev = 32    → x = 1
// 1   → take 1 → rev = 321   → x = 0

// Answer = 321

// ✅ Final Explanation

// This code reverses an integer by repeatedly taking the last digit and building a new number.
// It keeps track of the original sign, checks for overflow beyond 32-bit integer limits, and returns the correctly signed reversed number.

// ✅ One-Line Memory Trick:

// 👉 “Reverse digits, then restore sign.”

// 🧠 Memory Understanding:

// Save original number (xcopy)

// Convert to positive (Math.abs)

// Extract last digit (% 10)

// Build reverse (rev = rev * 10 + digit)

// Remove last digit (/ 10)

// If original was negative → return negative reverse

// 🔥 Ultra-short exam memory line:

// 👉 “Digit by digit reverse.”

// -----Another way to write with Power Reverese Integers-----

// var reverseInteger = function (x) {
//     let xcopy = x;
//     x = Math.abs(x);
//     let rev = 0;
//     while (x > 0) {
//         let last = x % 10;
//         rev = (10 * rev ) + last;
//         x = Math.floor(x/10);
//     }
//     let limit = (2,31)
//     if(rev < -limit || rev >limit)return 0
//     return (xcopy < 0) ? -rev : rev;
// }
// console.log(reverseInteger(123));

// in console this print like:
// 0

// 🎯 Code Objective

// This function reverses the digits of an integer.

// If the number is positive, return reversed number

// If negative, return reversed number with negative sign

// If the reversed number goes outside 32-bit signed integer range, return 0

// ✅ Final Explanation

// This code reverses an integer by repeatedly taking the last digit and building a new number.
// It keeps track of the original sign, checks for overflow beyond 32-bit integer limits, and returns the correctly signed reversed number.

// ✅ One-Line Memory Trick:

// 👉 “Reverse digits, then restore sign.”

// 🧠 Memory Understanding:

// Save original number (xcopy)

// Convert to positive (Math.abs)

// Extract last digit (% 10)

// Build reverse (rev = rev * 10 + digit)

// Remove last digit (/ 10)

// If original was negative → return negative reverse

// 🔥 Ultra-short exam memory line:

// 👉 “Digit by digit reverse.”

//-----MaxProfit-----

// var maxPorfit = function (prices) {
//     let min = prices[0];
//     let maxPorfit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] - min > maxPorfit) {
//             maxPorfit = prices[i]- min;
//         }
//         if (prices[i]<min) {
//             min = prices[i];
//         }
//     }
//     return maxPorfit;
// }
// let print = [7, 1, 5, 3, 6, 4, 10];

// console.log(maxPorfit(print));

// in console this print like:
// 9

// 🎯 Code Objective

// This function finds the maximum profit you can make by:

// Buying a stock on one day

// Selling it on a future day

// ✅ Final Explanation

// The code keeps track of the lowest stock price seen so far and calculates the profit if sold on each day.
// It continuously updates the maximum profit found during the scan.
// By the end, it returns the best possible profit from one buy and one sell.

// ✅ One-Line Memory Trick:

// 👉 “Track minimum so far, update max profit as difference.”

// 🧠 Memory Understanding:

// min → lowest price seen so far

// maxProfit → largest difference (price - min)

// For each price:

// Check if selling today gives higher profit → update

// Update min if current price is lower

// 🔥 Ultra-short exam memory line:

// 👉 “Single pass: min price + max difference.”

//-----Move Zeors-----

// 🎯 Code Objective

// This function moves all non-zero numbers to the front of the array while keeping their original order, and fills the remaining
// positions with zeros.

// ✅ One-Line Memory Trick:

// 👉 “Shift non-zeros forward, fill rest with zeros.”

// 🧠 Memory Understanding:

// i → scans all elements

// x → index to store next non-zero

// First loop → copy all non-zero numbers to front

// Second loop → fill remaining positions with 0

// Return x → count of non-zero elements

// 🔥 Exam Shortcut:

// 👉 “Two passes: 1) filter non-zero, 2) fill zeros.”

// var moveZero = function (nums) {
//        let x  = 0
//        for (let i = 0; i < nums.length; i++) {
//         if (nums[i]!== 0 ) {
//             nums[x] = nums[i]
//             x++
//         }
//        }
//        for (let i = x; i < nums.length; i++) {
//         nums[i] = 0

//        }
//        return x
// }
// let nums = [1,0,1,0,10,0]
// console.log(moveZero(nums));

// in console this print like:
// 3


// ✅ Final Explanation

// This code uses a pointer x to keep track of where the next non-zero number should go.
// It first shifts all non-zero elements forward while preserving order, then fills the rest of the array with zeros.
// Finally, it returns how many non-zero elements were found.

// -----Finding Max Consective Ones-----

// 🎯 Code Objective

// This function tries to find the maximum number of 1s in a binary array (array containing only 0s and 1s).

// ✅ Final Explanation

// The function scans the array and counts  1s using currcount.
// Whenever a 0 appears, it checks if the streak so far is the longest and updates maxcount.
// At the end, the largest streak of 1s is returned.

// ✅ One-Line Memory Trick:

// 👉 “Count  ones, reset on zero, keep track of max.”

// 🧠 Memory Understanding:

// currcount → current streak of 1s

// maxcount → longest streak so far

// For each element:

// If 1 → currcount++

// Else → update maxcount, reset currcount

// After loop → return max of currcount and maxcount

// 🔥 Exam Shortcut:

// 👉 “Sliding counter: increase on 1, reset on 0, track max.”

// function maxConsectiveOnes(nums) {
//     let currcount = 0
//     let maxcount = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 1) {
//             currcount++
//         }
//         else{
//             maxcount = Math.max(currcount,maxcount)
//             maxcount++
//         }
//     }
//     return Math.max(maxcount,currcount)
// }
// let nums = [1,1,0,1,0,1,1,1,1]
// console.log(findmax(nums));

// in console this print like:
// 7

// ---------------Missing Number---------------

// Given an array 'nums' contining 'n' distict numbers in range '[0, n]', return the only number in the range that is missing from the
//  array.

// Example:-

// Input: nums = [3, 0, 1];

// Output: 2

// -----Code-----

// let nums = [0, 1, 2, 3, 5]

// function missingNumber(nums) {
//     let n = nums.length;
//     let totalSum = n * (n + 1) / 2;

//     let partialSum = 0;
//     for (let i = 0; i < n; i++) {
//         partialSum = partialSum + nums[i];
//     }
//     return totalSum - partialSum;
// }
// console.log(missingNumber(nums));

//  ---------------Single Numbers---------------

// Given an non-empty array of Integers 'nums', every element appears twice except for one.Find that single one.You must implement a
// solution with a linear runtime complexity and use only constant extra space.

//Example:-

// Input: nums = [2, 2, 1];

// Output: 1

// var singlenumber = function (nums) {
//     let hash = {}
//     for (let i = 0; i < nums.length; i++) {
//         if (!hash[nums[i]]) {
//             hash[nums[i]]= 1
//         }else{
//             hash[nums[i]]++
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (hash[nums[i]]==1) {
//             return nums[i]
//         }
//     }
//     return hash
// }
// let nums = [1,2,3,4,3,2,1]
// console.log(singlenumber(nums));

// in console this print like:
// 4

// 🎯 Code Objective

// The goal of this code is to find the one number that appears only once in an array where every other number appears exactly twice.

// ✅ Final Explanation

// This code works because XOR removes pairs of equal numbers.
// Since all numbers appear twice except one, all duplicates cancel out, and the unique number remains in xor.

// ✅ One-Line Memory Trick:

// 👉 “Count each number → first with count 1 is single.”

// 🧠 Memory Understanding:

// hash → stores frequency of each number

// First loop → populate hash table

// Second loop → check which number occurs only once

// Return that number

// 🔥 Exam Shortcut:

// 👉 “Use hash/frequency to find non-duplicate element.”

// _________________shor way to wirte single Numder___________

// var singlenumber = function (nums) {
//     let xor = 0
//     for (let i = 0; i < nums.length; i++) {
//         xor = xor ^ nums[i]
//     }
//     return xor
// }

// let nums = [1,2,3,2,1]
// console.log(singlenumber(nums));

// in console this print like:
// 3

// 🎯 Code Objective

// The goal of this code is to find the one number that appears only once in an array where every other number appears exactly twice.

// ✅ Final Explanation

// This code works because XOR removes pairs of equal numbers.
// Since all numbers appear twice except one, all duplicates cancel out, and the unique number remains in xor.

// 🧠 Memory Understanding:

// hash → stores frequency of each number

// First loop → populate hash table

// Second loop → check which number occurs only once

// Return that number

// 🔥 Exam Shortcut:

// 👉 “Use hash/frequency to find non-duplicate element.”

// ___________________Merge sorted array____________

// var merge = function(nums1, m, nums2, n) {
//     let nums1copy = nums1.slice(0, m);
//     let p1 = 0;
//     let p2 = 0;

//     for (let i = 0; i < m + n; i++) {
//         if (p1 < m && (p2 >= n || nums1copy[p1] <= nums2[p2])) {
//             nums1[i] = nums1copy[p1];
//             p1++;
//         } else {
//             nums1[i] = nums2[p2];
//             p2++;
//         }
//     }
// };

// let n1 = [1, 2, 3, 0, 0, 0];
// let n2 = [2, 5, 6];
// merge(n1, 3, n2, 3);
// console.log(n1);

// in console this print like:
//  1, 2, 2, 3, 5, 6

// who its work:
// Step 1

// Compare 1 and 2
// Smaller → 1
// Put 1 in nums1

// Step 2

// Compare 2 and 2
// Pick 2 from first list

// Step 3

// Compare 3 and 2
// Pick 2 from second list

// Step 4

// Compare 3 and 5
// Pick 3

// Step 5

// First list finished
// Copy remaining from second list → 5, 6

// one line memery trick:
// “Compare → pick smaller → move pointer → repeat”

// 🪄 Magic Rule (Big Memory Trick)

// “Take the bigger number from the end and place it at the end.”

// 🎯 Objective of the Code

// The goal is to merge two sorted arrays into one sorted array.

// ✅ One-Line Memory Trick:

// 👉 “Two pointers scan → pick smaller → fill nums1.”

// 🧠 Step-by-Step Memory Flow:

// Copy first m elements of nums1 → nums1copy = [1,2,3]

// Initialize pointers: p1 = 0, p2 = 0

// Loop i = 0 → 5:

// 🔥 Exam Shortcut:

// 👉 “Merge like merge-sort: two pointers, smallest goes first.”

// i    Compare  nums1 updated  p1/p2
// 0    1 ≤ 2    nums1[0] = 1   p1=1
// 1    2 ≤ 2    nums1[1] = 2   p1=2
// 2    3 > 2    nums1[2] = 2   p2=1
// 3    3 ≤ 5    nums1[3] = 3   p1=3
// 4    p1 ≥ m   nums1[4] = 5   p2=2
// 5    p1 ≥ m   nums1[5] = 6   p2=3

// ___________________best way to wirte Merge sorted array_____________________

// var merge = function (nums1, m, nums2, n) {
//     let p1 = m - 1
//     let p2 = n - 1
//     for (let i = m + n - 1; i >= 0; i++) {
//         if (p2 < 0) break
//         if (p1 >= 0 && nums1[p1] > nums2[p2]) {
//             nums1[i] = nums1[p1]
//             p1--
//         }
//         else {
//             nums1[i] = nums2[p2]
//             p2--
//         }
//     }
// }

// let n1 = [1, 2, 3, 0, 0, 0];
// let n2 = [2, 5, 6];
// merge(n1, 3, n2, 3);
// console.log(n1);

// in console this print like:
// 1, 2, 3, 0, 0, 6, 5, 3, 2

// one line memery trick:
// “Compare → pick smaller → move pointer → repeat”


// 🎯 Objective of the Code

// The goal is to merge two sorted arrays into one sorted array.

// 🪄 Magic Rule (Big Memory Trick)

// We merge two sorted arrays in place by comparing their largest remaining elements from the end and filling nums1 backwards with the
//  bigger value each time.

// ✅ One-Line Memory Trick:

// 👉 “Two pointers scan → pick smaller → fill nums1.”

// 🧠 Step-by-Step Memory Flow:

// Copy first m elements of nums1 → nums1copy = [1,2,3]

// Initialize pointers: p1 = 0, p2 = 0

// Loop i = 0 → 5:

// 🔥 Exam Shortcut:

// 👉 “Merge like merge-sort: two pointers, smallest goes first.”

// i    Compare  nums1 updated  p1/p2
// 0    1 ≤ 2    nums1[0] = 1   p1=1
// 1    2 ≤ 2    nums1[1] = 2   p1=2
// 2    3 > 2    nums1[2] = 2   p2=1
// 3    3 ≤ 5    nums1[3] = 3   p1=3
// 4    p1 ≥ m   nums1[4] = 5   p2=2
// 5    p1 ≥ m   nums1[5] = 6   p2=3

// ---------------Finding the Sum of All Odd Number in an Array ---------------

// let arr = [5, 3, 2, 1, 7]

// function isOddSum(n) {
//     let isOdd = ((arr[n] % 2) != 0);
//     if (n == 0) {
//         return isOdd ? arr[n] : 0;
//     }

//     return ((isOdd ? arr[n] : 0) + isOddSum(n - 1))
// }
// console.log(isOddSum(arr.length - 1));

// ------------------Factorial of N------------------

// var factorial = function (n) {
//     if (n == 1) return 1;
//     return (n % (factorial(n - 1)))
// }
// console.log(factorial(5));

// -----------------Linear Search------------------

// let linearSearch = function (arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// let arr = [5, 1, 0, 2, 8];

// console.log(linearSearch(arr,8));

// -----------------Binary Search-----------------

// let arr = [-1, 0, 3, 5, 9, 12];

// let binarySearch = function (nums, target) {

//     let left = 0;
//     let right = nums.length -1;

//     while (right >= left) {
//         let middle = Math.floor((left + right) / 2);
//         // console.log("middle-",middle,"arr-",arr[middle]);

//         if (target === nums[middle]) {
//             console.log("target-",target);
//             return middle;

//         }else if (target < nums[middle]) {
//             console.log("right",right,"arr-",arr[middle]);
//             return right = middle - 1;

//         }else {
//             console.log("left-",left,"arr-",arr[middle]);
//             return left = middle + 1;
//         }
//     }
//     return -1;
// }
// console.log(binarySearch(arr, 9));

// -----------------Bobble Sort-----------------

// let arr = [5, 4, 9, 15, 7, 1, 0];

// let bubbleSort = function (arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         let isSwaped = false;

//         for (let m = 0; m < n - 1 - i; m++) {
//             if (arr[m] > arr[m + 1]) {
//                 let temp = arr[m];
//                 arr[m] = arr[m + 1];
//                 arr[m + 1] = temp;

//                 isSwaped = true;
//             }
//         }
//         if(!isSwaped) break;
//     }
//     return arr;
// }
// let result = bubbleSort(arr);

// console.log(result);

// -----------------Selection Sort-----------------

// let arr = [7, 1, 5, 4, 3, 2];

// let selectedSort = function (arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//             let min = i;
//             for (let j = 0; j < n; j++) {
//                 if (arr[i] < arr[min]) {
//                     min = j;
//                 }
//             }
//             if (min != i) {
//                 let temp = arr[i];
//                 arr[i] = arr[min];
//                 arr[min] = temp;
//             }
//     }
//     return arr;
// }

// let result = selectedSort(arr);

// console.log(result);

// ---------------Insertion Sort---------------

// let arr = [-10,6,5,2,1,4,-20]

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let curr = arr[i]
//         let per = i - 1
//         while (arr[per] > curr && per >= 0) {
//             arr[per+1] =arr[per]
//             per--
//         }
//         arr[per+1] = curr
//     }
//     return arr
// }
// console.log(insertionSort(arr));

// ---------------Merge Sort---------------

// let arr = [9,2,4,3];
// function SortArray(arr) {
//     if (arr.length <= 1) return arr;
//     let middle = Math.floor(arr.length / 2);
//     let left = SortArray(arr.slice(0, middle));
//     let right = SortArray(arr.slice(middle));
//     return Merge(left, right);
// };
// console.log(SortArray(arr));

// function Merge(left, right) {
//     let result = [];
//     let i = 0;
//     let j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         }
//         else {
//             result.push(right[j]);
//             j++;
//         };
//     };
//     return [...result, ...left.slice(i),... right.slice(j)];
// };

// ---------------Design Linked List---------------

// function Node(val) {
//     this.val = val
//     this.next = null
//     return val
// }

// var MyLinkedList = function () {
//     this.head = null
//     this.size = 0
// }

// MyLinkedList.prototype.addAtTail = function (val) {
//     let newNode = new Node(val)
//     if (this.head == null) {
//         this.head = newNode
//     }
//     else{
//         let curr = this.head
//         while (curr.next !== null) {
//             curr = curr.next
//         }
//         this.curr = newNode
//     }
//     this.size++
// }

// MyLinkedList.prototype.addAtHead = function (val) {
//     let newNode = new Node(val)
//     newNode.next = this.head
//     this.head = newNode
//     this.size++
// }


// MyLinkedList.prototype.addAtIndex = function (index,val) {
//     if (index == 0) {
//         this.addAtHead(val);
//         return;
//     }
//     else if(index === this.size){
//         this.addAtTail(val);
//         return;
//     }
//     else{
//         let newNode = new Node(val);
//         let curr = this.head;
//         for (let i = 0; i < index-1; i++) {
//             curr = curr.next;
//         };
//         newNode.next = curr.next;
//         curr.next = newNode;
//     }
//     this.size++
// };

// MyLinkedList.prototype.get = function (index) {
//     let curr = this.head;
//     for (let i = 0; i < index; i++) {
//         curr = curr.next
//     }
//     return curr.val
// }

// MyLinkedList.prototype.deleteAtIndex = function (index) {
//     if (index ==0 || index>= this.size)return
//     if (index === 0) {
//         this.head = this.head.next
//     }
// else{
//      let curr = this.head;
//     for (let i = 0; i < index-1; i++) {
//         curr = curr.next
//     }
//     curr = curr.next.next
// }
// this.size++
// }

// ---------------Middle of the Linked List---------------

// function middleNode(head) {
//     let slow = fast = head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     };
//     return slow;
// };

// ---------------Reverse of the Linked List---------------

// var reverselist = function (head) {
//     let previous = null
//     let current = this.head
//     while (current) {
//         let temp = current.next
//         current.next = previous
//         previous = current
//         previous = temp
//     }
//     head = previous
//     return previous
// }

// ---------------Linked List Cycle---------------

// function cycle(head) {
//     let curr = head;
//     let seen = new Set();
//     while (curr!==null) {
//         if (seen.has(curr)) {
//             return true;
//         };
//         seen.add(curr);
//         curr = curr.next;
//     };
//     return false;
// };

// ---------------Linked List Cycle Flody Algorithm---------------

// var hasCycle = function (head) {
//     let slow = head
//     let fast = head.next
//     while (slow!= fast) {
//         if (fast == null || fast.next == null) {
//             return false
//         }
//         slow = slow.next
//         fast = fast.next.next
//     }
//     return true
// }

// ---------------Palindrome Linked List---------------

// var isPalidrome  = function (head) {
//     let slow = fast = head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     };
//     let previous = null;
//     let curr = slow;
//     while (curr) {
//         let temp = curr.next;
//         curr.next = previous;
//         previous = curr;
//         curr = temp;
//     };
//     let first = head;
//     let second = previous;
//     while (second) {
//         if (first.next != second.next) {
//             return false;
//         };
//         first = first.next;
//         second = second.next;
//     };
//     return true;
// };

// _____________________ getInerstionNode________________________________

// var getInerstionNode = function (headA,headB) {
//     let store = new Set()
//     while (headB) {
//         store.add(headB)
//         headB = headB.next
//     }
//     while (headA) {
//         if (store.add(headA)) {
//             headA = headA.next
//         }
//         headA = headA.next
//     }
//     return null;
// }

// _____________removeElemet_____________________

// var removeElemet = function (head,val) {
//     let sentinel = new ListNode()
//     sentinel.next = head
//     let previous = sentinel
//     while (previous && previous.next) {
//         if (previous.next === val) {
//             previous.next = previous.next.next
//         }
//         else{
//             previous = previous.next
//         }
//     }
//     return sentinel.next
// }
// _______________removeDudles_________

// function deleteDulickcaths(head) {
//     let curr = head
//     while (curr && curr.next) {
//         if (curr.val === curr.next.val) {
//             curr.next = curr.next.next
//         }
//         else{
//             curr = curr.next
//         }
//     }
//     return head
// }

// ___________________isOddEven__________

// var isOddEven = function (head) {
//     let odd = head
//     let even = head.next
//     let evenSart = even
//     while (odd.next && even.next) {
//         odd = odd.next.next
//         even = even.next.next
//         odd = odd.next
//         even = even.next
//     }
//     odd.next = evenSart
//     return head
// }


// var removeNthFromEnd = function (head,n) {
//     let sentinel = new ListNode();
//     sentinel.next = head;
//     let length = 0;
//     while (head) {
//         head = head.next;
//         length++;
//     };
//     let prevPos = length - n;
//     let prev = sentinel;
//     for (let i = 0; i < prevPos; i++) {
//         prev = prev.next;
//     };
//     prev.next = prev.next.next;
//     return sentinel.next;
// };

// var removeNthFromEnd = function (head,n) {
//     let sentinel = new ListNode();
//     sentinel.next = head;
//     let first = sentinel;
//     for (let i = 0; i < n; i++) {
//         first = first.next;
//     };
//     let second = sentinel;
//     while (first.next) {
//         second = second.next;
//         first = first.next;
//     };
//     second.next = second.next.next;
//     return sentinel.next;
// };

// var addTwoNumders =  function (List1,List2) {
//     let ans = new ListNode()
//     let ansHead = ans
//     let carry = 0
//     while (List1 || List2 || carry) {
//         let Sum = (!List1 ?0 : List1.val) + (!List1 ?0 : List2.val) + carry
//         carry = Math.floor(Sum/10)
//         let digit = Sum & 10
//         let newNode = new ListNode(digit)
//         ans.next = newNode
//         ans = ans.next
//         List1 = List1 && List1.next
//         List2 = List2 && List2.next
//     }
//     return ansHead.next
// }


// var mergeTwoAList = function (l1,l2) {
//     let start = new ListNode()
//     let curr = start
//     while (l1&&l2) {
//         if (l1.val < l2.val) {
//             curr.next = 1
//             l1 = l2.next
//         }
//         else{
//             curr.next = 12
//             l2 = l2.next
//         }
//         curr = curr.next
//     }
//     if (!l1) {
//         curr.next = l2
//     }
//     if (!l2) {
//         curr.next = l1
//     }
//     return start.next
// }

// var rotateRigth = function (head,k) {
//     if(!head || !head.next)return head;
//     let length = 0
//     let curr = head
//     while (curr) {
//         curr = curr.next
//         length++
//     }
//     k = k % length
//     let s = f = head
//     for (let i = 0; i < k; i++) {
//         f= f.next
//     }
//     while (f.next) {
//         s = s.next
//         f = f.next
//     }
//     f.next = head
//     let newHead = s.next
//     s.next = null
//     return newHead
// }


// function swapPair(head) {
//     if(!head && !head.next)return head
//     let dummy = new LIstnode()
//     dummy.next = head
//     let p = dummy
//     let c = head
//     let n = head.next
//     while (c = p) {
//         p.next = n
//         c.next = n.next
//         n.next = c
//         p = c
//         c = p.next
//         n  = c && c.next
//     }
//     return dummy.next
// }

// function swapPair(head) {
//     if(!head && !head.next)return head
//     let l = head
//     let r = head.next
//     l.next = swapPair(r.next)
//     r.next = l
//     return r
// }

// function Node() {
//     this.val = val
//     this.next = null
// }


// MyLinkedList =  function() {
//     this.head = null
//     this.size = 0
// }
// __________________print n to 1_______________
// function fun(n) {
//     if (n == 0) {return;}
//     console.log(n);
//     n = n - 1
//     fun(n)
// }
// fun(9)
// __________________print n to 1_______________
// function fun(n) {
//     if (n < 1) {return;}
//     console.log(n);
//     fun(--n)
// }
// fun(9)
// __________________print 1 to n_______________
// let n = 10
// function fun(x) {
//     if (x > n) {
//         return;
//     }
//     console.log(x);
//     x = x + 1
//     fun(x)
// }
// fun(1)

// __________________sum of all element in an array_______________

// function sum(n) {
//     if (n == 0) return 0;
//     return n + sum(n - 1)
// }
// console.log(sum(100));

// __________________sum of all odd element in an array_______________

// let arr = [5,3,2,10,1]
// function sum(n) {
//     let isOdd = ((arr[n] % 2) != 0)
//     if (n == 0) {
//         return isOdd ? arr[n] : 0
//     }
//     return ((isOdd ? arr[n] : 0) + sum(n - 1))
// }
// console.log(sum(arr.length-1));

// ________________________factorial_____________

// function fact(n) {
//     if (n == 1) return 1;
//     return n * fact(n - 1)
// }
// console.log(fact(5));

// _______________________power of two_______

// function ispowerTwo(n) {
//     if (n == 1) return true;
//     else if ((n % 2 != 0) || n <= 1) return false;
//     return ispowerTwo(n/2);
// }
// console.log(ispowerTwo(6));

// _________________fiboncci numders________________

// function fib(n) {
//     if (n <= 1) return n
//     return fib(n - 1) + fib(n - 2)
// }
// console.log(fib(10));

// __________________________linear Search_____________

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return  i
//         }
//     }
//     return "this numder is not found in index"
// }
// let target = 1
// console.log("returning index :",linearSearch(arr, 0));

// __________________________Binary Search_____________

// let arr = [1,2,3,4,5,5,6,7,8,9,20]
// function Binarysearch(nums, target) {
//     let left = 0
//     let right = nums.length - 1
//     console.log(right)
//     while (right >= left) {
//         let middle = Math.floor((left + right) / 2)
//         console.log('middle---',middle)
//         if (target === nums[middle]) {
//             return middle
//         }
//         else if (target < nums[middle]) {
//             right = middle - 1
//         }
//         else {
//             left = middle + 1
//         }
//     }
//     return -1
// }
// let target =1
// console.log("returnind index:",Binarysearch(arr ,target));

// ____________________Bubble Sort__________________


// let arr = [1,9,7,4,8,-10,10];

// let bubbleSort = function (arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         let isSwaped = false;

//         for (let m = 0; m < n - 1 - i; m++) {
//             if (arr[m] > arr[m + 1]) {
//                 let temp = arr[m];
//                 arr[m] = arr[m + 1];
//                 arr[m + 1] = temp;

//                 isSwaped = true;
//             }
//         }
//         if(!isSwaped) break;
//     }
//     return arr;
// }
// let result = bubbleSort(arr);

// console.log(result);

// -----------------Selection Sort-----------------

// let arr = [7, 1, 5, 4, 3, 2];

// let selectedSort = function (arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//             let min = i;
//             for (let j = i + 1; j < n; j++) {
//                 if (arr[j] < arr[min]) {
//                     min = j;
//                 }
//             }
//             if (min != i) {
//                 let temp = arr[i];
//                 arr[i] = arr[min];
//                 arr[min] = temp;
//             }
//     }
//     return arr;
// }

// let result = selectedSort(arr);

// console.log(result);


// ---------------Insertion Sort---------------

// let arr = [-10,6,5,2,1,4,-20];

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let curr = arr[i];
//         let per = i - 1;
//         while (arr[per] > curr && per >= 0) {
//             arr[per+1] = arr[per];
//             per--;
//         }
//         arr[per+1] = curr ;
//     }
//     return arr;
// }

// console.log(insertionSort(arr));

// _______________________merge Sort_______________

// let arr  = [4,8,3,1]
// function mergeSort(arr) {
//     if (arr.length<=1) return arr
//     let mid = arr.length/2
//     console.log("mid-",mid);
//     let left = mergeSort(arr.slice(0,mid))
//     console.log("left-",left);
//     let rigth = mergeSort(arr.slice(mid))
//     console.log("rigth-",rigth);
//     return merge(left,rigth)
// }

// console.log(mergeSort(arr));

// function merge(left,right) {
//     let res = []
//     let i = j = 0
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             res.push(left[i])
//             i++
//             console.log("left-",left,"arr-",arr[i]);
//         }
//         else{
//             res.push(right[j])
//             j++
//             console.log("rigth-",right,"arr-",arr[i]);
//         }
//     }
//     return [...res,...left.slice(i),...right.slice(j)]
// }


// ______________Create new node in linked list________________

// function Node(val) {
//     this.val = val;
//     this.next = null;
//     return val;
// }

// ______________Create new linked list________________

// function MyLinkedList(val) {
//     this.head = null
//     this.size = 0
// }

// ______________Adding new Node At tail________________

// MyLinkedList.prototype.addAtTail = function (val) {
//     let newNode = new Node(val)
//     if (this.head == null) {
//         this.head = newNode
//     }
//     else{
//         let curr = this.head
//         while (curr != null) {
//             curr = curr.next
//         }
//     }
//     this.curr = newNode
// }

// ______________Adding w Node At head________________


// MyLinkedList.prototype.addAtHead = function (val) {
//     let newNode = new Node(val)
//     newNode.next = this.head
//     this.head = newNode
//     this.size++
// }

// ______________Adding new Node At Index________________

// MyLinkedList.prototype.addAtIndex = function (Index,val) {
//     if (Index == 0) {
//         this.addAtHead(val)
//         return;
//     }
//     else if (Index == 0) {
//         this.addAtTail(val)
//         return;
//     }
//     else{
//         let newNode = new Node(val)
//         let curr = this.head
//         for (let i = 0; i < Index-1; i++) {
//             curr = curr.next
//         }
//         newNode = curr.next
//         curr.next = newNode
//     }
//     this.size++
// }


// ______________Add get in head________________

// MyLinkedList.prototype.get = function (Index) {
//     let curr = this.head
//     for (let i = 0; i < Index; i++) {
//         curr = curr.next
//     }
//     return curr.val
// }

// ______________delete At Index________________

// MyLinkedList.prototype.deleteAtIndex = function (index) {
//     if (index ==0 || index>= this.size)return
//     if (index === 0) {
//         this.head = this.head.next
//     }
// else{
//      let curr = this.head;
//     for (let i = 0; i < index-1; i++) {
//         curr = curr.next
//     }
//     curr = curr.next.next
// }
// this.size++
// }

//_____________________middle of linked list________________

// function middleList(head) {
//     let slow = fast = head
//     if (fast && fast.next) {
//         slow = slow.next
//         fast = fast.next.next
//     }
//     return slow
// }

//  _________________Reverse of the Linked List _________________

// var reverselist = function (head) {
//     let previous = null
//     let current = this.head
//     while (current) {
//         let temp = current.next
//         current.next = previous
//         previous = current
//         previous = temp
//     }
//     head = previous
//     return previous
// }

//  _________________Linked List Cycle _________________

// function cycle(head) {
//     let curr = head;
//     let seen = new Set();
//     while (curr!==null) {
//         if (seen.has(curr)) {
//             return true;
//         };
//         seen.add(curr);
//         curr = curr.next;
//     };
//     return false;
// };

// _________________Linked List Cycle Flody Algorithm_______________________

// var hasCycle = function (head) {
//     let slow = head
//     let fast = head.next
//     while (slow!= fast) {
//         if (fast == null || fast.next == null) {
//             return false
//         }
//         slow = slow.next
//         fast = fast.next.next
//     }
//     return true
// }


// ______________________Palindrome Linked List___________________

// function palindrome(head) {
//
//     let slow = fast = head
//     if (fast && fast.next) {
//         slow = slow.next
//         fast = fast.next.next
//     };

//     let prev = null
//     let curr = slow
//     while (curr) {
//         let temp = curr.next
//         curr.next = prev
//         prev = curr
//         curr = temp
//     };

//     let first = head;
//     let second = prev
//     while (second) {
//         if (first.val != second.val) {
//             return false;
//         };
//         first = first.next;
//         second = second.next;
//     };
//     return true;
// }

// _____________________ getInerstionNode________________________________

// var getInerstionNode = function (headA,headB) {
//     let store = new Set()
//     while (headB) {
//         store.add(headB)
//         headB = headB.next
//     }
//     while (headA) {
//         if (store.add(headA)) {
//             headA = headA.next
//         }
//         headA = headA.next
//     }
//     return null;
// }

// _____________removeElemet_____________________

// var removeElemet = function (head,val) {
//     let sentinel = new ListNode()
//     sentinel.next = head
//     let previous = sentinel
//     while (previous && previous.next) {
//         if (previous.next === val) {
//             previous.next = previous.next.next
//         }
//         else{
//             previous = previous.next
//         }
//     }
//     return sentinel.next
// }
// _______________removeDudles_________

// function deleteDulickcaths(head) {
//     let curr = head
//     while (curr && curr.next) {
//         if (curr.val === curr.next.val) {
//             curr.next = curr.next.next
//         }
//         else{
//             curr = curr.next
//         }
//     }
//     return head
// }

// ___________________isOddEven__________

// var isOddEven = function (head) {
//     let odd = head
//     let even = head.next
//     let evenSart = even
//     while (odd.next && even.next) {
//         odd = odd.next.next
//         even = even.next.next
//         odd = odd.next
//         even = even.next
//     }
//     odd.next = evenSart
//     return head
// }

// ___________________remove Nth node Form end________________

// var removeNthFromEnd = function (head,n) {
//     let sentinel = new ListNode();
//     sentinel.next = head;
//     let first = sentinel;
//     for (let i = 0; i < n; i++) {
//         first = first.next;
//     };
//     let second = sentinel;
//     while (first.next) {
//         second = second.next;
//         first = first.next;
//     };
//     second.next = second.next.next;
//     return sentinel.next;
// };

// ___________________another wy to do remove Nth node Form end________________


// var addTwoNumders =  function (List1,List2) {
//     let ans = new ListNode()
//     let ansHead = ans
//     let carry = 0
//     while (List1 || List2 || carry) {
//         let Sum = (!List1 ?0 : List1.val) + (!List1 ?0 : List2.val) + carry
//         carry = Math.floor(Sum/10)
//         let digit = Sum & 10
//         let newNode = new ListNode(digit)
//         ans.next = newNode
//         ans = ans.next
//         List1 = List1 && List1.next
//         List2 = List2 && List2.next
//     }
//     return ansHead.next
// }

// ________________________merge two linked list________________

// var mergeTwoAList = function (l1,l2) {
//     let start = new ListNode()
//     let curr = start
//     while (l1&&l2) {
//         if (l1.val < l2.val) {
//             curr.next = 1
//             l1 = l2.next
//         }
//         else{
//             curr.next = 12
//             l2 = l2.next
//         }
//         curr = curr.next
//     }
//     if (!l1) {
//         curr.next = l2
//     }
//     if (!l2) {
//         curr.next = l1
//     }
//     return start.next
// }

// __________________rotate Rigth the linked list_______________

// var rotateRigth = function (head,k) {
//     if(!head || !head.next)return head;
//     let length = 0
//     let curr = head
//     while (curr) {
//         curr = curr.next
//         length++
//     }
//     k = k % length
//     let s = f = head
//     for (let i = 0; i < k; i++) {
//         f= f.next
//     }
//     while (f.next) {
//         s = s.next
//         f = f.next
//     }
//     f.next = head
//     let newHead = s.next
//     s.next = null
//     return newHead
// }

// ___________________________swapPair_________________________

// function swapPair(head) {
//     if(!head && !head.next)return head;
//     let dummy = new LIstnode();
//     dummy.next = head;
//     let p = dummy;
//     let current = head;
//     let n = head.next;
//     while (current = p) {
//         p.next = n;
//         current.next = n.next;
//         n.next = current;
//         p = current;
//         current = p.next;
//         n  = current && current.next;
//     };
//     return dummy.next;
// };

// ___________________________swapPair_________________________

// function swapPair(head) {
//     if(!head && !head.next)return head
//     let l = head
//     let r = head.next
//     l.next = swapPair(r.next)
//     r.next = l
//     return r
// }

// __________________length of last word_____________

// function lengthOfLastWord(s) {
//     s = s.trim();
//     s = s.split(" ");
//     return s[s.length-1].length;
// }
// let word = "   Hello  World   ";
// console.log(lengthOfLastWord(word));

// __________________approach with two loops length  of last word_____________

// function lengthOfLastWord(s) {
//     let n = s.length-1
//     while (n>=0) {
//         if (s[n] === " ") {
//             --n
//         }
//         else{
//             break
//         }
//     }
//     let count = 0
//     while (n>=0) {
//         if (s[n] != " ") {
//             --n
//             count++
//         }
//         else{
//             break;
//         }
//     }
//     return count;
// }
// let word = "   Hello  World   ";
// console.log(lengthOfLastWord(word));

// __________________2nd approach with one loops length  of last word___

// function lengthOfLastWord(s) {
//     let n = s.length-1
//     let count = 0
//     while (n >= 0) {
//         if (s[n] != " ") {
//             ++count
//         }
//         else if (count > 0) {
//             break
//         }
//         --n
//     }
//     return count;
// }
// let word = "   Hello  Rajasree  ";
// console.log(lengthOfLastWord(word));

// _____________________Find Words Containg Character____________

// function FindWordsContaingCharacte(words,x) {
//     let res = []
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].includes(x)) {
//             res.push(i)
//         }
//     }
//     return res
// }
// let wordArr = ["raja","meen"]
// let x = "a"
// console.log(FindWordsContaingCharacte(wordArr,x));

// _____________________2nd approach Find Words Containg Character____________

// function FindWordsContaingCharacte(words,x) {
//     let res = []
//     for (let i = 0; i < words.length; i++) {
//          for (let j = 0; j < words[i].length; j++) {
//             if (words[i][j] === x) {
//                 res.push(i)
//                 break
//             }
//         }
//     }
//     return res
// }
// let wordArr = ["raja","meeasn"]
// let x = "a"
// console.log(FindWordsContaingCharacte(wordArr,x));


// _______________jewels and stones_______________

// function jewelsStone(jewels,stones) {
//     let count = 0
//     for (let i = 0; i < stones.length; i++) {
//          if (jewels.includes(stones[i])) {
//                 ++count
//             }
//     }
//     return count
// }
// let jewels = "aA"
// let stone = "aAAbbbb"
// console.log(jewelsStone(jewels,stone));


// _______________2nd approach jewels and stones_______________

// function jewelsStone(jewels,stones) {
//     let count = 0
//     for (let i = 0; i < stones.length; i++) {
//         for (let j = 0; j <jewels.length; j++) {
//              if (jewels[j] == stone[i]) {
//                 ++count
//                 break
//             }
//         }
//     }
//     return count
// }
// let jewels = "aA"
// let stone = "aAAAbbbb"
// console.log(jewelsStone(jewels,stone))

// _______________3nd approach jewels and stones_______________


// function jewelsStone(jewels,stones) {
//     let jSet = new Set()
//         for (let i = 0; i < jewels.length; i++) {
//             jSet.add(jewels[i])
//         }
//             let count = 0
//         for (let i = 0; i < stones.length; i++) {
//              if (jSet.has(stone[i])) {
//                 ++count
//             }
//     }
//     return count
// }
// let jewels = "aA"
// let stone = "aAAAbbbb"
// console.log(jewelsStone(jewels,stone))