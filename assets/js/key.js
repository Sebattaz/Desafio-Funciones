const divKey = document.getElementById("key");
let btn;
addEventListener("keydown",btnClick)

function btnClick(event){
    btn = event.key;
    if(btn=="a"){
        divKey.style.background ="pink"
    }else if(btn=="s"){
        divKey.style.background ="orange"
    }else if(btn=="d"){
        divKey.style.background ="rgb(17, 246, 242)"
    }else{
        console.log(btn)
    }
    
}

//AGREGAR DIV
addEventListener("keydown",nuevoDiv);
let cont = document.getElementById("nueDiv")
function nuevoDiv(event){
    cont.innerHTML ="";
    let nDiv = document.createElement("div")
    let c;
    c = event.key;
    if(c=="q"){
        c="rgb(148, 2, 161)"
        nDiv.style.width ="200px";
        nDiv.style.height="200px";
        nDiv.style.background=c;
        console.log(nDiv)
        cont.appendChild(nDiv)
    }else if(c=="w"){
        c="rgb(105, 103, 103)"
        nDiv.style.width ="200px";
        nDiv.style.height="200px";
        nDiv.style.background=c;
        console.log(nDiv)
        cont.appendChild(nDiv)
    }else if(c=="e"){
        c="#543102"
        nDiv.style.width ="200px";
        nDiv.style.height="200px";
        nDiv.style.background=c;
        console.log(nDiv)
        cont.appendChild(nDiv)
    }
    // nDiv.style.width ="200px";
    // nDiv.style.height="200px";
    // nDiv.style.background=c;
    // console.log(nDiv)
    // cont.appendChild(nDiv)
}