const path = require('path');
const fs = require('fs');

const pathToFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathToFolder, { withFileTypes: true }, (error, folderContents) => {
  if (error) console.log(error.message);

  folderContents.forEach(file => {
    if (file.isFile()) {
      const filePath = path.join(pathToFolder, file.name);

      fs.stat(filePath, (statError, fileStats) => {
        if (statError) console.log(statError.message);

        const fileName = path.parse(file.name).name;
        const fileExtension = path.extname(file.name).slice(1);
        const fileSize = fileStats.size / 1024;

        console.log(`${fileName} - ${fileExtension} - ${fileSize.toFixed(3)}kb`);
      });
    }
  });
});