
var movies = document.querySelector("#get");

var container = document.querySelector("#container");

movies.addEventListener("keypress",function(event){
    if(event.key=="Enter"){
        collectdata();
    }
});


async function collectdata(){
    let res = await fetch(`https://www.omdbapi.com/?apikey=b7023ba2&t=${movies.value}`);

    try{
        var list = await res.json();
        if(list.Response==="True"){
            displayData(list);
        }
        else{
            notfound();
        }
        console.log(list)
       
    }catch(err){
        console.log("err:",err)
    }
};



function displayData(list){
    container.innerHTML="";
  
   

    let name=document.createElement("h1");
     name.innerText=`Title: ${list.Title}`;
     let director=document.createElement("h4");
       director.innerText=`Director: ${list.Director}`;
     let actors =document.createElement("h4");
      actors.innerText=`Actors: ${list.Actors}`;
     let country=document.createElement("h4");
      country.innerText=`Country: ${list.Country}`;
     let relesed =document.createElement("h4");
       relesed.innerText=`Released: ${list.Released}`;
     let language=document.createElement("h4");
         language.innerText=`Language: ${list.Language}`;
     let rating=document.createElement("h4");
         rating.innerText=`Rating ${list.imdbRating}`;

         console.log(name)
         let img=document.createElement("img");
         if(list.poster=="N/A"){
             img.src="https://i.pinimg.com/736x/3a/26/5a/3a265afbf43fc1b35ebf58d36db87874--texture.jpg";
         }
         else{
             img.src=list.Poster;
         }
         let recommended=document.createElement("h1");
         recommended.innerText="Recommended"
         recommended.style.color="white";
         if(Number(list.imdbRating)>8.5){
             container.append(recommended);
         }
    
         img.setAttribute("id","poster")
         container.append(img,name,director,actors,country,relesed,language,rating)
     }
      
    
     function notfound(){
         container.innerHTML=null;
         var line=document.createElement("h2");
         let img=document.createElement("img");
         line.innerText="Movie Not Found";
         img.src="https://cdn.dribbble.com/users/547471/screenshots/3063720/not_found.gif";
         var line2=document.createElement("h2");
         line2.innerText=`choose another movie`
         container.append(line,img,line2);
     }