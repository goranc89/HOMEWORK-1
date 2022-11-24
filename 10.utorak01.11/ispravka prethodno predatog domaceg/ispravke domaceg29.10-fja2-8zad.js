/*8.	Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors 
other than 1 and itself.
*/

function primeNo(broj){
    var brojac = 0
      for(i = 0; i <= broj; i++){
        if(broj % i === 0){
          brojac +=1;   //ovaj primer sam radila pre nego sto ste ga pokazivali na casu,
        }               //a posle sam zaboravila da ispravim, problem je bio losa postavka, 
      }                 //nisam ni razmisljala da 1 nije prost broj...a u zadatku pise da treba da bude veci od 1
    if (brojac ==2){
        return broj+ " is a prime number."
    }
    else{
        return  broj+ " is not a prime number."
    }
}
  var rezultat= primeNo(37);
  console.log(rezultat);
  var rezultat= primeNo(20);
  console.log(rezultat);
  var rezultat= primeNo(1);
  console.log(rezultat);

  //ovako je cini mi se Dimitrije uradio, svideo mi se ovaj nacin
  //jer ako bilo koji broj ima samo dva delioca, onda je prost
  //ne moraju se postavljati drugi uslovi osim toga...