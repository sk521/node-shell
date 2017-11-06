var fs = require('fs')

function pwd(file) {
    process.stdout.write(process.execPath);
    process.stdout.write('\nprompt > ');
}

function ls(file) {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    })
}

function cat(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    //console.log(data);
    process.stdout.write(data.toString());
    process.stdout.write("prompt > ");
  });
}

function head(file) {
  const lines = 5;

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;

    var splitLine = data.toString().split("\n");

    process.stdout.write(splitLine.slice(0, lines).join("\n"));
    process.stdout.write("\n prompt > ");
  });
}

function tail(file) {
  const lines = 5;

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    var anotherSplit = data.toString().split('\n');
    process.stdout.write(anotherSplit.slice(-lines).join('\n'));
    process.stdout.write("\n prompt > ");
  })

}

function sort(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    process.stdout.write(data.toString().split('\n').sort().join('\n'));
    process.stdout.write("\n prompt > ");
  })
}

function wc(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    process.stdout.write(data.toString().split('\n').length + "");
    process.stdout.write("\n prompt > ");
  })
}

function uniq(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    var sortedData = data.toString().split('\n').sort();

    var arrZero = [sortedData[0]];
    for (var i = 0; i < sortedData.length; i++) {
      if (arrZero.indexOf(sortedData[i]) === -1) {
        arrZero.push(sortedData[i]);
      }
    }
    process.stdout.write(arrZero.join('\n'));
    process.stdout.write('\n prompt > ');
  });
}

module.exports.pwdFunc = pwd;
module.exports.lsFunc = ls;
module.exports.catFunc = cat;
module.exports.headFunc = head;
module.exports.tailFunc = tail;
module.exports.sortFunc = sort;
module.exports.wcFunc = wc;
module.exports.uniqFunc = uniq;
// console.log(module.exports)
