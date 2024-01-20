const fsPromises = require('fs').promises;
const path = require('path');

const pathToFiles = path.join(__dirname, 'files');
const pathToCopyFiles = path.join(__dirname, 'files-copy');

async function copyDir() {
  try {
    await fsPromises.rm(pathToCopyFiles, { force: true, recursive: true });
    await fsPromises.mkdir(pathToCopyFiles, { recursive: true });
    const files = await fsPromises.readdir(
      pathToFiles,
      { withFileTypes: true },
      (error, files) => {
        return files;
      },
    );
    files.forEach((file) => {
      const filePath = path.join(pathToFiles, file.name);
      const fileCopyPath = path.join(pathToCopyFiles, file.name);
      fsPromises.copyFile(filePath, fileCopyPath);
    });
  } catch (error) {
    console.log(error.message);
  }
}

copyDir();