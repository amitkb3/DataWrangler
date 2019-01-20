import fs from 'fs';

function read (fileName) {      
    return new Promise((resolve, reject) => {     
        fs.readFile(fileName, "utf8",     
            (err, textFileData) => {
                if (err) {
                    reject(err);    
                    return;
                }

                resolve(textFileData);      
            }
        );     
    });     
}

export default {      
    read,      
};  

const fs = require('fs');

function read (fileName) {      
    return new Promise((resolve, reject) => {     
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
    read: read,      
};     