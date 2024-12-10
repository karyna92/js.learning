//exercise 1
const btn = document.getElementById("btn");
btn.onclick = () => alert("Привіт тобі, клацальщик!");
//exercise 2
const link = document.getElementById("new-btn-link");
const newBtn = document.getElementById("btn-appear");
newBtn.hidden = true;
link.addEventListener("click", () => (newBtn.hidden = false));
//exercise 3
const bg = document.getElementById("bg");
const changeBtn = document.getElementById("change-btn");
function lightChange(e){
    bg.style.backgroundColor='yellow';
    bg.style.borderColor='white'
}
changeBtn.onclick=lightChange;