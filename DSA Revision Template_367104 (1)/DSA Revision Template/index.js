
document.querySelector("form").addEventListener("submit", quesDSA)
let arr = JSON.parse(localStorage.getItem("quesDSA"))||[]

window.addEventListener("load",function(){
    displayresults(arr)
})

function quesDSA(event){
    event.preventDefault()
    let quesObj={
    title: document.querySelector("#title").value,
    link:document.querySelector("#link").value,
    difficulty: document.querySelector("#difficulty").value
   }
        arr.push(quesObj)
        displayresults(arr)
        localStorage.setItem("quesDSA", JSON.stringify(arr))
}


function displayresults(arr){
    document.querySelector("tbody").innerHTML=""  
   
    arr.forEach(function(elem){
     let tr=document.createElement("tr")
    
    let td1=document.createElement("td")
    td1.innerText=elem.title
    let td2=document.createElement("td")
    td2.innerText=elem.link
    let td3=document.createElement("td")
    td3.innerText=elem.difficulty
    let td4=document.createElement("td")
    
    if(elem.difficulty=="Easy"){
        td4.innerText="No"
    }else{
        td4.innerText="Yes"
    } 
  tr.append(td1,td2,td3,td4)
  document.querySelector("tbody").append(tr)
    })
}