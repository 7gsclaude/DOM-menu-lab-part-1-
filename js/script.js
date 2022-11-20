// Task 1.0
//Select and cache the <main>element in a variable named mainEl


const mainEl = document.querySelector('main');
console.log(mainEl);

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

//i dont understand how i couldnt get it to work by making the color a variablee and using it like the intro says. 
mainEl.style.backgroundColor = '#4a4e4d';

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI ROCKS</h1>'