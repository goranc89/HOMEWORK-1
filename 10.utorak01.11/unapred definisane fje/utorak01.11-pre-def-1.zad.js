/*1.	Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/


function numberFromString(arr){
var newArr = [];
var newArr1 = [];
    for (i=0; i<arr.length; i++){
    newArr.push (Number(arr[i]));
        if (typeof (newArr[i]) == "number" &&
        isNaN(newArr[i])!=true && 
        isFinite(newArr[i]) == true){
        newArr1.push(newArr[i])
        }
    }
    return newArr1
}

var rezultat = numberFromString(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log (rezultat)