// ------ functions for UI ------

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
