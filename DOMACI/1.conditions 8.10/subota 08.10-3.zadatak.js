//3. zadatak

var result="";

var a=0;
var b=-1;
var c=4;
if (a>b && b>c) 
    {result=a+ ',' + b+',' + c}
else if (a>c && c>b)
    {result=a+ ',' + c+',' + b}
else if (b>a && a>c)
    {result=b+ ',' + a+',' + c}
else if (b>c && c>a)
    { result=b+ ',' + c+',' + a}
else if (c>a && a>b)
    {result= c+','+a+','+ b}
else
    {result=c+ ',' + b+',' + a}

console.log (result)

//zavrseno