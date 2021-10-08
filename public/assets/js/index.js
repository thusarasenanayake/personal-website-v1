function run(command, values) {
  commands.includes(command) ? command(values) : setError();
}

function setError() {
  const output = document.querySelector('.output p');
  output.textContent = 'Error: command not recognized';
}

window.onload = (event) => {
  // ------ vars ------
  const commandHistory = [];
  const historyIndex = 0;

  // ------ elements ------

  const terminal = document.querySelector('.terminal');
  const workspace = document.querySelector('.workspace');
  const currentPrompt = document.querySelector('.prompt');

  const output = document.querySelector('.output p');

  // ------ utilities ------

  function createPrompt() {
    const newPrompt = document.createElement('div');
    newPrompt.classList.add('prompt');

    newPrompt.innerHTML = `<span class="arrow">➜ </span>
                        <span class="path">~</span>
                        </span><span class="user-input" contenteditable="true"></span>
                        <div class="output css-output">
                        <p></p>
                        </div>`;

    terminal.appendChild(newPrompt);
  }

  function deactivateCurrentPrompt() {
    document.querySelector('.output').classList.remove('output');
    const userInput = document.querySelector('.user-input');
    userInput.setAttribute('contenteditable', false);
    userInput.classList.remove('user-input');
  }

  function filterKeyCode(event) {
    if (event.keyCode === 13) {
      const command = document
        .querySelector('.user-input')
        .textContent.split(' ')[0];
      const values = document
        .querySelector('.user-input')
        .textContent.split(' ')
        .shift();
      run(command, values);

      deactivateCurrentPrompt();
      createPrompt();
    }
  }

  terminal.addEventListener('keydown', (event) => {
    filterKeyCode(event);
  });
};
