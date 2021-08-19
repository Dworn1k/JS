document.getElementById("btn").addEventListener('click',()=>{
    var item=document.getElementById("item").value;
    if(item==="")return;
    else if(item.length>3) createElement("li","list1");
    else createElement("div","list2");
})

var i=0;
var j=0;

function createElement(tag,parent){
    var node=document.createElement(tag);
    var textnode=document.createTextNode(item.value);
    node.appendChild(textnode);
    document.getElementById(parent).appendChild(node);

    if(tag==="li"){
        node.id=tag+i;
        i++;
    }else {
        node.id=tag+j;
        j++;
    }
    createBox(node,tag);
    createButton(node,tag);
    document.getElementById("item").value=null;
    percentageDisplay(1,0);
}

function createBox(node,tag){
    var box=document.createElement("input");
    box.type="checkbox";
    box.className="checkboxes";
    if (tag==="li"){
        box.id=tag+"Box"+i;
    }else box.id=tag+"Box"+j;
    node.appendChild(box);

    box.addEventListener('change',()=>{
        if(box.checked){
            document.getElementById(node.id).style.textDecoration="line-through";
        }
        else{
            document.getElementById(node.id).style.textDecoration="none";
        }
    })
}

function createButton(node,tag){
    let deleteButton=document.createElement("button");
    deleteButton.type="button";
    deleteButton.className="deleteButtons";
    deleteButton.innerHTML="Delete";
    if (tag==="li"){
        deleteButton.id=tag+"DeleteButton"+i;
    }else deleteButton.id=tag+"DeleteButton"+j;
    node.appendChild(deleteButton);

    deleteButton.addEventListener('click',() =>{
        var itemToRemove=document.getElementById(node.id);
        itemToRemove.remove(node);
        
        // Problem - potrzebuję wiedzieć, czy box w pozycji. którą
        // usuwam jest zaznaczony czy nie żeby przekazać odpowiednie argumenty do funkcji
        if()percentageDisplay(-1,-1);
        else percentageDisplay(-1,0);
    })
}
var items=0;
var checked=0;
function percentageDisplay(howManyItems,howManyChecked){
    var percentagePacked=0;
    items+=howManyItems;
    checked+=howManyChecked;
    percentagePacked=(checked*100)/items;
    document.getElementById("percentage").innerHTML=Math.round(percentagePacked)+"% PACKED";
}


