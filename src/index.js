import loadpage from './load-page.js';
import './style.css';
import loadhome from './load-home.js';
import loadmenu from './load-menu.js';
import loadcontact from './load-contact.js';

function selected(value) {
    const tabs = document.querySelectorAll('.tab');
    const tab = document.querySelector('.underline');
    if(tab) {
        tab.classList.remove('underline');
    }
    tabs.forEach(function(tab) {
        if(tab.getAttribute('value') === value) {
            tab.classList.add('underline');
        }
    })
}

loadpage();

loadhome();
selected("Home");

const tabs = document.querySelectorAll('.tab');
tabs.forEach(function(tab) {
    tab.addEventListener('click', function(event) {
        const holder = document.querySelector('.holder');
        if(holder) { holder.remove(); }
        let value = tab.getAttribute('value');
        value === "Home" ? loadhome() : value === "Menu" ? loadmenu() : value === "Contact" ? loadcontact() : null;
        selected(value);
        event.preventDefault();
    })
})