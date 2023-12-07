let inputbox=document.querySelector("#input-box");
let inputbtn=document.querySelector("#input-button");
let list=document.querySelector("#list-container");

//function
function AddTask(){
    if(inputbox.value == '')
    {
        alert('You must write something');
    }
    else{
        
        let li=document.createElement("li"); // this will create list
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        
        let span=document.createElement("span"); // this will create span tag 
        span.innerHTML="x";
        li.appendChild(span);
    }
    inputbox.value=""; // this will make the inputbox empty after we'll click on button
    saveData();
}
list.addEventListener("click",function(e)
{
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// this will save the data into local storage 
function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

// to display data even after refreshing the page
function showList()
{
    list.innerHTML=localStorage.getItem("data");
}
showList();
