// const newElement = document.createElement("h1");
// const newText = document.createTextNode("this is dummy text");

// newElement.appendChild(newText);

// const target = document.getElementById("test");
// // target.insertAdjacentElement("beforebegin",newElement);
// // target.insertAdjacentElement("afterbegin",newElement);
// // target.insertAdjacentElement("afterend",newElement);
//  target.insertAdjacentElement("beforeend",newElement);




// const target = document.getElementById("test");
// const newElement = "<h4> this is heading 4 </h4>";
// target.insertAdjacentHTML("afterbegin",newElement);

const target = document.getElementById("test");
const newtext = "this is heading 4 ";
target.insertAdjacentText("beforebegin",newtext);

