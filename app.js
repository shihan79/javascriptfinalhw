let postBtn = document.querySelector(".postBtn")
let playerInput = document.querySelector(".playerInput")
let allPost = document.querySelector(".allPost")
let update = document.querySelector('.update')
let boxOne = document.querySelector(".boxOne")
let game = document.querySelector(".game")
let chance = document.querySelector(".chance")
let checkError = document.querySelector(".error")
let result = document.querySelector(".result")
let counter = document.querySelector('.count')
let search = document.querySelector('.search')
let updateIndex
let arry = []
let count = 5
postBtn.addEventListener('click',()=>{
    allPost.innerHTML = ""
    arry.push({
        playerName: playerInput.value,
        
    })
    display()
    playerInput.value = "";
  
})
update.addEventListener('click',()=>{
    allPost.innerHTML = ''    
   arry[updateIndex] = {
    playerName: playerInput.value,
        
   } 
   postBtn.style.display = 'inline-block'
        update.style.display = 'none'
   display()
})
function deletearry (){let deleteBtn = document.querySelectorAll(".deleteBtn");
let deletArray = Array.from(deleteBtn);
deletArray.map((item, index) => {
item.addEventListener("click",()=> {
  allPost.innerHTML = "";
  arry.splice(index, 1);
  display();
 
});
})}
function edit(){let edit = document.querySelectorAll('.edit')
let editarr = Array.from(edit)
editarr.map((item,index)=>{   
    item.addEventListener('click',()=>{
        updateIndex = index
        playerInput.value = arry[index].playerName
                   
        postBtn.style.display = 'none'
    update.style.display = 'inline-block'
    })})}
    function start(){let start = document.querySelectorAll(".start");
    let startArray = Array.from(start);
    startArray.map((item,index)=>{
        item.addEventListener('click',()=>{   
            updateIndex = index         
            boxOne.style.display = "none"
            game.style.display = "block"            
            chance.innerHTML = `Chance : ${count}`
            result.innerHTML = ""
            item.classList.add("disabled")
        })
    })}
function Counterjs() {
  let count = 0;
  
  counter.innerHTML = `Total Post : ${count}`;
  let stop = setInterval(() => {
    count++;
    counter.innerHTML = `Total Post : ${count}`;
    if (count == arry.length) {
      clearInterval(stop);
    }
    if (arry.length == 0) {
      count = 0;
      counter.innerHTML = `Total Post : ${count}`;
    }
  }, 200);
}
search.addEventListener('input',function query (){
  allPost.innerHTML = ''
  arry.map((item, index) => {
    let text = "";
    for (let i = 0; i < search.value.length; i++) {
 
      text += item.playerName.toLocaleLowerCase().split("")[i];
    }

    if (text == search.value) {
      

      if(isNaN(item.playerName)){
        
        allPost.innerHTML += `<div class="card" style="width: 18rem ; margin-right: 15px;">
        <div class="card-body">
        <h5 class="card-title">${item.playerName}</h5>
        
                 
        <button class="btn btn-danger deleteBtn">Delete</button>
        <button class="btn btn-primary edit">edit</button>
        </div>
        </div>`
        deletearry ()
    
      edit()
        
        
      }else{
        
        allPost.innerHTML += `<div class="card" style="width: 18rem ; margin-right: 15px;">
        <div class="card-body">
        <h5 class="card-title">${item.playerName}</h5>
        
        <button class="btn btn-primary start">Start</button>         
        <button class="btn btn-danger deleteBtn">Delete</button>
        <button class="btn btn-primary edit">edit</button>
        </div>
        </div>`
        deletearry()
  
      edit()
 
        start()
        
      }  

      
    }
    
    
    
  })
})
function display(){
    arry.map(item =>{
      
      if(isNaN(item.playerName)){
        allPost.innerHTML += `<div class="card" style="width: 18rem ; margin-right: 15px;">
        <div class="card-body">
        <h5 class="card-title"> ${item.playerName}</h5>
        
        
        <button class="btn btn-danger deleteBtn">Delete</button>
        <button class="btn btn-primary edit">edit</button>
        </div>
        </div>`
      }else{
        allPost.innerHTML += `<div class="card" style="width: 18rem ; margin-right: 15px;">
        <div class="card-body">
        <h5 class="card-title"> ${item.playerName}</h5>
        
        <button class="btn btn-primary start">Start</button>
        <button class="btn btn-danger deleteBtn">Delete</button>
        <button class="btn btn-primary edit">edit</button>
        </div>
        </div>`
      }
        
    })
    deletearry()
  
  edit()
  
    start()
    
    Counterjs()
}
