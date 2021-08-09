
document.getElementById("btn").addEventListener('click', write);
var item = document.getElementById("item").value;

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

function addElement() {
    if (item=="") return;
    else if (item.length<=3) addToSecond();
    else addToFirst;
}

function addToFirst(){
    var node = document.createElement("LI");
    var textnode = document.createTextNode(item);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    document.getElementById("item").value=null;
}

function addToSecond(){
    var node=document.createElement("div");
    var textnode=document.createTextNode(item);
    node.appendChild(textnode);
    document.getElementById("list2").appendChild(node);
    document.getElementById("item").value=null;
}



