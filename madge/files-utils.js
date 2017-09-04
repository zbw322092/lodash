const fs = require('fs');
const fileArray = [];
const fileDependArray = [];
const regex = /^[^.].*\.(js|ts|node)$/i;

const innerFiles = fs.readdirSync('../.internal') || [];

innerFiles.forEach((filename) => {
  if ((regex).test(filename)) {
    fileArray.push('../.internal/' + filename);
    fileDependArray.push('.internal/' + filename);
  }
});

const outterFiles = fs.readdirSync('../../lodash') || [];

outterFiles.forEach((filename) => {
  if ((regex).test(filename)) {
    fileArray.push('../' + filename);
    fileDependArray.push(filename);
  }
});

module.exports = {
  fileArray,
  fileDependArray
};