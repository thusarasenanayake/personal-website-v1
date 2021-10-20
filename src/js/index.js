import '../css/index.css';
import { commands } from './commands';
import { sendMessage } from './database';

const partials = '/public/assets/html';

// ------ elements ------
const workspace = document.querySelector('.workspace');
const dash = document.querySelector('.dash');
const terminal = document.querySelector('.terminal');
const closeBtn = document.querySelector('.close');
const messageCloseBtn = document.querySelector('.message-close');
const messageBox = document.querySelector('.message-box');
const messageLink = document.querySelector('#message-link');
const contactForm = document.querySelector('#contact-form');
let output, input;
export let terminalHTML, aboutHTML, contactHTML, lsHTML, resumeHTML, helpHTML;

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

getElements();

// ------ functions for UI ------

document.querySelector('.container').style.display = 'flex';
document.querySelector('.loader-container').style.display = 'none';

function getElements() {
  output = document.querySelector('.output');
  input = document.querySelector('.input');
  input.focus();
}

function createPrompt() {
  const newPrompt = document.createElement('div');
  newPrompt.classList.add('prompt');

  newPrompt.innerHTML = `<span class="arrow">➜ </span>
                        <span class="path">~</span>
                        </span><span class="input" contenteditable="true"></span>
                        <div>
                        <p class="output css-output"></p>
                        </div>`;

  terminal.appendChild(newPrompt);
}

function deactivateCurrentPrompt() {
  output.classList.toggle('output');
  input.setAttribute('contenteditable', false);
  input.classList.toggle('input');
}
function closeMessageBox() {
  messageBox.style.display = 'none';

  if (screen.width > '470') {
    workspace.style.display = 'block';
  } else {
    dash.style.display = 'block';
  }
}

// ------ functions for execution ------

function filterKeyCode(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    run();
    deactivateCurrentPrompt();
    createPrompt();
    getElements();
  }
}
function run() {
  let command;
  const values = [];
  // trimming command and values
  input.textContent.split(' ').forEach((value, index) => {
    if (index === 0) {
      command = value.trim();
    }
    if (index !== 0 && value.trim() !== '') {
      values.push(value.trim());
    }
  });

  if (command === '' && values.length === 0) {
    return;
  } else if (Object.keys(commands).includes(command)) {
    commands[command](values);
  } else {
    setError();
  }
}

function setError() {
  output.textContent = 'Error: command not recognized';
}

// ------ event handlers ------

terminal.addEventListener('keydown', (event) => {
  filterKeyCode(event);
});

terminal.addEventListener('click', () => {
  input.focus();
});

closeBtn.addEventListener('click', () => {
  dash.style.display = 'block';
  workspace.style.display = 'none';
});

dash.addEventListener('click', (event) => {
  if (event.target.textContent === 'about') {
    dash.style.display = 'none';
    terminal.innerHTML = aboutHTML;
    workspace.style.display = 'block';
  }
  if (event.target.textContent === 'contact') {
    dash.style.display = 'none';
    terminal.innerHTML = contactHTML;
    workspace.style.display = 'block';
  }
  if (event.target.textContent === 'terminal') {
    terminal.innerHTML = '';
    createPrompt();
    getElements();
    workspace.style.display = 'block';
    dash.style.display = 'none';
  }
});

messageCloseBtn.addEventListener('click', () => {
  closeMessageBox();
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = contactForm['form-name'].value;
  const email = contactForm['form-email'].value;
  const subject = contactForm['form-subject'].value;
  const message = contactForm['form-msg'].value;

  sendMessage(name, email, subject, message)
    .then(() => {
      closeMessageBox();
      contactForm.reset();
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
});
messageLink.addEventListener('click', () => {
  commands.message(['open']);
});

export { output, input, dash, workspace, messageBox, terminal };
