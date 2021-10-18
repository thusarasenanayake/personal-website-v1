import {
  output,
  dash,
  workspace,
  messageBox,
  terminal,
  helpHTML,
  resumeHTML,
  aboutHTML,
  contactHTML,
  lsHTML,
} from './index.js';
function clear(args) {
  if (args.length > 0) {
    output.innerHTML = ` Invalid arguments`;
    return;
  }
  terminal.innerHTML = '';
}

function help(args) {
  if (args.length > 0) {
    output.innerHTML = ` Invalid arguments`;
    return;
  }
  helpHTML
    ? (output.innerHTML = helpHTML)
    : (output.innerHTML = ` An error occured`);
}

function echo(args) {
  output.textContent = args.join(' ');
}
function exit(args) {
  if (args.length > 0) {
    output.innerHTML = ` Invalid arguments`;
    return;
  }
  dash.style.display = 'block';
  workspace.style.display = 'none';
}
function ls(args) {
  if (args.length > 0) {
    output.innerHTML = `No such directory`;
    return;
  }
  lsHTML
    ? (output.innerHTML = lsHTML)
    : (output.innerHTML = ` An error occured`);
}
function cat(files) {
  for (let file of files) {
    if (file === 'about') {
      output.innerHTML += aboutHTML;
    } else if (file === 'contact') {
      output.innerHTML += contactHTML;
    } else if (file === 'resume') {
      output.innerHTML += resumeHTML;
    } else {
      output.innerHTML += `No such file or directory`;
    }
  }
}
function message(args) {
  if (args[0] === 'open' || args.length === 0) {
    messageBox.style.display = 'block';
    workspace.style.display = 'none';
    dash.style.display = 'none';
    return;
  }
  output.innerHTML = ` Invalid arguments`;
}
export const commands = {
  clear,
  help,
  echo,
  exit,
  ls,
  cat,
  message,
};
