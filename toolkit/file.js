// A promise-based function to read a text file

const fs = require('fs');

function read (fileName) {
  return new Promise( (resolve, reject) => {
    fs.readFile(fileName, "utf8",
      function (err, textFileData) {
        if (err) {
          reject(err);
          return;
        }

        resolve(textFileData);
      }
    );
  });
};

module.exports = {
   read: read
};