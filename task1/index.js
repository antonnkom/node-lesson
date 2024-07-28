import fs from 'fs';

const addStringInFile = (str) => {
    fs.appendFileSync('result/task-1.txt', str, 'utf-8');
};

const createAndWriteFile = (name) => {
    fs.writeFile(name, "first line\n", 'utf-8', (err) => {
        if (err) throw err;

        addStringInFile("line #1\n");
        addStringInFile("line #2\n");
        addStringInFile("line #3\n");
        addStringInFile('last line');
    });
}

const runMe = () => {
    if (fs.existsSync('result/task-1.txt')) {
        addStringInFile("\nadditional line");
    } else {
        if (! fs.existsSync('result')) {
            fs.mkdir('result', {recursive: true}, (err) => {
                if (err) throw err;

                createAndWriteFile('result/task-1.txt');
                console.log('succes');
            });
        } else {
            createAndWriteFile('result/task-1.txt');
            console.log('succes wiht dir');
        }
    }
};

runMe();