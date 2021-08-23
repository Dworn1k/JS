document.getElementById("btn").addEventListener('click',()=>{
    var item=document.getElementById("item").value;
    if(item==="")return;
    else createElement("li","list1");
})

var i=0;
let elements=[];
let checkedElements=[];

function createElement(tag,parent){
    var node=document.createElement(tag);
    var textnode=document.createTextNode(item.value);
    node.appendChild(textnode);
    document.getElementById(parent).appendChild(node);

    node.id=tag+i;
    i++;
    
    elements.push(node);

    createBox(node,tag);
    createButton(node,tag);
    document.getElementById("item").value=null;
    percentageDisplay();
}

function createBox(node,tag){
    var box=document.createElement("input");
    box.type="checkbox";
    box.className="checkboxes";
    node.appendChild(box);
    box.id=tag+"Box"+i;
    

    box.addEventListener('change',()=>{
        if(box.checked){
            document.getElementById(node.id).style.textDecoration="line-through";
            checkedElements.push(box.parentNode);
            percentageDisplay();
        }
        else{
            document.getElementById(node.id).style.textDecoration="none";
            for(let i=0; i<checkedElements.length;i++){
                if (box.parentNode===checkedElements[i]){
                    checkedElements.splice(i,1);
                    i--;
                }
            }
            percentageDisplay();
        }
    })
}

function createButton(node,tag){
    let deleteButton=document.createElement("button");
    deleteButton.type="button";
    deleteButton.className="deleteButtons";
    deleteButton.innerHTML="Delete";
    
    deleteButton.id=tag+"DeleteButton"+i;
   
    node.appendChild(deleteButton);

    deleteButton.addEventListener('click',() =>{
        for(let i=0;i<elements.length;i++){
            if(deleteButton.parentNode===elements[i]){
                if (deleteButton.previousSibling.checked){
                    for(let j=0; j<checkedElements.length;j++){
                        if (deleteButton.parentNode===checkedElements[j]){
                            checkedElements.splice(j,1);
                            j--;
                        }
                    }
                }

                elements.splice(i,1);
                i--;
            }
        }
        var itemToRemove=document.getElementById(node.id);
        itemToRemove.remove(node);
        percentageDisplay();
    })
    
}

function percentageDisplay(){
    if (elements.length===0){
        document.getElementById("percentage").innerHTML="0% PACKED";
        return;
    }
    let percentagePacked=(checkedElements.length*100)/elements.length;
    document.getElementById("percentage").innerHTML=Math.round(percentagePacked)+"% PACKED";
    document.getElementById("progressBar").style.width=percentagePacked+"%";
}


