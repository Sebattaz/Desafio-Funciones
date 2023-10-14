const cont1 = document.getElementById("d1")
const cont2 = document.getElementById("d2")
const cont3 = document.getElementById("d3")
const cont4 = document.getElementById("d4")


cont1.addEventListener("click",cambioColor)
cont2.addEventListener("click",cambioColor)
cont3.addEventListener("click",cambioColor)
cont4.addEventListener("click",cambioColor)


function cambioColor(e){
    const divClick = e.target;
    divClick.style.background = "black"
}