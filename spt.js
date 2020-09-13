
var movieDB=[

    {
        title:["Frozen","Avengers 4","Life Of Jesus","Smurfs 5"],
        ratings:[5,4.8,5,4.5],
        hasWatched:[true,false,true,false]
    }
    
]


for(var i=0;i<movieDB[0].title.length;i++)
    {
if(movieDB[0].hasWatched[i]===false)
{
    resultFalse="You have not watched "+movieDB[0].title[i]+"- "+movieDB[0].ratings[i];
    console.log(resultFalse);
}
else
{
    resultTrue="You have watched "+movieDB[0].title[i]+"- "+movieDB[0].ratings[i];
    console.log(resultTrue);
}
    }
