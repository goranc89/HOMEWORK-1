/*2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”
*/

function arrayToStringWithSelection(arr){
var newArr = [];
    for (i=0; i< arr.length; i++){
        if (isFinite(arr[i]) == true && 
           // isNaN(arr[i]) !=true && 
           // arr[i] != undefined && 
            arr[i] != null){
        newArr.push (arr[i]);
        }
    }
    return newArr.join('')
}

var rezultat = arrayToStringWithSelection([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log (rezultat)
