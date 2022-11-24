/*4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2*/

function secondMin(a){
    
    var min= 0;
    var result = "bilo sta";
    for (i=0; i<a.length;i++){
        if (a[i]<=a[0] && a[i]<=a[1] &&a[i]<=a[2] &&a[i]<=a[3]){
            min=a[i]
       // result = "minimum of a given array is "+ min;
    }
    }
    for (j=0; j<a.length;j++){
        if (a[j]<=a[0] && a[j]<=a[1] &&a[j]<=a[2] && a[j]<=a[j] && a[j]>min){
            
         result = "the first element larger than minimum is "+ a[j] + " (min is "+min+")"
    }
    }
    return result                   //imala sam isti problem kao u proslom zadatku, zato sam uslov postavila ovako, 
}
var rezultat = secondMin([4, 2, 2, -1, 6]);
console.log (rezultat)
var rezultat = secondMin([4, 2, 2, -1, 6, 5, 5, -5]);
console.log (rezultat)
