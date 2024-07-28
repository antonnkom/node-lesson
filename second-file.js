import fs from 'fs';

const runMe = () => {
    const decoded = atob('TmV4dCBsZXZlbCAiSGVsbG8gV29ybGQiIQ==');

    fs.writeFile('secret-message.txt', decoded, (err) => {
        if (err) throw err;
    });
};

runMe();