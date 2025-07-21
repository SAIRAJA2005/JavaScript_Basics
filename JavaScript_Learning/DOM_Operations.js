/*



DOM operations:
The Document Object Model (DOM) is a way to interact with HTML documents using JavaScript. 
It allows you to access and manipulate elements, change content, handle events, and more. 
Here’s a simple guide to common DOM operations:


1. Accessing Elements
These methods help you select elements from the HTML page so you can use or modify them.

a) getElementById()
Selects one element by its ID.

<p id="myPara">Hello</p>

let para = document.getElementById("myPara");
console.log(para.textContent); // Hello


b) getElementsByClassName()
Returns a list of elements with a specific class.

<p class="note">Note 1</p>
<p class="note">Note 2</p>

let notes = document.getElementsByClassName("note");
console.log(notes[0].textContent); // Note 1

c) getElementsByTagName()
Returns all elements of a certain tag.

<h1>Title</h1>
<p>Para 1</p>
<p>Para 2</p>

let paras = document.getElementsByTagName("p");
console.log(paras.length); // 2

d) querySelector()
Selects the first matching element using a CSS-like selector.

<p class="greeting">Hi</p>

let greet = document.querySelector(".greeting");
console.log(greet.textContent); // Hi

e) querySelectorAll()
Returns all matching elements (like getElementsByClassName, but more flexible).

<p class="greeting">Hi</p>
<p class="greeting">Hello</p>

let greetings = document.querySelectorAll(".greeting");
greetings.forEach(el => console.log(el.textContent)); // Hi, Hello


2. Modifying Content and Attributes
Once you get an element, you can change its content, style, or attributes.

a) Change text:

element.textContent = "New Text";
element.innerHTML = "<strong>Bold</strong>";

b) Change attributes:

<img id="logo" src="old.png">

let img = document.getElementById("logo");
img.setAttribute("src", "new.png");
console.log(img.getAttribute("src")); // new.png


c) Change style:

element.style.color = "red";
element.style.fontSize = "20px";


3. Creating and Deleting Elements
You can dynamically create, insert, or delete elements from the DOM.

a) Create:

let newDiv = document.createElement("div");
newDiv.textContent = "I am new!";

b) Add to page:

document.body.appendChild(newDiv);

c) Insert before another element:

let beforeElement = document.getElementById("someId");
document.body.insertBefore(newDiv, beforeElement);

d) Remove:

let removeMe = document.getElementById("removeId");
document.body.removeChild(removeMe);


4. Handling Events
Attach functions to elements that should run when something happens (e.g., click, hover, type).

Example: Click button

<button id="btn">Click me</button>

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  alert("Button was clicked!");
});

You can also listen for:

"input" → when text is typed in an input box

"submit" → when a form is submitted

"mouseover" → when mouse enters an element

"keydown" → when a key is pressed

*/

/*

| Action               | Method/Property                    |
| -------------------- | ---------------------------------- |
| Get by ID            | `getElementById()`                 |
| Get by class         | `getElementsByClassName()`         |
| Get by tag           | `getElementsByTagName()`           |
| CSS selector (first) | `querySelector()`                  |
| CSS selector (all)   | `querySelectorAll()`               |
| Change text          | `textContent`, `innerHTML`         |
| Change attributes    | `setAttribute()`, `getAttribute()` |
| Add element          | `createElement()`, `appendChild()` |
| Remove element       | `removeChild()`                    |
| Listen for events    | `addEventListener()`               |

*/
