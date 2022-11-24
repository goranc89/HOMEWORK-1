/*10. Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]*/


function mostFrequentItem(array){
    var item= "";
    var frequent=0;
    var frequentmax=1;
    for (i=0; i< array.length; i++){
     for (j=i; j<array.length; j++){
         if (array[i]==array[j]) frequent += 1;
        }   
         if (frequentmax<frequent){     //da, kada se zadatak razlozi za svako i, logicno je da se ovaj uslov 
            item= array[i];             //proverava kada prodje kroz celu drugu for petlju.
            frequentmax=frequent;
        }
    
     frequent=0;        // i ovde sam ostavila greskom m=0((tako je bilo obelezeno u primeru koji sam pratila),
    }                   // pa mi se brojac nije ni vracao na nulu
 return  item + " se u nizu pojavljuje "+frequentmax+" puta.";
 }
 var rezultat = mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
 console.log (rezultat)
 var rezultat = mostFrequentItem([3, 3, 'a', 3, 2, 3, 'a', 3, 3, 2, 4, 9, 3]);
 console.log (rezultat)