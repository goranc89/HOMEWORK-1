/*4.	Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3
*/


function isNumberInteger ( arr){
    var newArr = [];
    var brojac = 0;
    for (i=0; i<arr.length; i++){
        if (Number.isInteger(arr[i])==true){
            newArr.push (arr[i])
            brojac +=1
        }
    }
    return brojac + "("+newArr+")"
}
var rezultat = isNumberInteger ([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log (rezultat)