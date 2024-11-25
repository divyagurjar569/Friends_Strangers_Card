//for making three cards only(without any effect)
var arr=[{Name:"Divya Gurjar",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYz2jMAl45GLZqDdRoeuVa22_N-cnN4dPOIg&usqp=CAU",Status:"Strangers",btn:"Add Friends"},
         {Name:"khushi Yadav",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-51zgMjeY-AOySruTMLkzpSpDqgsMod0Rg&usqp=CAU",Status:"Strangers",btn:"Add Friends"},
         {Name:"Rishika Jain",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdf8aU5m4-YTSu0FsXlqnYIqeNh48phyh1f-vlyG3CODObtUgEtsqoV271pm9oAo0lUUs&usqp=CAU",Status:"Strangers",btn:"Add Friends"}]
   
function show(){    
var clutter="";
arr.forEach(function(val,index){
    clutter=clutter + `<div id="card">
    <div id="image">
    <img src="${val.image}" alt="">
    </div>
    <h2>${val.Name}</h2>
    <h1 class="${(val.Status).split(" ").join("")}">${val.Status}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid adipisci facilis necessitatibus laboriosam </p>
    <button id="${index}">${val.btn}</button>
    
</div>`
}) ;

document.querySelector("#main").innerHTML=clutter;
}
show();

//var index=0;
document.querySelector("#main").addEventListener("click",function(dets){
    if(arr[dets.target.id].Status === "Strangers"){
      arr[dets.target.id].Status ="Request Sent"
      arr[dets.target.id].btn="Cancel request"
//    console.log(dets.target.id)
//    console.log(arr[index])
//    index++;
    show();

    setTimeout(function(){
        arr[dets.target.id].Status ="Friends"
        arr[dets.target.id].btn="Remove Friends"
        show();
    },2000)
}
    else{

        arr[dets.target.id].Status ="Strangers"
        arr[dets.target.id].btn="Add Friends"
        show();
    }
})


    
