var no;
console.log("print the numbers between -10 to 19");
for(no=-1;no<20;no++)
{
    console.log(no);
}
console.log("print the even numbers between 10 to 40");
for(no=10;no<=40;no++)
{
    if(no % 2===0)
    {
    console.log(no);
    }
}
console.log("print the odd numbers between 300 to 333");
for(no=300;no<=333;no++)
{
    if(no % 2!==0)
    {
    console.log(no);
    }
}
console.log("print the numbers divsible by 3 and 5 between 5 and 50");
for(no=5;no<=50;no++)
{
    if((no % 3===0) && (no % 5===0))
    {
    console.log(no);
    }
}
