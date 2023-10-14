let a = true;
let color1 = 'green';
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);

function pintar(color){
    if(color1 == 'green'){
        color1='yellow'
        ele.style.background =color1;
        a = false
    }else{
        color1='green';
        ele.style.background =color1;
        a = true;
    }
}

