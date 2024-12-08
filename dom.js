//exercise 1
const section = document.createElement("section");
section.setAttribute("id", "root");
section.textContent = "loremnvfdfghjhfdfghj";
section.style.color = "red";

const body = document.body;
body.appendChild(section);

//exercise 2
const div = document.querySelector("div");
div.style.color = "white";
div.style.backgroundColor = "purple";

//exercise 3
const name = prompt("Enter your name");
const h1 = document.createElement("h1");
h1.textContent = `Hello, ${name}`;
document.body.appendChild(h1);
