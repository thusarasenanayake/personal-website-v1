const commands = {
  clear,
  help,
  echo,
};

function clear() {
  terminal.innerHTML = '';
}

function help() {}

function echo(args) {
  output.textContent = args.join(' ');
}
