let color= document.getElementById("change");

let mybtn= document.getElementById("btn");

mybtn.addEventListener("click", changer());


function changer() {
    color.innerHTML= color.style.backgroundColor;
}