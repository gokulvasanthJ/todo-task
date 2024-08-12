//selecting elements

// var userValue=document.getElementById("user")




// function add(){
   
//     var para=document.createElement("p")
//     para.setAttribute('id','paragraph')
//     para.innerHTML=userValue.value
//     document.body.append(para)
    
//     var btndel=document.createElement('button')
//     btndel.setAttribute('id','delbtn')
//     btndel.innerHTML='delete'
//     document.body.append(btndel)
    
   
// }



// document.getElementById('delbtn').addEventListener("click", deleting);

// function deleting(event){
//     document.getElementById('paragraph').innerHTML=event.target.textContent
//     }
    

//----------

var userValue=document.getElementById("user")
var ul=document.getElementById('ulcontainer')


function add(){
    var listitem=document.createElement('li')
    listitem.innerHTML=userValue.value+"<button onclick='{deleteitem(event)}'>Delete</button>"
    ul.append(listitem)
    
}

function deleteitem(event){
    event.target.parentElement.remove()
}