var fname=prompt("Enter the first name ");
var lname=prompt("Enter last name");
var age=prompt("The age is");
let funame=fname+lname;
console.log("the full name of user is "+funame);
alert("the full name of user is "+funame);
if(age<50)
{
    let days=age*365.25;
    alert("The Age of the Customer is " +days+"days");
}