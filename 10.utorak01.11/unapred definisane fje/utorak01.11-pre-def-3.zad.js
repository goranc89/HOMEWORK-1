/*3.	Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]
*/

function arrayToStringWithSelection(arr){
    var newArr = [];
        for (i=0; i< arr.length; i++){
            if (typeof (arr[i])=="number" && 
                isFinite(arr[i]) == true &&
                arr[i] != 0 ){   //ne znam kako bih se drugacije otarasila 0...
            newArr.push (arr[i]);
            }
        }
        return newArr
    }
    
    var rezultat = arrayToStringWithSelection([NaN, 0, 15, false, -22, '', undefined, 47, null]);
    console.log (rezultat)