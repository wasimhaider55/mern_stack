const newElement = document.createElement("h2");
const newtext = document.createTextNode("This is text Node");
// const newComment = document.createComment("this is just  for commnet")
// document.getElementById("test").appendChild(newComment);



newElement.appendChild(newtext);
const target = document.getElementById("test");
target.insertBefore(newElement, target.childNodes[0]);

