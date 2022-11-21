3.0
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


// Task 1.0
//Select and cache the <main>element in a variable named mainEl


const mainEl = document.querySelector('main');
console.log(mainEl);

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

//idk how i it didnt work by making the color a variablee and using it like the intro says. 
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI ROCKS</h1>'

// Task 1.3
// Add a class of flex-ctrto mainEl.

mainEl.classList.add("flex-ctr");

// Task 2.0
// Select and cache (just name the topname variabel? ) the <nav id="top-menu"> element in a variable named topMenuEl.

let topMenuEl = document.getElementById('top-menu');

// Task 2.1
// Set the height topMenuElelement to be 100%.

topMenuEl.style.height = "100%";

// Task 2.2
// Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.


topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'; // similar error here, not sure why im not getting thhe color from the property

// Task 2.3
// Add a class of flex-aroundto topMenuEl

topMenuEl.classList.add("flex-around");

for(let i= 0; i <= 3; i++){
    const links = menuLinks[i]; //creating a variable 
    const anchor = document.createElement("a"); //createes anchor tag
    anchor.innerHTML = links.text;
    anchor.href = links.href;
    topMenuEl.appendChild(anchor);
  }

