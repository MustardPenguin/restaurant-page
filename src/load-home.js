export default loadhome;

const content = document.querySelector('#content');
import oreo from './oreo.png';

function createTextElement(text) {
    const description = document.createElement('div');
    description.classList.add('text');
    description.innerText = text;
    let holder = document.querySelector('.holder');
    holder.appendChild(description);

    return description;
}

function loadhome() {
    console.log("Homepage");

    const holder = document.createElement('div');
    holder.classList.add('holder');
    content.appendChild(holder);

    createTextElement("prolly the best cheesecake you'll ever taste");
    createTextElement('indeed very tasty yum');

    const image = document.createElement('img');
    image.src = oreo;
    image.style = "width: 300px; height: 300px; border-radius: 100%; padding-bottom: 36px;"
    holder.appendChild(image);

    createTextElement("delicious cake since 1506");
}