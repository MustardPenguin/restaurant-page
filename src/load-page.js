export default loadpage;
import cheese from './cheesecake-background.png';
import loadhome from './load-home.js';

function loadpage() {
    const content = document.querySelector('#content');

    /* Create header */
    const header = document.createElement('div');
    content.appendChild(header);
    header.classList.add('header');

    const restaurantName = document.createElement('div');
    header.appendChild(restaurantName);
    restaurantName.innerText = "Food of food";

    const subheader = document.createElement('div');
    content.appendChild(subheader);
    subheader.classList.add('subheader');

    const buttons = [
        "Home", "Menu", "Contact"
    ];
    buttons.forEach(function(element) {
        const tab = document.createElement('a');
        tab.innerHTML = element;
        subheader.appendChild(tab);
        tab.classList.add('tab');
        tab.setAttribute('value', element);
        tab.href = "";
    })

    /* Background */
    const background = document.createElement('img');
    background.src = cheese;
    background.classList.add('background');
    document.body.appendChild(background);
 
   
}