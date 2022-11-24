/*5.	Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
*/

function ifNumberIsFloat (arr){
    var newArr = [];
    var brojac = 0;
    for (i=0; i<arr.length;i++){
        if (typeof(arr[i]) == "number" &&
            isNaN(arr[i]) != true &&
            Number.isInteger(arr[i]) !=true){
                newArr.push(arr[i]);
                brojac += 1
            }
    }
    return brojac + "("+newArr+")"
}
var rezultat = ifNumberIsFloat ([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log (rezultat)


