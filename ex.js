console.log("print the numbers between -10 to 19");
var no=-10;
while(no<20)
{
    console.log(no);
    no++;
}
console.log("print the even numbers between 10 to 40");
var no=10;
while(no<=40)
{
    if(no % 2===0)
    {
    console.log(no);
    }
    no++;
}
console.log("print the odd numbers between 300 to 333");
var no=300;
while(no<=333)
{
    if(no % 2!==0)
    {
    console.log(no);
    }
    no++;
}
console.log("print the numbers divsible by 3 and 5 between 5 and 50");
var no=5;
while(no<=50)
{
    if((no % 3===0) && (no % 5===0))
    {
    console.log(no);
    }
    no++;
}
