var allCommands = require('./command.js');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(' ');
  let theCommand = cmd[0];
  let filename = cmd[1];

   // remove the newline
  // var newDate = new Date;\
  if (theCommand === 'pwd') allCommands.pwdFunc();
  else if (theCommand === 'ls') allCommands.lsFunc();
  else if (theCommand === 'cat') {
    allCommands.catFunc(filename);
  }
  else if (theCommand === 'head') {
    allCommands.headFunc(filename);
  }
  else if (theCommand === 'tail') allCommands.tailFunc(filename);
  else if (theCommand === 'sort') allCommands.sortFunc(filename);
  else if (theCommand === 'wc') allCommands.wcFunc(filename);
  else if (theCommand === 'uniq') allCommands.uniqFunc(filename);


});

