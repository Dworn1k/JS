
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

function onButtonSubmit(){
    var item=document.getElementById("item").value;
    if(item==="")return;
    else if(item.length>3) createElement("li","list1");
    else createElement("div","list2");
}

function createElement(tag,parent){
    var node=document.createElement(tag);
    var textnode=document.createTextNode(item.value);
    node.appendChild(textnode);
    document.getElementById(parent).appendChild(node);
    document.getElementById("item").value=null;
}

