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
  const request = new XMLHttpRequest();
  request.open('GET', `${partials}/help.html`, false);
  request.send(null);

  if (request.status === 200) {
    output.innerHTML = request.responseText;
  } else {
    output.innerHTML = ` An error occured`;
  }
}

function echo(args) {
  output.textContent = args.join(' ');
}
function exit() {
  workspace.style.display = 'none';
}
function ls(args) {
  if (args.length > 0) {
    output.innerHTML = `No such directory`;
    return;
  }
  const request = new XMLHttpRequest();
  request.open('GET', `${partials}/ls.html`, false);
  request.send(null);

  if (request.status === 200) {
    output.innerHTML = request.responseText;
  } else {
    output.innerHTML = `An error occured`;
  }
}
function cat(files) {
  const request = new XMLHttpRequest();
  for (let file of files) {
    if (availableFiles.includes(file)) {
      request.open('GET', `${partials + '/' + file}.html`, false);
      request.send(null);

      if (request.status === 200) {
        output.innerHTML += request.responseText;
      } else {
        output.innerHTML += `An error occured`;
      }
    } else {
      output.innerHTML += `No such file or directory`;
    }
  }
}
