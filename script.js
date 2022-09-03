function addMore(){
    document.getElementById('error').innerHTML="";

    let name = document.getElementById('name').value;
    if(name==''){
        document.getElementById('error').innerHTML="Please enter value";
    }
    else{
        let box=document.getElementById('box');

        let li=document.createElement('li');
        li.textContent=name;
        
        let a=document.createElement("img");
        a.setAttribute("src", "trash.png");
        a.setAttribute("width", "21");
        a.setAttribute("height", "20");
        a.setAttribute("alt", "Delete");
        a.href="javascript:void(0)";
        a.className="remove";
        li.appendChild(a);
         
        let pos=box.firstElementChild;
        
        if (pos==null) {
            box.appendChild(li);
        }
        else {
            box.insertBefore(li, pos);
        }

    }
    document.getElementById('name').value="";

}

let bttn=document.querySelector('ul');
bttn.addEventListener('click',function (e){
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);
});