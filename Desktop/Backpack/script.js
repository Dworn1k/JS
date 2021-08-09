
document.getElementById("btn").addEventListener('click', write);

function write (){
    var item = document.getElementById("item").value;
    if (item=="") return;
    else {
        var node = document.createElement("LI");
    var textnode = document.createTextNode(item);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    document.getElementById("item").value=null;
    }
}



