/*10.	Write a program that inserts a given element e on the given position p in the array a. 
If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
function insertElementOnPozition(arr,e,p){
    var newArr=[];
    var result= "nesto nije uredu";
    if (p>arr.length){
        result = "Error: position is greater than the array length";
    }
    else{
    for( i=0; i<arr.length+1; i++ ){
        if(i<p){
            newArr.push(arr[i]);
        }
        else if (i==p){
            newArr.push (e);
        }
        else{
            newArr.push(arr[i-1])
        }
    }
    result = newArr
}
return result
}
var rezultat = insertElementOnPozition([2, -2, 33, 12, 5, 8], 78, 3);
console.log (rezultat)
var rezultat = insertElementOnPozition([2, -2, 33, 12, 5, 8], 13, 12);
console.log (rezultat)
