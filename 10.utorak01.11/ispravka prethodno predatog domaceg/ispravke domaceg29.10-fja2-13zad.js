/*13.	Write a function to humanize a number (formats a number to a human-readable string) 
with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th*/

function humanizeNum(num){
    var arr=Array.from(String(num), Number);
    var humanize='';
    if(arr[arr.length-1] == "1"){
        humanize = num+"st"
    }
    else if(arr[arr.length-1] == "2"){
        humanize = num+"nd"
    }
    else if (arr[arr.length-1] == "3"){
        humanize = num+"rd"
    }
    else{
        humanize = num+"th"
    }                                //losa prva faza -analiza problema :)
    return humanize
}
var rezultat = humanizeNum(2)
console.log (rezultat)
var rezultat = humanizeNum(32)
console.log (rezultat)
var rezultat = humanizeNum(221)
console.log (rezultat)
