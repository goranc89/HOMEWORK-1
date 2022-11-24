/*3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

function minArray(a){
    var min=0 ;
    var index=0;
    for (i=0; i<a.length; i++){
       /* for (j=0; j<a.length; j++){
            if (a[i]<a[j] && i != j ){
            min = a[i];
            index = i;
            }                                  //radi za zadati primer, ali kada sam promenila niz ne daje uvek dobar rezultat.
        }                                      //znaci nesto fali u uslovu!!!
    }*/
        if (a[i]<=a[0] && a[i]<=a[1] &&a[i]<=a[2] &&a[i]<=a[3]){
            min = a[i];
            index = i;
        }        
    }
    return ("minimum of a given array is "+ min+" ( index "+index+ " ) ")  
}
var rezultat = minArray([4, 2, 2, -1, 6]);
console.log (rezultat)
var rezultat = minArray([4, -5, 2, 6]);
console.log (rezultat)