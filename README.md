/////1///////Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:
 
 
 
 getElementById:

1.Selects one single element

2.Uses the id attribute

3.Returns a single element object

for example:document.getElementById("header");

getElementsByClassName:

1.Selects all elements with the same class name

2.Returns an HTMLCollection

3.Access elements using index

for example:document.getElementsByClassName("card");

querySelector:

1.Selects the first matching element

2.Uses CSS selectors
for example:document.querySelector(".btn");

querySelectorAll:

1.Selects all matching elements

2.Returns a NodeList

3.Supports forEach()
for example:document.querySelectorAll(".btn");



///////////2////////////
Steps:

1.Create an element using document.createElement()

2.Add content or attributes

3.Insert it into the DOM using appendChild() or append()

for example:
const div = document.createElement("div");
div.innerText = "Hello World";
document.body.appendChild(div);


////////////////3////////////////////
Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements in the DOM.

Example:

If a button is inside a div and the button is clicked:

First, the button’s event handler runs

Then, the parent div’s event handler runs

This happens automatically unless stopped.


////////////////4/////////////////////
Event Delegation is a technique where a single event listener is added to a parent element instead of adding listeners to multiple child elements.

Why it is useful:

Improves performance

Uses less memory

Works for dynamically added elements

Example:parent.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("List item clicked");
  }
});


////////////5///////////////
Difference between preventDefault() and stopPropagation():


preventDefault() – 

1.It prevents the default browser behavior.

2.Commonly used with forms, links, and checkboxes.

3.It does not stop event bubbling.

4.The event still travels to parent elements.

5.Example uses: stopping form submit, stopping page reload, blocking link navigation.

stopPropagation() – 

1.It stops the event from bubbling up the DOM.

2.Used when you don’t want parent event handlers to run.

3.It does not stop the default browser action.

4.Works only on event flow, not browser behavior.

5.Useful in nested elements like buttons inside divs.