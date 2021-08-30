//document.getElementById("btn").addEventListener('click', addElement);


/*function write (){
    var item = document.getElementById("item").value;
    if (item=="") return;
    else {
        var node = document.createElement("LI");
    var textnode = document.createTextNode(item);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    document.getElementById("item").value=null;
    }
} */

    /*function addElement() {
    var item = document.getElementById("item").value;
    if (item=="") return;
    else if (item.length<=3) addToSecond();
    else addToFirst();
}
function addToFirst(){
    var node = document.createElement("LI");
    var textnode = document.createTextNode(item.value);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    document.getElementById("item").value=null;
}
function addToSecond(){
    var node=document.createElement("div");
    var textnode=document.createTextNode(item.value);
    node.appendChild(textnode);
    document.getElementById("list2").appendChild(node);
    document.getElementById("item").value=null;
}
*/
document.getElementById("btn").addEventListener('click', onButtonSubmit);
document.getElementById("percentage").innerHTML="0 % PACKED";

function onButtonSubmit(){
    var item=document.getElementById("item").value;
    if(item==="")return;
    else if(item.length>3) createElement("li","list1");
    else createElement("div","list2");
}

var i=0;
var j=0;
var howManyChecked=0;
var howManyItems=0;
var percentagePacked;

function createElement(tag,parent){
    var node=document.createElement(tag);
    var textnode=document.createTextNode(item.value);
    node.appendChild(textnode);
    document.getElementById(parent).appendChild(node);

    let deleteButton=document.createElement("button");
    deleteButton.type="button";
    deleteButton.className="deleteButtons";
    deleteButton.innerHTML="Delete";
    node.appendChild(deleteButton);

    
    let box=document.createElement("input");
    box.type="checkbox";
    box.className="checkboxes";
    node.appendChild(box);

    if(tag==="li"){
        node.id=tag+i;
        box.id=tag+"Box"+i;
        i++;
        howManyItems++;
        console.log("total items: "+howManyItems);
    }else {
        node.id=tag+j;
        box.id=tag+"Box"+j;
        j++;
        howManyItems++;
        console.log("total items: "+howManyItems);
    }
    
   box.addEventListener('change',()=>{
        if(box.checked){
            document.getElementById(node.id).style.textDecoration="line-through";
            howManyChecked++;
            console.log("howManyChecked="+howManyChecked);
            percentagePacked=(howManyChecked*100)/howManyItems;
            document.getElementById("percentage").innerHTML=Math.round(percentagePacked)+"% PACKED";
        }
        else{
            document.getElementById(node.id).style.textDecoration="none";
            howManyChecked--;
            console.log("howManyChecked="+howManyChecked);
            percentagePacked=(howManyChecked*100)/howManyItems;
            document.getElementById("percentage").innerHTML=Math.round(percentagePacked)+"% PACKED";
        }
    })

    deleteButton.addEventListener('click',() =>{
        var itemToRemove=document.getElementById(node.id);
        howManyItems--;
        if (box.checked=true){
            howManyChecked--;
        }
        itemToRemove.remove(node);
        percentagePacked=(howManyChecked*100)/howManyItems;
        document.getElementById("percentage").innerHTML=Math.round(percentagePacked)+"% PACKED";
        console.log("howManyItems: "+howManyItems);
        console.log("howManyChecked: "+howManyChecked);
        console.log("Percentage Packed: "+percentagePacked);
    })

    document.getElementById("item").value=null;
}