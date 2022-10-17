/*10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
 and print range in which number belongs.
Sample Input: 13			Sample Input: 34			Sample Input: 256
	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
*/

var result="";
var a=13;
var b=34;
var c=256;
 
if (a<20)
{console.log(result="-")}
else if (20<a<100)
{console.log(result="20<=>100")}
else if (100<a<400)
{console.log (result="100<=>400")} 

if (b<20)
{console.log(result="-")}
else if (20<b<100)
{console.log(result="20<=>100")}
else if (100<b<400)
{console.log (result="100<=>400")}


if (c < 20)
{console.log(result="-")}

else if (20 < c && c< 100)
{console.log (result="20<=>100")}

else if ( 100 < c && c < 400)
{console.log (result="100<=>400")}

//zavrseno