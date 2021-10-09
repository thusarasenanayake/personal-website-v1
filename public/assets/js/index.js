// ------ vars ------
const commandHistory = [];
const historyIndex = 0;

// ------ elements ------

const terminal = document.querySelector('.terminal');
const workspace = document.querySelector('.workspace');
let output, userInput;
getElements();

// ------ functions for UI ------

function getElements() {
  output = document.querySelector('.output');
  userInput = document.querySelector('.user-input');
  userInput.focus();
}

function createPrompt() {
  const newPrompt = document.createElement('div');
  newPrompt.classList.add('prompt');

  newPrompt.innerHTML = `<span class="arrow">➜ </span>
                        <span class="path">~</span>
                        </span><span class="user-input" contenteditable="true"></span>
                        <div>
                        <p class="output css-output"></p>
                        </div>`;

  terminal.appendChild(newPrompt);
}

function deactivateCurrentPrompt() {
  output.classList.toggle('output');
  userInput.setAttribute('contenteditable', false);
  userInput.classList.toggle('user-input');
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
  const command = userInput.textContent.split(' ')[0];
  const values = userInput.textContent.split(' ').slice(1);
  Object.keys(commands).includes(command)
    ? commands[command](values)
    : setError();
}

function setError() {
  output.textContent = 'Error: command not recognized';
}

// ------ event handlers ------

terminal.addEventListener('keydown', (event) => {
  filterKeyCode(event);
});

terminal.addEventListener('click', () => {
  userInput.focus();
});