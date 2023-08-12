/* 
Understanding Events

-> Typing a social media message and clicking the 'Post' button
-> Liking a post
-> Swiping left or right
-> Scrolling the page up, down or sideways
-> Selecting items from alist and on and on and on....

On pressing a like button in a sns page -> the click event gets fired
where the postI dand userId to the server & update the UI

We rely on Javascript for handling events 
Javascript helps us execute event listeners 
Event listeners execute functions of our choice when an event occurs allowing us to program behaviour

To create event listener -> we used addEventListener() -> This attaches an event listen to an element and keeps monitoring it

Event bubbling:
              An event that starts at an element bubbles up the hieracy until it reaches the top most html element
Capturing Phae: 
               The capturing phase goes in the opposite direction from top to bottom

*/



const morningBtn = document.querySelector('#morning');
const dayBtn = document.querySelector('#day');
const afternoonBtn = document.querySelector('#afternoon');
const eveningBtn = document.querySelector('#evening');
const nightBtn = document.querySelector('#night');
const greeting = document.querySelector('#greeting');


morningBtn.addEventListener(
    'click',
    () => (greeting.innerText = 'Good Morning!')
);

dayBtn.addEventListener(
    'click',
    () => (greeting.innerText = 'Good Day!')
);

eveningBtn.addEventListener(
    'click',
    () => (greeting.innerText = 'Good Evening!')
);

afternoonBtn.addEventListener(
    'click',
    () => (greeting.innerText = 'Good Afternoon!')
);

nightBtn.addEventListener(
    'click',
    () => (greeting.innerText = 'Good Night!')
);