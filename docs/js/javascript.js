const fs = require('fs');
const path = require('path');

function listFiles(dir) {
    fs.readdir(dir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const fullPath = path.join(dir, file.name);
            if (file.isDirectory()) {
                console.log(`📁 Directory: ${fullPath}`);
                listFiles(fullPath); // 递归遍历子目录
            } else {
                console.log(`📄 File: ${fullPath}`);
            }
        });
    });
}

// 遍历当前目录
listFiles('.');