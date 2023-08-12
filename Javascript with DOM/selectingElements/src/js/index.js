/* One of the first things we need to learn to do, is to select items so that we can manipulate them.
 
const title = document.createElement('h1');

Here, we created elememts, thus we could use their handles directly to manipulate them, such as setting text content
However, in the case of existing HTML markup we need specialised methods known as DOM selectors.
 This is DOM selectors

 document.getElementById(id)
 document.getElementsByTagName(tagName)
 document.getElementsByBlassName(className)
 document.querySelector(elementName or CSS Selectors)
 document.querySelectorAll(elementName or CSS Selectors)
  
 Wherever these methods are called they traverse the DOM to find the element
 and return an active handle, which can then be used to access that elements properties for manipulation.

*/ 

/*Selectors*/
//I want to change the title from DynTech LLC to 
//For that I need to select the h1 tag
const siteTitle = document.getElementById('site-title');
//This will always return a single element, the first that matches the id

//Next we are gonna update our navigation list
const navEls = document.getElementsByTagName('li');
//This list is not available as an array, so we will need to convert it into an for ease of manipulation

//To change the context
const contentText = document.getElementsByClassName('content-text');


// The first three methods can only be used on the top most document object and cannot be used to access child elements
//For that we have querySelctors
//Update h3 tag
const siteDesc = document.querySelector('#site-description');

//Maipulate the two paragraphs
const contentDiv = document.querySelector('.content');

//To select odd item list from my nav bar
const altNavs = document.querySelectorAll('#nav > li:nth-of-type(odd)');
//It produces as a static list and acts like an array and hence conversion to array using Array.from is not required


/*Manipulations*/
siteTitle.innerText = 'Dynamation SpaceTech';
//inner text method is used to update the text content

Array.from(navEls).forEach(el => (el.innerText = `--${el.innerText}
--`) );

/* When we use innerText it acts as a getter at gets the content contained in the element selected
whereas if you add an = sign it acts a setter.  */

Array.from(contentText).forEach(
    (el) => (el.innerText = el.innerText.toUpperCase())
);

siteDesc.innerText = siteDesc.innerText.replace(
    'DynTech LLc', 
    'Dynamtion SapceTech'
);

//We cannot only manipulate the content of contentDiv but we can also manipulate the CSS styles
contentDiv.style.backgroundColor = '#fff';
contentDiv.style.backgroundColor = 'justify';

altNavs.forEach((el) => (el.style.backgroundColor = 'rgba(0,0,0,0.5'));