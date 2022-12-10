export default loadcontact;
import oreo from './oreo.png';

function createTextElement(text) {
    const description = document.createElement('div');
    description.classList.add('text');
    description.innerText = text;
    let holder = document.querySelector('.holder');
    holder.appendChild(description);

    return description;
}

function loadcontact() {
    console.log("Contact");

    const holder = document.createElement('div');
    holder.classList.add('holder');
    content.appendChild(holder);

    const start = createTextElement("Any questions? Contact us!");
    start.style = "padding-top: 36px;"

    createTextElement("Phone number: 777-777-7777");
    createTextElement("Email: cheese@gmail.com");
    createTextElement("Address: 123 Somewhere Faraway Mars 54817 TU");

    const image = document.createElement('img');
    image.src = oreo;
    image.style = "width: 300px; height: 300px; border-radius: 100%; padding-bottom: 36px;"
    holder.appendChild(image);
}