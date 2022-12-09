export default loadmenu;

function createMenuItem(title, description, image) {
    const grid = document.querySelector('.grid');
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
    grid.appendChild(menuItem);
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
        createMenuItem("Test", "", "");
    }
}