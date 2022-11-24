/*7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]   */

function intertwinesArr(arr1, arr2){
    var newArr= [];
    for (i=0;i<arr1.length; i++){
            newArr.push(arr1[i]);
            newArr.push(arr2[i]);
            
        }
    return newArr;
}

var rezultat = intertwinesArr([4, 5, 6, 2], [3, 8, 11, 9]);
console.log (rezultat)


/*function intertwinesArr(arr1, arr2){
    var newArr= [];
    var i=0;
    var j=0;
    var x=0;
    while (i<arr1.length && j<arr2.length){
        newArr[x++] = arr1[i++];
        newArr[x++] = arr2[j++];
    }
    return newArr;
}

var rezultat = intertwinesArr([4, 5, 6, 2], [3, 8, 11, 9]);
console.log (rezultat)*/
