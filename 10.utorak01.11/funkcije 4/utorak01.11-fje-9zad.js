/*9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function deletesElementFromArray(arr,e){
    var newArr = [];
    for (i=0; i< arr.length; i++){
        if (arr[i] != e){
            newArr.push (arr[i])
        }
    }



    return newArr
}

var rezultat = deletesElementFromArray([4, 6, 2, 8, 2, 2], 2)
console.log (rezultat)
var rezultat = deletesElementFromArray([4, 6, 4, 8, 4, 2], 4)
console.log (rezultat)

