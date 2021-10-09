// remove later
const partials = '/public/assets/html';

let terminalHTML;
let aboutHTML;
let contactHTML;

fetch(`${partials}/terminal.html`).then((data) => {
  data.text().then((text) => (terminalHTML = text));
});
fetch(`${partials}/about.html`).then((data) => {
  data.text().then((text) => (aboutHTML = text));
});
fetch(`${partials}/contact.html`).then((data) => {
  data.text().then((text) => (contactHTML = text));
});

const dash = document.querySelector('.dash');
const container = document.querySelector('.container');

dash.addEventListener('click', (event) => {
  if (event.target.textContent === 'about') {
    dash.style.display = 'none';
    container.innerHTML = terminalHTML;
    document.querySelector('.output').innerHTML = aboutHTML;
  }
  console.log(event.target.textContent);
  if (event.target.textContent === 'contact') {
    dash.style.display = 'none';
    container.innerHTML = terminalHTML;
    document.querySelector('.output').innerHTML = contactHTML;
  }
});
