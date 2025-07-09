// async/await
//async is a keyword that allows you to write asynchronous code in a synchronous manner.
//await is a keyword that can only be used inside an async function. It pauses the execution of the async function until the promise is resolved or rejected, allowing you to write code that looks synchronous while still being asynchronous.
//functions declared with async always return a promise, even if you don't explicitly return one. If you return a value from an async function, it will be wrapped in a resolved promise.
//fetch is a built-in function that returns a promise that resolves to the response of a network request. It is commonly used to make HTTP requests and retrieve data from APIs.

// console.log("Async/Await Example");
// async function fetchData() {
//     const data = await fetch('https://dummyjson.com/products/1')
//     const finalData = await data.json();
//     console.log(finalData);
// }
// fetchData();

// const promise1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolved");
//     }, 4000);
// });
// async function checkPromise() {
//     const assign = await promise1;
//     console.log(assign);
// }
// checkPromise();


// In this example, we create a promise that resolves after 4 seconds. We then define an async function `checkPromise` that uses `await` to pause execution until the promise is resolved. Finally, we call the async function to see the result.

/////////////////////////////////////////////////////////////////

//dom-document object model is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing you to manipulate the content, structure, and style of a web page.
// The DOM provides a way to access and modify the elements of a web page using JavaScript
// The DOM is created by the browser when it loads a web page, and it can be manipulated using JavaScript to change the content, structure, and style of the page dynamically.
//event capturing and bubbling are two phases of event propagation in the DOM.
// In the capturing phase, the event starts from the root of the document and propagates down to the target element.top to bottom
// This means that the event is first captured by the root element and then passed down to each child element until it reaches the target element.
// In the bubbling phase, the event starts from the target element and propagates up to the root of the document.
// This means that the event is first handled by the target element and then passed up to each parent element until it reaches the root element.bottom to top


/////////////////////////////////////
//call()is a method that allows you to call a function with a specific `this` value and arguments. It is used to invoke a function with a specified `this` context, allowing you to control the value of `this` inside the function.
//apply() is similar to call(), but it takes an array of arguments instead of individual arguments
//bind() is a method that creates a new function with a specified `this` value and arguments. It returns a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// The main difference between call(), apply(), and bind() is that call() and apply() immediately invoke the function, while bind() returns a new function that can be called later.



// function admissionProcess(studentName, studentClass) {
//     console.log(Hi ${this.studentName}, from Class: ${this.studentClass});
// }

// const student1 = {
//     studentName: "Abhavya",
//     studentClass: "G5",
// }
// const student2 = {
//     studentName: "Avi",
//     studentClass: "G6",
// }

// //using call()
// admissionProcess.call(student1);
// admissionProcess.call(student2);

// function admissionProcess(studentZone, studentCampus) {
//     console.log(`Hi ${this.studentName}, from Class: ${this.studentClass}. Your  zone is ${studentZone} : campus is ${studentCampus}`);
// }
// const student1 = {
//     studentName: "Abhavya",
//     studentClass: "G5",
// }
// const student2 = {
//     studentName: "Avi",
//     studentClass: "G6",
// }
// // admissionProcess.call(student1,"Zeta","Punjab Campus");
// // admissionProcess.call(student2, "Beta", "Rajpura Campus");

// //using apply()
// const a1=admissionProcess.apply(student1, ["Zeta", "Punjab Campus"]);
// const b1 = admissionProcess.apply(student2, ["Beta", "Rajpura Campus"]);
// a1(); b1();

// //using bind()
// const boundFunction1 = admissionProcess.bind(student1, "Zeta", "Punjab Campus");
// const boundFunction2 = admissionProcess.bind(student2, "Beta", "Rajpura Campus");
// boundFunction1();
// boundFunction2();

