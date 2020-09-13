
function addTodo()
{
    console.log("************");
        todo.forEach(function(todos,i)
        {
            console.log(i+":"+todos);
        });
        console.log("************");
}

function deleteTodo()
{
    var can=prompt("enter the index to be deleted");
    todo.splice(can,1);
    console.log("You have Deleted the element");
}

function newTodo()
{
    
    var newtodo=prompt("Enter the New todo");
    todo.push(newtodo);
    console.log("todo added");
}

var todo=[];
var input=prompt("Enter the Function to perform:");

while(input!=="quit")
{
    if(input==="list")
    {
        addTodo();
    }
    else if(input==="delete")
    {
       deleteTodo();
    }
    else if(input==="new")
    {
        newTodo();
    }
    
var input=prompt("Enter the Function to perform:");
}
console.log("YOU QUIT");
 