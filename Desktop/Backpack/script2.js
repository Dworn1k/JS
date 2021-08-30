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
    var txtSpan=document.createElement("span");
    txtSpan.appendChild(textnode);
    node.appendChild(txtSpan);
    document.getElementById(parent).appendChild(node);

    txtSpan.id="span"+tag+i;
    txtSpan.className="liSpan";

    var liDiv=document.createElement("div");
    liDiv.id="div"+tag+i;
    liDiv.className="liDiv";
    node.appendChild(liDiv);

    node.id=tag+i;
    //i++;
    
    elements.push(node);

    createBox(node,tag,liDiv);
    createButton(node,tag,liDiv);
    document.getElementById("item").value=null;
    percentageDisplay();
}

function createBox(node,tag,liDiv){
    var box=document.createElement("input");
    box.type="checkbox";
    box.className="checkboxes";
    liDiv.appendChild(box);
    box.id=tag+"Box"+i;
    

    box.addEventListener('change',()=>{
        if(box.checked){
            document.getElementById(node.id).style.textDecoration="line-through";
            checkedElements.push(liDiv.parentNode);
            percentageDisplay();
        }
        else{
            document.getElementById(node.id).style.textDecoration="none";
            for(let i=0; i<checkedElements.length;i++){
                if (liDiv.parentNode===checkedElements[i]){
                    checkedElements.splice(i,1);
                    i--;
                }
            }
            percentageDisplay();
        }
    })
}

function createButton(node,tag,liDiv){
    let deleteButton=document.createElement("button");
    deleteButton.type="button";
    deleteButton.className="deleteButtons";
    deleteButton.innerHTML="Delete";
    
    deleteButton.id=tag+"DeleteButton"+i;
    i++;
   
    liDiv.appendChild(deleteButton);

    deleteButton.addEventListener('click',() =>{
        for(let i=0;i<elements.length;i++){
            if(liDiv.parentNode===elements[i]){
                if (deleteButton.previousSibling.checked){
                    for(let j=0; j<checkedElements.length;j++){
                        if (liDiv.parentNode===checkedElements[j]){
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
        document.getElementById("percentageTxt").innerHTML="0% PACKED";
        return;
    }
    let percentagePacked=(checkedElements.length*100)/elements.length;
    let percentage=Math.round(percentagePacked);
    document.getElementById("percentageTxt").innerHTML=percentage+"% PACKED";
    document.getElementById("progressBar").value=percentage;
}