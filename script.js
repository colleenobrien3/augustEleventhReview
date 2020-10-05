// The DOM & JavaScript

//Get element by id
let section = document.getElementById("section");
console.log(section);

// // querySelectorAll is a node list
let classFirst = document.querySelectorAll(".divClass");
console.log(classFirst);

// // querySelector will return the first one
let firstClassFirstElement = document.querySelector(".divClass");
console.log(firstClassFirstElement);

let newNode = document.querySelector("section");
console.log(newNode);

// // querySelector with an id
let secondDiv = document.querySelector("#secondDiv");
console.log(secondDiv);

// // Creating elements
let newElement = document.createElement("span");

// // // //Adding a class to an element
newElement.classList.add("spanClass");

// // // // Adding text to an element
newElement.innerText = "NEWLY CREATED ELEMENT";

// // // innerHTML

section.innerHTML = "new HTML";
section.outerHTML = "<section class=hidden>Newest Html</section>";
console.log(section);

// // // Adding styles to the element
newElement.style.color = "red";

// // // Using for each to add a style to multiple elements
let listItems = document.querySelectorAll("li");
console.log(listItems);
listItems.forEach((item) => {
  if (item.style.color !== "pink") {
    item.style.color = "pink";
  }
});

// let animals = ["dog", "cat", "bird"];
// animals.forEach((element) => {
//   console.log(element);
// });

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// // // Hiding an element
// newElement.style.display = "none";

// // // Adding the element to the HTML
document.querySelector("footer").appendChild(newElement);

// // // Checking if an element has a class
// newElement.addEventListener("click", checkClass);
// function checkClass(e) {
//   if (e.target.classList.contains("hidden")) {
//     alert("it's blue!!");
//   }
// }

// // // Adding an event listener
newElement.addEventListener("click", popUp);
function popUp(event) {
  console.log(event);
  console.log(event.target);
  newElement.classList.toggle("hidden");
}

// // // Datasets
let div = document.getElementById("great");
console.log(div.dataset);
console.dir(div);

// // Events and Forms
let form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("The meaning of life!");
  console.log(e.target.elements[0].value);
  console.log(e.target.elements[2].value);
  console.log(e.target);
});
