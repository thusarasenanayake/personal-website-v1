// ------ vars ------
const partials = '/public/assets/html';
const availableFiles = ['about', 'contact', 'resume'];
var terminalHTML, aboutHTML, contactHTML, lsHTML, resumeHTML, helpHTML;

// ------ elements ------
const container = document.querySelector('.container');
const workspace = document.querySelector('.workspace');
const dash = document.querySelector('.dash');
const terminal = document.querySelector('.terminal');
const closeBtn = document.querySelector('.close');

let output, input;

getElements();

fetch(`${partials}/terminal.html`).then((data) => {
  data.text().then((text) => (terminalHTML = text));
});
fetch(`${partials}/about.html`).then((data) => {
  data.text().then((text) => (aboutHTML = text));
});
fetch(`${partials}/contact.html`).then((data) => {
  data.text().then((text) => (contactHTML = text));
});
fetch(`${partials}/ls.html`).then((data) => {
  data.text().then((text) => (lsHTML = text));
});
fetch(`${partials}/resume.html`).then((data) => {
  data.text().then((text) => (resumeHTML = text));
});
fetch(`${partials}/help.html`).then((data) => {
  data.text().then((text) => (helpHTML = text));
});

function getElements() {
  output = document.querySelector('.output');
  input = document.querySelector('.input');
  input.focus();
}
