const numSections = document.querySelectorAll('section'); //get all the sections in the webpage

function createNav() {
    const ul = document.getElementById('navbar__list'); // get the list inside the navbar

    for (let i = 0; i < numSections.length; i++) { // for each section create a list element and give it the ability
        const li = document.createElement('li'); // to navigate to the selected section 
        li.setAttribute('class', 'menu__link');
        const sec = `section${(i+1)} `;
        li.textContent = sec;
        const navigateToSection = numSections[i];
        li.addEventListener('click', function() {
            navigateToSection.scrollIntoView({ behavior: 'smooth' });

        });

        ul.appendChild(li);
    }
    return ul;
}

const nav = createNav(); // call the function to create the navigation list


document.addEventListener('scroll', function() {
    let i = 0;
    let set = false;
    const div = document.getElementById('whichSection'); //get the div which tells the user which section they are in
    const divBottom = div.getBoundingClientRect().bottom;

    for (section of numSections) {
        const top = section.getBoundingClientRect().top; // get the top of the current section relative to view port
        const bot = section.getBoundingClientRect().bottom; // get the bottom of the current section relative to view port

        if (divBottom > top && divBottom < bot) { // check whether the div is lying between the borders of the section or not
            div.innerHTML = i + 1; // if yes, set the number of the section currently in display to the div
            set = true;
        }
        if (!set) {
            div.innerHTML = '';
        }
        i++;
    }
});


function toggleSectionHelper() {
    const div = document.getElementById('whichSection');
    const botton = document.querySelector('botton');
    if (botton.textContent === 'view section number') {
        div.setAttribute('style', 'opacity:40%');
        botton.textContent = 'hide section number';
    } else {
        div.setAttribute('style', 'opacity:0%');
        botton.textContent = 'view section number'
    }
}


const ul = document.getElementById('navbar__list');
const list = document.getElementsByClassName('menu__link'); // setting the active link status after clicking on a list item
ul.addEventListener('click', function(e) {
    for (item of list) {
        if (item == e.target) {
            item.setAttribute('style', 'color:#ffffff;background-color:#000000');
        } else {
            item.setAttribute('style', '');

        }
    }
});