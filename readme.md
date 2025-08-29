1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Answer:getElementById it return the single element by id.On the other hand getElementsByClassName it returns the HTMLCollection by class,and querySelector it also returns single element for any CSS selector / querySelectorAll it return the NodeList for any CSS selector.So this is the difference between them.

2. How do you **create and insert a new element into the DOM**?
   Answer: we can create element by using document.createElement, set properties like as className.Insert it into the DOM by using appendChild,insertBefore etc.

3. What is **Event Bubbling** and how does it work?
   Answer:Event Bubbling is when an event triggered on a child element propagates upward to its parent elements in the DOM.It works until it can reaches the root unless stopped.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   Answer:Event Delegation is attach a single event listener to a parent to handle events on its child elements dynamically. It is useful because it can added dynamically.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   Answer:preventDefault() it can shop the default browser action and on the other hand stopPropagation() it can stop the event from bubbling up the DOM tree.
