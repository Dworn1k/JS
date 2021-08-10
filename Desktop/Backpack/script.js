
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

var i=0;
var j=0;

function createElement(tag,parent){
    var node=document.createElement(tag);
    var textnode=document.createTextNode(item.value);
    node.appendChild(textnode);
    document.getElementById(parent).appendChild(node);
    
    let box=document.createElement("input");
    box.type="checkbox";
    box.className="checkboxes";
    node.appendChild(box);

    if(tag==="li"){
        node.id=tag+i;
        box.id=tag+"Box"+i;
        i++;
    }else {
        node.id=tag+j;
        box.id=tag+"Box"+j;
        j++;
    }
    
   box.addEventListener('change',()=>{
        if(this.checked){
            console.log("checkbox"+box.id+"is checked");
        }
        
    })
    

    document.getElementById("item").value=null;
}
    