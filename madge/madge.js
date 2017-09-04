const madge = require('madge');
const { fileArray = [], fileDependArray = []} = require('./files-utils.js');
const depInfoList = [];

madge(fileArray)
  .then((res) => {
    fileDependArray.forEach((value) => {
      depInfoList.push(
        {
          name: value,
          importance: res.depends(value).length,
        }
      );
    });

    const result = sortModule(depInfoList);
    console.log(result);
  });

function sortModule (infoList) {
  infoList.sort((moduleA, moduleB) => {
    return moduleB.importance - moduleA.importance;
  });

  return infoList;
}