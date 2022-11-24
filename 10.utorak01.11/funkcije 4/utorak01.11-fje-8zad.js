/*8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]   */

function concatenatesArrays (arr1,arr2){
  //  var newArr= [];
    for (i=0; i< arr2.length; i++){
        arr1.push(arr2[i])
    }
    return arr1
}

var rezultat = concatenatesArrays([4, 5, 6, 2], [3, 8, 11, 9]);
console.log (rezultat)


