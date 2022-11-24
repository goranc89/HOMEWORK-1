/*9.	 Write a function that replaces spaces in a string with provided separator. 
If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
*/

function separatorInString(string, znak){
    var niz =Array.from(string) 
    for (i=0; i<niz.length; i++){
        if (niz[i]== " "){
    niz.splice(niz.indexOf(" "), 1, znak)  
        }
    }
    return niz.join('')
}

var niz=separatorInString("My random string", "_")
console.log (niz)

var niz=separatorInString("Random")  
console.log (niz)
var niz=separatorInString("My random string", "-")
console.log (niz)
var niz=separatorInString("My random string", "+")
console.log (niz)

/*nije mi ni palo na pamet da bi znak mogao da bude parametar*/