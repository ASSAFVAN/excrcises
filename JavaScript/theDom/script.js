const startHereLi = document.querySelector(".start-here");

//1. Change the text from “title 2” to “main title”
startHereLi.innerText = "main title";

//2. Add another sub title with the text “sub title 4”
const innerUL = document.querySelectorAll("ul")[1];
const newLI = document.createElement("li");
newLI.innerText = "sub title 4";
innerUL.appendChild(newLI);

//3. Delete the last <li> element from the list.
const parentUL = document.querySelector("ul");
const lastLI = parentUL.lastElementChild;
lastLI.remove();

//4. Change the <title> element text to “Master Of The Dom”.
const title = document.querySelector("title");
title.innerText = "Master Of The Dom";

//5. Change the text of the <p> element ot something else of your
const textP = document.querySelector("p");
textP.innerText = "this is a new text";
