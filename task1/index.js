import fs from 'fs';

const dir = './task1/result';
const path = `${dir}/task-1.txt`;
const callback = error => console.error(error);

const addStringInFile = (str) => {
    fs.appendFileSync(path, str, 'utf-8', callback);
};

const createAndWriteFile = (path) => {
    fs.writeFile(path, "first line", 'utf-8', callback);

    addStringInFile("\r\nline #1");
    addStringInFile("\r\nline #2");
    addStringInFile("\r\nline #3");
    addStringInFile('\r\nlast line');
};

const runMe = () => {
    if (fs.existsSync(path)) {
        addStringInFile("\r\nadditional line");
    } else {
        if (! fs.existsSync(dir)) {
            fs.mkdir(dir, {recursive: true}, callback)
            createAndWriteFile(path);
            console.log('succes');
        } else {
            createAndWriteFile(path);
            console.log('succes wiht dir');
        }
    }
};

runMe();