export default loadmenu;

import oreo from './oreo.png';

function createMenuItem(title, image) {
    const grid = document.querySelector('.grid');
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
    grid.appendChild(menuItem);

    const menuImage = document.createElement('img');
    menuImage.src = image;
    menuImage.classList.add('menuImage');
    menuItem.appendChild(menuImage);

    const menuTitle = document.createElement('div');
    menuTitle.innerText = title;
    menuTitle.classList.add('menuTitle');
    menuItem.appendChild(menuTitle)
}

function loadmenu() {
    console.log("Menu");
    
    const holder = document.createElement('div');
    holder.classList.add('holder');
    content.appendChild(holder);
    
    const grid = document.createElement('div');
    grid.classList.add('grid');
    holder.appendChild(grid);

    
    for(let i = 0; i < 6; i++) {
        createMenuItem("Cake", oreo);
    }
}