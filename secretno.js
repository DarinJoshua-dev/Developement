var secretno=99;
while(guess!=secretno)
{
var guess=Number(prompt("Enter the Number to be guessed: "));
if (guess>secretno)
{
    alert("U have entered a larger number");
}
else if(guess<secretno)
{
    alert("u have entered a smaller number");
}
else
{
    alert("Found the SecreT code");
}
}
