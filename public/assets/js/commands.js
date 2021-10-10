const commands = {
  clear,
  help,
  echo,
  exit,
  ls,
  cat,
};

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
    if (availableFiles.includes(file)) {
      `${window[file + 'HTML']}`
        ? (output.innerHTML += `${window[file + 'HTML']}`)
        : (output.innerHTML = ` An error occured`);
    } else {
      output.innerHTML += `No such file or directory`;
    }
  }
}
